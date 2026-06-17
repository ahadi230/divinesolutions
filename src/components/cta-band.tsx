import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CtaBand({
  eyebrow = "Let's talk",
  title = "Let's build something that lasts.",
  body = "Tell us what you're working on. We'll reply within one business day with thoughts, questions, and a clear next step.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute -top-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-mint/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-lavender/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 text-center">
        <p className="eyebrow text-mint">{eyebrow}</p>
        <h2 className="headline-lg mt-4 max-w-3xl mx-auto">{title}</h2>
        <p className="mt-6 max-w-xl mx-auto text-navy-foreground/75">{body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild variant="pill" size="xl">
            <Link to="/contact">Start your project</Link>
          </Button>
          <Button asChild variant="pill-light" size="xl">
            <Link to="/portfolio">See our work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
