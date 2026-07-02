import React from "react";
import Reveal from "./Reveal.jsx";

export default function Summary() {
  return (
    <section id="summary" className="py-20 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[0.4fr_1fr] gap-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            01 &mdash; Summary
          </p>
        </Reveal>
        <Reveal delay={80}>
          <p className="font-display text-2xl md:text-3xl leading-snug text-navy max-w-3xl">
            A banking professional with expertise in branch operations, CASA
            growth, and loan portfolio management, built across ICICI Bank and
            HDFC Bank &mdash; with a consistent record of hitting business
            targets, lifting branch profitability, and holding the line on
            RBI compliance.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
