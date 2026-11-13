"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { clinic } from "@/lib/content";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Storm Damage", href: "#storm" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit", href: "#visit" },
];

function RoofMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="9" className="fill-navy-800" />
      <path
        d="M16 6.5 28.5 15.5h-3.6v9.5H7.1v-9.5H3.5L16 6.5Z"
        className="fill-white"
      />
      <rect x="13.6" y="18" width="4.8" height="7" rx="0.8" className="fill-navy-800" />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <div className="container-responsive flex h-14 items-center justify-between md:h-16">
        <Link
          href="#top"
          className="flex min-h-11 items-center gap-2 text-[1.05rem] font-extrabold leading-none tracking-tight text-navy-800 md:text-xl"
          onClick={() => setMobileOpen(false)}
        >
          <RoofMark className="h-8 w-8 shrink-0 md:h-9 md:w-9" />
          <span className="whitespace-nowrap">Phoenix Rise</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-2 text-[0.95rem] font-medium text-slate-700 transition-colors hover:text-navy-800"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#book"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-dark sm:inline-flex"
          >
            Free inspection
          </a>
          <a
            href={`tel:${clinic.phoneTel}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-white transition-colors hover:bg-navy-900 sm:hidden"
            aria-label={`Call ${clinic.name} at ${clinic.phoneDisplay}`}
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-800 lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-slate-200 bg-white transition-all duration-200 ease-out lg:hidden ${
          mobileOpen ? "max-h-[480px] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="container-responsive grid gap-1 py-3"
          aria-label="Primary mobile"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block min-h-11 rounded-md px-3 py-2.5 font-medium text-slate-700 transition-colors hover:bg-navy-50 hover:text-navy-800"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ember px-5 py-3 font-bold text-white transition-colors hover:bg-ember-dark"
          >
            Free inspection — {clinic.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
