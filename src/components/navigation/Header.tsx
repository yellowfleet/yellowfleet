"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/fleet", label: "Fleet" },
  { href: "/sustainability", label: "Sustainability" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
  <img
    src="/images/yellowfleetlogo.jpg"
    alt="YellowFleet"
    className="h-14 w-auto object-contain"
  />
 
</Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" variant="primary" className="hidden px-5 py-2.5 md:inline-flex">
            Get in touch
          </Button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 bg-navy transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-navy transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-navy transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-navy/10 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-navy/70 transition-colors hover:bg-offwhite hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 border-t border-navy/10 pt-4">
            <Button href="/contact" variant="primary" className="w-full">
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}