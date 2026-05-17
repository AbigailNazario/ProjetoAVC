import { useState, useRef, useEffect } from "react";
import { Accessibility, Type, Minus, Plus, Contrast, X } from "lucide-react";
import { useAccessibility } from "@/lib/accessibility";

export function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const { fontScale, setFontScale, highContrast, toggleHighContrast } = useAccessibility();

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Opções de acessibilidade"
        className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Accessibility className="h-5 w-5" />
        <span>Acessibilidade</span>
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Painel de acessibilidade"
          className="absolute right-0 top-full z-50 mt-2 w-72 rounded-2xl border border-border bg-card p-4 shadow-xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-bold text-foreground">Acessibilidade</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar painel"
              className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mb-4">
            <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Type className="h-3.5 w-3.5" />
              Tamanho do texto
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFontScale(Math.round((fontScale - 0.1) * 10) / 10)}
                aria-label="Diminuir fonte"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground hover:bg-muted"
              >
              <Minus className="h-4 w-4" />
              </button>

              <button
                onClick={() => setFontScale(Math.round((fontScale + 0.1) * 10) / 10)}
                aria-label="Aumentar fonte"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground hover:bg-muted"
                >
                <Plus className="h-4 w-4" /></button>
              <button
                onClick={() => setFontScale(1)}
                aria-label="Restaurar tamanho padrão"
                className="rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted"
              >
                Padrão
              </button>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Contrast className="h-3.5 w-3.5" />
              Contraste
            </div>
            <button
              onClick={toggleHighContrast}
              aria-pressed={highContrast}
              className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                highContrast
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:bg-muted"
              }`}
            >
              <span>Alto contraste</span>
              <span
                className={`flex h-5 w-9 items-center rounded-full px-0.5 transition-colors ${
                  highContrast ? "bg-primary-foreground/30" : "bg-muted"
                }`}
              >
                <span
                  className={`h-4 w-4 rounded-full transition-transform ${
                    highContrast
                      ? "translate-x-4 bg-primary-foreground"
                      : "translate-x-0 bg-muted-foreground"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}