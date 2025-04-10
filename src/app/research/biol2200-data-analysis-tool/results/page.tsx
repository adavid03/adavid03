"use client";

import { motion } from "framer-motion";
import ResearchLayout from "@/components/research-layout";
import ClickableImage from "@/components/clickable-image";

export default function ResultsPage() {
  return (
    <ResearchLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Beetlejuice eDNA Web: Development & CURE Impact
          </h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            A novel eDNA analysis tool designed for CURE-based environmental research.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose dark:prose-invert max-w-none"
        >
          {/* Tool Interface Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Tool Interface
            </h2>
            <div className="mb-8">
              <ClickableImage
                src="/research/beetlejuiceedna/interface.png"
                alt="Beetlejuice eDNA Web Interface"
                title="Beetlejuice eDNA Web Interface"
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                An intuitive interface tailored for CURE-based environmental biology courses,
                featuring guided data validation, analysis, and interactive visualization.
              </p>
            </div>
          </section>

          {/* Development Outcomes Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Development Outcomes
            </h2>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              Technical Implementation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Built with Next.js 14.x and TypeScript using modern React libraries (Plotly, xlsx, etc.), the tool performs eDNA data validation,
              correlation analysis, and interactive visualization. Performance metrics include 0.49s to First Contentful Paint and 100% scores on key speed insights.
            </p>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              User Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Designed for undergraduate researchers in CUREs, the interface offers structured guidance and accessibility,
              ensuring that students can navigate complex datasets while developing scientific reasoning and data literacy.
            </p>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              Performance
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Optimized algorithms ensure efficient data processing and smooth interactivity,
              supporting real-time analysis even with large eDNA datasets.
            </p>
          </section>

          {/* Key Findings Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Key Findings
            </h2>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              Tool Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The development of Beetlejuice eDNA Web demonstrates that interactive, web-based tools can effectively support
              data-driven research in undergraduate CUREs by bridging gaps in bioinformatics training.
            </p>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              Implementation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Pilot deployments in environmental biology courses show improved student research accuracy and enhanced engagement with data.
            </p>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              Educational Impact
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              By facilitating hypothesis testing, data visualization, and statistical analysis, the tool supports critical thinking,
              collaboration, and independent research, core to successful CURE experiences.
            </p>
          </section>

          {/* Conclusion Section */}
          <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Conclusion
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Beetlejuice eDNA Web exemplifies how modern web technologies can be harnessed to create high-performance, accessible tools for CURE-based research.
              Its design not only supports robust data analysis but also enhances the educational impact by preparing students for real-world scientific challenges.
            </p>
          </section>
        </motion.div>
      </div>
    </ResearchLayout>
  );
} 