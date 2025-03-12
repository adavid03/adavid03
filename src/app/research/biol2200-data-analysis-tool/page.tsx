"use client"

import ResearchLayout from "@/components/research-layout";
import { motion } from "framer-motion";
import { Microscope, FlaskRound, Brain, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ResearchHome() {
  const pathname = usePathname();

  return (
    <ResearchLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          key={`${pathname}-hero`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative rounded-2xl overflow-hidden mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-blue-500/30 to-purple-500/30 dark:from-green-500/20 dark:via-blue-500/20 dark:to-purple-500/20 blur-2xl" />
          <div className="relative px-6 py-10">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 mb-3"
            >
              Beetlejuice eDNA Web
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-center text-gray-600 dark:text-gray-300"
            >
              An Interactive Data Analysis Tool for Environmental CUREs
            </motion.p>
          </div>
        </motion.div>

        {/* Research Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 rounded-xl p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Research Question</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            How can an interactive data analysis tool be developed and used to analyze environmental datasets for Course-based Undergraduate Research Experiences (CUREs)?
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              title: "Scientific Impact",
              icon: <Microscope className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
              description: "Facilitates analysis of environmental DNA samples and their relationship with various ecological factors.",
              items: [
                "Environmental DNA analysis",
                "Biodiversity assessment",
                "Ecological relationships",
                "Data-driven insights"
              ]
            },
            {
              title: "Educational Value",
              icon: <FlaskRound className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
              description: "Enhances student learning through hands-on experience with real environmental data and modern analysis tools.",
              items: [
                "Hands-on research experience",
                "Data analysis skills",
                "Scientific methodology",
                "Real-world applications"
              ]
            }
          ].map((feature, index) => (
            <motion.div
              key={`${pathname}-feature-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                {feature.icon}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 rounded-xl p-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Explore the Research</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">Discover our methodology and findings</p>
              </div>
            </div>
            <Link
              href="/research/biol2200-data-analysis-tool/methods"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-all"
            >
              View Methods
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </ResearchLayout>
  );
}
