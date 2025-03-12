import type { Metadata } from "next";
import { Public_Sans, Bakbak_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { OverlayProvider } from "@/context/overlay-context";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const bakbakOne = Bakbak_One({
  variable: "--font-bakbak-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Alexandre David",
  description: "Personal website of Alexandre David",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-public-sans">
      <body className={`${publicSans.variable} ${bakbakOne.variable} antialiased dark:bg-black bg-white overflow-x-hidden text-black dark:text-white`}>
        <OverlayProvider>
          <Navbar />
          {children}
        </OverlayProvider>
      </body>
    </html>
  );
}
