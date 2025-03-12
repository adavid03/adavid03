"use client";

import Link from "next/link";
import ProjectLayout from "@/components/project-layout";
import ProjectSection from "@/components/project-section";
import ProjectText from "@/components/project-text";
import { motion, useInView } from "framer-motion";
import ClickableImage from "@/components/clickable-image";
import { useRef } from "react";

export default function SmartVitale() {
  const MotionDiv = motion.div;
  
  // Create refs for each section
  const achievementsRef = useRef(null);
  const technologiesRef = useRef(null);
  const designRef = useRef(null);
  const developmentRef = useRef(null);
  const resultsRef = useRef(null);
  const documentationRef = useRef(null);

  // Check if sections are in view
  const isAchievementsInView = useInView(achievementsRef, { once: true, margin: "-100px" });
  const isTechnologiesInView = useInView(technologiesRef, { once: true, margin: "-100px" });
  const isDesignInView = useInView(designRef, { once: true, margin: "-100px" });
  const isDevelopmentInView = useInView(developmentRef, { once: true, margin: "-100px" });
  const isResultsInView = useInView(resultsRef, { once: true, margin: "-100px" });
  const isDocumentationInView = useInView(documentationRef, { once: true, margin: "-100px" });

  const achievements = [
    { value: "4th", label: "National Rank", desc: "French Engineering Olympiads" },
    { value: "1st", label: "Regional Rank", desc: "Academie de Versailles" },
    { value: "3", label: "Iterations", desc: "Design Improvements" },
    { value: "4", label: "Team Members", desc: "Collaborative Project" }
  ];

  const technologies = [
    { name: "Arduino", desc: "Microcontroller programming", icon: "🔌" },
    { name: "MATLAB", desc: "System simulation", icon: "📊" },
    { name: "3D Printing", desc: "Prototype fabrication", icon: "🖨️" },
    { name: "C", desc: "Embedded programming", icon: "💻" }
  ];

  // Animation variants
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <ProjectLayout
      date="2021"
      language="C, MATLAB"
      title="SMART&apos;VITALE"
      description="Award-winning medical device project to prevent disease transmission through card handling in healthcare settings."
      authors="Alexandre David, Adrien Delhomau, Paul Guillemin, Victor Sin Sohn"
      languageNote="Files are available in French only"
    >
      <ProjectSection title="Overview">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ProjectText>
            Project Smart&apos;Vitale addresses a critical healthcare challenge: minimizing disease transmission 
            through card handling in medical settings. Through innovative engineering and iterative design, 
            we developed an automated solution that could indirectly save lives.
          </ProjectText>
          <div className="relative h-[200px] rounded-lg overflow-hidden bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 dark:from-green-500/20 dark:via-blue-500/20 dark:to-purple-500/20">
            <div className="absolute inset-0 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col items-center justify-center space-y-2">
              <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">Smart&apos;Vitale</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Medical Innovation Project</span>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Achievements">
        <div ref={achievementsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((metric, i) => (
            <MotionDiv
              key={metric.label}
              variants={fadeInScale}
              initial="hidden"
              animate={isAchievementsInView ? "visible" : "hidden"}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-xl transform group-hover:scale-105 transition-transform border border-black/5 dark:border-white/5" />
              <div className="relative p-6 flex flex-col items-center text-center">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">
                  {metric.value}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white mt-2">{metric.label}</span>
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">{metric.desc}</span>
              </div>
            </MotionDiv>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Technologies">
        <div ref={technologiesRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, i) => (
            <MotionDiv
              key={tech.name}
              variants={fadeInUp}
              initial="hidden"
              animate={isTechnologiesInView ? "visible" : "hidden"}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-4 rounded-lg bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-500/10 dark:to-purple-500/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5"
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-medium text-gray-900 dark:text-white">{tech.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{tech.desc}</p>
            </MotionDiv>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Design Evolution">
        <div ref={designRef} className="space-y-12">
          {[
            {
              phase: "Initial Concept",
              desc: "Flat belt system for card movement and disinfection",
              image: "concept-1.png"
            },
            {
              phase: "First Iteration",
              desc: "4 rollers system with improved ergonomics and disinfection capabilities",
              image: "concept-2.png"
            },
            {
              phase: "Final Design",
              desc: "4 vertical rollers system for optimal card handling and reliability",
              image: "concept-3.png"
            }
          ].map((iteration, i) => (
            <MotionDiv
              key={iteration.phase}
              variants={fadeInUp}
              initial="hidden"
              animate={isDesignInView ? "visible" : "hidden"}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{iteration.phase}</h3>
                <p className="text-gray-600 dark:text-gray-300">{iteration.desc}</p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-500/10 dark:to-purple-500/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5">
                <ClickableImage
                  src={`/projects/smartvitale/${iteration.image}`}
                  alt={iteration.phase}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </MotionDiv>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Development Process">
        <div ref={developmentRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Project Management",
              desc: "Excel-based task tracking and progress monitoring",
              image: "development-1.png"
            },
            {
              title: "Simulation",
              desc: "MATLAB Simulink modeling for system validation",
              image: "development-2.png"
            },
            {
              title: "Prototyping",
              desc: "3D printing and Arduino programming",
              image: "development-5.png"
            }
          ].map((phase, i) => (
            <MotionDiv
              key={phase.title}
              variants={fadeInScale}
              initial="hidden"
              animate={isDevelopmentInView ? "visible" : "hidden"}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative h-[200px] rounded-t-lg overflow-hidden">
                <ClickableImage
                  src={`/projects/smartvitale/${phase.image}`}
                  alt={phase.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 rounded-b-lg bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-500/10 dark:to-purple-500/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{phase.desc}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Results & Impact">
        <div ref={resultsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MotionDiv
            variants={fadeInLeft}
            initial="hidden"
            animate={isResultsInView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-500/10 dark:to-purple-500/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5"
          >
            <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Project Success</h3>
            <ProjectText>
              Smart&apos;Vitale demonstrates the potential of engineering solutions to address real-world healthcare challenges. 
              The project&apos;s success in national competitions validates its innovative approach and potential impact 
              on public health.
            </ProjectText>
          </MotionDiv>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <ClickableImage
              src="/projects/smartvitale/conclusion-1.png"
              alt="Final Product"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Documentation">
        <div ref={documentationRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Project Presentation",
              desc: "Detailed overview of the project",
              link: "/projects/smartvitale/downloads/presentation.pdf",
              icon: "📑"
            },
            {
              title: "MATLAB Model",
              desc: "Simulink simulation files",
              link: "/projects/smartvitale/downloads/smartvitale.slx",
              icon: "🔬"
            }
          ].map((doc, i) => (
            <MotionDiv
              key={doc.title}
              variants={fadeInUp}
              initial="hidden"
              animate={isDocumentationInView ? "visible" : "hidden"}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-500/10 dark:to-purple-500/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/5 group hover:scale-105 transition-transform"
            >
              <Link href={doc.link} target="_blank" download className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{doc.icon}</span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{doc.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{doc.desc}</p>
      </div>
    </div>
                <div className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                  ↓
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
}
