export default function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  // stesso stile per tutti i bottoni (premium + coerente)
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition " +
    "bg-white/10 text-white border border-[var(--border)] hover:bg-white/15 " +
    "focus:outline-none focus:ring-2 focus:ring-white/20";

  // variant lasciato per futuro, ma ora non cambia nulla
  void variant;

  return (
    <a href={href} className={base}>
      {children}
    </a>
  );
}
