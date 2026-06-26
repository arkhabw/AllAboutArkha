import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arkha | Software Developer — Backend & Mobile Engineering",
  description:
    "Software developer specializing in backend architecture, API design, and mobile development with Kotlin & Jetpack Compose. Building scalable systems with clean, maintainable code.",
  keywords: [
    "software developer",
    "backend engineer",
    "mobile developer",
    "Node.js",
    "Kotlin",
    "Jetpack Compose",
    "API development",
  ],
  authors: [{ name: "Arkha" }],
  openGraph: {
    title: "Arkha | Software Developer",
    description:
      "Software developer specializing in backend architecture and mobile development.",
    type: "website",
    locale: "en_US",
    siteName: "arkha.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkha | Software Developer",
    description:
      "Software developer specializing in backend architecture and mobile development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-zinc-950 font-sans text-zinc-50 antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
