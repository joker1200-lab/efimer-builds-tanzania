import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { IMG, SERVICES, CONTACT } from "@/lib/site";

const NAV: { to: string; label: string; hasSub?: boolean }[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", hasSub: true },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/credentials", label: "Credentials" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-x flex h-20 items-center gap-4">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img src={IMG.logo} alt="ECCL logo" className="h-12 w-12 rounded-full object-cover shrink-0 ring-2 ring-gold/40" />
          <div className="min-w-0 hidden sm:block">
            <div className="text-sm font-bold tracking-tight text-primary truncate">EF. IMER CONSTRUCTION</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Company Limited · ECCL</div>
          </div>
        </Link>

        <nav className="ml-auto hidden lg:flex items-center gap-1">
          {NAV.map((n) => n.hasSub ? (
            <div
              key={n.to}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link to={n.to as "/services"} className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary">
                {n.label} <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-72 animate-fade-in">
                  <div className="rounded-xl border border-border bg-popover p-2 shadow-2xl">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="block rounded-lg px-3 py-2.5 text-sm hover:bg-secondary"
                      >
                        <div className="font-medium text-primary">{s.title}</div>
                        <div className="text-xs text-muted-foreground truncate">{s.short}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={n.to}
              to={n.to as "/"}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-secondary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
          className="ml-auto lg:ml-2 hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          <Phone className="h-4 w-4" /> Call Us
        </a>

        <button className="lg:hidden ml-auto rounded-md p-2 text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-x py-3 flex flex-col">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to as "/"} onClick={() => setOpen(false)} className="py-3 border-b border-border/50 text-sm font-medium">
                {n.label}
              </Link>
            ))}
            <div className="pt-3 pb-2 text-xs uppercase text-muted-foreground tracking-widest">Services</div>
            {SERVICES.map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} onClick={() => setOpen(false)} className="py-2 text-sm text-foreground/80">
                — {s.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
