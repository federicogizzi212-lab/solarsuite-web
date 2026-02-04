import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <div>© {new Date().getFullYear()} Solara</div>

          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Termini</a>
            <a href="/contact" className="hover:text-white">Contatti</a>
          </div>

          <a href="mailto:federicogizzi212@gmail.com" className="hover:text-white">
            federicogizzi212@gmail.com
          </a>
        </div>
      </Container>
    </footer>
  );
}
