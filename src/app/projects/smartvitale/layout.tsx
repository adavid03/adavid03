import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexandre David | Smart'Vitale",
  description: "Smart'Vitale, preventing the spread of diseases",
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
