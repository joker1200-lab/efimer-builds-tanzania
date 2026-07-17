import type { ReactNode } from "react";

export function PageHero({ title, subtitle, image, children }: { title: string; subtitle?: string; image: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" className="h-full w-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
      </div>
      <div className="container-x py-20 lg:py-28 text-primary-foreground">
        <div className="max-w-3xl animate-fade-up">
          <div className="text-xs font-bold uppercase tracking-widest text-gold">EF. IMER Construction · ECCL</div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">{title}</h1>
          {subtitle && <p className="mt-4 text-lg opacity-90 max-w-2xl">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
