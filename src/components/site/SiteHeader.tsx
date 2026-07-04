"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/content/site";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-ink transition-colors hover:text-accent-t"
        >
          <span className="grid h-7 w-7 place-items-center rounded-[8px] border border-line bg-surface text-[11px] font-bold text-soft">
            {SITE.monogram}
          </span>
          {SITE.shortName}
        </Link>
        <nav className="flex items-center gap-1">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-[8px] px-3 py-1.5 text-[13.5px] font-medium text-muted transition-colors hover:bg-surface hover:text-ink ${
                i > 0 ? "hidden sm:block" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          {SITE.github && (
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-[8px] p-2 text-muted transition-colors hover:bg-surface hover:text-ink"
            >
              <svg viewBox="0 0 16 16" width="17" height="17" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
              </svg>
            </a>
          )}
          <a
            href={`mailto:${SITE.email}`}
            className="ml-1 rounded-[8px] border border-line bg-surface px-3.5 py-1.5 text-[13.5px] font-medium text-soft transition-colors hover:border-accent/40 hover:text-accent-t sm:ml-2"
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
