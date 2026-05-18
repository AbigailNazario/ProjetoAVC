import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { SECTIONS } from "@/lib/content";
import { SectionCard } from "@/components/SectionCard";
import { useAccessibility } from "@/lib/accessibility";
import heroImg from "@/assets/hero.png";
import assistenciaIcon from "@/icons/assistencia.png";
import assistenciaIconDark from "@/icons/assistencia-Dark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AVC Conecta — Informação, cuidado e recuperação" },
      {
        name: "description",
        content:
          "Conteúdos educativos, checklists e sinais de alerta para pacientes e acompanhantes após alta hospitalar por AVC.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { highContrast } = useAccessibility();

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary-soft via-card to-secondary-soft shadow-sm">
        <div className="grid items-center gap-4 p-6 sm:grid-cols-[1.1fr_1fr] sm:gap-6 sm:p-8">
          <div>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              Bem-vindo ao<br />
              <span className="text-primary">AVC Conecta</span>
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Orientações simples e acessíveis para seguir o cuidado em casa após a alta hospitalar.
            </p>
            <div className="mt-5 flex items-start gap-2 rounded-xl bg-card/80 p-3 text-sm text-foreground shadow-sm">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <strong className="font-semibold">Conteúdo educativo.</strong>
                <br className="sm:hidden" /> Não substitui orientação médica.
              </span>
            </div>
          </div>
          <img
            src={heroImg}
            alt="Cuidadora apoiando um paciente idoso em casa"
            className="mx-auto w-full max-w-sm rounded-2xl"
          />
        </div>
      </section>

      {/* Section cards */}
      <section aria-labelledby="secoes">
        <h2 id="secoes" className="mb-3 px-1 text-sm font-bold uppercase tracking-wider text-primary">
          Escolha um tema
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {SECTIONS.map((s) => (
            <SectionCard key={s.slug} section={s} />
          ))}
        </div>
      </section>

      {/* Em caso de dúvida */}
      <section className="rounded-2xl border-2 border-border bg-card p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
            <img
              src={highContrast ? assistenciaIconDark : assistenciaIcon}
              alt=""
              className="h-9 w-9 object-contain"
              aria-hidden
            />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold">Em caso de dúvida</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Procure sempre a equipe de saúde que acompanha o paciente.{" "}
              Em emergência, ligue para o SAMU 192.
            </p>
          </div>
          <Link
            to="/sobre"
            className="shrink-0 text-sm font-semibold text-primary underline-offset-4 hover:underline whitespace-nowrap"
          >
            Sobre o projeto →
          </Link>
        </div>
      </section>
    </div>
  );
}