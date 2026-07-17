import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { IMG, SERVICES } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SocialProofBar } from "@/components/SocialProof";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
  loader: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} | ECCL Tanzania` },
      { name: "description", content: loaderData.short },
      { property: "og:image", content: loaderData.image },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="container-x py-20 text-center">
      <h1 className="text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block text-gold">All services</Link>
    </div>
  ),
  errorComponent: () => <div className="container-x py-20 text-center">Something went wrong.</div>,
});

function ServiceDetail() {
  const s = Route.useLoaderData();
  const related = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);
  const gallery = [IMG.districtOffice, IMG.hallExterior, IMG.foundationCrew, IMG.waterTower];

  return (
    <>
      <PageHero title={s.title} subtitle={s.short} image={s.image} />
      <SocialProofBar variant="clients" />

      <section className="container-x py-20 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-primary">What we deliver</h2>
            <p className="mt-3 text-muted-foreground">Our {s.title.toLowerCase()} division handles projects of every size across Tanzania — from planning and permitting through construction, quality control and handover.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {s.items.map((it, i) => (
              <Reveal key={it} delay={i * 40}>
                <div className="flex gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div className="text-sm font-medium text-primary">{it}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {gallery.map((g, i) => (
                <img key={i} src={g} alt="project" className="rounded-xl w-full aspect-[4/3] object-cover" />
              ))}
            </div>
          </Reveal>
        </div>
        <aside className="space-y-4">
          <div className="rounded-2xl bg-primary text-primary-foreground p-6 sticky top-24">
            <div className="text-xs uppercase tracking-widest text-gold">Get started</div>
            <h3 className="mt-2 text-xl font-bold">Request a site visit</h3>
            <p className="mt-2 text-sm opacity-80">Our engineers will visit your site, assess requirements and prepare a detailed quote — free of charge.</p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-primary">Contact us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </aside>
      </section>

      <SocialProofBar variant="reviews" />

      <section className="container-x py-20">
        <h2 className="text-2xl font-bold text-primary">Related services</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="group rounded-2xl overflow-hidden border border-border bg-card hover-lift">
              <img src={r.image} alt={r.title} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <div className="font-bold text-primary">{r.title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{r.short}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
