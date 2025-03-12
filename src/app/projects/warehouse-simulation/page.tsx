"use client";

import Link from "next/link";
import ProjectLayout from "@/components/project-layout";
import ProjectSection from "@/components/project-section";
import ProjectText from "@/components/project-text";
import { motion } from "framer-motion";

export default function WarehouseSimulation() {
  const MotionDiv = motion.div;

  const codeMetrics = [
    { value: "500+", label: "Lines of Code" },
    { value: "3", label: "Core Classes" },
    { value: "99%", label: "Code Coverage" },
    { value: "O(n)", label: "Time Complexity" }
  ];

  const simulationParams = [
    { name: "numDays", desc: "Duration of simulation" },
    { name: "iterations", desc: "Number of simulation runs" },
    { name: "fixedOrderCost", desc: "Cost per item ordered" },
    { name: "sellingPricePerUnit", desc: "Revenue per unit" },
    { name: "holdingCostPerUnit", desc: "Daily storage cost" },
    { name: "outOfStockPenalty", desc: "Stockout penalty" }
  ];

  return (
    <ProjectLayout
      date="Spring 2024"
      language="C++"
      title="WAREHOUSE INVENTORY SIMULATION"
      description="Advanced inventory management simulation using modern C++ features for optimizing stock levels and minimizing costs."
      authors="Alexandre David"
    >
      <ProjectSection title="Overview">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ProjectText>
            A sophisticated C++ simulation system that models inventory management dynamics. 
            The program implements advanced random number generation, real-time console visualization, 
            and comprehensive cost analysis to optimize warehouse operations.
          </ProjectText>
          <div className="relative h-[200px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-amber-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-amber-500/20">
            <div className="absolute inset-0 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col items-center justify-center space-y-2">
              <code className="text-2xl font-mono text-gray-800 dark:text-gray-200 opacity-75">Stock Level: 50</code>
              <code className="text-sm font-mono text-gray-600 dark:text-gray-400 opacity-50">Reorder Point: 40</code>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Core Components">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Inventory Management",
              desc: "Stock level tracking and order processing",
              details: ["Random demand generation", "Reorder threshold monitoring", "Order fulfillment logic"],
              color: "from-blue-500/10 dark:from-blue-500/20"
            },
            {
              title: "Cost Analysis",
              desc: "Comprehensive financial tracking",
              details: ["Order costs", "Holding costs", "Stockout penalties"],
              color: "from-green-500/10 dark:from-green-500/20"
            },
            {
              title: "Console Interface",
              desc: "Interactive dashboard with ANSI colors",
              details: ["Real-time updates", "Color-coded metrics", "Cursor positioning"],
              color: "from-purple-500/10 dark:from-purple-500/20"
            },
            {
              title: "Data Logging",
              desc: "Detailed CSV output for analysis",
              details: ["Daily statistics", "Cost breakdowns", "Performance metrics"],
              color: "from-amber-500/10 dark:from-amber-500/20"
            }
          ].map((component, i) => (
            <MotionDiv
              key={component.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-xl bg-gradient-to-br ${component.color} to-transparent backdrop-blur-sm border border-black/5 dark:border-white/5`}
            >
              <h3 className="font-medium mb-2 text-gray-900 dark:text-white">{component.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{component.desc}</p>
              <div className="space-y-1">
                {component.details.map(detail => (
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

      <ProjectSection title="Technical Features">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Modern C++ Features",
              items: ["std::mt19937 RNG", "Uniform distributions", "Smart pointers", "RAII principles"]
            },
            {
              title: "Performance Optimization",
              items: ["Constant-time operations", "Memory efficiency", "Cache-friendly design", "Minimal allocations"]
            },
            {
              title: "Error Handling",
              items: ["Input validation", "Buffer overflow prevention", "Exception safety", "Graceful degradation"]
            }
          ].map((feature, i) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-500/10 dark:to-purple-500/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5"
            >
              <h3 className="font-medium mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
              <div className="space-y-2">
                {feature.items.map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Simulation Parameters">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {simulationParams.map((param, i) => (
            <MotionDiv
              key={param.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-4 rounded-lg bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-500/10 dark:to-purple-500/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5"
            >
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">{param.name}</code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{param.desc}</p>
            </MotionDiv>
          ))}
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

      <ProjectSection title="Source Code">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 backdrop-blur-sm group hover:scale-105 transition-transform border border-black/5 dark:border-white/5"
        >
          <Link
            href="https://github.com/Laramie-County-Community-College/cosc-1030-inventory-simulation-final-xanderbrunet"
            target="_blank"
            className="flex items-center justify-between"
          >
            <div>
              <h3 className="font-medium mb-2 text-gray-900 dark:text-white">GitHub Repository</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">View the complete source code</p>
            </div>
            <div className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
              →
            </div>
          </Link>
        </MotionDiv>
      </ProjectSection>
    </ProjectLayout>
  );
}
