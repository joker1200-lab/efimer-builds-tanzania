import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BLOG } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { SocialProofBar } from "@/components/SocialProof";

export const Route = createFileRoute("/blog/$slug")({
  component: Post,
  loader: ({ params }) => {
    const p = BLOG.find((b) => b.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} | ECCL Blog` },
      { name: "description", content: loaderData.excerpt },
      { property: "og:image", content: loaderData.image },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="container-x py-20 text-center">
      <h1 className="text-3xl font-bold">Article not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-gold">Back to blog</Link>
    </div>
  ),
  errorComponent: () => <div className="container-x py-20">Something went wrong.</div>,
});

function Post() {
  const p = Route.useLoaderData();
  return (
    <>
      <PageHero title={p.title} subtitle={`${p.date} · ${p.readTime}`} image={p.image} />
      <article className="container-x py-16 max-w-3xl">
        <p className="text-lg text-muted-foreground leading-relaxed">{p.excerpt}</p>
        <div className="prose mt-8 space-y-5 text-foreground/85 leading-relaxed">
          <p>At ECCL, our site engineers regularly share what they've learned from real Tanzanian projects. This piece unpacks the practical decisions, trade-offs and lessons behind {p.title.toLowerCase()}.</p>
          <h2 className="text-2xl font-bold text-primary mt-8">Why it matters</h2>
          <p>Every project we deliver — from a rural borehole to a multi-storey office — depends on early decisions that get quietly made in the first days of design. Getting those right saves months later.</p>
          <h2 className="text-2xl font-bold text-primary mt-8">Our approach</h2>
          <p>We approach every job with the same three-step method: assess the site honestly, design for local conditions, and build with a crew that knows the ground.</p>
          <h2 className="text-2xl font-bold text-primary mt-8">Talk to our team</h2>
          <p>If you have a project we can help with, our engineers are happy to visit and provide a free assessment. Reach out through our contact page or WhatsApp.</p>
        </div>
        <div className="mt-10">
          <Link to="/blog" className="text-sm font-bold text-primary hover:text-gold">← All articles</Link>
        </div>
      </article>
      <SocialProofBar variant="reviews" />
      <div className="h-10" />
    </>
  );
}
