import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-mint text-navy">◆</span>
            DIVINE Solutions
          </div>
          <p className="mt-4 max-w-sm text-sm text-navy-foreground/70 leading-relaxed">
            We design and build web and mobile products that move teams forward — confidently, beautifully, on time.
          </p>
          <p className="mt-6 text-sm text-navy-foreground/70">
            divinesolutionsdev@gmail.com
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-navy-foreground/60 font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-mint transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-mint transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-mint transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-mint transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-navy-foreground/60">
          <p>© {new Date().getFullYear()} DIVINE Solutions. All rights reserved.</p>
          <p>Built with care. Designed to last.</p>
        </div>
      </div>
    </footer>
  );
}
