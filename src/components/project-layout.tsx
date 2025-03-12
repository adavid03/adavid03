import { ReactNode } from "react";

interface ProjectLayoutProps {
  date: string;
  language: string;
  title: string;
  description: string;
  authors: string;
  languageNote?: string;
  children: ReactNode;
}

const getLanguageColor = (lang: string): string => {
  switch (lang.trim().toLowerCase()) {
    case "c++":
      return "text-pink-400";
    case "c":
      return "text-gray-400";
    case "python":
      return "text-sky-700";
    case "matlab":
      return "text-amber-600";
    case "next.js":
      return "text-black dark:text-black dark:drop-shadow-[0_0_0.3px_#fff]";
    case "typescript":
      return "text-blue-500";
    case "tailwind css":
      return "text-blue-700";
    case "framer motion":
      return "text-purple-500";
    default:
      return "text-gray-400";
  }
};

export default function ProjectLayout({
  date,
  language,
  title,
  description,
  authors,
  languageNote,
  children,
}: ProjectLayoutProps) {
  const languages = language.split(",").map((lang) => lang.trim());

  return (
    <div className="w-dvw flex justify-center mt-12">
      <div className="flex flex-col gap-5 max-w-4xl py-12 px-2">
        {/* Header Section */}
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-sm font-extralight">
              {languages.map((lang, index) => (
                <span key={lang}>
                  <span className={getLanguageColor(lang)}>{lang}</span>
                  {index < languages.length - 1 && (
                    <span className="dark:text-gray-400 text-gray-600">, </span>
                  )}
                </span>
              ))}
            </p>
            <div className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-400"></div>
            <p className="text-sm font-extralight dark:text-neutral-400 text-neutral-800">{date} </p>
            {languageNote && (
              <>
                <div className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-400"></div>
                <h4 className="text-sm font-light dark:text-neutral-400 text-neutral-800 text-center">
                  {languageNote}
                </h4>
              </>
            )}
          </div>
          <h3 className="text-sm font-light dark:text-gray-400 text-gray-600 text-left">
            {authors}
          </h3>
        </div>
        <h1 className="text-5xl font-bold text-left dark:text-white text-black font-bakbak-one">
          {title}
        </h1>
        <h2 className="text-lg font-extralight dark:text-neutral-200 text-neutral-800 text-left leading-relaxed">
          {description}
        </h2>

        {/* Project Content */}
        {children}
      </div>
    </div>
  );
}
