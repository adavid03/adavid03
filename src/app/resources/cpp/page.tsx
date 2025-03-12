"use client";

import { motion } from "framer-motion";

export default function CPP() {
  return (
    <div className="min-h-[calc(100vh-3rem)] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
            C++
          </h1>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-violet-400 blur-xl opacity-20 dark:opacity-30 rounded-3xl" />
            <div className="relative bg-white/50 dark:bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-black/5 dark:border-white/5">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Self-tutoring with interactive lessons, exercises, quizzes and more, for free!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
                  <h3 className="font-medium text-indigo-900 dark:text-indigo-300 mb-2">Interactive Learning</h3>
                  <p className="text-sm text-indigo-700/80 dark:text-indigo-400/80">Step-by-step problem solving with immediate feedback</p>
                </div>
                <div className="p-4 rounded-xl bg-violet-50/50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800">
                  <h3 className="font-medium text-violet-900 dark:text-violet-300 mb-2">Progress Tracking</h3>
                  <p className="text-sm text-violet-700/80 dark:text-violet-400/80">Monitor your learning journey with detailed analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 