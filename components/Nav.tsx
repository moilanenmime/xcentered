"use client";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/70 bg-neutral-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        {/* Logo */}

        <a
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-widest text-neutral-200 hover:text-neutral-100"
          aria-label="Home"
        >
          Marko Moilanen
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm text-neutral-300">
          <a
            href="/consulting"
            className="hover:text-neutral-100 transition-colors"
          >
            Consulting
          </a>
          <a
            href="/projects"
            className="hover:text-neutral-100 transition-colors"
          >
            Projects
          </a>

          <a
            href="/academic"
            className="hover:text-neutral-100 transition-colors"
          >
            Academic
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 bg-neutral-300 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-neutral-300 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-neutral-300 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-neutral-800/70 bg-neutral-950/90 backdrop-blur">
          <div className="flex flex-col py-4 px-6 space-y-3">
            <a
              href="/consulting"
              className="text-neutral-300 hover:text-neutral-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Consulting
            </a>
            <a
              href="/projects"
              className="text-neutral-300 hover:text-neutral-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
