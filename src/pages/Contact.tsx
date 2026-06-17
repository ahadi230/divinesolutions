import { useState } from "react";
import { PageShell, PageHero } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Mail, Clock, CheckCircle2, AlertCircle } from "lucide-react";

// Google Apps Script Web App URL — replace with your own deployed script URL.
// See README.md for full setup steps (Google Sheet + Apps Script deployment).
const FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycbyMn080AV0qpvihJ25YDKctMxfW6fbNroWwHGq-OtNsdJiigPcLJumN33fV8QBK4ahZ/exec";

const initialForm = { name: "", email: "", project_type: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...form, submitted_at: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    }
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={<>Let's talk<br />about your project.</>}
        subtitle="Fill in the form below and tell us what you're building. We'll get back to you directly."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-32 grid lg:grid-cols-5 gap-12">
        {/* FORM */}
        <div className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10">
          {status === "sent" ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid place-items-center w-16 h-16 rounded-2xl bg-mint text-navy">
                <CheckCircle2 className="size-7" />
              </div>
              <h2 className="font-display text-2xl font-bold mt-6">Thanks — message received.</h2>
              <p className="mt-3 text-muted-foreground">We'll reply within one business day. Often sooner.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold">Tell us about your project</h2>
                <p className="mt-2 text-sm text-muted-foreground">We typically respond within 1 business day.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" placeholder="Your name" required value={form.name} onChange={handleChange} />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" required value={form.email} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Project type</label>
                <select
                  name="project_type"
                  required
                  value={form.project_type}
                  onChange={handleChange}
                  className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring/60"
                >
                  <option value="" disabled>Choose one…</option>
                  <option>Web application</option>
                  <option>Mobile app</option>
                  <option>E-commerce</option>
                  <option>Marketing site</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Tell us more</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are you trying to build? What's the timeline?"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/60 resize-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-start gap-3 rounded-xl bg-destructive/10 text-destructive p-4 text-sm">
                  <AlertCircle className="size-5 shrink-0 mt-0.5" />
                  <p>Something went wrong sending your message. Please try again, or email us directly at divinesolutionsdev@gmail.com.</p>
                </div>
              )}

              <Button type="submit" variant="pill" size="xl" className="w-full sm:w-auto" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </Button>
              <p className="text-xs text-muted-foreground">
                By sending, you agree we may use your details to reply to your inquiry. We never share them.
              </p>
            </form>
          )}
        </div>

        {/* DETAILS */}
        <aside className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl bg-navy text-navy-foreground p-8 relative overflow-hidden">
            <div className="absolute -top-20 -right-10 w-64 h-64 rounded-full bg-mint/20 blur-3xl" />
            <p className="eyebrow text-mint">Get in touch</p>
            <h3 className="font-display text-2xl font-bold mt-3">Other ways to reach us</h3>
            <div className="mt-8 space-y-5 text-sm">
              <ContactRow icon={Mail} label="Email" value="divinesolutionsdev@gmail.com" />
              <ContactRow icon={Clock} label="Hours" value="Mon–Fri · 9:00–18:00 ET" />
            </div>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", placeholder, required, value, onChange }: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring/60"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 text-mint shrink-0">
        <Icon className="size-4" />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-navy-foreground/60">{label}</p>
        <p className="mt-0.5 font-medium">{value}</p>
      </div>
    </div>
  );
}
