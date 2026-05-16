import { Link } from "@tanstack/react-router";
import { Accessibility } from "lucide-react";
import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="AVC Conecta — início">
          <img src={logo} alt="" className="h-12 w-auto" />
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-primary sm:text-xl">
              AVC <span className="text-foreground">Conecta</span>
            </span>
            <span className="block text-xs text-muted-foreground sm:text-sm">
              Informação, cuidado e recuperação
            </span>
          </span>
        </Link>
        <Link
          to="/sobre"
          className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
          aria-label="Acessibilidade e sobre o projeto"
        >
          <Accessibility className="h-5 w-5" />
          <span>Acessibilidade</span>
        </Link>
      </div>
    </header>
  );
}
