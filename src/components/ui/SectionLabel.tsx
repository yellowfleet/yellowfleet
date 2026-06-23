type SectionLabelProps = {
  children: React.ReactNode;
  tone?: "gold" | "navy";
};

export function SectionLabel({ children, tone = "gold" }: SectionLabelProps) {
  const color = tone === "gold" ? "text-gold" : "text-navy/50";
  return (
    <div className="flex items-center gap-3">
      <span className={`h-px w-8 ${tone === "gold" ? "bg-gold" : "bg-navy/30"}`} />
      <span
        className={`text-xs font-semibold uppercase tracking-[] ${color}`}
      >
        {children}
      </span>
    </div>
  );
}
