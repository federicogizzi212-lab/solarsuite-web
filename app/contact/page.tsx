import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export default function ContactPage() {
  return (
    <main>
      <Container>
        <div className="py-20 max-w-3xl">
          <h1 className="text-4xl font-semibold">Contatti</h1>
          <p className="mt-4 text-[var(--muted)]">
            Scrivici per informazioni commerciali o partnership.
          </p>

          <div className="mt-10 grid gap-6">

            <Card>
              <div className="text-sm font-semibold">Email</div>
              <a
                href="mailto:info@solara.it"
                className="mt-2 block text-lg underline"
              >
                info@solara.it
              </a>
            </Card>

            <Card>
              <div className="text-sm font-semibold">Vendite</div>
              <a
                href="mailto:sales@solara.it"
                className="mt-2 block text-lg underline"
              >
                sales@solara.it
              </a>
            </Card>

            <Card>
              <div className="text-sm font-semibold">Telefono</div>
              <div className="mt-2 text-lg">+39 333 0000000</div>
            </Card>

          </div>
        </div>
      </Container>
    </main>
  );
}
