"use client";

import ProjectLayout from "@/components/project-layout";
import ProjectSection from "@/components/project-section";
import ProjectText from "@/components/project-text";
import { motion } from "framer-motion";

export default function NewtonsMethod() {
  const MotionDiv = motion.div;

  const codeMetrics = [
    { value: "50+", label: "Lines of Code" },
    { value: "5", label: "Core Functions" },
    { value: "O(log n)", label: "Convergence" },
    { value: "10⁻⁶", label: "Precision" }
  ];

  const keyFeatures = [
    {
      title: "Root Finding",
      desc: "Iterative numerical method",
      details: ["Quadratic convergence", "Error estimation", "Derivative computation"],
      color: "from-blue-500/10 dark:from-blue-500/20"
    },
    {
      title: "Visualization",
      desc: "Interactive graphical interface",
      details: ["Function plotting", "Iteration steps", "Convergence display"],
      color: "from-green-500/10 dark:from-green-500/20"
    },
    {
      title: "Error Analysis",
      desc: "Comprehensive error handling",
      details: ["Convergence checks", "Precision control", "Iteration limits"],
      color: "from-purple-500/10 dark:from-purple-500/20"
    },
    {
      title: "Documentation",
      desc: "Detailed mathematical explanation",
      details: ["Theory background", "Implementation notes", "Usage examples"],
      color: "from-amber-500/10 dark:from-amber-500/20"
    }
  ];

  const mathConcepts = [
    { name: "f(x)", desc: "Target function to find roots" },
    { name: "f'(x)", desc: "First derivative of function" },
    { name: "xₙ₊₁", desc: "Next approximation" },
    { name: "xₙ", desc: "Current approximation" },
    { name: "ε", desc: "Error tolerance" },
    { name: "max_iter", desc: "Maximum iterations" }
  ];

  return (
    <ProjectLayout
      date="Spring 2024"
      language="MATLAB"
      title="NEWTON'S METHOD"
      description="An interactive implementation of Newton's Method for finding roots of nonlinear equations with visualization."
      authors="Alexandre David, Isaiah Graham"
    >
      <ProjectSection title="Overview">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ProjectText>
            A sophisticated implementation of Newton&apos;s Method that combines numerical computation with 
            interactive visualization. The program provides real-time graphical feedback of the iteration 
            process, helping users understand the convergence behavior of this powerful root-finding algorithm.
          </ProjectText>
          <div className="relative h-[200px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-amber-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-amber-500/20">
            <div className="absolute inset-0 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col items-center justify-center space-y-2">
              <code className="text-2xl font-mono text-gray-800 dark:text-gray-200 opacity-75">xₙ₊₁ = xₙ - f(xₙ)/f&apos;(xₙ)</code>
              <code className="text-sm font-mono text-gray-600 dark:text-gray-400 opacity-50">Newton&apos;s Iteration Formula</code>
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

      <ProjectSection title="Implementation Steps">
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
{`function x = newton_method(f, df, x0, tol)
    x = x0;
    while abs(f(x)) > tol
        x = x - f(x)/df(x);
    end
end`}
              </code>
            </div>
          </MotionDiv>
          <div className="space-y-4">
            {[
              {
                phase: "1. Function Definition",
                steps: ["Define target function f(x)", "Compute derivative f&apos;(x)", "Set initial guess x₀"]
              },
              {
                phase: "2. Iteration Process",
                steps: ["Calculate f(xₙ) and f&apos;(xₙ)", "Apply Newton&apos;s formula", "Update approximation"]
              },
              {
                phase: "3. Convergence Check",
                steps: ["Evaluate error |f(xₙ)|", "Compare with tolerance", "Check iteration count"]
              },
              {
                phase: "4. Visualization",
                steps: ["Plot function and tangent", "Mark iteration points", "Show convergence path"]
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