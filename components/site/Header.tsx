import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            {/* Logo (più grande e senza cornice) */}
            <div className="relative h-12 w-48 overflow-hidden">
              <Image src="/solara-logo.png" alt="Solara" fill className="object-contain" priority />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Solara</div>
              <div className="text-xs text-[var(--muted)]">Simulazione FV & Business Case — Italia</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
            <a href="/features" className="hover:text-[var(--text)]">Funzionalità</a>
            <a href="/case-studies" className="hover:text-[var(--text)]">Casi studio</a>
            <a href="/pricing" className="hover:text-[var(--text)]">Prezzi</a>
            <a href="/contact" className="hover:text-[var(--text)]">Contatti</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/pricing" variant="secondary">Vedi prezzi</Button>
            <Button href="/contact" variant="primary">Richiedi demo</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
