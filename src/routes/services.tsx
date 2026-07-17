import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { IMG, SERVICES } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SocialProofBar } from "@/components/SocialProof";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services | ECCL Construction Tanzania" },
      { name: "description", content: "Building, civil, road, water supply and specialised construction services in Tanzania by ECCL." },
    ],
  }),
});

function Services() {
  return (
    <>
      <PageHero title="Our construction services" subtitle="Six specialist divisions, one accountable contractor. Explore what we build." image={IMG.excavation} />
      <SocialProofBar variant="trust" />
      <section className="container-x py-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={i * 80}>
            <Link to="/services/$slug" params={{ slug: s.slug }} className="group block rounded-2xl overflow-hidden bg-card border border-border hover-lift">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <ul className="mt-4 space-y-1 text-xs text-muted-foreground">
                  {s.items.slice(0, 4).map((it) => <li key={it}>• {it}</li>)}
                </ul>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-gold">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
      <SocialProofBar variant="reviews" />
      <div className="h-10" />
    </>
  );
}
