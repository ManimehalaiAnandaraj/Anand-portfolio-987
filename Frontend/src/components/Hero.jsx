import React from "react";
import Reveal from "./Reveal.jsx";

const STATS = [
  { label: "Experience", value: "11+ yrs" },
  { label: "Institutions", value: "02" },
  { label: "Promotions", value: "05" },
  { label: "Target Achievement", value: "100%+" },
];

export default function Hero() {
  return (
    <section id="top" className="pt-32 md:pt-40 pb-20 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-2 guilloche"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1.2fr_0.9fr] gap-14 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass mb-5">
            Branch Manager &middot; HDFC Bank, Madurai
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-navy">
            Anandaraj
            <br />
            Neelamegam
          </h1>
          <p className="mt-6 text-lg text-ink/80 max-w-xl leading-relaxed">
            Eleven-plus years reading the balance sheet of a branch the way a
            teller reads a passbook — line by line. From the counter at ICICI
            Tiruppur to the manager's desk at HDFC Madurai, built on CASA
            growth, disciplined lending, and teams that hit their numbers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs text-ink/60">
            <span className="px-3 py-1.5 border border-line rounded-sm">
              Madurai, Tamil Nadu
            </span>
            <span className="px-3 py-1.5 border border-line rounded-sm">
              RBI Compliance
            </span>
            <span className="px-3 py-1.5 border border-line rounded-sm">
              CASA &amp; Liability Growth
            </span>
          </div>
        </div>

        <Reveal>
          <div className="relative bg-navy text-paper rounded-lg shadow-2xl overflow-hidden">
            <div className="absolute inset-0 guilloche-dark pointer-events-none"></div>

            <div className="relative p-7 border-b border-brass/40">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass-light">
                Career Statement
              </p>
              <p className="font-display text-xl mt-1">Account Holder</p>
              <p className="font-mono text-sm mt-0.5 text-paper/80">
                Anandaraj Neelamegam
              </p>
            </div>

            <div className="relative p-7 space-y-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between items-baseline ledger-row py-3 first:pt-0 last:pb-0"
                >
                  <span className="font-mono text-xs text-paper/60 uppercase tracking-wider">
                    {s.label}
                  </span>
                  <span className="font-mono text-2xl text-brass-light">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative px-7 pb-6 pt-2">
              <p className="font-sign text-2xl text-brass-light">
                Anandaraj Neelamegam
              </p>
              <p className="font-mono text-[10px] text-paper/40 mt-1 uppercase tracking-widest">
                Authorised Signatory
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
