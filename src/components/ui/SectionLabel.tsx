type SectionLabelProps = {
  children: React.ReactNode;
  tone?: "gold" | "navy";
};

export function SectionLabel({ children, tone = "gold" }: SectionLabelProps) {
  const color = tone === "gold" ? "text-gold" : "text-navy/50";
  return (
    <div className="flex items-center gap-3">
      <span className={`${tone === "gold" ? "bg-gold" : "bg-navy/20"}`} />
      <span className={`text-s font-semibold uppercase tracking-normal ${color}`}>
        {children}
      </span>
    </div>
  );
}