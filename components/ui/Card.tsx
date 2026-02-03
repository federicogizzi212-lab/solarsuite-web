export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-sm shadow-black/20",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
