import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG, BLOG } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SocialProofBar } from "@/components/SocialProof";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () => ({
    meta: [
      { title: "Blog | ECCL Construction Insights" },
      { name: "description", content: "Insights, guides and site stories from the engineers at ECCL Construction Tanzania." },
    ],
  }),
});

function Blog() {
  return (
    <>
      <PageHero title="From our site engineers" subtitle="Practical guides, project stories and construction insights from across Tanzania." image={IMG.foundationCrew} />
      <SocialProofBar variant="clients" />
      <section className="container-x py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BLOG.map((b, i) => (
          <Reveal key={b.slug} delay={i * 80}>
            <Link to="/blog/$slug" params={{ slug: b.slug }} className="group block rounded-2xl overflow-hidden bg-card border border-border hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={b.image} alt={b.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <div className="text-xs text-muted-foreground">{b.date} · {b.readTime}</div>
                <h3 className="mt-2 text-lg font-bold text-primary leading-tight group-hover:text-gold transition">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
      <div className="h-10" />
    </>
  );
}
