import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download } from "lucide-react";
import { getSection, SECTIONS } from "@/lib/content";
import { VideoPlayer } from "@/components/VideoPlayer";
import { AudioReader } from "@/components/AudioReader";
import { Checklist } from "@/components/Checklist";
import { FeedbackBar } from "@/components/FeedbackBar";
import { useAccessibility } from "@/lib/accessibility";

// Icon imports
import cerebroIcon from "@/icons/cerebro.png";
import medicamentoIcon from "@/icons/medicamento.png";
import movimentacaoIcon from "@/icons/movimentacao.png";
import alimentacaoIcon from "@/icons/alimentacao.png";
import atencaoIcon from "@/icons/atencao.png";
import assistenciaIcon from "@/icons/assistencia.png";

const ICON_MAP: Record<string, string> = {
  cerebro: cerebroIcon,
  medicamento: medicamentoIcon,
  movimentacao: movimentacaoIcon,
  alimentacao: alimentacaoIcon,
  atencao: atencaoIcon,
  assistencia: assistenciaIcon,
};

import cerebroIconDark from "@/icons/cerebro-Dark.png";
import medicamentoIconDark from "@/icons/medicamento-Dark.png";
import movimentacaoIconDark from "@/icons/movimentacao-Dark.png";
import alimentacaoIconDark from "@/icons/alimentacao-Dark.png";
import atencaoIconDark from "@/icons/atencao-Dark.png";
import assistenciaIconDark from "@/icons/assistencia-Dark.png";

const ICON_MAP_DARK: Record<string, string> = {
  cerebro: cerebroIconDark,
  medicamento: medicamentoIconDark,
  movimentacao: movimentacaoIconDark,
  alimentacao: alimentacaoIconDark,
  atencao: atencaoIconDark,
  assistencia: assistenciaIconDark,
};

export const Route = createFileRoute("/conteudo/$slug")({
  loader: ({ params }) => {
    const section = getSection(params.slug);
    if (!section) throw notFound();
    return { section };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.section.title} — AVC Conecta` },
          { name: "description", content: loaderData.section.short },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="rounded-2xl border-2 border-border bg-card p-6 text-center">
      <h1 className="text-xl font-bold">Conteúdo não encontrado</h1>
      <Link to="/" className="mt-3 inline-block font-semibold text-primary">
        Voltar para o início
      </Link>
    </div>
  ),
  component: Conteudo,
});

function Conteudo() {
  const { section } = Route.useLoaderData();
  const { highContrast } = useAccessibility();
  const iconSrc = highContrast ? ICON_MAP_DARK[section.icon] : ICON_MAP[section.icon];

  return (
    <article className="space-y-5">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Voltar
      </Link>

      <header className="flex items-center gap-4 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary-soft to-card p-5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-card shadow-sm">
          <img src={iconSrc} alt="" className="h-10 w-10 object-contain" aria-hidden />
        </div>
        <div>
          <h1 className="text-2xl font-bold leading-tight text-primary">{section.title}</h1>
          <p className="text-sm text-muted-foreground">{section.short}</p>
        </div>
      </header>

      <VideoPlayer src={section.videoUrl} title={section.title} />

      <section className="rounded-2xl border-2 border-border bg-card p-5">
        <h2 className="text-lg font-semibold">Entenda</h2>
        <p className="mt-2 text-base leading-relaxed text-foreground whitespace-pre-line">
          {section.body}
        </p>
      </section>

      <AudioReader text={`${section.title}. ${section.body}`} label={section.slug} />

      <section>
        <h2 className="mb-3 text-lg font-semibold">Checklist diário</h2>
        <Checklist id={section.slug} items={section.checklist} />
      </section>

      <FeedbackBar topic={section.slug} />

      {section.slug === "medicacoes" && (
        <a
        href="/Tabelas_de_medicacoes_saude.pdf"
        download
        className="flex items-center justify-center gap-2 rounded-2xl border-2 border-primary bg-primary-soft px-5 py-4 text-base font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
        <Download className="h-5 w-5" />
          Baixar tabelas para apoio (PDF)
        </a>
      )}

      <nav aria-label="Outras seções" className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Continue lendo
        </h2>
        <div className="flex flex-wrap gap-2">
          {SECTIONS.filter((s) => s.slug !== section.slug).map((s) => (
            <Link
              key={s.slug}
              to="/conteudo/$slug"
              params={{ slug: s.slug }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              <img src={highContrast ? ICON_MAP_DARK[s.icon] : ICON_MAP[s.icon]} alt="" className="h-4 w-4 object-contain" aria-hidden />
              {s.title}
            </Link>
          ))}
        </div>
      </nav>
    </article>
  );
}