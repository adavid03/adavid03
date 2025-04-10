"use client"

import { motion } from "framer-motion";
import ResearchLayout from "@/components/research-layout";
import ClickableImage from "@/components/clickable-image";

export default function ResearchPage() {
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
            Beetlejuice eDNA Web: An Interactive Data Analysis Tool for Environmental Biology CUREs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive study on enhancing undergraduate research experiences through technology
          </p>
        </motion.div>

        {/* Website Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <ClickableImage
            src="/research/beetlejuiceedna/beetlejuice.png"
            alt="Beetlejuice eDNA Web Interface"
            title="Beetlejuice eDNA Web Interface"
            width={1920}
            height={1080}
            className="rounded-lg shadow-xl"
            containerClassName="w-full aspect-video"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="prose dark:prose-invert max-w-none"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Abstract</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Course-Based Undergraduate Research Experiences (CUREs) are increasingly used to engage undergraduate students in scientific research experiences. While CUREs improve students&apos; scientific reasoning, collaboration, and critical thinking, their integration with Bioinformatics and computational data analysis remains limited. This research work aims at bridging that gap by developing Beetlejuice eDNA Web, an interactive web-based data-analysis tool tailored for environmental biology CUREs.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Research Goals</h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">1.</span>
                  <span>Develop an intuitive and accessible data analysis platform for undergraduate researchers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">2.</span>
                  <span>Implement robust data processing and visualization capabilities for environmental datasets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">3.</span>
                  <span>Evaluate the tool&apos;s impact on student learning outcomes and research engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">4.</span>
                  <span>Assess the effectiveness of technology-enhanced CUREs in environmental science education</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technical Implementation</h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  The tool is built on NextJS 14.x, a React-based framework, and written with TypeScript for type safety. The application was designed to run in modern web browsers and operates mostly client-side to ensure data privacy. Only plots are calculated server side, as it is a requirement for the plotting library used.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">First Contentful Paint</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">0.49s</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Interaction to Next Paint</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">136ms</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">First Input Delay</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">2ms</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Lighthouse Score</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">100%</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Impact and Future Directions</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The development of a high-performing, accessible eDNA analysis tool demonstrates the viability of implementing interactive, data-driven platforms for CUREs initiatives to enhance student engagement and scientific research experiences. The tool&apos;s successful development addresses key issues shared in the literature, including the need for authentic research experiences, ease of navigating through complex data, and inclusive educational practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </ResearchLayout>
  );
}
