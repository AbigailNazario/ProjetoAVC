import { Link, useLocation } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { trackEvent } from "@/lib/accessibility";

export function EmergencyButton() {
  const location = useLocation();

  if (location.pathname === "/emergencia") return null;

  return (
    <Link
      to="/emergencia"
      onClick={() => trackEvent("emergency_click")}
      aria-label="Suspeita de novo AVC — abrir emergência"
      className="fixed bottom-4 left-1/2 z-40 flex w-[min(92%,420px)] -translate-x-1/2 items-center justify-center gap-3 rounded-2xl bg-destructive px-5 py-4 text-base font-bold text-destructive-foreground shadow-lg ring-4 ring-destructive/20"
    >
      <AlertTriangle className="h-6 w-6" />
      SUSPEITA DE NOVO AVC
    </Link>
  );
}