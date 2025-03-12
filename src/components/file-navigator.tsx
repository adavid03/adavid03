"use client";

import { useState, useEffect } from "react";
import { FaFolder, FaFile, FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { getRepoStructure, type GithubFile } from "@/lib/github";

interface FileGridProps {
  files: GithubFile[];
  onFolderClick: (folder: GithubFile) => void;
}

function FileGrid({ files, onFolderClick }: FileGridProps) {
  const handleFileClick = (file: GithubFile) => {
    window.location.href = `/research/biol2200-data-analysis-tool/code/${file.path}`;
  };

  return (
    <div className="contents">
      {files.map((item) => (
        <motion.div
          key={item.path}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.2,
            delay: 0.03,
            ease: "easeOut"
          }}
          className="w-full aspect-square"
        >
          {item.type === 'dir' ? (
            <button
              onClick={() => {
                console.log('Clicking folder:', item.name);
                onFolderClick(item);
              }}
              className="w-full h-full flex flex-col items-center justify-center gap-2 rounded dark:hover:bg-white/5 hover:bg-gray-100 group transition-colors"
            >
              <FaFolder className="w-8 h-8 text-blue-400" />
              <span className="text-sm text-center group-hover:text-blue-400 transition-colors line-clamp-2 px-2">
                {item.name}
              </span>
            </button>
          ) : (
            <button
              onClick={() => {
                console.log('Clicking file:', item.path);
                handleFileClick(item);
              }}
              className="w-full h-full flex flex-col items-center justify-center gap-2 rounded dark:hover:bg-white/5 hover:bg-gray-100 group transition-colors"
            >
              <FaFile className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-center group-hover:text-blue-400 transition-colors line-clamp-2 px-2">
                {item.name}
              </span>
            </button>
          )}
        </motion.div>
      ))}
    </div>
  );
}

interface FileNavigatorProps {
  initialStructure: GithubFile[];
  initialPath: string[];
}

export default function FileNavigator({ initialStructure, initialPath }: FileNavigatorProps) {
  const [currentPath, setCurrentPath] = useState<string[]>(initialPath);
  const [structure, setStructure] = useState<GithubFile[]>(initialStructure);
  const [isLoading, setIsLoading] = useState(false);

  // Handle path changes
  useEffect(() => {
    const loadStructure = async () => {
      if (currentPath.length === 1) {
        setStructure(initialStructure);
        // Remove path parameter when at root
        window.history.replaceState(null, '', '/research/biol2200-data-analysis-tool/code');
        return;
      }
      
      setIsLoading(true);
      try {
        const path = currentPath.slice(1).join('/');
        const data = await getRepoStructure(path);
        setStructure(data);
        
        // Update URL with path parameter
        window.history.replaceState(
          null, 
          '', 
          `/research/biol2200-data-analysis-tool/code?path=${path}`
        );
      } catch (error) {
        console.error('Error loading structure:', error);
        setCurrentPath(prev => prev.slice(0, -1));
      } finally {
        setIsLoading(false);
      }
    };

    loadStructure();
  }, [currentPath, initialStructure]);

  const onFolderClick = (folder: GithubFile) => {
    setCurrentPath(prev => [...prev, folder.name]);
  };

  const navigateToPath = (index: number) => {
    setCurrentPath(prev => prev.slice(0, index + 1));
  };

  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <div className="flex items-center gap-2 mb-4 min-h-[40px]">
        <button
          onClick={() => setCurrentPath(prev => prev.slice(0, -1))}
          disabled={currentPath.length <= 1}
          className="p-1.5 rounded hover:bg-white/5 disabled:opacity-0 disabled:hover:bg-transparent transition-all shrink-0"
        >
          <FaArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-1 px-2 py-1 flex-1 min-w-0 overflow-x-auto scrollbar-hide">
          {currentPath.map((folder, index) => (
            <div key={index} className="flex items-center shrink-0">
              {index > 0 && <span className="mx-1 opacity-50">›</span>}
              <button
                onClick={() => navigateToPath(index)}
                className="hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                {folder || 'root'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 min-h-[200px]">
        {isLoading ? (
          // Skeleton loading
          [...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full aspect-square rounded bg-gray-100 dark:bg-white/5 animate-pulse"
            />
          ))
        ) : (
          <FileGrid files={structure} onFolderClick={onFolderClick} />
        )}
      </div>
    </div>
  );
} 