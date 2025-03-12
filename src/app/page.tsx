"use client";

import React from "react";
import GradientHero from "@/components/gradient-hero";
import ContentCarousel from "@/components/content-carousel";

export default function Home() {
  const carouselSections = [
    {
      id: 1,
      redirect: "/about",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          {/* Video Background */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              src="/home/space.webm"
              autoPlay
              loop
              muted
              playsInline
              crossOrigin="anonymous"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              onTimeUpdate={(e) => {
                const video = e.target as HTMLVideoElement;
                // Start fade out 0.5 seconds before the end
                if (video.currentTime > video.duration - 0.5) {
                  video.style.opacity = '0';
                } else {
                  video.style.opacity = '1';
                }
              }}
            />
            {/* Duplicate video for crossfade */}
            <video
              src="/home/space.webm"
              autoPlay
              loop
              muted
              playsInline
              crossOrigin="anonymous"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0"
              style={{ animationDelay: '0.5s' }}
            />
          </div>
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-5 px-4 sm:px-8">
            <h2 className="text-xl sm:text-2xl text-white text-center">
              Learn more about me, my education and my experience
            </h2>
            <button className="bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors text-white px-4 py-2 rounded-md">
              Learn more
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      redirect: "/education",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
          {/* Animated gradient background */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-800 to-black"
            style={{
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-5 px-4 sm:px-8">
            <h2 className="text-xl sm:text-2xl text-white text-center">
              Learn about my commitment to making education accessible
            </h2>
            <button className="bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors text-white px-4 py-2 rounded-md">
              Learn more
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      redirect: "/research",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          {/* Video Background */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              src="/home/bee.webm"
              autoPlay
              loop
              muted
              playsInline
              crossOrigin="anonymous"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              onTimeUpdate={(e) => {
                const video = e.target as HTMLVideoElement;
                // Start fade out 0.5 seconds before the end
                if (video.currentTime > video.duration - 0.5) {
                  video.style.opacity = '0';
                } else {
                  video.style.opacity = '1';
                }
              }}
            />
            {/* Duplicate video for crossfade */}
            <video
              src="/home/bee.webm"
              autoPlay
              loop
              muted
              playsInline
              crossOrigin="anonymous"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0"
              style={{ animationDelay: '0.5s' }}
            />
          </div>
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-5 px-4 sm:px-8">
            <h2 className="text-xl sm:text-2xl text-white text-center">
              Learn more about my research and my commitment to advancing scientific research
            </h2>
            <button className="bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors text-white px-4 py-2 rounded-md">
              Learn more
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      redirect: "/projects",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
          {/* Animated gradient background */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-800 to-black"
            style={{
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-5 px-4 sm:px-8">
            <h2 className="text-xl sm:text-2xl text-white text-center">
              Learn more about my projects and how it has shaped my career
            </h2>
            <button className="bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors text-white px-4 py-2 rounded-md">
              Learn more
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <GradientHero />
      <div className="w-full flex justify-center mt-12 sm:mt-0">
        <ContentCarousel sections={carouselSections} />
      </div>
      <div className="w-full flex justify-center mt-12 sm:mt-20">
        <p className="text-2xl sm:text-4xl">Section 5</p>
      </div>
    </main>
  );
}
