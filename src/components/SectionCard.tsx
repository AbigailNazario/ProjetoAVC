import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { Section } from "@/lib/content";

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

export function SectionCard({ section }: { section: Section }) {
  const accent =
    section.accent === "secondary"
      ? "bg-secondary-soft border-secondary/40 hover:border-secondary/70"
      : "bg-primary-soft border-primary/30 hover:border-primary/60";

  const iconSrc = ICON_MAP[section.icon];

  return (
    <Link
      to="/conteudo/$slug"
      params={{ slug: section.slug }}
      className={`group flex items-center gap-4 rounded-2xl border-2 ${accent} p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
      aria-label={`Abrir seção ${section.title}`}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-card shadow-sm">
        <img src={iconSrc} alt="" className="h-9 w-9 object-contain" aria-hidden />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
        <p className="text-sm text-muted-foreground leading-snug">{section.short}</p>
      </div>
      <ChevronRight className="h-6 w-6 text-primary shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );
}
