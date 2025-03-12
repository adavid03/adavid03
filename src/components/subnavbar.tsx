"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface SubNavbarProps {
  title: string;
  date: string;
  items: NavItem[];
}

export default function SubNavbar({ title, date, items }: SubNavbarProps) {
  const pathname = usePathname();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (!titleElement) return;

    const isOverflowing = titleElement.scrollWidth > titleElement.clientWidth;
    if (isOverflowing) {
      titleElement.style.animation = 'scroll 15s linear infinite';
    }
  }, [title]);

  return (
    <>
      {/* Spacer to prevent content jumping */}
      <div className="h-7" />
      
      <div className="fixed top-12 left-0 z-40 w-full backdrop-filter backdrop-blur-3xl border-t border-white/10 dark:border-black/10"
        style={{
          backgroundColor: "rgba(var(--background-rgb), 0.7)",
          height: "28px", // 7 * 4px to match Tailwind's h-7
        }}>
        <div className="h-full flex items-center justify-between px-4 md:px-60">
          <h1 
            ref={titleRef}
            className="text-xs font-bold hidden sm:block absolute w-[300px] whitespace-nowrap overflow-hidden pl-2"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10px, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10px, black 90%, transparent)',
            }}
          >
            {title}
          </h1>
          <div className="w-px h-full"></div>
          <div className="flex-1 flex items-center justify-center h-full">
            <div className="flex items-center gap-4 text-xs overflow-x-auto scrollbar-hide px-4 h-full">
              {items.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`${pathname === item.href ? "underline" : ""} hover:underline whitespace-nowrap h-full flex items-center justify-center`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs hidden sm:block">{date}</p>
        </div>
      </div>
    </>
  );
}
