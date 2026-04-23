import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, BookOpen, PlayCircle, FileText, Workflow, History, HelpCircle, Search } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import FinalCTA from "@/components/site/FinalCTA";
import FAQList from "@/components/site/FAQList";

const filters = ["All", "Getting started", "Walkthroughs", "Help articles", "Workflows", "Release notes"];

const resources = [
  { f: "Getting started", t: "Set up your first workspace", d: "Workspace, users and master data in under an hour.", read: "8 min" },
  { f: "Getting started", t: "Add your first 100 SKUs", d: "Bulk import patterns and category structure that scales.", read: "10 min" },
  { f: "Walkthroughs", t: "Run a sale end-to-end", d: "From customer pick to invoice to receipt allocation.", read: "12 min" },
  { f: "Walkthroughs", t: "Receive a purchase order", d: "PO → inward → supplier payment in one flow.", read: "9 min" },
  { f: "Help articles", t: "Why an allocation is required", d: "The discipline behind allocations — and how to use it.", read: "5 min" },
  { f: "Help articles", t: "Reading the audit log", d: "Find what changed, who changed it, and when.", read: "6 min" },
  { f: "Workflows", t: "Daily close checklist", d: "The five things to verify every operating day.", read: "4 min" },
  { f: "Workflows", t: "Period close checklist", d: "Reports to review before closing a financial period.", read: "7 min" },
  { f: "Release notes", t: "v3.4 · Reports refresh", d: "New period reports and faster aggregation.", read: "3 min" },
];

const Resources = () => {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");
  const filtered = resources.filter((r) => (active === "All" || r.f === active) && (q === "" || r.t.toLowerCase().includes(q.toLowerCase())));

  return (
    <>
      <PageHero
        eyebrow="Resources · operator hub"
        title="Everything to learn, run and master BusniessHub."
        description="Guides, walkthroughs and workflow checklists — built for operators, not engineers."
      />

      <Section index="01 ·" eyebrow="Hub" title="A search-first, filter-led resource library.">
        <div className="border border-border bg-background">
          <div className="p-4 border-b border-border flex flex-col md:flex-row gap-3 md:items-center">
            <div className="flex items-center gap-2 border border-border rounded-sm px-3 py-2 bg-surface-1 text-sm flex-1">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search guides, articles…" className="bg-transparent outline-none w-full placeholder:text-muted-foreground" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {filters.map((f) => (
                <button key={f} onClick={() => setActive(f)} className={`text-[11px] px-2.5 py-1.5 border rounded-sm transition-colors ${active === f ? "bg-foreground text-background border-foreground" : "border-border hover:bg-surface-1"}`}>{f}</button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => (
              <motion.a key={r.t} href="#" className="group p-6 border-b border-r border-border last:border-r-0 hover:bg-surface-1/60 transition-colors" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.03 }}>
                <div className="flex items-center justify-between"><span className="num-tag">{r.f}</span><span className="text-[10px] text-muted-foreground">{r.read}</span></div>
                <h3 className="h-card mt-3 group-hover:underline underline-offset-4">{r.t}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.d}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs">Read <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </Section>

      <Section index="02 ·" eyebrow="Getting started" title="Start where it makes the most difference." variant="muted">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {[{ i: BookOpen, t: "Workspace setup" }, { i: PlayCircle, t: "First operating week" }, { i: FileText, t: "Master data templates" }].map((g, i) => (
            <motion.div key={g.t} className="bg-background p-7" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
              <g.i className="w-5 h-5" strokeWidth={1.4} />
              <h3 className="h-card mt-4">{g.t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">A structured starting point — written for operators.</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section index="03 ·" eyebrow="Walkthroughs" title="See the loop in action.">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {["Sales end-to-end", "Purchases end-to-end", "Period close walkthrough"].map((t, i) => (
            <motion.div key={t} className="bg-background p-7" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
              <PlayCircle className="w-5 h-5" strokeWidth={1.4} />
              <h3 className="h-card mt-4">{t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">A 10-minute guided walkthrough through one core operating motion.</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section index="04 ·" eyebrow="Workflows" title="Repeatable checklists for daily operation." variant="muted">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {[{ i: Workflow, t: "Daily close" }, { i: Workflow, t: "Weekly review" }].map((g, i) => (
            <motion.div key={g.t} className="bg-background p-8" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }}>
              <g.i className="w-5 h-5" strokeWidth={1.4} />
              <h3 className="h-card mt-4">{g.t} checklist</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">The exact steps the best operators run — distilled into a clean checklist.</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="release-notes" index="05 ·" eyebrow="Release notes" title="Track every product change.">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {["v3.4 — Apr 2026", "v3.3 — Mar 2026", "v3.2 — Feb 2026"].map((t, i) => (
            <motion.div key={t} className="bg-background p-7" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
              <History className="w-5 h-5" strokeWidth={1.4} />
              <h3 className="h-card mt-4">{t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Highlights, changes and migration notes.</p>
              <Link to="/changelog" className="mt-5 inline-flex items-center gap-1 text-xs">Open changelog <ArrowUpRight className="w-3 h-3" /></Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="faq" index="06 ·" eyebrow="FAQ" title="Top product questions." variant="muted">
        <FAQList items={[
          { q: "Where do I start?", a: "Workspace setup, then master data, then your first operating week. The Getting started section walks you through it." },
          { q: "How do I find a specific guide?", a: "Use the search at the top of the resource hub, or filter by category." },
          { q: "Are walkthroughs videos or text?", a: "Both. Most walkthroughs combine a short video with a written checklist." },
          { q: "Can my whole team learn from these?", a: "Yes. The hub is built for floor staff, accounts and owners — not just admins." },
        ]} />
      </Section>

      <FinalCTA eyebrow="Operator hub" title="Learn the loop. Then run it every day." />
    </>
  );
};

export default Resources;
