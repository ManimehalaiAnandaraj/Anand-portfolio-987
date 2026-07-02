import React from "react";
import Reveal from "./Reveal.jsx";

const LEDGER = [
  {
    year: "2024 — Present",
    role: "Branch Manager",
    org: "HDFC Bank, Madurai",
    points: [
      "Leads overall branch operations, sales planning, and customer service delivery",
      "Drives revenue growth through strategic business development initiatives",
      "Supervises and trains staff to improve productivity and service",
      "Ensures full compliance with banking policies and regulatory standards",
    ],
  },
  {
    year: "2023 — 2024",
    role: "Branch Manager",
    org: "ICICI Bank, Virudhunagar",
    points: [
      "Managed complete branch operations across sales, service, and compliance",
      "Achieved consistent growth in CASA, loans, and third-party products",
      "Led team performance and ensured target achievement",
      "Strengthened customer relationships and handled escalations",
    ],
  },
  {
    year: "2022 — 2023",
    role: "Gold Loan Sales Manager",
    org: "ICICI Bank, Virudhunagar Region",
    points: [
      "Drove gold loan portfolio growth through field sales and market expansion",
      "Supervised gold appraisal and loan processing under RBI and internal policy",
      "Led branch teams to lift productivity and customer acquisition",
      "Managed collections and renewals, reducing NPAs",
    ],
  },
  {
    year: "2020 — 2022",
    role: "Deputy Branch Manager",
    org: "ICICI Bank, Madurai",
    points: [
      "Supported branch operations including audit, compliance, and supervision",
      "Monitored staff KPIs and assisted in achieving monthly business targets",
      "Ensured smooth workflow execution and documentation accuracy",
    ],
  },
  {
    year: "2018 — 2020",
    role: "Assistant Branch Manager",
    org: "ICICI Bank, Madurai",
    points: [
      "Managed daily branch operations including cash, vault, and transactions",
      "Assisted with risk management and compliance activities",
      "Improved customer retention through proactive engagement",
    ],
  },
  {
    year: "2016 — 2018",
    role: "Teller",
    org: "ICICI Bank, Tiruppur",
    points: [
      "Processed transactions accurately and efficiently",
      "Promoted banking products based on customer needs",
      "Maintained high service quality and cash handling standards",
    ],
  },
  {
    year: "2014 — 2016",
    role: "Assistant Manager",
    org: "Vadamalayan Hospital, Madurai",
    points: [
      "Managed front-office operations and coordination",
      "Improved service delivery and workflow efficiency",
    ],
  },
];

export default function Ledger() {
  return (
    <section id="ledger" className="py-20 bg-white border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            02 &mdash; Career Ledger
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-navy mt-2">
            A statement of postings, entered in order.
          </h2>
        </Reveal>

        <div className="mt-14 relative">
          <div
            className="absolute left-[86px] md:left-[140px] top-2 bottom-2 w-px hidden sm:block"
            style={{ backgroundColor: "#D7DBD3" }}
          ></div>

          <div className="space-y-10">
            {LEDGER.map((item, i) => (
              <Reveal key={item.role + item.year} delay={i * 60}>
                <div className="grid grid-cols-[70px_1fr] sm:grid-cols-[120px_1fr] gap-4 sm:gap-8 relative">
                  <div className="font-mono text-xs sm:text-sm text-ink/60 pt-1">
                    {item.year}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-display text-xl text-navy">
                      {item.role}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-green mt-1">
                      {item.org}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {item.points.map((p) => (
                        <li
                          key={p}
                          className="text-sm text-ink/75 leading-relaxed pl-4 relative"
                        >
                          <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-brass/70 rounded-full"></span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
