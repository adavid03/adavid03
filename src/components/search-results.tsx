import { motion } from "framer-motion";
import Link from "next/link";
import { FaBook, FaFlask, FaCode } from "react-icons/fa6";
import { getHighlightedText } from "@/utils/search";

interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: 'project' | 'research' | 'resource';
  tags?: string[];
  language?: string;
  date?: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  onResultClick: () => void;
  searchQuery: string;
}

const getLanguageColor = (language?: string): string => {
  if (!language) return "text-gray-400";
  
  const lang = language.toLowerCase();
  if (lang.includes('python')) return "text-sky-700";
  if (lang.includes('c++')) return "text-pink-400";
  if (lang.includes('c,')) return "text-gray-400";
  if (lang.includes('matlab')) return "text-amber-600";
  if (lang.includes('javascript') || lang.includes('typescript')) return "text-yellow-500";
  if (lang.includes('java')) return "text-red-500";
  if (lang.includes('rust')) return "text-orange-600";
  if (lang.includes('go')) return "text-cyan-500";
  return "text-gray-400";
};

const getTypeIcon = (type: SearchResult['type'], language?: string) => {
  const colorClass = getLanguageColor(language);
  
  switch (type) {
    case 'project':
      return <FaCode className={colorClass} />;
    case 'research':
      return <FaFlask className="text-sky-400" />;
    case 'resource':
      return <FaBook className="text-amber-400" />;
  }
};

export default function SearchResults({ results, onResultClick, searchQuery }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <p className="text-sm font-light dark:text-gray-400 text-gray-600">
        No results found
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {results.map((result, index) => (
        <motion.div
          key={result.href}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15, delay: index * 0.05 }}
        >
          <Link
            href={result.href}
            className="flex items-start gap-4 group"
            onClick={onResultClick}
          >
            <div className="mt-1">{getTypeIcon(result.type, result.language)}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-medium dark:text-white text-black group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  <span dangerouslySetInnerHTML={{ 
                    __html: getHighlightedText(result.title, searchQuery) 
                  }} />
                </h3>
                {result.language && (
                  <span className="text-xs font-light dark:text-gray-400 text-gray-600">
                    {result.language}
                  </span>
                )}
                {result.date && (
                  <span className="text-xs font-light dark:text-gray-400 text-gray-600">
                    {result.date}
                  </span>
                )}
              </div>
              <p className="text-sm font-light dark:text-gray-400 text-gray-600 mb-2">
                <span dangerouslySetInnerHTML={{ 
                  __html: getHighlightedText(result.description, searchQuery) 
                }} />
              </p>
              {result.tags && (
                <div className="flex flex-wrap gap-2">
                  {result.tags.map(tag => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full dark:bg-gray-800 bg-gray-100 dark:text-gray-300 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
} 