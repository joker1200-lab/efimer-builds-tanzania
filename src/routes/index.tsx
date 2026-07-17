import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Quote, Star, Sparkles } from "lucide-react";
import { IMG, SERVICES, TESTIMONIALS, BLOG, STATS } from "@/lib/site";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { Reveal } from "@/components/Reveal";
import { SocialProofBar } from "@/components/SocialProof";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ECCL | Construction, Roads & Water Infrastructure in Tanzania" },
      { name: "description", content: "EF. IMER Construction (ECCL) — buildings, civil, roads and water projects. Serving Dar es Salaam and all Tanzania. Get an instant quote." },
    ],
  }),
});

function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar variant="clients" />
      <About />
      <SocialProofBar variant="trust" />
      <Services />
      <SocialProofBar variant="reviews" />
      <Portfolio />
      <SocialProofBar variant="clients" />
      <Testimonials />
      <Blog />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={IMG.districtOffice} alt="ECCL project" className="h-full w-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
      </div>
      <div className="container-x py-20 lg:py-32 grid gap-10 lg:grid-cols-2 items-center">
        <div className="text-primary-foreground">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 backdrop-blur px-3 py-1 text-xs font-semibold text-gold uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" /> Building Tanzania Since 2015
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              We build the <span className="text-gold">infrastructure</span> Tanzania depends on.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-base sm:text-lg opacity-90 max-w-xl">
              From residential homes and commercial complexes to tarmac roads, boreholes and solar water systems —
              EF. IMER Construction (ECCL) delivers with precision, safety and integrity.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-primary hover:brightness-95 transition">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                View Our Work
              </Link>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-gold">{s.value}</div>
                  <div className="text-xs uppercase tracking-widest opacity-80">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <QuoteCalculator />
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="container-x py-20">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <Reveal>
          <div className="relative">
            <img src={IMG.yellowBuilding} alt="Completed institutional building" className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-gold p-5 shadow-xl max-w-[220px]">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-xs uppercase tracking-widest text-primary/80">Years of construction excellence</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gold">About ECCL</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">A Tanzanian construction company built on trust and craftsmanship.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              EF. IMER Construction Company Limited (ECCL) is a full-service contractor headquartered in Dar es Salaam.
              We combine engineering rigour with local knowledge to deliver public and private projects across Tanzania — from single homes to district-scale infrastructure.
            </p>
            <ul className="mt-6 space-y-2.5">
              {["Licensed & compliant contractor", "In-house engineering team", "Community-first labour approach", "Transparent budgets, no surprises"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" /> {t}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold transition">Read our story <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-gold">What we do</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Full-service construction across Tanzania</h2>
            <p className="mt-3 text-muted-foreground">Six specialised divisions delivered under one roof.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="group block rounded-2xl overflow-hidden bg-card border border-border hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-lg font-bold">{s.title}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground">{s.short}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-gold transition">
                    Explore service <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const items = [
    { img: IMG.hallExterior, cat: "Public Works" },
    { img: IMG.waterTower, cat: "Water Supply" },
    { img: IMG.concretePier, cat: "Civil Engineering" },
    { img: IMG.foundationCrew, cat: "Foundations" },
  ];
  return (
    <section className="container-x py-20">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gold">Selected work</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Recent projects</h2>
            <p className="mt-2 text-sm text-muted-foreground">Client identities kept private — imagery from live sites.</p>
          </div>
          <Link to="/portfolio" className="text-sm font-bold text-primary hover:text-gold inline-flex items-center gap-1.5">View full portfolio <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
              <img src={it.img} alt={it.cat} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs uppercase tracking-widest text-gold">{it.cat}</div>
                <div className="font-bold">Confidential Client Project</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-gold">Client voices</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Real people. Real projects. Real trust.</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
                <Quote className="h-6 w-6 text-gold" />
                <p className="mt-4 text-sm leading-relaxed opacity-90">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-gold/40" />
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs opacity-70">{t.role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-gold text-gold" />)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="container-x py-20">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gold">Insights</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">From our site engineers</h2>
          </div>
          <Link to="/blog" className="text-sm font-bold text-primary hover:text-gold inline-flex items-center gap-1.5">All articles <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BLOG.map((b, i) => (
          <Reveal key={b.slug} delay={i * 80}>
            <Link to="/blog/$slug" params={{ slug: b.slug }} className="group block rounded-2xl overflow-hidden bg-card border border-border hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={b.image} alt={b.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <div className="text-xs text-muted-foreground">{b.date} · {b.readTime}</div>
                <h3 className="mt-2 text-lg font-bold text-primary leading-tight group-hover:text-gold transition">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{b.excerpt}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-3xl">
        <img src={IMG.scaffoldBuilding} alt="site" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        <div className="relative p-10 sm:p-16 text-primary-foreground max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to break ground on your next project?</h2>
          <p className="mt-4 opacity-90">Speak to our team about your building, road or water project. We provide a free consultation and site assessment across Tanzania.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-primary hover:brightness-95">Start a project <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10">Explore services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
