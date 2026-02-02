import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="relative h-14 w-44 overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <Image
                src="/solara_logo.png"
                alt="Solara logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Solara</div>
              <div className="text-xs text-neutral-500">Simulazione FV & Business Case — Italia</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
            <a href="/features" className="hover:text-neutral-900">Funzionalità</a>
            <a href="/case-studies" className="hover:text-neutral-900">Casi studio</a>
            <a href="/pricing" className="hover:text-neutral-900">Prezzi</a>
            <a href="/contact" className="hover:text-neutral-900">Contatti</a>
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
