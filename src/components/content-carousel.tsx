"use client";

import React from "react";
import { useRouter } from "next/navigation";
interface CarouselProps {
  sections: {
    id: number;
    content: React.ReactNode;
    redirect: string;
  }[];
}

export default function ContentCarousel({ sections }: CarouselProps) {
  const router = useRouter();
  const [current, setCurrent] = React.useState(0);
  const [, setDirection] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {

    const checkMobile = () => setIsMobile(window.innerWidth < 640);

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);

  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((current + newDirection + sections.length) % sections.length);
  };


  return (
    <div className="relative w-full md:w-[calc(100%+200px)] md:max-w-[calc(1280px+200px)] md:-mx-[100px] px-4 sm:px-0">
      <div className="relative h-[50vh] md:h-[85vh] overflow-x-auto md:overflow-hidden scrollbar-hide"
>
        <div 
          className="flex h-full transition-transform duration-300" 
          style={{ 
            transform: `translateX(calc(-${current * 100}% - ${current * 40}px))`,
            gap: '40px'
          }}
        >
          {sections.map((section, index) => (
            <div
              key={section.id}
              onClick={() => {
                if (current === index && section.redirect && !isMobile) {
                  router.push(section.redirect)
                }
              }}
              className={`w-full h-full shrink-0 bg-white dark:bg-black rounded-xl flex items-center justify-center overflow-hidden snap-center transition-all duration-300 ${
                index === current ? 'hover:cursor-pointer hover:scale-[1.01] hover:shadow-xl' : 'opacity-70'
              }`}
            >
              {section.content}
            </div>
          ))}
        </div>

        {/* Click areas */}
        <button
          className="absolute left-0 top-0 w-[100px] h-full z-20 cursor-pointer md:block hidden"
          onClick={() => paginate(-1)}
          disabled={current === 0}
        >
          <span className="sr-only">Previous slide</span>
        </button>
        <button
          className="absolute right-0 top-0 w-[100px] h-full z-20 cursor-pointer md:block hidden"
          onClick={() => paginate(1)}
          disabled={current === sections.length - 1}
        >
          <span className="sr-only">Next slide</span>
        </button>

        {/* Dots */}
        <div className="w-full flex justify-center mt-5 md:block hidden">
        <div className="flex gap-2">
          {sections.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current
                  ? "bg-black dark:bg-white"
                  : "bg-black/20 dark:bg-white/20"
              }`}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
} 