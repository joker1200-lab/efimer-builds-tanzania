import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { CONTACT } from "@/lib/site";

const QUICK = [
  "I want a quote for a building project",
  "I need road construction services",
  "Borehole & water supply inquiry",
  "Renovation works quote",
  "General inquiry",
];

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const send = (text: string) => {
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-border bg-card shadow-2xl overflow-hidden animate-fade-up">
          <div className="bg-[oklch(0.5_0.15_145)] text-white p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/20 grid place-items-center">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm">ECCL Support</div>
              <div className="text-xs opacity-90">Typically replies within minutes</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="p-1"><X className="h-5 w-5" /></button>
          </div>
          <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
            <div className="rounded-2xl rounded-tl-none bg-secondary p-3 text-sm">
              Hello 👋 Welcome to <b>EF. IMER Construction (ECCL)</b>. How can we help you today?
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">Quick questions</div>
            {QUICK.map((q) => (
              <button key={q} onClick={() => send(q)} className="w-full text-left rounded-xl border border-border bg-background px-3 py-2.5 text-sm hover:border-gold hover:bg-secondary transition">
                {q}
              </button>
            ))}
            <div className="flex gap-2 pt-2">
              <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Type your message…" className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-gold" />
              <button onClick={() => msg && send(msg)} className="rounded-full bg-[oklch(0.5_0.15_145)] p-2 text-white"><Send className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="WhatsApp"
        className="fixed bottom-5 right-4 z-50 h-14 w-14 rounded-full bg-[oklch(0.5_0.15_145)] text-white shadow-2xl grid place-items-center animate-pulse-ring hover:scale-110 transition"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </>
  );
}
