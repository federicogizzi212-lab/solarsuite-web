import Container from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function FeaturesPage() {
  const blocks = [
    { title: "🧙 Wizard guidato", desc: "Setup rapido per arrivare subito a una proposta." },
    { title: "⚙️ Modalità Tecnico", desc: "Parametri avanzati e controllo completo." },
    { title: "💼 Modalità Investitore", desc: "NPV, IRR, payback, cashflow e scenari." },
    { title: "📊 Portfolio & Benchmark", desc: "Confronta progetti e risultati nel tempo." },
  ];

  return (
    <main className="bg-white">
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-semibold tracking-tight">Funzionalità</h1>
          <p className="mt-3 max-w-2xl text-neutral-600">
            SolarSuite è progettato per professionisti in Italia: simulazione, incentivi e finanza in un flusso unico.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {blocks.map((b) => (
              <Card key={b.title}>
                <div className="text-sm font-semibold">{b.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{b.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex gap-3">
            <Button href="/contact" variant="primary">Richiedi demo</Button>
            <Button href="/pricing" variant="secondary">Vedi prezzi</Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
