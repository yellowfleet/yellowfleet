import { companyInfo } from "@/content/company";

/**
 * Scaffold placeholder homepage. The full Home page (hero, vision
 * statement, featured vessel/projects, sustainability impact, CTA) is
 * built in the next pass — see Site Structure in the project handoff.
 */
export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-4 px-6 py-24 text-center bg-offwhite">
      <span className="text-sm font-medium tracking-wide uppercase text-gold">
        {companyInfo.address}
      </span>
      <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-semibold text-navy">
        {companyInfo.name}
      </h1>
      <p className="max-w-xl text-base text-navy/70">{companyInfo.tagline}</p>
      <div className="mt-6 flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-gold" />
        <span className="h-3 w-3 rounded-full bg-navy" />
        <span className="h-3 w-3 rounded-full border border-navy/20 bg-white" />
      </div>
    </main>
  );
}
