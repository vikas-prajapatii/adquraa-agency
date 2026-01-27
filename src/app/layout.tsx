import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adquoraa Agency",
  description: "High-end Influencer Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lexend.variable} antialiased bg-[#050505] text-[#ededed] selection:bg-cyan-500/30 selection:text-cyan-100`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
