export default function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-900"
      : "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus:ring-neutral-300";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
