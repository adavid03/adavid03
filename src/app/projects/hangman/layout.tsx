import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexandre David | Hangman",
  description: "Hangman, a simple game of hangman in python",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
