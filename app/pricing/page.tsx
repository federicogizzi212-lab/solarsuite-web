import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

function Card({
  name, price, note, items, highlighted,
}: { name: string; price: string; note: string; items: string[]; highlighted?: boolean; }) {
  return (
    <div className={[
      "rounded-3xl border p-6 shadow-sm",
      highlighted 
        ? "border-neutral-900 bg-neutral-900 text-white" 
        : "border-[var(--border)] bg-[var(--panel)] text-[var(--text)]"
    ].join(" ")}>
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{name}</div>
        <span className={[
          "rounded-full px-3 py-1 text-xs font-medium",
          highlighted 
            ? "bg-white/10 text-white"
            : "bg-[var(--panel2)] text-[var(--muted)] border border-[var(--border)]"
        ].join(" ")}>
          {note}
        </span>
      </div>
      <div className="mt-4 text-3xl font-semibold">{price}</div>
      <ul className={highlighted ? "mt-6 space-y-2 text-sm text-white/90" : "mt-6 space-y-2 text-sm text-neutral-700"}>
        {items.map((x) => <li key={x}>• {x}</li>)}
      </ul>
      <div className="mt-8">
        <a href="/contact" className={[
          "inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition",
          highlighted
            ? "bg-white text-neutral-900 hover:bg-neutral-100"
            : "bg-white/10 text-white hover:bg-white/15 border border-[var(--border)]"
        ].join(" ")}>
          Richiedi demo
        </a>
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
          <p className="mt-3 max-w-2xl text-neutral-600">
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
            <Button href="/contact" variant="primary">Richiedi demo</Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
