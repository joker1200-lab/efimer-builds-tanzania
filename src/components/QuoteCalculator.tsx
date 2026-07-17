import { useMemo, useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/site";

const TYPES = [
  { id: "residential", label: "Residential Building", rate: 950000 },
  { id: "commercial", label: "Commercial Building", rate: 1450000 },
  { id: "renovation", label: "Renovation Works", rate: 550000 },
  { id: "road-gravel", label: "Gravel Road (per km)", rate: 85000000, unit: "km" },
  { id: "road-tarmac", label: "Tarmac Road (per km)", rate: 480000000, unit: "km" },
  { id: "borehole", label: "Borehole & Pump", rate: 22000000, unit: "unit" },
  { id: "water-tank", label: "Water Storage Tank", rate: 38000000, unit: "unit" },
] as const;

const FINISH = [
  { id: "standard", label: "Standard", mult: 1 },
  { id: "premium", label: "Premium", mult: 1.25 },
  { id: "luxury", label: "Luxury", mult: 1.55 },
] as const;

export function QuoteCalculator() {
  const [type, setType] = useState<string>(TYPES[0].id);
  const [size, setSize] = useState<number>(150);
  const [finish, setFinish] = useState<string>("standard");

  const t = TYPES.find((x) => x.id === type)!;
  const f = FINISH.find((x) => x.id === finish)!;
  const isUnit = "unit" in t && (t.unit === "km" || t.unit === "unit");

  const total = useMemo(() => {
    const base = isUnit ? t.rate * size : t.rate * size;
    return Math.round(base * f.mult);
  }, [t, f, size, isUnit]);

  const fmt = (n: number) => "TZS " + n.toLocaleString("en-US");

  const wa = () => {
    const msg = `Hello ECCL, I'd like a formal quote for:\n• Project: ${t.label}\n• Size: ${size} ${isUnit ? t.unit : "m²"}\n• Finish: ${f.label}\n• Estimated: ${fmt(total)}\n\nPlease contact me.`;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="rounded-2xl bg-card/95 backdrop-blur-md border border-border p-5 sm:p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-9 w-9 rounded-lg bg-gold/20 text-gold grid place-items-center"><Calculator className="h-5 w-5" /></div>
        <div>
          <div className="font-bold text-primary">Instant Quote Calculator</div>
          <div className="text-xs text-muted-foreground">Get an indicative price in seconds</div>
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <label className="text-xs font-medium text-foreground/70 uppercase tracking-wider">Project Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-gold">
            {TYPES.map((x) => <option key={x.id} value={x.id}>{x.label}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-foreground/70 uppercase tracking-wider flex justify-between">
            <span>{isUnit ? `Quantity (${t.unit})` : "Size (m²)"}</span>
            <span className="text-gold font-bold">{size}</span>
          </label>
          <input
            type="range"
            min={isUnit ? 1 : 30}
            max={isUnit ? (t.unit === "km" ? 50 : 20) : 2000}
            step={isUnit ? 1 : 10}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="mt-2 w-full accent-[oklch(0.78_0.06_80)]"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-foreground/70 uppercase tracking-wider">Finish Level</label>
          <div className="mt-1 grid grid-cols-3 gap-2">
            {FINISH.map((x) => (
              <button key={x.id} onClick={() => setFinish(x.id)} className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${finish === x.id ? "border-gold bg-gold/15 text-primary" : "border-border bg-background text-foreground/70"}`}>
                {x.label}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-primary text-primary-foreground p-4 mt-2">
          <div className="text-xs uppercase tracking-widest opacity-70">Estimated Cost</div>
          <div className="text-2xl sm:text-3xl font-bold text-gold mt-1">{fmt(total)}</div>
          <div className="text-[11px] opacity-60 mt-1">Indicative estimate. Final quote after site assessment.</div>
        </div>
        <button onClick={wa} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold text-primary px-5 py-3 text-sm font-bold hover:brightness-95 transition">
          Get Formal Quote via WhatsApp <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
