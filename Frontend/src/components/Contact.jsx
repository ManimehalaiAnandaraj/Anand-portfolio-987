import React from "react";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            05 &mdash; Contact
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-navy mt-3 max-w-2xl mx-auto leading-tight">
            Open an account with the right manager.
          </h2>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:anandarajneelamegam1830@gmail.com"
              className="font-mono text-sm bg-navy text-paper px-6 py-3 rounded-sm hover:bg-navy-deep transition-colors"
            >
              anandarajneelamegam1830@gmail.com
            </a>
            <a
              href="tel:8220493018"
              className="font-mono text-sm border border-line px-6 py-3 rounded-sm hover:border-brass transition-colors text-ink/80"
            >
              +91 82204 93018
            </a>
          </div>

          <p className="mt-6 font-mono text-xs text-ink/50 uppercase tracking-widest">
            Madurai, Tamil Nadu
          </p>
        </Reveal>
      </div>
    </section>
  );
}
