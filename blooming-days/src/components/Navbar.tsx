"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/catalog", label: "Catalog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-outline-variant/15">
      <div className="px-6 py-4 md:px-20 lg:px-40 flex items-center justify-between whitespace-nowrap">
        <Link href="/" className="flex items-center gap-3 text-on-surface" onClick={() => setOpen(false)}>
          <div className="size-6 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" />
            </svg>
          </div>
          <h2 className="font-headline text-lg font-bold tracking-tight">Blooming Days</h2>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-on-surface text-sm font-medium hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden md:flex min-w-[120px] cursor-pointer items-center justify-center rounded-xl h-10 px-5 primary-gradient text-on-primary text-sm font-bold tracking-wide editorial-shadow"
          >
            Order Now
          </Link>

          {/* Hamburger button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-on-surface hover:bg-surface-container transition-colors"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-outline-variant/15 bg-surface px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-on-surface text-base font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="flex items-center justify-center rounded-xl h-12 px-5 primary-gradient text-on-primary text-sm font-bold tracking-wide editorial-shadow mt-2"
            onClick={() => setOpen(false)}
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
