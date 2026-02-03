export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/10 px-3 py-1 text-xs font-medium text-white/85">
      {children}
    </span>
  );
}
