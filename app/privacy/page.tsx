import Container from "@/components/ui/Container";

export default function PrivacyPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <Container>
        <div className="py-16 max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Questa è una bozza informativa. Prima della pubblicazione commerciale, inserisci i dati completi del titolare e i dettagli definitivi.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-[var(--muted)]">
            <section>
              <h2 className="text-lg font-semibold text-[var(--text)]">Titolare del trattamento</h2>
              <p className="mt-2">
                Titolare: Solara (Italia). Contatto: federicogizzi212@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text)]">Dati trattati</h2>
              <p className="mt-2">
                Tramite il sito possiamo trattare i dati inviati nel form di contatto (nome, email, azienda, ruolo, messaggio) e dati tecnici minimi
                necessari al funzionamento del sito (log/telemetria standard della piattaforma di hosting).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text)]">Finalità</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Rispondere a richieste di demo e informazioni.</li>
                <li>Comunicazioni pre-contrattuali e follow-up.</li>
                <li>Miglioramento del sito e sicurezza (dati tecnici).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text)]">Base giuridica</h2>
              <p className="mt-2">
                Misure pre-contrattuali richieste dall’interessato e/o legittimo interesse (gestione richieste e sicurezza del servizio).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text)]">Conservazione</h2>
              <p className="mt-2">
                I dati del form vengono conservati per il tempo necessario a gestire la richiesta e l’eventuale follow-up, salvo obblighi di legge
                o richiesta di cancellazione.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--text)]">Diritti dell’interessato</h2>
              <p className="mt-2">
                Puoi richiedere accesso, rettifica, cancellazione o limitazione scrivendo a: federicogizzi212@gmail.com
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
