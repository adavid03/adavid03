"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    { name: "Code", href: "/research/biol2200-data-analysis-tool/code" },
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
            <nav className="h-full flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative h-full flex items-center"
                  >
                    <span className={`text-sm ${
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
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
} 