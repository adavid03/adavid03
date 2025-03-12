"use client";

import ProjectLayout from "@/components/project-layout";
import ProjectSection from "@/components/project-section";
import ProjectText from "@/components/project-text";
import { motion } from "framer-motion";

export default function LinearTransformations() {
  const MotionDiv = motion.div;

  const codeMetrics = [
    { value: "25+", label: "Lines of Code" },
    { value: "6", label: "Core Functions" },
    { value: "2×2", label: "Matrix Size" },
    { value: "∞", label: "Transformations" }
  ];

  const keyFeatures = [
    {
      title: "Matrix Operations",
      desc: "Core transformation tools",
      details: ["Matrix multiplication", "Eigenvalue computation", "Determinant analysis"],
      color: "from-blue-500/10 dark:from-blue-500/20"
    },
    {
      title: "Geometric Effects",
      desc: "Visual transformation results",
      details: ["Rotation", "Reflection", "Dilation", "Shear"],
      color: "from-green-500/10 dark:from-green-500/20"
    },
    {
      title: "Artistic Elements",
      desc: "Creative visualization",
      details: ["Color mapping", "Pattern generation", "Composition rules"],
      color: "from-purple-500/10 dark:from-purple-500/20"
    },
    {
      title: "Interactive Design",
      desc: "User-driven exploration",
      details: ["Parameter control", "Real-time updates", "Custom transformations"],
      color: "from-amber-500/10 dark:from-amber-500/20"
    }
  ];

  const mathConcepts = [
    { name: "T(x)", desc: "Linear transformation" },
    { name: "A", desc: "Transformation matrix" },
    { name: "det(A)", desc: "Area scaling factor" },
    { name: "λ", desc: "Eigenvalues" },
    { name: "v", desc: "Eigenvectors" },
    { name: "R(θ)", desc: "Rotation matrix" }
  ];

  return (
    <ProjectLayout
      date="Spring 2024"
      language="MATLAB"
      title="THE ART OF LINEAR TRANSFORMATIONS"
      description="An artistic exploration of linear transformations in R², combining mathematical precision with creative visualization."
      authors="Alexandre David"
    >
      <ProjectSection title="Overview">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ProjectText>
            This project explores the artistic potential of linear transformations in two dimensions. By combining 
            rigorous mathematical principles with creative visualization techniques, we create a bridge between 
            linear algebra and visual art. The project demonstrates how mathematical operations can produce 
            aesthetically pleasing patterns and compositions.
          </ProjectText>
          <div className="relative h-[200px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-amber-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-amber-500/20">
            <div className="absolute inset-0 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col items-center justify-center space-y-2">
              <code className="text-2xl font-mono text-gray-800 dark:text-gray-200 opacity-75">[x&apos;] = [a b][x]</code>
              <code className="text-2xl font-mono text-gray-800 dark:text-gray-200 opacity-75">[y&apos;] = [c d][y]</code>
              <code className="text-sm font-mono text-gray-600 dark:text-gray-400 opacity-50">Transformation Matrix</code>
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
{`function [X, Y] = transform(A, x, y)
    % Apply linear transformation
    result = A * [x(:)&apos; ; y(:)&apos;];
    X = reshape(result(1,:), size(x));
    Y = reshape(result(2,:), size(y));
    
    % Apply artistic effects
    colormap(hsv);
    surf(X, Y, zeros(size(X)));
end`}
              </code>
            </div>
          </MotionDiv>
          <div className="space-y-4">
            {[
              {
                phase: "1. Matrix Setup",
                steps: ["Define transformation matrix", "Set parameters", "Initialize grid"]
              },
              {
                phase: "2. Transformation",
                steps: ["Apply matrix multiplication", "Handle coordinates", "Process results"]
              },
              {
                phase: "3. Visualization",
                steps: ["Map coordinates", "Apply color scheme", "Generate patterns"]
              },
              {
                phase: "4. Analysis",
                steps: ["Calculate properties", "Study effects", "Document results"]
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