import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold tracking-tight text-lg">
          <span className="grid place-items-center w-8 h-8 rounded-full bg-mint text-navy">◆</span>
          DIVINE
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `hover:text-foreground transition-colors ${
                  isActive ? "text-foreground font-semibold" : "text-muted-foreground"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="pill" size="lg">
            <Link to="/contact">Start a project</Link>
          </Button>
        </div>
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-1 text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild variant="pill" size="lg" className="mt-2 w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>Start a project</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
