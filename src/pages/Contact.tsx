import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageSquare, Calendar } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import FinalCTA from "@/components/site/FinalCTA";
import FAQList from "@/components/site/FAQList";
import SuppliersMock from "@/components/mock/SuppliersMock";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message received", { description: "We'll get back to you within one business day." });
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact · start a conversation"
        title="Talk to the team behind BusniessHub."
        description="Setup, demo, fit, support, partnerships — start a conversation and we'll route you to the right person."
        primaryCta={{ label: "Send a note", to: "#contact" }}
        secondaryCta={{ label: "Book a demo", to: "#contact" }}
        visualTitle="Suppliers · partner ledger"
        visualUrl="app.busnieshub.com/suppliers"
        visual={<SuppliersMock />}
        tone="Inquiry & onboarding"
        frameCaption="Frame 09 / 12 · Suppliers"
        meta={[
          { label: "Reply", value: "≤ 1 business day" },
          { label: "Demos", value: "Operator-led" },
          { label: "Maker", value: "EVORIX" },
        ]}
        kpis={[
          { k: "Reply window", v: "≤ 1 day", sub: "Usually faster" },
          { k: "Routes", v: "3", sub: "Demo · Setup · Fit" },
          { k: "Sales calls", v: "0", sub: "Conversations only" },
          { k: "Real person", v: "Always", sub: "No automation" },
        ]}
        secondaryTitle="Reach"
        secondaryUrl="hello.busnieshub.com"
        secondaryFragment={
          <ul className="p-4 text-[11px] divide-y divide-border">
            {[
              { k: "Demo", v: "demo@busnieshub.app" },
              { k: "Setup", v: "setup@busnieshub.app" },
              { k: "Fit", v: "hello@busnieshub.app" },
              { k: "Support", v: "support@busnieshub.app" },
            ].map((r) => (
              <li key={r.k} className="py-2.5 flex items-baseline justify-between gap-3">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{r.k}</span>
                <span className="font-mono">{r.v}</span>
              </li>
            ))}
            <li className="pt-3 mt-1 border-t border-border flex items-center justify-between font-mono text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-foreground status-pulse" />Inbox</span>
              <span>open</span>
            </li>
          </ul>
        }
      />

      <Section index="01 ·" eyebrow="How to reach us" title="Choose the conversation that fits.">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {[
            { i: Calendar, t: "Book a demo", d: "Walk through the operating loop with our team." },
            { i: MessageSquare, t: "Setup inquiry", d: "Get a clear picture of onboarding and timelines." },
            { i: Mail, t: "Product fit", d: "Tell us about your business — we'll be honest about fit." },
          ].map((b, i) => (
            <motion.div key={b.t} className="bg-background p-7" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }}>
              <b.i className="w-5 h-5" strokeWidth={1.4} />
              <h3 className="h-card mt-4">{b.t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="contact" index="02 ·" eyebrow="Send a note" title="Tell us what you're working on." variant="muted">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="lead">A short note is enough — your business shape, what you currently use, what's not working. We'll come back with a structured next step.</p>
            <ul className="mt-10 border-t border-border max-w-md">
              {[{ k: "Email", v: "hello@busnieshub.app" }, { k: "Setup inquiries", v: "setup@busnieshub.app" }, { k: "Maker", v: "EVORIX Systems" }].map((r) => (
                <li key={r.k} className="border-b border-border py-4 flex items-baseline justify-between gap-6">
                  <span className="num-tag">{r.k}</span>
                  <span className="text-sm font-mono">{r.v}</span>
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={onSubmit} className="lg:col-span-7 bg-background border border-border p-8 grid gap-5">
            <div className="grid md:grid-cols-2 gap-5">
              <label className="grid gap-2">
                <span className="num-tag">Your name</span>
                <input required name="name" className="bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm" placeholder="Aarav Mehta" />
              </label>
              <label className="grid gap-2">
                <span className="num-tag">Email</span>
                <input required type="email" name="email" className="bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm" placeholder="aarav@business.com" />
              </label>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <label className="grid gap-2">
                <span className="num-tag">Business</span>
                <input name="business" className="bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm" placeholder="Acme Retail · 3 stores" />
              </label>
              <label className="grid gap-2">
                <span className="num-tag">Reason</span>
                <select name="reason" className="bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm">
                  <option>Book demo</option>
                  <option>Setup inquiry</option>
                  <option>Product fit</option>
                  <option>Support</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <label className="grid gap-2">
              <span className="num-tag">Message</span>
              <textarea required name="message" rows={5} className="bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm resize-none" placeholder="Tell us about your business and what you're trying to fix." />
            </label>
            <div className="flex items-center justify-between pt-3">
              <span className="text-[11px] text-muted-foreground">We reply within one business day.</span>
              <button disabled={submitting} className="btn-sheen inline-flex items-center gap-1.5 bg-foreground text-background text-sm px-5 py-3 rounded-sm disabled:opacity-60">
                {submitting ? "Sending…" : "Send message"} <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </Section>

      <Section index="03 ·" eyebrow="FAQ" title="Common questions before getting in touch.">
        <FAQList items={[
          { q: "How fast do you respond?", a: "Within one business day. Usually faster." },
          { q: "Will I talk to a real person?", a: "Yes. Setup and demo conversations are run by our team — not automation." },
          { q: "Do I need to commit anything to book a demo?", a: "No. Demos are walk-throughs of the operating loop, not sales calls." },
          { q: "Can I get implementation support in my region?", a: "Tell us where you operate and we'll be straight about how we can support." },
        ]} />
      </Section>

      <FinalCTA eyebrow="Talk to us" title="Start a conversation. We'll come back with a clear next step." secondary={{ label: "See pricing", to: "/pricing" }} primary={{ label: "Open Workspace", to: "/app" }} />
    </>
  );
};

export default Contact;
