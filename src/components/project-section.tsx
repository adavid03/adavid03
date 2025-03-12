import { ReactNode } from "react";

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function ProjectSection({ title, children, className = "" }: ProjectSectionProps) {
  return (
    <section className={`flex flex-col gap-5 ${className}`}>
      <p className="text-2xl font-semibold dark:text-white text-black">{title}</p>
      {children}
    </section>
  );
} 