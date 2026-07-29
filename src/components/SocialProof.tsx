import { Star, Users, Award, Building2 } from "lucide-react";
import { PARTNERS } from "@/lib/site";

export function SocialProofBar({ variant = "stats" }: { variant?: "stats" | "clients" | "reviews" | "trust" }) {
  if (variant === "clients") {
    return (
      <div className="border-y border-border bg-secondary/40">
        <div className="container-x py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Trusted by</div>
          {PARTNERS.map((p) => (
            <div key={p} className="text-sm font-bold text-primary/70 tracking-tight">{p}</div>
          ))}
        </div>
      </div>
    );
  }
  if (variant === "reviews") {
    return (
      <div className="container-x">
        <div className="rounded-2xl bg-primary text-primary-foreground p-6 sm:p-8 grid gap-6 sm:grid-cols-3 items-center">
          <div className="flex items-center gap-3">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-gold text-gold" />)}</div>
            <div>
              <div className="font-bold">4.9 / 5</div>
              <div className="text-xs opacity-70">from 180+ verified clients</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-gold" />
            <div><div className="font-bold">120+ Projects</div><div className="text-xs opacity-70">completed across Tanzania</div></div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="h-8 w-8 text-gold" />
            <div><div className="font-bold">Class Six Contractor</div><div className="text-xs opacity-70">CRB registered & compliant</div></div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "trust") {
    return (
      <div className="container-x">
        <div className="rounded-2xl border border-border bg-card p-6 grid gap-6 sm:grid-cols-4 text-center">
          {[
            { icon: Building2, k: "120+", v: "Projects Delivered" },
            { icon: Users, k: "500+", v: "Happy Clients" },
            { icon: Award, k: "10+", v: "Years Experience" },
            { icon: Star, k: "4.9★", v: "Client Rating" },
          ].map(({ icon: Icon, k, v }) => (
            <div key={v}>
              <Icon className="h-6 w-6 mx-auto text-gold" />
              <div className="mt-2 text-2xl font-bold text-primary">{k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
