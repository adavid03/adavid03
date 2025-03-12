import { ReactNode } from "react";

interface ProjectTextProps {
  children: ReactNode;
}

export default function ProjectText({ children }: ProjectTextProps) {
  return (
    <p className="text-lg font-extralight dark:text-white text-black leading-relaxed">
      {children}
    </p>
  );
} 