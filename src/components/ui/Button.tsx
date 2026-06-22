import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline-light" | "outline-dark";
  className?: string;
};

const variants = {
  primary:
    "bg-gold text-navy hover:bg-gold-light",
  "outline-light":
    "border border-white/40 text-white hover:bg-white/10",
  "outline-dark":
    "border border-navy/30 text-navy hover:bg-navy/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
