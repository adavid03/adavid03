"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { FaMagnifyingGlass, FaBars, FaXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { searchContent } from "@/utils/search";
import SearchResults from "@/components/search-results";
import { useOverlay } from "@/context/overlay-context";
import AdavidIcon from "@/components/icons/adavid";

interface MenuItem {
  title: string;
  content?: React.ReactNode;
  href?: string;
  onClick?: () => Promise<void> | void;
}

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [direction, setDirection] = useState(0);
  const [isStaticHovered, setIsStaticHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { setIsOverlayOpen } = useOverlay();

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile]);

  const clearMenus = useCallback(() => {
    setIsOverlayOpen(false);
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setSearch("");
  }, [setIsOverlayOpen]);

  // Handle clicks outside the menu and search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const navbar = document.querySelector("[data-navbar]");
      const searchContainer = document.querySelector("[data-search]");

      // If clicking outside navbar, clear everything
      if (navbar && !navbar.contains(target)) {
        clearMenus();
        return;
      }

      // If search is open and clicking outside search container, close only search
      if (
        isSearchOpen &&
        searchContainer &&
        !searchContainer.contains(target)
      ) {
        setIsSearchOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen, clearMenus]);

  // Close search when opening a menu
  useEffect(() => {
    if (activeMenu) {
      setIsSearchOpen(false);
      setSearch("");
    }
  }, [activeMenu]);

  // Add effect to handle overlay state
  useEffect(() => {
    const isAnyOverlayOpen =
      Boolean(activeMenu) || isMobileMenuOpen || isSearchOpen;
    setIsOverlayOpen(isAnyOverlayOpen);
  }, [activeMenu, isMobileMenuOpen, isSearchOpen, setIsOverlayOpen]);

  const handleSearch = () => {
    setIsOverlayOpen(true);
    setActiveMenu(null);
    setIsSearchOpen(true);
  };

  const baseMenuItems: MenuItem[] = [
    {
      title: "Research",
      content: (
        <div className="flex flex-col gap-6 dark:text-white text-black">
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            <h3 className="text-sm font-light my-5 dark:text-gray-400 text-gray-600">
              Academic Research
            </h3>
            <div className="space-y-2 max-w-[400px]">
              {[
                {
                  title: "How can an interactive data analysis tool be developed and used to analyze environmental variables in pond water samples for CUREs?",
                  href: "/research/biol2200-data-analysis-tool",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.05 }}
                  className="my-5 w-fit font-light"
                >
                  <div className="flex items-center gap-2">
                    <Link
                      className="dark:hover:text-gray-300 hover:text-gray-600 transition-colors cursor-pointer text-sm"
                      href={`${item.href}`}
                      onClick={() => {
                        setActiveMenu(null);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-20"
        >
          <div className="flex flex-col">
            <h3 className="text-sm font-light my-5 dark:text-gray-400 text-gray-600">
              Mathematics
            </h3>
            <div className="flex flex-col gap-5">
              {[
                { title: "Newton's Method", href: "/projects/newtons-method" },
                {
                  title: "Sequences of Sinusoidal functio...",
                  href: "/projects/sequences-of-sinusoidal-functions-and-integrals",
                },
                {
                  title: "The Art of Linear Transformations",
                  href: "/projects/the-art-of-linear-transformations",
                },
                {
                  title: "Applications of First-Order Differential Equations",
                  href: "/projects/appl-diffeq",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.05 }}
                  className="w-fit font-light"
                >
                  <Link
                    className="dark:hover:text-gray-300 hover:text-gray-600 transition-colors cursor-pointer text-sm"
                    href={`${item.href}`}
                    onClick={() => {
                      setActiveMenu(null);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-light my-5 dark:text-gray-400 text-gray-600">
              Computer Science
            </h3>
            <div className="flex flex-col gap-5">
              {[
                { title: "Hangman Game", href: "/projects/hangman" },
                {
                  title: "Warehouse Simulation",
                  href: "/projects/warehouse-simulation",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.05 }}
                  className="w-fit font-light"
                >
                  <Link
                    className="dark:hover:text-gray-300 hover:text-gray-600 transition-colors cursor-pointer text-sm"
                    href={`${item.href}`}
                    onClick={() => {
                      setActiveMenu(null);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-light my-5 dark:text-gray-400 text-gray-600">
              Engineering
            </h3>
            <div className="flex flex-col gap-5">
              {[
                { title: "Smart'Vitale", href: "/projects/smartvitale" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.05 }}
                  className="w-fit font-light"
                >
                  <Link
                    className="dark:hover:text-gray-300 hover:text-gray-600 transition-colors cursor-pointer text-sm"
                    href={`${item.href}`}
                    onClick={() => {
                      setActiveMenu(null);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-light my-5 dark:text-gray-400 text-gray-600">
              Ongoing Projects
            </h3>
            <div className="flex flex-col gap-5">
              {[{ title: "adavid03.com", href: "/projects/website" }].map(
                (item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15, delay: index * 0.05 }}
                    className="w-fit font-light"
                  >
                    <Link
                      className="dark:hover:text-gray-300 hover:text-gray-600 transition-colors cursor-pointer text-sm"
                      href={`${item.href}`}
                      onClick={() => {
                        setActiveMenu(null);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Contact",
      content: (
        <div className="flex flex-col gap-6 dark:text-white text-black">
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            <h3 className="text-sm font-light my-5 dark:text-gray-400 text-gray-600">
              Contact Me:
            </h3>
            <div>
              {[
                { title: "Email", link: "mailto:uw.abrunet@gmail.com" },
                {
                  title: "LinkedIn",
                  link: "https://www.linkedin.com/in/adavid03/",
                },
                {
                  title: "ORCID",
                  link: "https://orcid.org/0009-0009-8543-8709",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.05 }}
                  className="my-5 w-fit font-light"
                >
                  <Link
                    className="dark:hover:text-gray-300 hover:text-gray-600 transition-colors cursor-pointer text-sm"
                    href={item.link}
                    target="_blank"
                    onClick={() => {
                      setActiveMenu(null);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "About",
      href: "/about",
    },
  ];

  const menuItems: MenuItem[] = [
    ...baseMenuItems,
  ].filter((item): item is MenuItem => Boolean(item));

  // Slide variants: small ±15 offset, quick 0.15s
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir * 5,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: -dir * 5,
      opacity: 0,
    }),
  };

  const handleMenuEnter = (title: string) => {
    setIsOverlayOpen(true);
    const order = menuItems.map((m) => m.title);
    const nextIndex = order.indexOf(title);

    if (!activeMenu) {
      setDirection(0);
      setActiveMenu(title);
      return;
    }

    const currentIndex = order.indexOf(activeMenu);
    const newDirection = nextIndex > currentIndex ? 1 : -1;

    setDirection(newDirection);
    setActiveMenu(title);
  };

  return (
    <>
      <motion.div
        data-navbar
        className="fixed top-0 left-0 w-full z-50 backdrop-filter backdrop-blur-3xl border-b border-white/10 dark:border-black/10"
        style={{
          backgroundColor: "rgba(var(--background-rgb), 0.7)",
        }}
        animate={{
          height:
            activeMenu || isMobileMenuOpen || isSearchOpen ? "100dvh" : "3rem",
        }}
        transition={{
          duration: 0,
          ease: "easeInOut",
        }}
      >
        {/* Navbar content */}
        <div className="h-12 flex justify-between items-center px-4 lg:px-60 relative">
          <h1
            className="absolute dark:text-white text-black text-md font-semibold hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer h-full flex items-center gap-2"
            onClick={() => router.push("/")}
          >
            <AdavidIcon className="w-6 h-6 dark:invert" />
            Alexandre David
          </h1>
          <div className="w-px h-full"></div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden dark:text-white text-black p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaXmark className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full gap-10">
            {menuItems.map((item) =>
              item.href ? (
                // Static link button
                <Link
                  key={item.title}
                  href={item.href}
                  className={`
                    dark:text-white text-black h-full flex justify-center items-center transition-opacity text-sm
                    ${
                      !activeMenu && !isStaticHovered
                        ? "opacity-100 hover:opacity-70"
                        : "opacity-70 hover:opacity-100"
                    }
                  `}
                  onMouseEnter={() => {
                    setActiveMenu(null);
                    setIsStaticHovered(true);
                  }}
                  onMouseLeave={() => setIsStaticHovered(false)}
                >
                  {item.title}
                </Link>
              ) : (
                // Submenu button
                <button
                  key={item.title}
                  className={`
                    dark:text-white text-black h-full transition-opacity text-sm
                    flex justify-center items-center
                    ${
                      !activeMenu && !isStaticHovered
                        ? "opacity-100 hover:opacity-70"
                        : activeMenu === item.title
                        ? "opacity-100"
                        : "opacity-70 hover:opacity-100"
                    }
                  `}
                  onMouseEnter={() => {
                    setIsStaticHovered(false);
                    handleMenuEnter(item.title);
                  }}
                >
                  {item.title}
                </button>
              )
            )}
          </div>

          {/* Desktop Search Icon */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="hidden lg:block bg-transparent border-none dark:hover:bg-gray-900/50 hover:bg-gray-100/50 rounded-full p-2"
            onClick={handleSearch}
          >
            <FaMagnifyingGlass className="dark:text-white text-black text-md" />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence
          onExitComplete={() => {
            setActiveMenu(null);
          }}
        >
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden px-4 py-8 h-[calc(100vh-3rem)] overflow-y-auto"
            >
              <nav className="flex flex-col gap-6 pb-20">
                {menuItems.map((item) => (
                  <div key={item.title} className="flex flex-col gap-4">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="dark:text-white text-black text-lg font-medium hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          className="dark:text-white text-black text-lg font-medium text-left hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                          onClick={() =>
                            setActiveMenu(
                              activeMenu === item.title ? null : item.title
                            )
                          }
                        >
                          {item.title}
                        </button>
                        <AnimatePresence>
                          {activeMenu === item.title && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 border-l border-white/20"
                            >
                              {item.content}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}

                {/* Mobile Search */}
                <button
                  className="flex items-center gap-2 dark:text-white text-black text-lg font-medium hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  onClick={handleSearch}
                >
                  <FaMagnifyingGlass className="h-5 w-5" />
                  Search
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Submenu content */}
        {!isMobile && (
          <AnimatePresence mode="wait" custom={direction}>
            {activeMenu && !isMobileMenuOpen && (
              <motion.div
                key={activeMenu}
                className="hidden lg:block px-60"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="h-fit p-8"
                  onMouseLeave={() => {
                    setActiveMenu(null);
                  }}
                >
                  {menuItems.find((m) => m.title === activeMenu)?.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Search Overlay */}
        <AnimatePresence mode="wait">
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="px-60 py-8"
              data-search
              transition={{
                duration: activeMenu ? 0 : 0.2,
                ease: "easeInOut",
              }}
            >
              <div className="flex flex-col gap-8 p-10">
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent border-none outline-none text-3xl font-light dark:text-white text-black placeholder:dark:text-gray-400 placeholder:text-gray-600"
                    autoFocus
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        setIsSearchOpen(false);
                        setSearch("");
                      }
                    }}
                  />
                </div>

                {/* Search Results */}
                {search && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col gap-4"
                  >
                    <p className="text-sm font-light dark:text-gray-400 text-gray-600">
                      Search results for &quot;{search}&quot;
                    </p>
                    <SearchResults
                      results={searchContent(search)}
                      searchQuery={search}
                      onResultClick={() => {
                        setIsSearchOpen(false);
                        setSearch("");
                      }}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
