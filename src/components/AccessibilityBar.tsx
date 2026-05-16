import { Type, Contrast, Minus, Plus } from "lucide-react";
import { useAccessibility } from "@/lib/accessibility";

export function AccessibilityBar() {
  const { fontScale, setFontScale, highContrast, toggleHighContrast } = useAccessibility();
  return (
    <div
      className="flex items-center justify-end gap-2 border-b border-border bg-card/80 px-4 py-2 text-sm backdrop-blur"
      aria-label="Barra de acessibilidade"
    >
      <span className="mr-1 hidden items-center gap-1 text-muted-foreground sm:flex">
        <Type className="h-4 w-4" /> Texto
      </span>
      <button
        onClick={() => setFontScale(fontScale - 0.1)}
        aria-label="Diminuir fonte"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background"
      >
        <Minus className="h-4 w-4" />
      </button>
      <button
        onClick={() => setFontScale(1)}
        aria-label="Tamanho padrão"
        className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-border bg-background px-2 text-xs font-semibold"
      >
        {Math.round(fontScale * 100)}%
      </button>
      <button
        onClick={() => setFontScale(fontScale + 0.1)}
        aria-label="Aumentar fonte"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background"
      >
        <Plus className="h-4 w-4" />
      </button>
      <button
        onClick={toggleHighContrast}
        aria-pressed={highContrast}
        aria-label="Alternar alto contraste"
        className={`ml-2 flex h-9 items-center gap-1 rounded-lg border border-border px-3 text-xs font-semibold ${
          highContrast ? "bg-foreground text-background" : "bg-background"
        }`}
      >
        <Contrast className="h-4 w-4" /> Contraste
      </button>
    </div>
  );
}