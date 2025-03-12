import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Papers() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-7 gap-10">
      <h1 className="text-4xl font-bold">Papers</h1>
      <div className="flex gap-20 items-center justify-center">
        <Link href="/research/biol2200-data-analysis-tool/papers/literature-review" className="text-lg font-light flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Literature Review <ArrowRight className="w-4 h-4" /></Link>
        <Link href="/research/biol2200-data-analysis-tool/papers/research-paper" className="text-lg font-light flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Research Paper <ArrowRight className="w-4 h-4" /></Link>
      </div>
    </div>
  );
}
