import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexandre David | Data Analysis Tool",
  description: "How can an interactive data analysis tool be developed and used to analyze environmental variables in pond water samples for CUREs?",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
