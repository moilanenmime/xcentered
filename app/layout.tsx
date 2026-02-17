import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Flash from "@/components/Flash";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marko Moilanen – Human- and Meaning-Centered Design Researcher",
  description:
    "Exploring what truly lies at the center of human experience — meaning, humanity, and sports.",
  metadataBase: new URL("https://markomoilanen.vercel.app"),
  openGraph: { title: "Marko Moilanen", type: "website" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-neutral-950 text-neutral-100"}>
        <Nav />
        <Suspense fallback={null}>
          <Flash />
        </Suspense>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
