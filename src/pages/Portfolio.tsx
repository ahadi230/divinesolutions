import { PageShell, PageHero } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { ArrowUpRight } from "lucide-react";
import workWeb from "@/assets/work-web.jpg";
import workMobile from "@/assets/work-mobile.jpg";
import workEcom from "@/assets/work-ecom.jpg";

const projects = [
  {
    name: "ELITE Construction USA",
    tag: "Web · Construction",
    img: workWeb,
    url: "https://constructionelite.pages.dev/",
    problem: "A commercial construction company needed a digital presence that matched the scale of its work across Texas and Florida — multifamily, healthcare, hospitality, office, and retail builds.",
    solution: "A polished, trust-building marketing site that showcases project categories and the company's design-build capabilities, built to turn visitors into qualified leads.",
    result: "A professional online presence built for credibility and lead generation.",
  },
  {
    name: "Pbody's Restaurant & Event Center",
    tag: "Web · Restaurant & Events",
    img: workMobile,
    url: "https://pbody.pages.dev/",
    problem: "A well-loved local restaurant and event venue inside the Clarksville Country Club needed a site that captured its comfort-food charm while clearly handling dine-in, takeout, delivery, and event bookings.",
    solution: "A warm, inviting site structured around the menu, event hosting, and the restaurant's strong reputation, designed to convert visits into reservations and event inquiries.",
    result: "A welcoming digital front door for a 4.8★-rated local favorite.",
  },
  {
    name: "Roma Italian Restaurant",
    tag: "Web · Restaurant",
    img: workEcom,
    url: "https://italianroma.pages.dev/",
    problem: "An authentic Italian restaurant in Clarksville, Tennessee needed a site that reflected its handcrafted food and warm hospitality, supporting dine-in, takeout, and delivery.",
    solution: "A clean, appetite-driven design that puts the menu and dining experience front and center, built to convert browsing into bookings and orders.",
    result: "An inviting online presence for a 4.9★-rated dining destination.",
  },
];

export default function Portfolio() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Portfolio"
        title={<>Work we've shipped.<br />Teams we've shipped with.</>}
        subtitle="A selection of recent web projects — picked because the outcomes were honest and the partnerships were good."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgb(20_40_60/0.2)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img src={p.img} alt={p.name} width={1024} height={768} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">{p.tag}</p>
                    <h2 className="font-display text-2xl font-bold mt-2">{p.name}</h2>
                  </div>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-navy shrink-0 group-hover:gap-2 transition-all">
                    Visit <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="eyebrow mb-1">Problem</p>
                    <p className="text-muted-foreground">{p.problem}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-1">Solution</p>
                    <p className="text-muted-foreground">{p.solution}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="eyebrow mb-1">Outcome</p>
                  <p className="font-display text-lg">{p.result}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Have something in mind?"
        title="Your project could be next."
        body="If any of these resonate, let's talk about yours."
      />
    </PageShell>
  );
}
