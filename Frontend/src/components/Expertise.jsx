import React from "react";
import Reveal from "./Reveal.jsx";

const SKILLS = [
  "Branch Operations Management",
  "CASA & Liability Products Growth",
  "Retail & SME Loan Handling",
  "Team Leadership & Staff Training",
  "Sales & Business Development",
  "Customer Relationship Management",
  "Cross-Selling (Insurance & Mutual Funds)",
  "Risk, Audit & Compliance",
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            03 &mdash; Areas of Expertise
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-navy mt-2">
            What's on deposit.
          </h2>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((s, i) => (
            <Reveal key={s} delay={i * 40}>
              <div className="h-full border border-line rounded-sm p-5 bg-white hover:border-brass transition-colors">
                <span className="font-mono text-[10px] text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-medium text-navy leading-snug">
                  {s}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 grid sm:grid-cols-2 gap-10 pt-10 border-t border-line">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-3">
                Toolkit
              </p>
              <p className="text-sm text-ink/75 leading-relaxed">
                Core Banking Systems, MS Excel, MS Word, PowerPoint, and CRM
                platforms used daily for reporting, documentation, and
                customer management.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-3">
                Languages
              </p>
              <p className="text-sm text-ink/75 leading-relaxed">
                Tamil &middot; English
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
