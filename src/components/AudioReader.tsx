import { Volume2, Square } from "lucide-react";
import { useAccessibility, trackEvent } from "@/lib/accessibility";
import { AccessibleButton } from "./AccessibleButton";

export function AudioReader({ text, label }: { text: string; label?: string }) {
  const { speak, stop, speaking } = useAccessibility();
  return (
    <AccessibleButton
      variant={speaking ? "danger" : "secondary"}
      onClick={() => {
        if (speaking) {
          stop();
        } else {
          trackEvent("audio_read", { label });
          speak(text);
        }
      }}
      aria-label={speaking ? "Parar leitura" : "Ouvir conteúdo em voz alta"}
    >
      {speaking ? <Square className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      {speaking ? "Parar leitura" : "Ouvir conteúdo"}
    </AccessibleButton>
  );
}