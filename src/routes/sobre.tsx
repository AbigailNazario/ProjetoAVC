import { createFileRoute, Link } from "@tanstack/react-router";
import { Info, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — AVC Conecta" },
      {
        name: "description",
        content: "Conheça o projeto AVC Conecta, seu objetivo social e aviso educativo.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <article className="space-y-5">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Voltar
      </Link>
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Sobre o AVC Conecta</h1>
        <p className="text-muted-foreground">
          Plataforma educativa criada para apoiar pacientes e acompanhantes após a
          alta hospitalar por Acidente Vascular Cerebral.
        </p>
      </header>

      <section className="rounded-2xl border-2 border-border bg-card p-5">
        <h2 className="text-lg font-semibold">Objetivo social</h2>
        <p className="mt-2 text-base leading-relaxed text-foreground">
          Reduzir reinternações e fortalecer a continuidade do cuidado por meio de
          informação clara, acessível e humanizada. O acesso ocorre por QR Code
          impresso em folhetos distribuídos pelo hospital.
        </p>
      </section>

      <section className="rounded-2xl border-2 border-border bg-card p-5">
        <h2 className="text-lg font-semibold">Para quem é?</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-base">
          <li>Pacientes em recuperação após AVC</li>
          <li>Familiares e cuidadores</li>
          <li>Equipes de saúde em educação ao paciente</li>
        </ul>
      </section>

      <aside
        role="note"
        className="flex items-start gap-3 rounded-2xl border-2 border-primary/30 bg-primary-soft p-5"
      >
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <p className="text-sm font-medium text-foreground">
          Este conteúdo possui caráter educativo e não substitui orientação médica.
          Em caso de dúvida ou emergência, procure a equipe de saúde ou ligue 192.
        </p>
      </aside>
    </article>
  );
}