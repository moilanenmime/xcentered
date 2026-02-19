import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Flash from "@/components/Flash";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://markomoilanen.vercel.app"),

  title: {
    default: "Marko Moilanen — Human-Centered Systems Architect",
    template: "%s — Marko Moilanen",
  },

  description:
    "Doctoral researcher at the University of Oulu (HCI/UX, digital transformation). Human- and meaning-centered design, stakeholder tensions, and structured evaluation.",

  openGraph: {
    type: "website",
    siteName: "Marko Moilanen",
    title: "Marko Moilanen — Human-Centered Systems Architect",
    description:
      "Doctoral researcher at the University of Oulu (HCI/UX, digital transformation). Human- and meaning-centered design, stakeholder tensions, and structured evaluation.",
    url: "https://markomoilanen.vercel.app",
    images: [
      {
        url: "/images/Marko.jpg", // uses metadataBase to become absolute
        width: 1600,
        height: 900,
        alt: "Marko Moilanen",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marko Moilanen — Human-Centered Systems Architect",
    description:
      "Doctoral researcher at the University of Oulu (HCI/UX, digital transformation).",
    images: ["/images/Marko.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marko Moilanen",
  url: "https://markomoilanen.vercel.app",
  image: "https://markomoilanen.vercel.app/images/Marko.jpg",
  jobTitle: "Humanity-Centered Systems Architect",
  worksFor: {
    "@type": "Organization",
    name: "University of Oulu",
  },
  knowsAbout: [
    "Human–Computer Interaction",
    "UX Research",
    "Digital Transformation",
    "Stakeholder Analysis",
    "SportsHCI",
    "Meaning-centered design",
  ],
  sameAs: [
    // Add stable profile URLs you actually control/use:
    "https://www.linkedin.com/in/marko-moilanen-hcd/",
    "https://scholar.google.com/citations?user=LvZRVucAAAAJ&hl=en",
    "https://www.oulu.fi/en/researchers/marko-moilanen",
    "https://oulu.cris.fi/en/persons/26751b2b-4363-4218-9590-5da8fd951dfd",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-neutral-950 text-neutral-100"}>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
