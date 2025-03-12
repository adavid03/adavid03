import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexandre David | adavid03",
  description: "adavid03, the personal website of Alexandre David",
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
