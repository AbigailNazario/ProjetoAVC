import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { AccessibilityProvider } from "@/lib/accessibility";
import { Header } from "@/components/Header";
import { EmergencyButton } from "@/components/EmergencyButton";
import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
const GA_ID = "G-RPEBVJ7KY9";

function useGoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (document.getElementById("ga-script")) {
      // Script já carregado, só registra a página
      window.gtag("config", "G-RPEBVJ7KY9", {
        page_path: location.pathname,
      });
      return;
    }

    // Injeta script do Google exatamente como o GA4 recomenda
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag as unknown as Window["gtag"];
    window.gtag("js", new Date() as unknown as string, {});
    window.gtag("config", "G-RPEBVJ7KY9");

    const s = document.createElement("script");
    s.id = "ga-script";
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=G-RPEBVJ7KY9";
    document.head.appendChild(s);
  }, [location.pathname]);
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#143b7a" },
      { title: "AVC Conecta — Informação, cuidado e recuperação" },
      {
        name: "description",
        content:
          "AVC Conecta: orientação que conecta você ao cuidado pós-AVC. Conteúdos acessíveis, checklists e sinais de alerta para pacientes e acompanhantes.",
      },
      { name: "author", content: "AVC Conecta" },
      { property: "og:title", content: "AVC Conecta" },
      {
        property: "og:description",
        content: "Orientação que conecta você ao cuidado pós-AVC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "icon", href: "/icon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useGoogleAnalytics(); // ← adicione essa linha

  return (
    <QueryClientProvider client={queryClient}>
      <AccessibilityProvider>
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo-principal" className="mx-auto max-w-2xl px-4 pb-32 pt-4">
          <Outlet />
        </main>
        <EmergencyButton />
      </AccessibilityProvider>
    </QueryClientProvider>
  );
}
