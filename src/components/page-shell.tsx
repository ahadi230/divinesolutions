import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-10 -left-20 w-96 h-96 rounded-full bg-mint/30 blur-3xl" />
      <div className="absolute top-32 right-0 w-80 h-80 rounded-full bg-lavender/25 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 md:pt-32 pb-16 md:pb-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="headline-xl mt-5 max-w-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
