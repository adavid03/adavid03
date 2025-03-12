const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'adavid03';
const REPO_NAME = 'axiom';
const BRANCH = 'main';
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

// Add error handling for missing token
if (!GITHUB_TOKEN) {
  console.error('GitHub token is not set. Please set NEXT_PUBLIC_GITHUB_TOKEN in your .env.local file');
}

export interface GithubFile {
  name: string;
  path: string;
  type: 'file' | 'dir';
  sha: string;
}

interface RepoCache {
  structure: { [path: string]: GithubFile[] };
  content: { [path: string]: string };
  lastUpdated: number;
  isLoading: boolean;
}

const repoCache: RepoCache = {
  structure: {},
  content: {},
  lastUpdated: 0,
  isLoading: false
};

const CACHE_DURATION = 3600000; // 1 hour in milliseconds

async function buildFullStructure(): Promise<void> {
  if (repoCache.isLoading) return;
  
  try {
    console.log('Starting full structure build');
    repoCache.isLoading = true;
    await fetchRecursively('');
    repoCache.lastUpdated = Date.now();
    console.log('Finished building structure');
    console.log('Final structure:', repoCache.structure);
  } finally {
    repoCache.isLoading = false;
  }
}

async function fetchRecursively(path: string): Promise<void> {
  const response = await fetch(
    `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`,
    { 
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      }
    }
  );
  
  if (!response.ok) throw new Error('Failed to fetch repo structure');
  
  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const files = data.map((item: any) => ({
    name: item.name,
    path: item.path,
    type: item.type,
    sha: item.sha
  }));

  // Store this level in cache
  const cachePath = path === '' ? '/' : path;  // Use '/' for root path
  repoCache.structure[cachePath] = sortFiles(files);

  // Recursively fetch all folder contents
  const folders = files.filter((file: GithubFile) => file.type === 'dir');
  await Promise.all(folders.map((folder: GithubFile) => fetchRecursively(folder.path)));
}

export async function getRepoStructure(path: string = ''): Promise<GithubFile[]> {
  console.log('Getting structure for path:', path);
  // Initialize cache if needed
  if (Date.now() - repoCache.lastUpdated > CACHE_DURATION || !repoCache.structure['/']) {
    console.log('Building full structure...');
    await buildFullStructure();
  }

  const cachePath = path === '' ? '/' : path;
  console.log('Cache path:', cachePath);
  console.log('Available paths:', Object.keys(repoCache.structure));
  console.log('Files for path:', JSON.stringify(repoCache.structure[cachePath], null, 2));
  
  const files = repoCache.structure[cachePath] || [];
  console.log('Returning files:', JSON.stringify(files, null, 2));
  return files;
}

export async function getFileContent(path: string): Promise<string> {
  await buildFullStructure();
  
  if (repoCache.content[path]) {
    return repoCache.content[path];
  }

  const response = await fetch(
    `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`,
    { 
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      }
    }
  );
  
  if (!response.ok) throw new Error('Failed to fetch file content');
  
  const data = await response.json();
  const content = Buffer.from(data.content, 'base64').toString();
  
  // Store in cache
  repoCache.content[path] = content;
  
  return content;
}

export function sortFiles(files: GithubFile[]): GithubFile[] {
  return files.sort((a, b) => {
    // If both are same type, sort alphabetically
    if ((a.type === 'dir') === (b.type === 'dir')) {
      return a.name.localeCompare(b.name);
    }
    // Folders come first
    return a.type === 'dir' ? -1 : 1;
  });
} 