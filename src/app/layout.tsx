import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Gurpreet Bhopal | Senior Software Developer & AI Automation Specialist",
  creator: "Gurpreet Bhopal",
  keywords: [
    "Gurpreet Bhopal",
    "senior software developer",
    "Next.js developer",
    "TypeScript developer",
    "AI automation specialist",
    "n8n workflows",
    "React developer portfolio",
    "freelance full-stack developer",
    "web app developer",
    "SaaS development",
    "Supabase developer",
    "Stripe integration",
    "AWS S3 developer",
    "modern web development",
    "UK software developer",
  ],
  description:
    "Portfolio of Gurpreet Bhopal, a senior software developer specializing in Next.js, TypeScript, and AI-powered automation workflows with n8n. Skilled in building web apps, SaaS platforms, and scalable cloud integrations.",
  authors: [
    {
      name: "Gurpreet Bhopal",
      url: "https://www.gbhopal.com",
    },
  ],
  alternates: {
    canonical: "https://www.gbhopal.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
