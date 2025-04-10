"use client";

import ProjectLayout from "@/components/project-layout";
import ProjectSection from "@/components/project-section";
import ProjectText from "@/components/project-text";
import Link from "next/link";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import ImageModal from "@/components/image-modal";
import { useState } from "react";

interface ImageData {
  url: string;
  title: string;
  description: string;
}

export default function DifferentialEquations() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const images: ImageData[] = [
    { url: "/projects/appl-diffeq/images/1.png", title: "Question 1", description: "Question 1" },
    { url: "/projects/appl-diffeq/images/2.png", title: "Question 1", description: "Question 1" },
    { url: "/projects/appl-diffeq/images/3.png", title: "Question 1", description: "Question 1" },
    { url: "/projects/appl-diffeq/images/4.png", title: "Question 2", description: "Question 2" },
    { url: "/projects/appl-diffeq/images/5.png", title: "Question 3a", description: "Question 3a" },
    { url: "/projects/appl-diffeq/images/6.png", title: "Question 3b", description: "Question 3b" },
    { url: "/projects/appl-diffeq/images/7.png", title: "Question 4c", description: "Question 4c" },
    { url: "/projects/appl-diffeq/images/8.png", title: "Question 6b", description: "Question 6b" },
  ];

  return (
    <ProjectLayout
      date="Spring 2024"
      language="MATLAB, Python"
      title="APPLICATIONS OF FIRST-ORDER DIFFERENTIAL EQUATIONS"
      description="(§3.2 of the Nagle/Saff/Snider text) A project on the applications of first-order differential equations using MATLAB and Python"
      authors="Alexandre David, Tritin Muirbrook"
    >
      <ProjectSection title="Project Content">
        <p className="text-sm font-bold text-gray-500">Project Requirements</p>
        <Link
          href="/projects/appl-diffeq/project-requirements.pdf"
          download
          className="text-blue-500 hover:text-blue-600 flex items-center gap-2 transition-colors"
          target="_blank"
        >
          Download Project Requirements
          <FaDownload />
        </Link>
        <p className="text-sm font-bold text-gray-500 mt-6">Images</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col gap-1">
              <button
                onClick={() => setSelectedImage(image)}
                className="text-blue-500 hover:text-blue-600 flex items-center gap-2 transition-colors"
              >
                View Image ({index + 1})
                <FaExternalLinkAlt />
              </button>
              <p className="text-xs font-light text-gray-500">{image.description}</p>
            </div>
          ))}
        </div>
        <p className="text-sm font-bold text-gray-500 mt-6">Scripts</p>
        <div className="flex flex-col gap-1">
          <Link
            href="/projects/appl-diffeq/untitled.m"
            download
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2 transition-colors"
          >
            Question 2, untitled.m
            <FaDownload />
          </Link>
          <p className="text-xs font-light text-gray-500">Question 2</p>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href="/projects/appl-diffeq/question-4.m"
            download
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2 transition-colors"
          >
            Question 4, question4.m
            <FaDownload />
          </Link>
          <p className="text-xs font-light text-gray-500">Question 4</p>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href="/projects/appl-diffeq/optimization.py"
            download
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2 transition-colors"
          >
            Question 4, Optimization.py
            <FaDownload />
          </Link>
          <p className="text-xs font-light text-gray-500">Question 4</p>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href="/projects/appl-diffeq/dirfield7.m"
            download
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2 transition-colors"
          >
            dirfield7.m
            <FaDownload />
          </Link>
          <p className="text-xs font-light text-gray-500">General</p>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href="/projects/appl-diffeq/dirfield8.m"
            download
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2 transition-colors"
          >
            dirfield8.m
            <FaDownload />
          </Link>
          <p className="text-xs font-light text-gray-500">General</p>
        </div>
      </ProjectSection>
      <ProjectSection title="Overview">
        <ProjectText>
          The goal of this lab is to apply first-order differential equations to
          model real-world phenomena. This includes population growth using
          exponential, logistic, and modified logistic models; numerical
          analysis and direction fields in MATLAB; and parameter estimation for
          best-fit models. Problems 1 through 4 and 6 guides you through these
          applications using MATLAB for visualization and solving initial value
          problems.
        </ProjectText>
      </ProjectSection>

      {/* Image Modal */}
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url || ""}
        title={selectedImage?.title || ""}
      />
    </ProjectLayout>
  );
}
