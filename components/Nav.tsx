"use client";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/70 bg-neutral-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="font-semibold">
          X-Centered Design
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm text-neutral-300">
          <a href="/xs" className="hover:text-neutral-100 transition-colors">
            Xs
          </a>
          <a href="/cases" className="hover:text-neutral-100 transition-colors">
            Cases
          </a>
          <a
            href="/author"
            className="hover:text-neutral-100 transition-colors"
          >
            Author
          </a>
          <a
            href="#contact"
            className="hover:text-neutral-100 transition-colors"
          >
            Contact
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
              href="/xs"
              className="text-neutral-300 hover:text-neutral-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Xs
            </a>
            <a
              href="/cases"
              className="text-neutral-300 hover:text-neutral-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Cases
            </a>
            <a
              href="/author"
              className="text-neutral-300 hover:text-neutral-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Author
            </a>
            <a
              href="#contact"
              className="text-neutral-300 hover:text-neutral-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
