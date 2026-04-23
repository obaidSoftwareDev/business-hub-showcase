import { motion } from "framer-motion";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import FinalCTA from "@/components/site/FinalCTA";
import StockLedgerMock from "@/components/mock/StockLedgerMock";

const releases = [
  { v: "v3.4", date: "23 Apr 2026", title: "Reports refresh — period closes that close.", tags: ["Reports", "Performance"], notes: ["New period close report aggregates sales, receipts and stock movement in one view.", "Aggregations rebuilt — 4× faster on large workspaces.", "Improved CSV exports with stable column ordering."] },
  { v: "v3.3", date: "27 Mar 2026", title: "Allocations — partial settlements & adjustments separated.", tags: ["Collections", "Allocations"], notes: ["Partial settlement support across multiple invoices.", "Adjustments now logged separately from receipts.", "Customer ledger view improvements."] },
  { v: "v3.2", date: "29 Feb 2026", title: "Audit log streaming.", tags: ["Audit", "Workspace"], notes: ["Audit log now streams in real time across the workspace.", "User attribution shown inline on every operating screen.", "Filter & query improvements."] },
  { v: "v3.1", date: "31 Jan 2026", title: "Workspace switching, properly.", tags: ["Workspace"], notes: ["Switch between workspaces without losing context.", "Per-workspace audit history.", "Faster initial load."] },
  { v: "v3.0", date: "20 Dec 2025", title: "Stock ledger and adjustments.", tags: ["Inventory"], notes: ["First-class stock ledger surfaced across products.", "Adjustments require a reason — captured on every entry.", "Stock valuation snapshot in the dashboard."] },
];

const Changelog = () => (
  <>
    <PageHero
      eyebrow="Changelog · product evolution"
      title="Every release that has shaped the operating loop."
      description="A grounded log of what changed and why — written for operators who depend on the platform."
      visualTitle="Stock ledger · v3.0+"
      visual={<StockLedgerMock />}
    />

    <Section index="01 ·" eyebrow="Latest" title="The newest release, in detail.">
      <div className="border border-border bg-background p-8 md:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono bg-foreground text-background px-2 py-1">{releases[0].v}</span>
          <span className="text-xs text-muted-foreground font-mono">{releases[0].date}</span>
          {releases[0].tags.map((t) => <span key={t} className="text-[10px] uppercase tracking-wider border border-border px-2 py-1">{t}</span>)}
        </div>
        <h3 className="h-section mt-6 max-w-3xl">{releases[0].title}</h3>
        <ul className="mt-8 space-y-3">
          {releases[0].notes.map((n) => <li key={n} className="text-sm md:text-[15px] leading-relaxed border-b border-border pb-3">→ {n}</li>)}
        </ul>
      </div>
    </Section>

    <Section index="02 ·" eyebrow="Timeline" title="A history you can rely on." variant="muted">
      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
        <div className="space-y-12">
          {releases.map((r, i) => (
            <motion.article
              key={r.v}
              className="relative grid md:grid-cols-2 gap-10 md:gap-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.04 }}
            >
              <div className={`md:text-right ${i % 2 === 0 ? "" : "md:order-2 md:text-left"}`}>
                <div className="ml-12 md:ml-0">
                  <div className="font-mono text-xs text-muted-foreground">{r.date}</div>
                  <div className="font-display text-3xl tracking-tight mt-1">{r.v}</div>
                  <div className="flex flex-wrap gap-1.5 mt-3 md:justify-end">
                    {r.tags.map((t) => <span key={t} className="text-[10px] uppercase tracking-wider border border-border px-2 py-1">{t}</span>)}
                  </div>
                </div>
              </div>
              <span className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 bg-background border border-foreground rounded-full" />
              <div className={`ml-12 md:ml-0 ${i % 2 === 0 ? "" : "md:order-1"}`}>
                <h3 className="h-card">{r.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {r.notes.map((n) => <li key={n} className="leading-relaxed">— {n}</li>)}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>

    <Section index="03 ·" eyebrow="Philosophy" title="Why we ship the way we do."
      description="No surprise releases. No half-shipped features. Every change makes the operating loop tighter or clearer — never noisier.">
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {[
          { t: "Operator-first", d: "Changes are validated against real operating workflows before they ship." },
          { t: "Predictable cadence", d: "We release in a predictable rhythm. No 'big bang', no panic patches." },
          { t: "Reversible by default", d: "Every release ships with rollback discipline and clean migration notes." },
        ].map((p, i) => (
          <motion.div key={p.t} className="bg-background p-7" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }}>
            <div className="num-tag">0{i + 1}</div>
            <h3 className="h-card mt-3">{p.t}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <FinalCTA eyebrow="Stay close" title="Watch the platform evolve — release after release." />
  </>
);

export default Changelog;
