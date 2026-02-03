"use client";

import Container from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");
    const role = String(form.get("role") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent("Richiesta demo Solara");
    const body = encodeURIComponent(
      [
        "Ciao, vorrei richiedere una demo di Solara.",
        "",
        `Nome: ${name}`,
        `Email: ${email}`,
        `Azienda: ${company}`,
        `Ruolo: ${role}`,
        "",
        "Messaggio:",
        message,
        "",
        "(Inviato dal sito Solara)",
      ].join("\n")
    );

    // 👉 Cambia questa email con la tua (per ora)
    window.location.href = `mailto:federicogizzi212@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-semibold tracking-tight">Richiedi demo</h1>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Compila il modulo: si aprirà la tua app email con il testo già pronto da inviare.
            (È la soluzione più semplice finché sei in fase demo.)
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="bg-neutral-50">
              <div className="text-sm font-semibold">Modulo</div>

              <form className="mt-6 grid gap-3" onSubmit={onSubmit}>
                <input name="name" className="rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Nome e cognome" />
                <input required name="email" type="email" className="rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Email *" />
                <input name="company" className="rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Azienda (opzionale)" />
                <select name="role" className="rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900" defaultValue="">
                  <option value="" disabled>Seleziona ruolo</option>
                  <option>Installatore / EPC</option>
                  <option>Consulente / Energy manager</option>
                  <option>Investitore / CFO</option>
                  <option>Altro</option>
                </select>
                <textarea name="message" className="min-h-[120px] rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Descrivi il tuo caso (taglia impianto, obiettivo, vincoli)" />
                <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
                  Apri email e invia
                </button>

                {sent && (
                  <p className="text-sm text-neutral-700">✅ Perfetto. Se l’email non si è aperta, riprova o scrivici direttamente.</p>
                )}

                <p className="text-xs text-neutral-500">
                  I dati vengono usati solo per rispondere alla richiesta demo.
                </p>
              </form>
            </Card>

            <Card>
              <div className="text-sm font-semibold">Cosa serve per una demo efficace</div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li>• Consumo annuo o profilo (anche stimato)</li>
                <li>• Località e vincoli (tetto/area/orientamento)</li>
                <li>• Obiettivo: autoconsumo, ROI, riduzione bolletta</li>
                <li>• Incentivi o finanziamento (se richiesti)</li>
              </ul>
              <p className="mt-6 text-xs text-neutral-500">
                Quando comprerai un dominio e metterai l’app online, il form potrà diventare automatico (email + CRM).
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}
