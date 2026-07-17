import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { CONTACT, IMG, SERVICES } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={IMG.logo} alt="ECCL" className="h-14 w-14 rounded-full object-cover ring-2 ring-gold" />
            <div>
              <div className="font-bold">EF. IMER CONSTRUCTION</div>
              <div className="text-xs opacity-70">Company Limited · ECCL</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            Trusted Tanzanian construction company delivering buildings, roads, civil works and water infrastructure.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="rounded-full border border-white/20 p-2 hover:bg-gold hover:text-primary transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-widest text-gold">Services</div>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="opacity-80 hover:opacity-100 hover:text-gold">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-widest text-gold">Company</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="opacity-80 hover:text-gold">About Us</Link></li>
            <li><Link to="/portfolio" className="opacity-80 hover:text-gold">Portfolio</Link></li>
            <li><Link to="/blog" className="opacity-80 hover:text-gold">Blog</Link></li>
            <li><Link to="/faq" className="opacity-80 hover:text-gold">FAQ</Link></li>
            <li><Link to="/contact" className="opacity-80 hover:text-gold">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-widest text-gold">Contact</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><span className="opacity-80">{CONTACT.address}</span></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><span className="opacity-80">{CONTACT.postal}</span></li>
            {CONTACT.phones.map((p) => (
              <li key={p} className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><a href={`tel:${p.replace(/\s/g, "")}`} className="opacity-80 hover:text-gold">{p}</a></li>
            ))}
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><a href={`mailto:${CONTACT.email}`} className="opacity-80 hover:text-gold break-all">{CONTACT.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs opacity-70 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} EF. IMER Construction Company Limited. All rights reserved.</div>
          <div>Registered in Tanzania</div>
        </div>
      </div>
    </footer>
  );
}
