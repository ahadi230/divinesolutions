import { PageShell, PageHero } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";

const values = [
  { t: "Outcomes over output", d: "We measure ourselves by what your product does for your users — not by lines of code." },
  { t: "Honest by default", d: "Clear estimates. Real status. Hard truths early. No surprise invoices." },
  { t: "Calm momentum", d: "We move quickly without burning out. Sustainable pace, every sprint." },
  { t: "One bar for craft", d: "From the marketing site to the database schema — the same standard, end to end." },
];

export default function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title={<>A studio for<br />ambitious software.</>}
        subtitle="DIVINE Solutions was started on a simple idea: small, senior teams ship better products than big, junior ones. We've kept it that way."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 grid md:grid-cols-2 gap-12 items-start">
        <div className="rounded-3xl bg-secondary/60 p-10">
          <p className="eyebrow">Our story</p>
          <h2 className="headline-lg mt-4">Built by makers, for makers.</h2>
        </div>
        <div className="text-lg text-muted-foreground leading-relaxed space-y-5">
          <p>We started DIVINE Solutions because we kept watching great ideas get ground down by clunky software. We wanted a studio where the people designing the product also build it, ship it, and care about it long after launch.</p>
          <p>Today we're a tight team of designers, engineers, and product thinkers working with founders, product leaders, and operating teams to build web and mobile products that earn their place.</p>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <p className="eyebrow">What we believe</p>
        <h2 className="headline-lg mt-4 max-w-2xl">Four values, repeated until they're real.</h2>
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.t} className="rounded-3xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl font-bold">{v.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy text-navy-foreground relative overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 rounded-full bg-mint/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["8", "Products shipped"],
            ["2", "Years in practice"],
            ["90%", "Active clients"],
            ["98%", "Would recommend"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-5xl md:text-6xl font-bold text-mint">{n}</p>
              <p className="mt-2 text-sm text-navy-foreground/70">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Work with us"
        title="Find out if we're the right fit."
        body="The first conversation is always free, always honest."
      />
    </PageShell>
  );
}
