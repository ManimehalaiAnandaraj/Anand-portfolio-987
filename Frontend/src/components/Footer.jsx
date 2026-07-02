import React from "react";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-paper/60 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs">
          &copy; {new Date().getFullYear()} Anandaraj Neelamegam
        </p>
        <p className="font-sign text-lg text-brass-light">Anandaraj Neelamegam</p>
      </div>
    </footer>
  );
}
