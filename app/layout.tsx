import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Solara — Simulazione FV & Business Case (Italia)",
  description:
    "Solara è una piattaforma professionale per il mercato italiano: simulazione energetica oraria, incentivi e KPI finanziari per impianti fotovoltaici. Report pronti per cliente e investitore.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
