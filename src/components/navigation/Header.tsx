import Link from "next/link";
import { companyInfo } from "@/content/company";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/fleet", label: "Fleet" },
  { href: "/projects", label: "Projects" },
  { href: "/sustainability", label: "Sustainability" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-navy"
        >
          {companyInfo.name}
        </Link>

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

        <Button href="/contact" variant="primary" className="px-5 py-2.5">
          Get in touch
        </Button>
      </div>
    </header>
  );
}
