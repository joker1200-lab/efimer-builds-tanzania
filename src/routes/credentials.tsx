import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, FileCheck2 } from "lucide-react";
import { CERTIFICATES, IMG } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SocialProofBar } from "@/components/SocialProof";

export const Route = createFileRoute("/credentials")({
  component: Credentials,
  head: () => ({
    meta: [
      { title: "Licences & Credentials | ECCL — EF. IMER Construction" },
      { name: "description", content: "Official licences and certificates for EF. IMER Construction Company Limited: BRELA incorporation, CRB registrations (Building & Civil Works), TIN, VAT and business licences." },
      { property: "og:title", content: "Licences & Credentials | ECCL" },
      { property: "og:description", content: "Official Tanzanian registrations and licences held by EF. IMER Construction Company Limited." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Licences & Credentials | ECCL" },
      { name: "twitter:description", content: "Official Tanzanian registrations and licences held by ECCL." },
    ],
  }),
});

function Credentials() {
  return (
    <>
      <PageHero
        title="Licences & Credentials"
        subtitle="Every project we deliver is backed by full statutory registration in Tanzania. Below are our current certificates."
        image={IMG.districtOffice}
      />

      <section className="container-x py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "CRB Registered", d: "Building & Civil Works Contractor — Class Six, Local." },
            { icon: FileCheck2, t: "TRA Compliant", d: "TIN and VAT registered with the Tanzania Revenue Authority." },
            { icon: Award, t: "Locally Licensed", d: "Business licences issued and renewed by Masasi Town Council." },
          ].map((r, i) => (
            <Reveal key={r.t} delay={i * 100}>
              <div className="rounded-2xl border border-border bg-card p-7 h-full hover-lift">
                <div className="h-12 w-12 rounded-xl bg-gold/20 text-gold grid place-items-center"><r.icon className="h-6 w-6" /></div>
                <div className="mt-4 font-bold text-primary">{r.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-gold">Documents</div>
            <h2 className="mt-3 text-3xl font-bold text-primary">Official certificates on file</h2>
            <p className="mt-3 text-muted-foreground">Click any certificate to enlarge. Reference numbers are shown for verification with the issuing authority.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <a href={c.image} target="_blank" rel="noreferrer" className="group block rounded-2xl border border-border bg-card overflow-hidden hover-lift">
                <div className="aspect-[3/4] bg-secondary/40 overflow-hidden">
                  <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-widest text-gold">{c.issuer}</div>
                  <div className="mt-2 font-bold text-primary leading-snug">{c.title}</div>
                  <div className="mt-2 text-xs text-muted-foreground">{c.ref}</div>
                  <div className="text-xs text-muted-foreground">{c.date}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <SocialProofBar variant="reviews" />
      <div className="h-10" />
    </>
  );
}
