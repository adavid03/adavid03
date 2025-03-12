interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: 'project' | 'research' | 'resource';
  tags?: string[];
  content?: string;
  language?: string;
  date?: string;
}

// This will contain all searchable content
const searchableContent: SearchResult[] = [
  {
    title: "Smart'Vitale",
    description: "How to prevent cards from carrying diseases in medical settings",
    href: "/projects/smartvitale",
    type: "project",
    language: "C, MATLAB",
    date: "2021",
    tags: ["medical", "hardware", "arduino", "3d-printing", "simulation", "award-winning", "programming"],
    content: `
      Project Smart'Vitale aims to provide a solution that minimizes health risks 
      during interactions between patients and professionals. The project uses Arduino 
      for control, MATLAB for simulation, and includes 3D printed components. 
      It was awarded 4th place at the French National Engineering Olympiads.
    `
  },
  {
    title: "Hangman Game",
    description: "A classic Hangman game implementation with a focus on code organization through functions",
    href: "/projects/hangman",
    type: "project",
    language: "Python",
    date: "Spring 2024",
    tags: ["game", "python", "functions", "programming", "cli"],
    content: `
      A Python implementation of the classic Hangman game focusing on code organization
      through functions. Features include word selection, game state management,
      and input validation. The project demonstrates proper function organization
      and game loop implementation.
    `
  },
  {
    title: "Warehouse Simulation",
    description: "Inventory Optimization with Simulation: multi-day inventory management scenario",
    href: "/projects/warehouse-simulation",
    type: "project",
    language: "C++",
    date: "Fall 2024",
    tags: ["simulation", "c++", "inventory", "optimization", "programming"],
    content: `
      A simulation of a warehouse inventory management system, focusing on optimizing
      inventory levels over multiple days. The project uses C++ for the simulation
      and includes a detailed report on the optimization process.
    `
  },
  {
    title: "How to Optimize Data Analysis of eDNA",
    description: "Research on optimizing data analysis techniques for environmental DNA",
    href: "/research/data-analysis-of-edna",
    type: "research"
  },
  {
    title: "College Algebra",
    description: "Resources and materials for College Algebra",
    href: "/resources/college-algebra",
    type: "resource"
  },

];

// Helper function to escape special regex characters
function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function calculateRelevanceScore(item: SearchResult, searchTerm: string): number {
  let score = 0;
  const term = searchTerm.toLowerCase();

  // Title match (highest priority)
  if (item.title.toLowerCase().includes(term)) {
    score += 100;
    if (item.title.toLowerCase().startsWith(term)) score += 50;
  }

  // Description match
  if (item.description.toLowerCase().includes(term)) {
    score += 50;
  }

  // Tag matches
  item.tags?.forEach(tag => {
    if (tag.toLowerCase().includes(term)) {
      score += 30;
      if (tag.toLowerCase() === term) score += 20;
    }
  });

  // Language match
  if (item.language?.toLowerCase().includes(term)) {
    score += 40;
  }

  // Date match
  if (item.date?.toLowerCase().includes(term)) {
    score += 20;
  }

  // Content match
  if (item.content?.toLowerCase().includes(term)) {
    score += 10;
    // Bonus points for multiple occurrences
    const escapedTerm = escapeRegExp(term);
    const occurrences = (item.content.toLowerCase().match(new RegExp(escapedTerm, 'g')) || []).length;
    score += Math.min(occurrences * 2, 20); // Cap bonus at 20
  }

  return score;
}

export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  // Get results that match any search term
  const results = searchableContent.filter(item => {
    return searchTerms.some(term => (
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.tags?.some(tag => tag.toLowerCase().includes(term)) ||
      item.language?.toLowerCase().includes(term) ||
      item.date?.toLowerCase().includes(term) ||
      item.content?.toLowerCase().includes(term)
    ));
  });

  // Calculate relevance scores
  const scoredResults = results.map(item => ({
    item,
    score: searchTerms.reduce((total, term) => total + calculateRelevanceScore(item, term), 0)
  }));

  // Sort by relevance score
  return scoredResults
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item);
}

// Update the getHighlightedText function
export function getHighlightedText(text: string, query: string): string {
  if (!query) return text;
  
  const terms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  let highlightedText = text;
  
  terms.forEach(term => {
    const escapedTerm = escapeRegExp(term);
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
  });
  
  return highlightedText;
} 