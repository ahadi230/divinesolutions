import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { ArrowUpRight, Code2, Smartphone, Zap, Sparkles, Handshake, TrendingUp } from "lucide-react";
import heroDevices from "@/assets/hero-devices.jpg";
import workWeb from "@/assets/work-web.jpg";
import workMobile from "@/assets/work-mobile.jpg";
import workEcom from "@/assets/work-ecom.jpg";

const values = [
  { icon: Zap, title: "Speed", body: "Tight feedback loops. We ship working software in weeks, not quarters." },
  { icon: Sparkles, title: "Craft", body: "Pixel-honest design, well-tested code. The boring stuff done right." },
  { icon: Handshake, title: "Partnership", body: "We sit on your side of the table. Your roadmap is our roadmap." },
  { icon: TrendingUp, title: "Scalability", body: "Architectures that grow with you — from MVP to a million users." },
];

const featured = [
  { img: workWeb, name: "ELITE Construction USA", tag: "Web · Construction", result: "A commercial construction presence built for trust and lead generation." },
  { img: workMobile, name: "Pbody's Restaurant & Event Center", tag: "Web · Restaurant & Events", result: "A warm, conversion-ready site for dining and event bookings." },
  { img: workEcom, name: "Roma Italian Restaurant", tag: "Web · Restaurant", result: "An inviting digital front door for an authentic dining experience." },
];

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute top-10 -left-32 w-[32rem] h-[32rem] rounded-full bg-mint/35 blur-3xl" />
        <div className="absolute top-40 right-0 w-[28rem] h-[28rem] rounded-full bg-lavender/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-peach/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 md:pt-28 pb-16 md:pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <p className="eyebrow">Web & Mobile Software Studio</p>
            <h1 className="headline-xl mt-6">
              Build<br />Beyond.
            </h1>
            <p className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed">
              DIVINE Solutions partners with ambitious teams to design and build web and mobile products people actually love — and businesses can scale on.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="pill" size="xl">
                <Link to="/contact">Start your project <ArrowUpRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="pill-outline" size="xl">
                <Link to="/portfolio">See our work</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-mint/30 blur-3xl rounded-full" />
            <img
              src={heroDevices}
              alt="Tilted 3D mockup of a laptop and smartphone showcasing modern app interfaces"
              width={1280}
              height={1024}
              className="relative w-full max-w-xl mx-auto drop-shadow-2xl rotate-[-2deg]"
            />
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="headline-lg mt-4 max-w-xl">Two disciplines.<br />One bar for quality.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            We're a focused team. Web and mobile, end to end — from first sketch to App Store and production scale.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Code2, title: "Web Development", body: "Custom web apps, SaaS platforms, marketing sites, and e-commerce — built fast, built to last." },
            { icon: Smartphone, title: "Mobile App Development", body: "Native iOS & Android and cross-platform apps that feel right on every device, in every hand." },
          ].map((s) => (
            <Link
              key={s.title}
              to="/services"
              className="group relative rounded-3xl border border-border bg-card p-10 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgb(20_40_60/0.2)]"
            >
              <div className="grid place-items-center w-14 h-14 rounded-2xl bg-mint text-navy">
                <s.icon className="size-6" />
              </div>
              <h3 className="font-display text-2xl font-bold mt-6">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              <span className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-foreground group-hover:gap-2 transition-all">
                Learn more <ArrowUpRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Why DIVINE</p>
            <h2 className="headline-lg mt-4">Honest craft, every release.</h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-card p-8 border border-border">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-mint/40 text-navy">
                  <v.icon className="size-5" />
                </div>
                <h3 className="font-display text-xl font-bold mt-6">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="headline-lg mt-4">Outcomes we're proud of.</h2>
          </div>
          <Button asChild variant="pill-outline" size="lg">
            <Link to="/portfolio">View all projects</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <article key={p.name} className="group rounded-3xl overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgb(20_40_60/0.2)]">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img src={p.img} alt={p.name} width={1024} height={768} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">{p.tag}</p>
                <h3 className="font-display text-xl font-bold mt-2">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
