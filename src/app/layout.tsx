import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hani WANICE | Portfolio",
  description: "Développeur Full Stack & Front-End. Portfolio minimaliste et moderne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-400 selection:text-white`}
      >
        {/* Animated Pastel Background Gradients / Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/40 blur-[140px]" />
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-200/30 blur-[130px]" />
          <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-200/30 blur-[150px]" />
        </div>

        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
