import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <Container>
        <div className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Solara
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-[var(--muted)]">
            <a href="/privacy" className="hover:text-[var(--text)]">Privacy</a>
            <a href="/terms" className="hover:text-[var(--text)]">Termini</a>
            <a href="/contact" className="hover:text-[var(--text)]">Contatti</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
