import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Heart, Shield, Users, Award } from "lucide-react";
import { IMG, TEAM } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SocialProofBar } from "@/components/SocialProof";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About ECCL | EF. IMER Construction Company Limited" },
      { name: "description", content: "Meet EF. IMER Construction (ECCL) — a Tanzanian contractor delivering buildings, roads, civil and water projects with integrity." },
    ],
  }),
});

function About() {
  return (
    <>
      <PageHero title="Built in Tanzania. Built to last." subtitle="ECCL combines engineering rigour with local knowledge to deliver public and private infrastructure across Tanzania." image={IMG.yellowBuilding} />
      <SocialProofBar variant="clients" />

      <section className="container-x py-20 grid gap-12 lg:grid-cols-2 items-center">
        <Reveal>
          <img src={IMG.hallExterior} alt="ECCL project" className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" />
        </Reveal>
        <Reveal delay={150}>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gold">Our Story</div>
            <h2 className="mt-3 text-3xl font-bold text-primary">Ten years of putting Tanzania first.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              EF. IMER Construction Company Limited was founded in Dar es Salaam with a simple mission: deliver honest, high-quality construction to Tanzanian communities.
              We've grown from a small residential contractor into a full-service firm handling roads, civil works, water supply and specialised infrastructure — but the mission hasn't changed.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every project is led by qualified engineers, staffed with local labour, and delivered with clear communication from tender to handover.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Mission", body: "To build reliable, safe and beautiful infrastructure that improves lives across Tanzania." },
            { icon: Eye, title: "Vision", body: "To be East Africa's most trusted mid-size construction partner for public and private clients." },
            { icon: Heart, title: "Values", body: "Integrity, craftsmanship, safety, and genuine partnership with the communities we build in." },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="rounded-2xl bg-card border border-border p-7 h-full hover-lift">
                <div className="h-12 w-12 rounded-xl bg-gold/20 text-gold grid place-items-center"><v.icon className="h-6 w-6" /></div>
                <h3 className="mt-4 text-xl font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest text-gold">Why ECCL</div>
            <h2 className="mt-3 text-3xl font-bold text-primary">Reasons clients keep coming back</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Licensed contractor", d: "Fully registered and compliant with all Tanzanian regulations." },
            { t: "In-house engineers", d: "Structural, civil and water engineers on staff — not outsourced." },
            { t: "Community labour", d: "We hire and train local crews on every project we take on." },
            { t: "On-time delivery", d: "98% of projects completed on or ahead of the contract schedule." },
          ].map((r, i) => (
            <Reveal key={r.t} delay={i * 80}>
              <div className="rounded-2xl border border-border bg-card p-6 h-full">
                <Shield className="h-6 w-6 text-gold" />
                <div className="mt-3 font-bold text-primary">{r.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
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
