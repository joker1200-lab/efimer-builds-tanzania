import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Tag } from "lucide-react";
import { IMG, PORTFOLIO } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SocialProofBar } from "@/components/SocialProof";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Portfolio | ECCL Construction Projects Tanzania" },
      { name: "description", content: "A selection of ECCL construction, civil, road and water projects across Tanzania. Client names withheld for privacy." },
    ],
  }),
});

function Portfolio() {
  const cats = ["All", ...Array.from(new Set(PORTFOLIO.map((p) => p.category)))];
  const [f, setF] = useState("All");
  const items = f === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === f);
  return (
    <>
      <PageHero title="Our portfolio" subtitle="A selection of buildings, roads and water infrastructure delivered by ECCL. Client identities protected for privacy." image={IMG.hallExterior} />
      <SocialProofBar variant="clients" />
      <section className="container-x py-16">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setF(c)} className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition ${f === c ? "bg-primary text-primary-foreground" : "bg-secondary text-primary hover:bg-gold/30"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.title + i} delay={i * 60}>
              <div className="group rounded-2xl overflow-hidden bg-card border border-border hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-3 left-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">{p.category}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {p.location}</span>
                    <span className="inline-flex items-center gap-1"><Tag className="h-3 w-3" /> Client confidential</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <SocialProofBar variant="reviews" />
      <div className="h-10" />
    </>
  );
}
