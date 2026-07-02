import React from "react";
import Reveal from "./Reveal.jsx";

const STAMPS = [
  {
    label: "Sales Targets",
    detail: "Consistently achieved 100%+ of assigned business targets",
  },
  {
    label: "Service Excellence",
    detail: "Recognised for excellent customer service",
  },
  {
    label: "Branch Growth",
    detail: "Significant contribution to branch growth and profitability",
  },
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      className="py-20 bg-navy text-paper relative overflow-hidden"
    >
      <div className="absolute inset-0 guilloche-dark pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass-light">
            04 &mdash; Recognition
          </p>
          <h2 className="font-display text-3xl md:text-4xl mt-2">
            Certified, in triplicate.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-10">
          {STAMPS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                <div
                  className={`stamp w-32 h-32 flex items-center justify-center p-4 ${
                    i % 2 === 0 ? "-rotate-6" : "rotate-3"
                  }`}
                >
                  <div className="stamp-ring w-full h-full rounded-full flex items-center justify-center p-3">
                    <span className="font-display text-sm leading-tight text-brass-light">
                      {s.label}
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-sm text-paper/70 leading-relaxed max-w-[220px]">
                  {s.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-16 pt-10 border-t border-paper/15 grid sm:grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brass-light mb-2">
                MBA, Finance
              </p>
              <p className="text-sm text-paper/70">
                Madurai Kamaraj University
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brass-light mb-2">
                BBA
              </p>
              <p className="text-sm text-paper/70">
                Madurai Kamaraj University
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
