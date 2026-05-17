import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { AccessibilityPanel } from "@/components/AccessibilityBar";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="AVC Conecta — início">
          <img src={logo} alt="" className="h-12 w-auto" />
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-primary sm:text-xl">
              AVC Conecta
            </span>
            <span className="block text-xs text-muted-foreground sm:text-sm">
              Informação, cuidado e recuperação
            </span>
          </span>
        </Link>
        <AccessibilityPanel />
      </div>
    </header>
  );
}