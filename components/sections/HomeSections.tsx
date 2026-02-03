import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--panel2)] px-3 py-1 text-xs text-[var(--muted)]">
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              <Pill>Wizard guidato</Pill>
              <Pill>Simulazione oraria</Pill>
              <Pill>Incentivi</Pill>
              <Pill>KPI finanziari</Pill>
              <Pill>Report Excel/PDF</Pill>
              <Pill>Multi-utente</Pill>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Progetta impianti fotovoltaici e valida il business case in pochi minuti.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              Solara è pensato per il mercato italiano: simulazione energetica oraria, incentivi e analisi finanziaria in un unico flusso,
              dal dimensionamento al report pronto per cliente e investitore.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">Richiedi demo</Button>
              <Button href="/features" variant="secondary">Vedi le funzionalità</Button>
            </div>

            <p className="mt-4 text-xs text-[var(--muted)]">
              Per installatori, consulenti energetici e team finance in Italia.
            </p>
          </div>

          <Card className="p-7">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Dashboard esempio</div>
              <div className="text-xs text-[var(--muted)]">NPV · IRR · Payback</div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Card className="p-4">
                <div className="text-xs text-[var(--muted)]">Autoconsumo</div>
                <div className="mt-1 text-lg font-semibold">↑ ottimizzato</div>
                <div className="text-xs text-[var(--muted)]">calcolato sui tuoi input</div>
              </Card>
              <Card className="p-4">
                <div className="text-xs text-[var(--muted)]">Payback</div>
                <div className="mt-1 text-lg font-semibold">—</div>
                <div className="text-xs text-[var(--muted)]">calcolato sui tuoi input</div>
              </Card>
              <Card className="p-4">
                <div className="text-xs text-[var(--muted)]">NPV</div>
                <div className="mt-1 text-lg font-semibold">—</div>
                <div className="text-xs text-[var(--muted)]">calcolato sui tuoi input</div>
              </Card>
              <Card className="p-4">
                <div className="text-xs text-[var(--muted)]">IRR</div>
                <div className="mt-1 text-lg font-semibold">—</div>
                <div className="text-xs text-[var(--muted)]">calcolato sui tuoi input</div>
              </Card>
            </div>

            <div className="mt-5 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
              <div className="font-semibold text-[var(--text)]">Output</div>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Report Excel/PDF per cliente e banca</li>
                <li>Scenario base vs incentivi</li>
                <li>Cashflow e KPI tracciabili</li>
              </ul>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export function WhoItsFor() {
  const items = [
    {
      title: "Installatori & EPC",
      text: "Preventivi più solidi, confronto scenari e output chiari per cliente e banca.",
    },
    {
      title: "Consulenti energetici",
      text: "Simulazioni tracciabili e replicabili, con assunzioni esplicite e report pronti.",
    },
    {
      title: "Investitori & Finance",
      text: "KPI finanziari, cashflow e sensibilità: decisioni rapide con numeri verificabili.",
    },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-[var(--panel2)] py-16">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">Per chi è Solara</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Un flusso unico che unisce simulazione energetica e valutazione economica.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((i) => (
            <Card key={i.title}>
              <div className="text-sm font-semibold">{i.title}</div>
              <p className="mt-2 text-sm text-[var(--muted)]">{i.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Inserisci i dati",
      text: "Consumi, potenza, vincoli, prezzi energia e ipotesi economiche.",
    },
    {
      n: "2",
      title: "Simula e confronta",
      text: "Simulazione oraria e scenari (autoconsumo, immissione, incentivi).",
    },
    {
      n: "3",
      title: "Genera il report",
      text: "Output pronto per cliente/investitore: KPI, cashflow, allegati.",
    },
  ];

  return (
    <section className="py-16">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">Come funziona</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Da input a report in pochi minuti, senza fogli Excel “fragili”.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.n}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel2)] text-sm font-semibold">
                  {s.n}
                </div>
                <div className="text-sm font-semibold">{s.title}</div>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)]">{s.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WhatYouGet() {
  const bullets = [
    "KPI: NPV, IRR, Payback (e metriche aggiuntive su richiesta)",
    "Simulazione energetica oraria e breakdown dei flussi",
    "Scenario base vs incentivi con assunzioni esplicite",
    "Report Excel/PDF pronto per cliente, banca o investitore",
    "Struttura ripetibile: confronti e revisioni tracciabili",
  ];

  return (
    <section className="border-t border-[var(--border)] bg-[var(--panel2)] py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Cosa ottieni</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Output “bancabile” e comunicabile: numeri chiari, ipotesi trasparenti, report pronti.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--text)]/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/pricing" variant="secondary">Vedi prezzi</Button>
            </div>
          </div>

          <Card>
            <div className="text-sm font-semibold">Esempi di utilizzo</div>
            <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel2)] p-4">
                <div className="font-semibold text-[var(--text)]">Offerta commerciale</div>
                <div className="mt-1">Scenario conservativo + scenario ottimizzato con note sulle ipotesi.</div>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel2)] p-4">
                <div className="font-semibold text-[var(--text)]">Due diligence</div>
                <div className="mt-1">KPI e cashflow esportabili, confronto prezzi energia e sensibilità.</div>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel2)] p-4">
                <div className="font-semibold text-[var(--text)]">Portfolio</div>
                <div className="mt-1">Standardizzazione dei report e comparabilità tra progetti.</div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export function PricingTeaser() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">Prezzi</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Piani pensati per professionisti. Enterprise su richiesta.
            </p>
          </div>
          <Button href="/pricing" variant="primary">Vai ai prezzi</Button>
        </div>
      </Container>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    {
      q: "Quanto dura una demo?",
      a: "Tipicamente 20–30 minuti: analizziamo un caso reale e mostriamo l’output dei report.",
    },
    {
      q: "Che dati servono per iniziare?",
      a: "Puoi partire da consumi stimati o dati di bolletta. Se hai curve orarie, ancora meglio.",
    },
    {
      q: "Posso esportare i risultati?",
      a: "Sì: report Excel/PDF per cliente e investitore, con ipotesi e KPI riepilogati.",
    },
    {
      q: "È adatto anche a investitori/portfolio?",
      a: "Sì: Solara è pensato anche per confrontare scenari e standardizzare l’analisi su più progetti.",
    },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-[var(--panel2)] py-16">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">Domande frequenti</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Se vuoi, possiamo fare una demo su un tuo caso reale.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <Card key={f.q}>
              <div className="text-sm font-semibold">{f.q}</div>
              <p className="mt-2 text-sm text-[var(--muted)]">{f.a}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/contact" variant="primary">Richiedi demo</Button>
        </div>
      </Container>
    </section>
  );
}
