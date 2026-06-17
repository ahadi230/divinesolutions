import { Link } from "react-router-dom";
import { PageShell, PageHero } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Check, Code2, Smartphone } from "lucide-react";

const webIncludes = [
  "Custom web applications & SaaS platforms",
  "E-commerce storefronts & headless commerce",
  "Marketing sites & CMS integration",
  "Performance, accessibility & SEO foundations",
];
const mobileIncludes = [
  "Native iOS (Swift) & Android (Kotlin)",
  "Cross-platform with React Native & Flutter",
  "Product & UX design for mobile",
  "App Store & Play Store submission, plus updates",
];

const stages = [
  { n: "01", t: "Discover", d: "Goals, users, constraints. We listen, then sharpen the brief." },
  { n: "02", t: "Design", d: "Flows, wireframes, and high-fidelity UI you can feel before we build." },
  { n: "03", t: "Build", d: "Weekly demos, working software, no surprises." },
  { n: "04", t: "Launch", d: "Go-live with monitoring, analytics, and a calm rollout plan." },
  { n: "05", t: "Support", d: "Iterate with real user data. Roadmap, retainer, or hand-off." },
];

export default function Services() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title={<>Two services.<br />One promise.</>}
        subtitle="We focus on web and mobile because that's where great products meet people. Everything else — discovery, design, infrastructure, support — wraps around those two craft disciplines."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 grid md:grid-cols-2 gap-6">
        {[
          { icon: Code2, title: "Web Development", includes: webIncludes, stack: ["React", "Next.js", "Node", "Postgres", "Stripe"] },
          { icon: Smartphone, title: "Mobile App Development", includes: mobileIncludes, stack: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase"] },
        ].map((s) => (
          <div key={s.title} className="rounded-3xl border border-border bg-card p-10">
            <div className="grid place-items-center w-14 h-14 rounded-2xl bg-mint text-navy">
              <s.icon className="size-6" />
            </div>
            <h2 className="font-display text-3xl font-bold mt-6">{s.title}</h2>
            <ul className="mt-6 space-y-3">
              {s.includes.map((i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <Check className="size-5 text-mint shrink-0 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="eyebrow mb-3">Tech we love</p>
              <div className="flex flex-wrap gap-2">
                {s.stack.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* PROCESS */}
      <section className="bg-navy text-navy-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-mint/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <p className="eyebrow text-mint">Our process</p>
          <h2 className="headline-lg mt-4 max-w-2xl">Discover → Design → Build → Launch → Support</h2>
          <div className="mt-16 grid md:grid-cols-5 gap-6">
            {stages.map((s) => (
              <div key={s.n} className="relative">
                <div className="font-display text-mint text-3xl font-bold">{s.n}</div>
                <h3 className="mt-3 font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-navy-foreground/75 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-3">
            <Button asChild variant="pill" size="xl"><Link to="/contact">Plan your project</Link></Button>
            <Button asChild variant="pill-light" size="xl"><Link to="/portfolio">See case studies</Link></Button>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready when you are"
        title="A short call beats a long brief."
        body="Tell us about your product. We'll respond within one business day with a plan to move forward."
      />
    </PageShell>
  );
}
