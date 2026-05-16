import { useEffect, useState } from "react";
import { Check } from "lucide-react";

export function Checklist({ id, items }: { id: string; items: string[] }) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));

  useEffect(() => {
    const raw = localStorage.getItem(`avc:check:${id}`);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as boolean[];
        if (parsed.length === items.length) setChecked(parsed);
      } catch {
        /* ignore */
      }
    }
  }, [id, items.length]);

  const toggle = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
    localStorage.setItem(`avc:check:${id}`, JSON.stringify(next));
  };

  return (
    <ul className="space-y-3" role="list">
      {items.map((item, i) => (
        <li key={item}>
          <button
            onClick={() => toggle(i)}
            aria-pressed={checked[i]}
            className="flex w-full items-center gap-3 rounded-xl border-2 border-border bg-card p-4 text-left transition hover:bg-muted"
          >
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 ${
                checked[i] ? "border-secondary bg-secondary" : "border-border bg-background"
              }`}
              aria-hidden
            >
              {checked[i] && <Check className="h-5 w-5 text-secondary-foreground" />}
            </span>
            <span className={`text-base ${checked[i] ? "line-through opacity-70" : ""}`}>
              {item}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}