import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { trackEvent } from "@/lib/accessibility";

export const Route = createFileRoute("/emergencia")({
  head: () => ({
    meta: [
      { title: "Emergência — Suspeita de novo AVC | AVC Conecta" },
      {
        name: "description",
        content: "Sinais de alerta de AVC e instruções rápidas. Em emergência, ligue 192.",
      },
    ],
  }),
  component: Emergencia,
});

const sinais = [
  { letra: "S", titulo: "Sorriso", desc: "Peça para sorrir. A boca está torta?" },
  { letra: "A", titulo: "Abraço", desc: "Levante os dois braços. Um cai?" },
  { letra: "M", titulo: "Mensagem", desc: "Repita uma frase. A fala está enrolada?" },
  { letra: "U", titulo: "Urgente", desc: "Qualquer sinal: ligue 192 imediatamente." },
];

function Emergencia() {
  return (
    <div className="space-y-5">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Voltar
      </Link>

      <div className="flex items-start gap-3 rounded-2xl border-2 border-destructive/40 bg-destructive/10 p-5">
        <AlertTriangle className="mt-0.5 h-7 w-7 shrink-0 text-destructive" />
        <div>
          <h1 className="text-xl font-bold text-destructive">Suspeita de novo AVC</h1>
          <p className="mt-1 text-sm text-foreground">
            Tempo é cérebro. Identifique os sinais e busque ajuda imediatamente.
          </p>
        </div>
      </div>

      <section aria-label="Sinais de alerta SAMU" className="grid grid-cols-1 gap-3">
        {sinais.map((s) => (
          <div
            key={s.letra}
            className="flex items-center gap-4 rounded-2xl border-2 border-border bg-card p-4"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-destructive text-2xl font-bold text-destructive-foreground">
              {s.letra}
            </span>
            <div>
              <h2 className="text-base font-semibold">{s.titulo}</h2>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border-2 border-border bg-card p-5">
        <h2 className="text-lg font-semibold">Enquanto espera o socorro</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-base">
          <li>Mantenha a pessoa deitada de lado, com cabeça apoiada</li>
          <li>Não ofereça comida, água ou medicamentos</li>
          <li>Anote o horário em que os sintomas começaram</li>
          <li>Afrouxe roupas apertadas e mantenha a calma</li>
        </ul>
      </section>

      <a
        href="tel:192"
        onClick={() => trackEvent("call_192")}
        className="flex items-center justify-center gap-3 rounded-2xl bg-destructive px-5 py-5 text-lg font-bold text-destructive-foreground shadow-lg ring-4 ring-destructive/20 transition-transform hover:scale-[1.01] active:scale-[0.99]"
      >
        <Phone className="h-6 w-6" /> Ligar para 192
      </a>
    </div>
  );
}
