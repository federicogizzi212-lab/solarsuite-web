import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-neutral-600">© {new Date().getFullYear()} SolarSuite</div>
          <div className="flex flex-wrap gap-6 text-sm text-neutral-600">
            <a href="/privacy" className="hover:text-neutral-900">Privacy</a>
            <a href="/terms" className="hover:text-neutral-900">Termini</a>
            <a href="/contact" className="hover:text-neutral-900">Richiedi demo</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
