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
