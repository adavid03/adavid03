"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaFolder, FaFile } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { getRepoStructure, type GithubFile, sortFiles } from "@/lib/github";
import { useSearchParams } from 'next/navigation';

function SidebarItem({ item, depth = 0, activePath = '' }: { 
  item: GithubFile; 
  depth?: number;
  activePath?: string;
}) {
  const [isOpen, setIsOpen] = useState(() => {
    // Open the folder if it's in the active path
    if (activePath) {
      return activePath.startsWith(item.path);
    }
    return false;
  });
  const [children, setChildren] = useState<GithubFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (item.type === 'dir' && isOpen) {
      setIsLoading(true);
      getRepoStructure(item.path)
        .then(data => setChildren(sortFiles(data)))
        .catch(console.error)
        .finally(() => setIsLoading(false));
    }
  }, [item, isOpen]);

  if (item.type === 'dir') {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 text-sm py-0.5 hover:text-gray-600 dark:hover:text-gray-300 w-full text-left group"
          style={{ paddingLeft: `${depth * 12}px` }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 0 : -90 }}
            transition={{ duration: 0.2 }}
            className="opacity-50 group-hover:opacity-100"
          >
            <FaChevronDown className="w-2.5 h-2.5" />
          </motion.div>
          <FaFolder className="w-3.5 h-3.5 text-blue-400" />
          <span className="truncate">{item.name}</span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: "hidden" }}
            >
              {isLoading ? (
                <div 
                  className="h-4 w-24 bg-gray-100 dark:bg-white/5 animate-pulse rounded my-2"
                  style={{ marginLeft: `${(depth + 1) * 12}px` }}
                />
              ) : (
                children.map((child) => (
                  <SidebarItem key={child.path} item={child} depth={depth + 1} activePath={activePath} />
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={`/research/biol2200-data-analysis-tool/code/${item.path}`}
      className={`flex items-center gap-1.5 text-sm py-0.5 hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
        activePath === item.path ? 'text-blue-400' : ''
      }`}
      style={{ paddingLeft: `${(depth + 1) * 12}px` }}
    >
      <FaFile className="w-3.5 h-3.5 text-gray-400" />
      <span className="truncate">{item.name}</span>
    </Link>
  );
}

export default function CodeSidebar() {
  const searchParams = useSearchParams();
  const currentPath = searchParams.get('path') || '';
  const [structure, setStructure] = useState<GithubFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRepoStructure()
      .then(data => setStructure(sortFiles(data)))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="w-[200px] backdrop-blur-3xl h-full fixed left-0 top-0 overflow-y-auto scrollbar-hide px-6"
      style={{
        backgroundColor: "rgba(var(--background-rgb), 0.7)",
      }}
    >
      <div className="w-full h-full flex flex-col mt-20">
        {isLoading ? (
          // Skeleton loading
          [...Array(5)].map((_, i) => (
            <div key={i} className="h-4 w-full bg-gray-100 dark:bg-white/5 animate-pulse rounded my-2" />
          ))
        ) : (
          structure.map((item) => (
            <SidebarItem key={item.path} item={item} activePath={currentPath} />
          ))
        )}
      </div>
    </div>
  );
} 