import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Ctx = {
  fontScale: number;
  setFontScale: (n: number) => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  speak: (text: string) => void;
  stop: () => void;
  speaking: boolean;
};

const AccessibilityContext = createContext<Ctx | null>(null);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontScale, setFontScaleState] = useState(1);
  const [highContrast, setHC] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const fs = localStorage.getItem("avc:fontScale");
    const hc = localStorage.getItem("avc:hc");
    if (fs) setFontScaleState(Number(fs));
    if (hc === "1") setHC(true);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--user-font-size", `${fontScale}rem`);
    localStorage.setItem("avc:fontScale", String(fontScale));
  }, [fontScale]);

  useEffect(() => {
    document.documentElement.classList.toggle("hc", highContrast);
    localStorage.setItem("avc:hc", highContrast ? "1" : "0");
  }, [highContrast]);

  const setFontScale = (n: number) => setFontScaleState(Math.min(1.5, Math.max(0.9, n)));
  const toggleHighContrast = () => setHC((v) => !v);

  const speak = (text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "pt-BR";
    u.rate = 0.95;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(u);
  };

  const stop = () => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  };

  return (
    <AccessibilityContext.Provider
      value={{ fontScale, setFontScale, highContrast, toggleHighContrast, speak, stop, speaking }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error("useAccessibility must be used within AccessibilityProvider");
  return ctx;
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.gtag === "function") w.gtag("event", name, params || {});
}