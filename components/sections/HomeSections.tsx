import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>Wizard guidato</Badge>
              <Badge>Simulazione oraria</Badge>
              <Badge>Incentivi</Badge>
              <Badge>KPI finanziari</Badge>
              <Badge>Report Excel/PDF</Badge>
              <Badge>Multi-utente</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Progetta impianti fotovoltaici e valida il business case in pochi minuti.
            </h1>

            <p className="mt-4 text-lg text-neutral-600">
              SolarSuite è pensato per il mercato italiano: simulazione energetica oraria, incentivi e analisi finanziaria in un unico flusso,
              dal dimensionamento al report pronto per cliente e investitore.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary">Richiedi demo</Button>
              <Button href="/features" variant="secondary">Vedi le funzionalità</Button>
            </div>

            <p className="mt-4 text-sm text-neutral-500">
              Per installatori, consulenti energetici e team finance in Italia.
            </p>
          </div>

          <div className="relative">
            <Card className="bg-neutral-50">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Dashboard esempio</div>
                <Badge>NPV · IRR · Payback</Badge>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Stat title="Autoconsumo" value="↑ ottimizzato" />
                <Stat title="Payback" value="—" />
                <Stat title="NPV" value="—" />
                <Stat title="IRR" value="—" />
              </div>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="text-xs font-semibold text-neutral-700">Output</div>
                <ul className="mt-2 space-y-2 text-sm text-neutral-600">
                  <li>• Report Excel/PDF per cliente e banca</li>
                  <li>• Scenario base vs incentivi</li>
                  <li>• Cashflow e KPI tracciabili</li>
                </ul>
              </div>

              <p className="mt-4 text-xs text-neutral-500">
                (Puoi mettere screenshot reali dell’app quando vuoi.)
              </p>
            </Card>

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-neutral-100 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-neutral-100 blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4">
      <div className="text-xs font-semibold text-neutral-700">{title}</div>
      <div className="mt-2 text-lg font-semibold">{value}</div>
      <div className="mt-1 text-xs text-neutral-500">calcolato sui tuoi input</div>
    </div>
  );
}

export function PricingTeaser() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Prezzi</h2>
          <p className="mt-2 text-neutral-600">
            Piani B2B per professionisti e team in Italia.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <PriceCard highlighted name="PRO" price="Da €149 / mese" note="Consigliato" items={[
              "Progetti illimitati",
              "Tecnico + Investitore",
              "Report completi",
              "Incentivi",
              "3 utenti inclusi",
            ]} />
            <PriceCard name="BUSINESS" price="€499 / mese" note="Per team" items={[
              "Tutto PRO",
              "Benchmark avanzati",
              "White-label report",
              "Supporto prioritario",
              "Onboarding",
            ]} />
            <PriceCard name="ENTERPRISE" price="Su richiesta" note="Custom" items={[
              "SSO / integrazioni",
              "Hosting dedicato",
              "SLA",
              "Regole custom",
              "Supporto premium",
            ]} />
          </div>

          <div className="mt-8 flex gap-3">
            <Button href="/pricing" variant="secondary">Dettaglio prezzi</Button>
            <Button href="/contact" variant="primary">Richiedi demo</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PriceCard({
  name, price, note, items, highlighted,
}: { name: string; price: string; note: string; items: string[]; highlighted?: boolean; }) {
  return (
    <div className={[
      "rounded-3xl border p-6 shadow-sm",
      highlighted ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 bg-white",
    ].join(" ")}>
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{name}</div>
        <span className={[
          "rounded-full px-3 py-1 text-xs font-medium",
          highlighted ? "bg-white/10 text-white" : "bg-neutral-50 text-neutral-700 border border-neutral-200",
        ].join(" ")}>
          {note}
        </span>
      </div>
      <div className="mt-4 text-3xl font-semibold">{price}</div>
      <ul className={highlighted ? "mt-6 space-y-2 text-sm text-white/90" : "mt-6 space-y-2 text-sm text-neutral-700"}>
        {items.map((x) => <li key={x}>• {x}</li>)}
      </ul>
    </div>
  );
}
