"use client";

import ProjectLayout from "@/components/project-layout";
import ProjectSection from "@/components/project-section";
import ProjectText from "@/components/project-text";
import { motion } from "framer-motion";

export default function SinusoidalSequences() {
  const MotionDiv = motion.div;

  const codeMetrics = [
    { value: "25+", label: "Lines of Code" },
    { value: "8", label: "Core Functions" },
    { value: "2π", label: "Interval" },
    { value: "256", label: "Max Frequency" }
  ];

  const keyFeatures = [
    {
      title: "Numerical Integration",
      desc: "Multiple integration methods",
      details: ["Midpoint Rule", "Trapezoidal Rule", "Simpson&apos;s Rule"],
      color: "from-blue-500/10 dark:from-blue-500/20"
    },
    {
      title: "Sequence Analysis",
      desc: "Study of sinusoidal sequences",
      details: ["Area calculations", "Arc length analysis", "Convergence patterns"],
      color: "from-green-500/10 dark:from-green-500/20"
    },
    {
      title: "3D Visualization",
      desc: "Solids of revolution",
      details: ["Volume computation", "Surface area calculation", "Visual representation"],
      color: "from-purple-500/10 dark:from-purple-500/20"
    },
    {
      title: "Convergence Study",
      desc: "Limit analysis",
      details: ["Ratio limits", "Uniform convergence", "Pattern recognition"],
      color: "from-amber-500/10 dark:from-amber-500/20"
    }
  ];

  const mathConcepts = [
    { name: "fn(x)", desc: "cos(nx) sequence" },
    { name: "gn(x)", desc: "sin(nx) sequence" },
    { name: "Ln", desc: "Arc length function" },
    { name: "Sn", desc: "Surface area function" },
    { name: "n", desc: "Frequency parameter" },
    { name: "h(u)", desc: "Limit function" }
  ];

  return (
    <ProjectLayout
      date="Spring 2024"
      language="MATLAB"
      title="SEQUENCES OF SINUSOIDAL FUNCTIONS"
      description="Analysis of sinusoidal sequences, their integrals, and geometric properties using numerical methods and MATLAB visualization."
      authors="Alexandre David, Dr. Roberto Munoz-Alicea"
    >
      <ProjectSection title="Overview">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ProjectText>
            A comprehensive mathematical investigation of sinusoidal function sequences and their geometric properties. 
            This project combines analytical methods with numerical computation to study areas, arc lengths, and volumes 
            of revolution, utilizing MATLAB for visualization and numerical integration.
          </ProjectText>
          <div className="relative h-[200px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-amber-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-amber-500/20">
            <div className="absolute inset-0 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col items-center justify-center space-y-2">
              <code className="text-2xl font-mono text-gray-800 dark:text-gray-200 opacity-75">Ln = 2n∫₀ᵖ√(1/n² + sin²u)du</code>
              <code className="text-sm font-mono text-gray-600 dark:text-gray-400 opacity-50">Arc Length Formula</code>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Key Features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyFeatures.map((feature, i) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-xl bg-gradient-to-br ${feature.color} to-transparent backdrop-blur-sm border border-black/5 dark:border-white/5`}
            >
              <h3 className="font-medium mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{feature.desc}</p>
              <div className="space-y-1">
                {feature.details.map(detail => (
                  <div key={detail} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-white/40" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{detail}</span>
                  </div>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Mathematical Components">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mathConcepts.map((concept, i) => (
            <MotionDiv
              key={concept.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-4 rounded-lg bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-500/10 dark:to-purple-500/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5"
            >
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">{concept.name}</code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{concept.desc}</p>
            </MotionDiv>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Implementation">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-500/10 dark:to-purple-500/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5">
              <code className="font-mono text-sm text-gray-800 dark:text-gray-200 whitespace-pre">
{`function L = arcLength(n, method)
    f = @(u) sqrt(1/n^2 + sin(u).^2);
    switch method
        case 'midpoint'
            L = 2*n*midpoint(f, 0, pi);
        case 'simpson'
            L = 2*n*simpson(f, 0, pi);
    end
end`}
              </code>
            </div>
          </MotionDiv>
          <div className="space-y-4">
            {[
              {
                phase: "1. Function Definition",
                steps: ["Define sinusoidal sequences", "Set up integration methods", "Configure parameters"]
              },
              {
                phase: "2. Numerical Integration",
                steps: ["Implement integration rules", "Handle convergence", "Validate results"]
              },
              {
                phase: "3. Pattern Analysis",
                steps: ["Calculate ratios", "Study convergence", "Document patterns"]
              },
              {
                phase: "4. Visualization",
                steps: ["Plot sequences", "Generate 3D models", "Create animations"]
              }
            ].map((phase, i) => (
              <MotionDiv
                key={phase.phase}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-4 rounded-lg bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-500/10 dark:to-purple-500/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5"
              >
                <h3 className="font-medium mb-2 text-gray-900 dark:text-white">{phase.phase}</h3>
                <div className="space-y-1">
                  {phase.steps.map(step => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Performance Metrics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {codeMetrics.map((metric, i) => (
            <MotionDiv
              key={metric.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-xl transform group-hover:scale-105 transition-transform border border-black/5 dark:border-white/5" />
              <div className="relative p-6 flex flex-col items-center">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">
                  {metric.value}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">{metric.label}</span>
              </div>
            </MotionDiv>
          ))}
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
} 