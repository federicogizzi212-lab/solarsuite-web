import Container from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="min-h-[70vh] bg-[var(--bg)] text-[var(--text)]">
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-semibold tracking-tight">Contatti</h1>
          <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
            Scrivici o chiamaci: rispondiamo rapidamente e possiamo fissare una demo sul tuo caso reale.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="p-8">
              <div className="text-sm font-semibold">Email</div>
              <p className="mt-2 text-sm text-[var(--muted)]">
                <a className="underline decoration-white/20 hover:decoration-white/50" href="mailto:federicogizzi212@gmail.com">
                  federicogizzi212@gmail.com
                </a>
              </p>

              <div className="mt-6 text-sm font-semibold">Telefono</div>
              <p className="mt-2 text-sm text-[var(--muted)]">
                <a className="underline decoration-white/20 hover:decoration-white/50" href="tel:+39XXXXXXXXXX">
                  +39 XXXXXXXXXX
                </a>
              </p>

              <div className="mt-6 text-sm font-semibold">WhatsApp</div>
              <p className="mt-2 text-sm text-[var(--muted)]">
                <a className="underline decoration-white/20 hover:decoration-white/50" href="https://wa.me/39XXXXXXXXXX">
                  Chat su WhatsApp
                </a>
              </p>

              <div className="mt-8">
                <Button href="/demo" variant="primary">Richiedi demo</Button>
              </div>

              <p className="mt-4 text-xs text-[var(--muted)]">
                (Sostituisci XXXXXXXXXX con il tuo numero.)
              </p>
            </Card>

            <Card className="p-8">
              <div className="text-sm font-semibold">Cosa includere nel messaggio</div>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                <li>• Taglia impianto e località</li>
                <li>• Profilo consumi (anche stimato)</li>
                <li>• Obiettivo: autoconsumo / ROI / riduzione bolletta</li>
                <li>• Vincoli (tetto/area/orientamento) e incentivi</li>
              </ul>

              <div className="mt-8">
                <Button href="/features" variant="secondary">Vedi funzionalità</Button>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}
