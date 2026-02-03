export default function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="
        inline-flex items-center justify-center
        rounded-xl px-5 py-3
        text-sm font-semibold
        bg-white text-black
        hover:bg-neutral-200
        transition
      "
    >
      {children}
    </a>
  );
}
