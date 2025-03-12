"use client";

import Image from "next/image";
import Link from "next/link";
import ProjectLayout from "@/components/project-layout";
import ProjectSection from "@/components/project-section";
import ProjectText from "@/components/project-text";
import { motion } from "framer-motion";

export default function HangmanGame() {
  const MotionDiv = motion.div;

  const codeMetrics = [
    { value: "150+", label: "Lines of Code" },
    { value: "50+", label: "Word Bank" },
    { value: "6", label: "Max Tries" },
    { value: "4", label: "Core Functions" }
  ];

  const variables = [
    { name: "word_list", desc: "Array of 50+ possible words" },
    { name: "word_by_letter", desc: "Selected word split into letters" },
    { name: "invisible_word", desc: "Game progress with underscores" },
    { name: "tried_letters", desc: "Track of player's guesses" },
    { name: "tries", desc: "Remaining attempts (starts at 6)" }
  ];

  return (
    <ProjectLayout
      date="Spring 2024"
      language="Python"
      title="HANGMAN GAME"
      description="A classic Hangman game implementation with a focus on code organization through functions."
      authors="Alexandre David"
    >
      <ProjectSection title="Overview">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ProjectText>
            A Python implementation of the classic Hangman game that emphasizes clean code organization through functions. 
            The game features a rich word bank, intelligent input validation, and a user-friendly interface that updates 
            in real-time as the game progresses.
          </ProjectText>
          <div className="relative h-[200px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-amber-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-amber-500/20">
            <div className="absolute inset-0 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col items-center justify-center space-y-2">
              <code className="text-2xl font-mono text-gray-800 dark:text-gray-200 opacity-75">_ _ _ _ _ _</code>
              <code className="text-sm font-mono text-gray-600 dark:text-gray-400 opacity-50">Tries left: 6</code>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Game Variables">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {variables.map((variable, i) => (
            <MotionDiv
              key={variable.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-4 rounded-lg bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-500/10 dark:to-purple-500/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5"
            >
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">{variable.name}</code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{variable.desc}</p>
            </MotionDiv>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Core Functions">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "prep_game()",
              desc: "Initializes game state with random word",
              details: ["Selects random word", "Clears game state", "Creates masked word", "Resets tries to 6"],
              color: "from-green-500/10 dark:from-green-500/20"
            },
            {
              name: "print_game()",
              desc: "Displays current game state",
              details: ["Shows masked word", "Displays tries left", "Lists tried letters"],
              color: "from-blue-500/10 dark:from-blue-500/20"
            },
            {
              name: "check_input(guess)",
              desc: "Validates player input",
              details: ["Checks if input is letter", "Verifies single character", "Prevents duplicates"],
              color: "from-purple-500/10 dark:from-purple-500/20"
            },
            {
              name: "process_input(guess)",
              desc: "Updates game state based on guess",
              details: ["Updates word if correct", "Decrements tries if wrong", "Adds to tried letters"],
              color: "from-amber-500/10 dark:from-amber-500/20"
            }
          ].map((func, i) => (
            <MotionDiv
              key={func.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-xl bg-gradient-to-br ${func.color} to-transparent backdrop-blur-sm border border-black/5 dark:border-white/5`}
            >
              <code className="font-mono mb-2 block text-gray-900 dark:text-white">{func.name}</code>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{func.desc}</p>
              <div className="space-y-1">
                {func.details.map(detail => (
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

      <ProjectSection title="Game Flow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/projects/hangman/flowchart.png"
              alt="Hangman Game Flowchart"
              width={500}
              height={750}
              quality={100}
              className="rounded-lg"
            />
          </MotionDiv>
          <div className="space-y-4">
            {[
              {
                phase: "1. Initialization",
                steps: ["Display welcome screen", "Select random word", "Initialize game state"]
              },
              {
                phase: "2. Game Loop",
                steps: ["Show game board", "Get player input", "Validate input", "Update state"]
              },
              {
                phase: "3. Win/Loss Check",
                steps: ["Check word completion", "Check remaining tries", "Display outcome"]
              },
              {
                phase: "4. Play Again",
                steps: ["Prompt for replay", "Reset or exit game", "Clear screen"]
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

      <ProjectSection title="Code Metrics">
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
            href="https://github.com/adavid03/COSC2409-hangman"
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
