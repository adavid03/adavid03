"use client";

import ProjectLayout from "@/components/project-layout";
import ProjectSection from "@/components/project-section";
import ProjectText from "@/components/project-text";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaCode, FaBolt, FaPalette, FaMobile } from "react-icons/fa6";
import Link from "next/link";

function TechProgressBar({ name, progress, color }: { name: string; progress: number; color: string }) {
  const barRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: barRef,
    offset: ["start end", "center center"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      ref={barRef}
      className="space-y-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{progress}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            scaleX,
            transformOrigin: "left",
            background: color
          }}
        />
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, description, gradient }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300
        bg-gradient-to-br ${gradient}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6" />
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}

function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: "Server Components", code: "// Server Component\nexport default async function Page() {\n  const data = await fetchData();\n  return <Component data={data} />;\n}" },
    { name: "Client Components", code: "&apos;use client&apos;;\n\nexport default function Interactive() {\n  const [state, setState] = useState();\n  return <button onClick={() => setState(!state)}>Toggle</button>;\n}" },
    { name: "Parallel Routes", code: "app/\n  @modal/\n    page.tsx\n  layout.tsx\n  page.tsx" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl overflow-hidden border border-white/10"
    >
      <div className="flex border-b border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(activeTab === tabs.indexOf(tab) ? activeTab : tabs.indexOf(tab))}
            className={`px-4 py-2 text-sm transition-colors ${
              activeTab === tabs.indexOf(tab)
                ? "bg-white/10 text-white" 
                : "hover:bg-white/5 text-gray-400"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 bg-black/30 font-mono text-sm overflow-x-auto"
      >
        <pre>{tabs[activeTab].code}</pre>
      </motion.div>
    </motion.div>
  );
}

export default function WebsitePage() {
  const containerRef = useRef(null);
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 0.8]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0]);

  const techStack = [
    { name: "Next.js 14", progress: 95, color: "linear-gradient(to right, #0070f3, #00a6ed)" },
    { name: "React", progress: 90, color: "linear-gradient(to right, #61dafb, #00b4d8)" },
    { name: "TypeScript", progress: 90, color: "linear-gradient(to right, #3178c6, #5c6bc0)" },
    { name: "Tailwind CSS", progress: 85, color: "linear-gradient(to right, #38bdf8, #818cf8)" },
    { name: "Framer Motion", progress: 80, color: "linear-gradient(to right, #ff0080, #7928ca)" }
  ];

  return (
    <ProjectLayout
      date="2024"
      language="Next.js, TypeScript, Tailwind CSS, Framer Motion"
      title="ADAVID03.COM"
      description="A modern, performant, and beautiful personal website showcasing the latest web technologies"
      authors="Alexandre David"
    >
      <div ref={containerRef} className="space-y-24">
        {/* Hero Section */}
        <motion.div 
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }} 
          className="relative min-h-[70vh] rounded-2xl overflow-hidden flex items-center justify-center"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 animate-gradient" />
            <div className="absolute inset-0 backdrop-blur-3xl" />
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                style={{
                  background: `conic-gradient(
                    from ${120 * index}deg at 50% 50%,
                    rgba(59, 130, 246, 0.5) 0deg,
                    rgba(147, 51, 234, 0.5) 120deg,
                    rgba(236, 72, 153, 0.5) 240deg,
                    transparent 360deg
                  )`,
                  filter: "blur(100px)",
                  opacity: 0.7,
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 20 + index * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 text-center space-y-8 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                adavid03.com
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                Built with modern web technologies and best practices
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Overview Section */}
        <ProjectSection title="Overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ProjectText>
              This website represents the best of modern web development, combining cutting-edge technologies 
              with elegant design principles. Built with Next.js 14&apos;s App Router, it leverages 
              React Server Components for optimal performance, Parallel Routes for complex layouts, and 
              Intercepting Routes for modal patterns. The site demonstrates advanced animation techniques 
              using Framer Motion, responsive design with Tailwind CSS, and full type safety with TypeScript.
            </ProjectText>
            <InteractiveDemo />
          </div>
        </ProjectSection>

        {/* Technology Stack */}
        <ProjectSection title="Technology Stack">
          <div className="space-y-8">
            {techStack.map((tech) => (
              <TechProgressBar key={tech.name} {...tech} />
            ))}
          </div>
        </ProjectSection>

        {/* Features Grid */}
        <ProjectSection title="Key Features">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={FaBolt}
              title="Next.js App Router"
              description="Leveraging Server Components, Parallel Routes, and Intercepting Routes for optimal performance and complex UI patterns."
              gradient="from-blue-500/20 to-cyan-500/20"
            />
            <FeatureCard
              icon={FaCode}
              title="TypeScript & Modern JS"
              description="Full type safety across the codebase with TypeScript and modern JavaScript features for robust development."
              gradient="from-purple-500/20 to-pink-500/20"
            />
            <FeatureCard
              icon={FaPalette}
              title="Advanced Styling"
              description="Utilizing Tailwind CSS with custom animations, dark mode support, and responsive design principles."
              gradient="from-amber-500/20 to-orange-500/20"
            />
            <FeatureCard
              icon={FaMobile}
              title="Responsive Design"
              description="Fully responsive layouts with mobile-first approach and adaptive UI components."
              gradient="from-green-500/20 to-emerald-500/20"
            />
          </div>
        </ProjectSection>

        {/* Performance Metrics */}
        <ProjectSection title="Performance">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "100",
                label: "Performance Score",
                description: "Perfect Lighthouse performance metrics",
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              {
                metric: "0.2s",
                label: "Time to Interactive",
                description: "Lightning-fast page load and interaction",
                gradient: "from-blue-500/20 to-cyan-500/20"
              },
              {
                metric: "100%",
                label: "TypeScript Coverage",
                description: "Complete type safety across codebase",
                gradient: "from-purple-500/20 to-pink-500/20"
              }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group overflow-hidden rounded-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} group-hover:scale-105 transition-transform duration-500`} />
                <div className="relative p-8 flex flex-col items-center text-center space-y-4">
                  <span className="text-4xl font-bold">{item.metric}</span>
                  <div>
                    <h4 className="font-medium">{item.label}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ProjectSection>

        {/* Source Code Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Link
            href="https://github.com/adavid03/adavid03"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            View Source Code
          </Link>
        </motion.div>
      </div>
    </ProjectLayout>
  );
}
