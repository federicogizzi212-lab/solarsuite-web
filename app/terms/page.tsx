import Container from "@/components/ui/Container";

export default function TermsPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <Container>
        <div className="py-16 max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight">Termini e Condizioni</h1>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Bozza. Da finalizzare prima della vendita (pagamenti, SLA, responsabilità, ecc.).
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-[var(--muted)]">
            <section>
              <h2 className="text-lg font-semibold text-[var(--text)]">Servizio</h2>
              <p className="mt-2">
                Solara è una piattaforma software per supportare simulazioni FV e valutazioni economiche. I risultati dipendono dagli input e dalle
                ipotesi inserite dall’utente.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text)]">Uso consentito</h2>
              <p className="mt-2">
                È vietato l’uso illecito del servizio, la violazione di diritti di terzi e l’accesso non autorizzato a sistemi o dati.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text)]">Limitazione di responsabilità</h2>
              <p className="mt-2">
                Le simulazioni non costituiscono consulenza finanziaria o legale. Verifica sempre i risultati con professionisti qualificati e con
                dati tecnici aggiornati.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text)]">Contatti</h2>
              <p className="mt-2">Per richieste: federicogizzi212@gmail.com</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
