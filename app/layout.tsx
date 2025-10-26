import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Flash from "@/components/Flash";
import { Suspense } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X-Centered Design – Where design meets existence",
  description:
    "Exploring what truly lies at the center of human experience — meaning, humanity, and sport.",
  metadataBase: new URL("https://xcentered-design.vercel.app"),
  openGraph: { title: "X-Centered Design", type: "website" },
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
          {" "}
          {/* ✅ wrap Flash in Suspense */}
          <Flash />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
