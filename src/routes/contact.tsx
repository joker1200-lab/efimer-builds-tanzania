import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from "lucide-react";
import { CONTACT, IMG } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SocialProofBar } from "@/components/SocialProof";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact ECCL | Construction Tanzania" },
      { name: "description", content: "Get in touch with EF. IMER Construction (ECCL) in Dar es Salaam. Request a quote or site visit." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `New enquiry from ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`;
    const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(body)}`;
    window.open(wa, "_blank");
    setSent(true);
  };

  return (
    <>
      <PageHero title="Let's build together" subtitle="Reach us by phone, WhatsApp or email — or send a message below and our team will respond within one business day." image={IMG.districtOffice} />
      <SocialProofBar variant="clients" />
      <section className="container-x py-16 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-primary">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">We'll receive it instantly on WhatsApp for the fastest response.</p>
              <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
                <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                <Field label="Service of interest" value={form.service} onChange={(v) => setForm({ ...form, service: v })} placeholder="e.g. Building construction" />
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-foreground/70 uppercase tracking-wider">Your message</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-gold" />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:opacity-90">
                    Send message <Send className="h-4 w-4" />
                  </button>
                  {sent && <div className="mt-3 text-sm text-green-600">Opening WhatsApp — thank you!</div>}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
        <aside className="space-y-4">
          <InfoCard icon={MapPin} title="Visit us" body={<>{CONTACT.address}<br />{CONTACT.postal}</>} />
          <InfoCard icon={Phone} title="Call us" body={<>{CONTACT.phones.map(p => <div key={p}><a className="hover:text-gold" href={`tel:${p.replace(/\s/g, "")}`}>{p}</a></div>)}</>} />
          <InfoCard icon={Mail} title="Email us" body={<a className="hover:text-gold break-all" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>} />
          <InfoCard icon={Clock} title="Working hours" body={<>Mon – Sat<br />07:30 – 18:00</>} />
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-[oklch(0.5_0.15_145)] text-white p-5 hover-lift">
            <MessageCircle className="h-6 w-6" />
            <div>
              <div className="font-bold">Chat on WhatsApp</div>
              <div className="text-xs opacity-90">Fastest response</div>
            </div>
          </a>
        </aside>
      </section>
      <SocialProofBar variant="reviews" />
      <div className="h-10" />
    </>
  );
}

function Field({ label, value, onChange, type = "text", required, placeholder }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-medium text-foreground/70 uppercase tracking-wider">{label}</label>
      <input type={type} required={required} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-gold" />
    </div>
  );
}

function InfoCard({ icon: Icon, title, body }: { icon: React.ComponentType<{ className?: string }>; title: string; body: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 flex gap-4">
      <div className="h-10 w-10 shrink-0 rounded-lg bg-gold/20 text-gold grid place-items-center"><Icon className="h-5 w-5" /></div>
      <div className="min-w-0">
        <div className="font-bold text-primary">{title}</div>
        <div className="text-sm text-muted-foreground mt-1">{body}</div>
      </div>
    </div>
  );
}
