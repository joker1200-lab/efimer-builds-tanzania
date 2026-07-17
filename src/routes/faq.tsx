import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { IMG } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SocialProofBar } from "@/components/SocialProof";

const FAQS = [
  { q: "Which regions of Tanzania does ECCL work in?", a: "We serve clients across all 26 regions of Tanzania, headquartered in Dar es Salaam. Mobilisation to any region is included in our standard project planning." },
  { q: "Is ECCL a licensed contractor?", a: "Yes. EF. IMER Construction Company Limited is fully registered and compliant with Tanzanian construction and taxation regulations." },
  { q: "Do you handle both public and private projects?", a: "Absolutely. Our portfolio spans government infrastructure (roads, water, public buildings) as well as private residential and commercial construction." },
  { q: "How is a project quote prepared?", a: "We start with a free site visit and needs assessment. Our engineers then prepare a detailed bill of quantities and formal quote, usually within 5–7 working days." },
  { q: "What is your typical project timeline?", a: "Timelines depend on scope. A standard residential build takes 4–8 months; road projects vary by length; boreholes are typically completed in 3–6 weeks." },
  { q: "Do you offer labour-based road works?", a: "Yes, this is a specialist division of ours. Labour-based methods deliver durable rural roads while creating meaningful local employment." },
  { q: "Can ECCL supply building materials only?", a: "Yes. We supply building materials to other contractors and self-builders across Tanzania in addition to our full construction services." },
  { q: "Do you install solar-powered water systems?", a: "Yes. Solar pumping, storage and distribution are a core part of our water-supply division and increasingly the default for rural projects." },
  { q: "What safety and quality standards do you follow?", a: "We follow Tanzanian construction standards and our own internal QA/HSE procedures. Every site has a designated safety officer and daily inspection routines." },
  { q: "How do I request a quote?", a: "Use the instant calculator on our home page for an indicative estimate, or contact us via the Contact page or WhatsApp for a formal quote." },
];

export const Route = createFileRoute("/faq")({
  component: FAQ,
  head: () => ({
    meta: [
      { title: "FAQ | ECCL Construction Tanzania" },
      { name: "description", content: "Frequently asked questions about ECCL construction services in Tanzania — quotes, timelines, coverage and more." },
    ],
  }),
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero title="Frequently asked questions" subtitle="Everything you need to know before starting a project with ECCL." image={IMG.scaffoldBuilding} />
      <SocialProofBar variant="clients" />
      <section className="container-x py-16 max-w-3xl">
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center gap-4 p-5 text-left">
                  <span className="flex-1 font-semibold text-primary">{f.q}</span>
                  <span className="h-8 w-8 shrink-0 rounded-full bg-gold/20 text-gold grid place-items-center">
                    {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-in">{f.a}</div>
                )}
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
