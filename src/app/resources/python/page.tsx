"use client";

import { motion } from "framer-motion";

export default function Python() {
  return (
    <div className="min-h-[calc(100vh-3rem)] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
            Python
          </h1>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 blur-xl opacity-20 dark:opacity-30 rounded-3xl" />
            <div className="relative bg-white/50 dark:bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-black/5 dark:border-white/5">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Self-tutoring with interactive lessons, exercises, quizzes and more, for free!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                  <h3 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Interactive Learning</h3>
                  <p className="text-sm text-blue-700/80 dark:text-blue-400/80">Step-by-step problem solving with immediate feedback</p>
                </div>
                <div className="p-4 rounded-xl bg-cyan-50/50 dark:bg-cyan-900/20 border border-cyan-100 dark:border-cyan-800">
                  <h3 className="font-medium text-cyan-900 dark:text-cyan-300 mb-2">Progress Tracking</h3>
                  <p className="text-sm text-cyan-700/80 dark:text-cyan-400/80">Monitor your learning journey with detailed analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 