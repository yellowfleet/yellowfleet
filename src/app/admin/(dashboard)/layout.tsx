import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-navy/5">
      <header className="border-b border-navy/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <span className="font-[family-name:var(--font-display)] font-semibold text-navy">
              YellowFleet Admin
            </span>
            <nav className="flex gap-4 text-sm text-navy/70">
              <Link href="/admin" className="hover:text-navy">
                Inquiries
              </Link>
              <Link href="/admin/vessels" className="hover:text-navy">
                Vessels
              </Link>
               <Link href="/admin/content" className="hover:text-navy">
                Site content
              </Link>
            </nav>
          </div>
          <LogoutButton />
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}
