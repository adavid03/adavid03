"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";
import { useIsMobile } from "@/utils/hooks";

function randomColor() {
  const h = Math.floor(Math.random() * 360);
  const s = 70 + Math.floor(Math.random() * 30);
  const l = 50 + Math.floor(Math.random() * 20);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function randomColorSet(n = 3) {
  return Array.from({ length: n }).map(() => randomColor());
}

export default function GradientHero() {
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();

  // All hooks
  const padding = useTransform(scrollY, [0, 400], ["min(144px, 4vh)", "0px"]);
  const margin = useTransform(scrollY, [0, 400], ["min(3rem, 2vh)", "0px"]);
  const borderRadius = useTransform(
    scrollY,
    [0, 400],
    ["min(24px, 3vh)", "0px"]
  );
  const shapeOpacity = useTransform(
    scrollY,
    [0, 100, 600, 800],
    [0, 0.7, 0.7, 0]
  );
  const overlayOpacity = useTransform(scrollY, [600, 800], [0, 1]);
  const [cssPosition, setCssPosition] = React.useState<"fixed" | "absolute">(
    "fixed"
  );
  const [cssTop, setCssTop] = React.useState("0px");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 800) {
      if (cssPosition !== "fixed") setCssPosition("fixed");
      if (cssTop !== "0px") setCssTop("0px");
    } else {
      if (cssPosition !== "absolute") setCssPosition("absolute");
      if (cssTop !== "800px") setCssTop("800px");
    }
  });

  // Text color transitions
  const mainTextColor = useTransform(
    scrollY,
    [0, 600, 700],
    ["var(--initial-text)", "var(--initial-text)", "var(--final-text)"]
  );
  const subtextColor = useTransform(
    scrollY,
    [0, 600, 700],
    ["var(--initial-text)", "var(--initial-text)", "var(--final-text)"]
  );

  // Random shape colors
  const [colorSet, setColorSet] = React.useState([
    "#ff0040",
    "#6f00ff",
    "#00e7ff",
  ]);

  React.useEffect(() => {
    // Only once on mount
    setColorSet(randomColorSet());
  }, []);

  // Shuffle colors when shapes reappear
  const shapeOpacityValue = useMotionValue(0);
  useMotionValueEvent(shapeOpacity, "change", (latest) => {
    const prev = shapeOpacityValue.get();
    shapeOpacityValue.set(latest);
    if (prev < 0.01 && latest > 0.01) {
      setColorSet(randomColorSet());
    }
  });

  // Shapes
  const shapes = [
    {
      rotate: 360,
      scale: [0.8, 1.4],
      duration: 12,
      size: "130%",
      x: [-20, 20],
      y: [-20, 20],
    },
    {
      rotate: -360,
      scale: [1.2, 0.8],
      duration: 15,
      size: "120%",
      x: [20, -20],
      y: [20, -20],
    },
    {
      rotate: 360,
      scale: [1, 1.5],
      duration: 18,
      size: "140%",
      x: [-30, 30],
      y: [30, -30],
    },
  ];

  if (isMobile) {
    return (
      <div className="w-screen h-screen p-2 mt-12">
        <div className="w-full h-full rounded-3xl flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl font-extralight mb-2">
            Hello, I am <b>Alexandre David</b>
          </h1>
          <h3 className="text-lg font-extralight">
            Advancing Knowledge, Engineering Solutions
          </h3>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className="w-dvw h-[225vh] flex flex-col items-center justify-center">
      <motion.div
        className="w-screen h-screen flex items-center justify-center 
          [--initial-text:white] [--final-text:black]
          dark:[--initial-text:black] dark:[--final-text:white]"
        style={{
          position: cssPosition,
          top: cssTop,
          willChange: "position, top",
        }}
      >
        <motion.div
          className="w-full h-full relative"
          style={{ marginTop: margin, padding, willChange: "margin, padding" }}
        >
          <motion.div
            className="
              relative overflow-hidden flex flex-col items-center justify-center 
              gap-4 sm:gap-2
              bg-black dark:bg-neutral-500
              w-full h-full
            "
            style={{ borderRadius, willChange: "border-radius" }}
          >
            {/* Floating gradient shapes */}
            <div className="absolute inset-0 overflow-hidden">
              {shapes.map((shape, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    background: `conic-gradient(
                      from ${120 * i}deg at 50% 50%,
                      ${colorSet[0]} 0deg,
                      ${colorSet[1] || colorSet[0]} 120deg,
                      ${colorSet[2] || colorSet[0]} 240deg,
                      transparent 360deg
                    )`,
                    filter: "blur(100px)",
                    opacity: shapeOpacity,
                    transformOrigin: "center",
                    width: shape.size,
                    height: shape.size,
                    left: "-15%",
                    top: "-15%",
                    willChange: "opacity, transform",
                  }}
                  animate={{
                    rotate: shape.rotate,
                    scale: shape.scale,
                    x: shape.x,
                    y: shape.y,
                  }}
                  transition={{
                    duration: shape.duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    times: [0, 1],
                  }}
                />
              ))}
            </div>

            {/* Mode-aware overlay */}
            <motion.div
              className="absolute inset-0 bg-white dark:bg-black"
              style={{ opacity: overlayOpacity, willChange: "opacity" }}
            />

            {/* Text content */}
            <motion.h1
              className="text-3xl sm:text-4xl font-extralight z-10 text-center px-4"
              style={{ color: mainTextColor, willChange: "color" }}
            >
              Hello, I am <b>Alexandre David</b>
            </motion.h1>

            <motion.h3
              className="text-lg sm:text-xl font-extralight z-10 text-center px-4"
              style={{ color: subtextColor, willChange: "color" }}
            >
              Advancing Knowledge, Engineering Solutions
            </motion.h3>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
