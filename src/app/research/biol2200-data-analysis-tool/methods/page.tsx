"use client";

import ResearchLayout from "@/components/research-layout";
import { motion } from "framer-motion";
import { Code2, Database, LineChart } from "lucide-react";

export default function Methods() {
  const sections = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Technical Implementation",
      description: "Built with modern web technologies for optimal performance and security",
      items: [
        {
          title: "Core Technology Stack",
          content: [
            "NextJS 14.x with TypeScript for robust type safety",
            "Modern browser support (Chrome 120+, Firefox 120+, Safari 17+)",
            "Visual Studio Code with specialized extensions"
          ]
        },
        {
          title: "Key Dependencies",
          content: [
            "plotly.js-dist-min 3.0.1 for interactive data visualization",
            "next-themes 0.4.4 for seamless dark mode support",
            "xlsx 0.18.5 for efficient Excel file processing"
          ]
        }
      ]
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data Processing Pipeline",
      description: "Comprehensive data handling system with multiple processing modes",
      items: [
        {
          title: "Data Validation & Processing",
          content: [
            "Automated structure integrity verification",
            "Missing value detection and handling",
            "Multiple processing modes (Template, Auto, Hybrid)"
          ]
        },
        {
          title: "Analysis Framework",
          content: [
            "Pearson correlation coefficient calculations",
            "Environmental factor analysis",
            "Biodiversity indices computation"
          ]
        }
      ]
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Data Visualization",
      description: "Interactive visualization tools for comprehensive data analysis",
      items: [
        {
          title: "Interactive Features",
          content: [
            "Real-time sample information tooltips",
            "Dynamic statistical metrics display",
            "Interactive data point exploration"
          ]
        },
        {
          title: "Correlation Analysis",
          content: [
            "Interactive heat map visualization",
            "Color-coded correlation strengths (-1 to +1)",
            "Precise value tooltips on hover"
          ]
        }
      ]
    }
  ];

  return (
    <ResearchLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Methods</h1>
          <p className="text-gray-600 dark:text-gray-300">
            A comprehensive overview of the technical implementation, data processing pipeline, and visualization techniques used in the Beetlejuice eDNA Web project.
          </p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{section.description}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pl-10">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (itemIndex * 0.1) }}
                    className="space-y-3"
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.content.map((point, i) => (
                        <motion.li
                          key={point}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (sectionIndex * 0.1) + (itemIndex * 0.1) + (i * 0.1) }}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="mt-2 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </ResearchLayout>
  );
} 