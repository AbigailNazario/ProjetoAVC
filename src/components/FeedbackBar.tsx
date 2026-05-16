import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { trackEvent } from "@/lib/accessibility";

export function FeedbackBar({ topic }: { topic: string }) {
  const [sent, setSent] = useState<null | "yes" | "no">(null);
  const send = (v: "yes" | "no") => {
    setSent(v);
    trackEvent("feedback", { topic, value: v });
  };
  if (sent) {
    return (
      <p className="rounded-xl bg-secondary-soft p-4 text-center text-sm font-medium text-secondary-foreground">
        Obrigado pelo seu retorno!
      </p>
    );
  }
  return (
    <div className="rounded-2xl border-2 border-border bg-card p-4">
      <p className="mb-3 text-center text-base font-semibold">Esta orientação ajudou?</p>
      <div className="flex gap-3">
        <button
          onClick={() => send("yes")}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-secondary py-3 font-semibold text-secondary-foreground"
        >
          <ThumbsUp className="h-5 w-5" /> Sim
        </button>
        <button
          onClick={() => send("no")}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-border bg-card py-3 font-semibold"
        >
          <ThumbsDown className="h-5 w-5" /> Não
        </button>
      </div>
    </div>
  );
}