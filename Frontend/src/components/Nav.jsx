import React from "react";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { href: "#summary", label: "Summary" },
  { href: "#ledger", label: "Career Ledger" },
  { href: "#expertise", label: "Expertise" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        
        <a
          href="#top"
          className="flex items-center gap-3 font-mono text-sm tracking-wide text-navy"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-30 h-20 object-contain"
          />
          <span>
            A.N <span className="text-brass">— Career Statement</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-ink/70">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-brass transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:anandarajneelamegam1830@gmail.com"
          className="font-mono text-xs uppercase tracking-widest bg-navy text-paper px-4 py-2 rounded-sm hover:bg-navy-deep transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}