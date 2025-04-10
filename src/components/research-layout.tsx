"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const navItems = [
    { name: "Overview", href: "/research/biol2200-data-analysis-tool" },
    { name: "Methods", href: "/research/biol2200-data-analysis-tool/methods" },
    { name: "Results", href: "/research/biol2200-data-analysis-tool/results" },
    { name: "Discussion", href: "/research/biol2200-data-analysis-tool/discussion" },
    { name: "Work Cited", href: "/research/biol2200-data-analysis-tool/work-cited" },
  ];

  return (
    <div className="min-h-screen">
      {/* Sticky SubNavbar with backdrop blur */}
      <div className="sticky top-12 z-40">
        <div 
          className="h-12 backdrop-blur-3xl border-b border-white/10 dark:border-black/10"
          style={{
            backgroundColor: "rgba(var(--background-rgb), 0.7)",
          }}
        >
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-full overflow-x-auto touch-pan-x">
              <nav className="h-full flex items-center space-x-4 sm:space-x-8 min-w-max pb-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="relative h-full flex items-center"
                    >
                      <span className={`text-sm whitespace-nowrap ${
                        isActive 
                          ? "text-gray-900 dark:text-white" 
                          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      } transition-colors`}>
                        {item.name}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 dark:from-green-400 dark:via-blue-400 dark:to-purple-400"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  );
                })}
                <a
                  href="https://github.com/adavid03/envdataanalysistool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors whitespace-nowrap"
                >
                  <span>Code</span>
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
} 