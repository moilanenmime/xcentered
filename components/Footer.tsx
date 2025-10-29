export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/70">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 mb-3">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-neutral-400">
              <a
                href="#contact"
                className="block hover:text-neutral-200 transition-colors"
              >
                Send message
              </a>
              <a
                href="mailto:moilanenmime@gmail.com"
                className="block hover:text-neutral-200 transition-colors"
              >
                Email directly
              </a>
            </div>
          </div>

          {/* Academic Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 mb-3">
              Academic
            </h3>
            <div className="space-y-2 text-sm text-neutral-400">
              <a
                href="https://www.linkedin.com/in/marko-moilanen-hcd/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-neutral-200 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.researchgate.net/profile/Marko-Moilanen-2"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-neutral-200 transition-colors"
              >
                ResearchGate
              </a>
              <a
                href="https://www.oulu.fi/fi/tutkijat/marko-moilanen"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-neutral-200 transition-colors"
              >
                University of Oulu
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 mb-3">
              Legal
            </h3>
            <div className="space-y-2 text-sm text-neutral-400">
              <a
                href="/privacy"
                className="block hover:text-neutral-200 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - Bottom */}
        <div className="mt-12 pt-6 border-t border-neutral-800/50">
          <p className="text-center text-sm text-neutral-500">
            © {new Date().getFullYear()} X-Centered Design · Marko Moilanen
          </p>
        </div>
      </div>
    </footer>
  );
}
