import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

function Card({
  name, price, note, items, highlighted,
}: { name: string; price: string; note: string; items: string[]; highlighted?: boolean; }) {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{name}</div>
        <span className="rounded-full border border-[var(--border)] bg-[var(--panel2)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
          {note}
        </span>
      </div>
      <div className="mt-4 text-3xl font-semibold">{price}</div>
      <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
        {items.map((x) => <li key={x}>• {x}</li>)}
      </ul>
      <div className="mt-8">
        <Button href="/demo" variant="primary">Richiedi demo</Button>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-semibold tracking-tight">Prezzi</h1>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Piani B2B per professionisti e team in Italia.
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Card highlighted name="PRO" price="Da €149 / mese" note="Consigliato" items={[
              "Progetti illimitati", "Tecnico + Investitore", "Report completi", "Incentivi", "3 utenti inclusi",
            ]} />
            <Card name="BUSINESS" price="€499 / mese" note="Per team" items={[
              "Tutto PRO", "Benchmark avanzati", "White-label report", "Supporto prioritario", "Onboarding",
            ]} />
            <Card name="ENTERPRISE" price="Su richiesta" note="Custom" items={[
              "SSO / integrazioni", "Hosting dedicato", "SLA", "Regole custom", "Supporto premium",
            ]} />
          </div>

          <div className="mt-10">
            <Button href="/demo" variant="primary">Richiedi demo</Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
