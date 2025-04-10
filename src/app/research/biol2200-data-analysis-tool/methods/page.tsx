"use client";

import { motion } from "framer-motion";
import ResearchLayout from "@/components/research-layout";

export default function MethodsPage() {
  return (
    <ResearchLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Methodology: Technical Implementation and Data Analysis Pipeline
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of the development process, data analysis methods, and technical architecture
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose dark:prose-invert max-w-none"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technical Architecture</h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  The application is built using a modern web technology stack, focusing on performance, accessibility, and user experience.
                </p>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Frontend Framework</h3>
                    <p className="text-gray-600 dark:text-gray-300">Next.js 14.x with TypeScript for robust type safety and maintainability</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Data Processing</h3>
                    <p className="text-gray-600 dark:text-gray-300">Client-side data validation and transformation using modern JavaScript</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Visualization</h3>
                    <p className="text-gray-600 dark:text-gray-300">Server-side plot generation using Plotly.js for optimal performance</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Data Processing Pipeline</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">1.</span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Data Validation</h3>
                    <p className="text-gray-600 dark:text-gray-300">Implementation of robust input validation and error handling for environmental data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">2.</span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Data Transformation</h3>
                    <p className="text-gray-600 dark:text-gray-300">Conversion of raw environmental data into analysis-ready formats</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">3.</span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Statistical Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-300">Implementation of correlation and statistical methods for environmental data analysis</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Environmental Data Analysis</h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  The tool implements specialized analysis methods for environmental data, focusing on:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Water Quality Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-300">Comprehensive analysis of water quality parameters and their correlations</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Biodiversity Assessment</h3>
                    <p className="text-gray-600 dark:text-gray-300">Evaluation of species diversity and environmental impact</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Research Methodology</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">1.</span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Data Collection</h3>
                    <p className="text-gray-600 dark:text-gray-300">Standardized protocols for environmental data collection and sampling</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">2.</span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Analysis Framework</h3>
                    <p className="text-gray-600 dark:text-gray-300">Implementation of scientific methods for environmental research</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">3.</span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Results Interpretation</h3>
                    <p className="text-gray-600 dark:text-gray-300">Scientific approach to interpreting environmental data and findings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </ResearchLayout>
  );
} 