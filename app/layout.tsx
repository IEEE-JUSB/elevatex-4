import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Inter, Manrope } from "next/font/google";
import "./globals.css";
import ElevatexFooter from "@/components/ElevatexFooter";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ElevateX 4.0",
  description: "ElevateX is an all-in-one mentoring session by IEEE JUSB. Be it research or industry, be it competitive coding, electronics or soft skill development, we have tracks tailor-made for your needs, complete with doubt-clearing, quick contests, real-world problems and webinars by field experts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${inter.variable} ${manrope.variable} antialiased`}
      >
        {children}
        <ElevatexFooter />
      <Toaster position="top-right" />
      </body>
    </html>
  );
}
