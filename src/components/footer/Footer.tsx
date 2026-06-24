import Link from "next/link";
import { companyInfo } from "@/content/company";


const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/fleet", label: "Fleet" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
     
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-[family-name:var(--font-display)] text-xl font-semibold">
              {companyInfo.name}
            </span>
            <p className="mt-3 max-w-sm text-sm text-white/70">
              {companyInfo.shortDescription}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>{companyInfo.email}</li>
              <li>{companyInfo.phone}</li>
              <li>{companyInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</span>
          <span>Electric marine mobility, built for India&apos;s waterways.</span>
        </div>
      </div>
    </footer>
  );
}
