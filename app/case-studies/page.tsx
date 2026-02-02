import Container from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function CaseStudiesPage() {
  const items = [
    { title: "Industriale — Autoconsumo e peak shaving", desc: "Analisi oraria, dimensionamento FV+accumulo, KPI e report consegnabile." },
    { title: "Commerciale — Business case con incentivi", desc: "Confronto scenario base vs incentivi, cashflow e KPI per decisione." },
    { title: "Investitore — Due diligence rapida", desc: "Ipotesi tracciabili, NPV/IRR/payback, export per banca/investitore." },
  ];

  return (
    <main className="bg-white">
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-semibold tracking-tight">Casi studio</h1>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Esempi (placeholder). Quando vuoi, li sostituiamo con casi reali anonimizzati.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {items.map((x) => (
              <Card key={x.title} className="bg-neutral-50">
                <div className="text-sm font-semibold">{x.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{x.desc}</p>
                <div className="mt-4 text-xs text-neutral-500">
                  Output: report Excel/PDF · KPI finanziari · scenario comparativo
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/contact" variant="primary">Richiedi demo</Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
