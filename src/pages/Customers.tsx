import { motion } from "framer-motion";
import { Quote, Store, Warehouse, UserCog } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import FinalCTA from "@/components/site/FinalCTA";
import { Parallax } from "@/components/motion/Parallax";
import AppFrame from "@/components/mock/AppFrame";
import DashboardMock from "@/components/mock/DashboardMock";
import ReceiptsMock from "@/components/mock/ReceiptsMock";

const segments = [
  { i: Store, n: "Retail floor operators", d: "Counter sales, walk-in customers, cash and credit mixed all day. Tight stock and tight close." },
  { i: Warehouse, n: "Wholesale & stock-heavy", d: "Credit cycles, supplier exposure, allocation discipline. Volume that punishes spreadsheets." },
  { i: UserCog, n: "Admin & operator-led teams", d: "Owners and admins who need one workspace they can actually trust — not five tools they reconcile." },
];

const stories = [
  { t: "From spreadsheets to a single source.", d: "Closing the day stopped being a guess. Daily sales, receipts and stock now agree without exports." },
  { t: "Receipts that allocate, every time.", d: "Customer balances finally reflect reality. No floating amounts, no surprise outstandings." },
  { t: "One workspace, three businesses.", d: "Three locations on one platform, books fully separated, audit per workspace, single login for the owner." },
];

const Customers = () => (
  <>
    <PageHero
      eyebrow="Customers · who runs on BusniessHub"
      title="Operators who need the books to match the floor."
      description="Retailers, wholesalers and operator-led teams choose BusniessHub when discipline matters more than dashboards."
      primaryCta={{ label: "Talk to the team", to: "/contact" }}
    />

    <Section index="01 ·" eyebrow="Who uses BusniessHub" title="Three operating shapes. One platform.">
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {segments.map((s, i) => (
          <motion.div key={s.n} className="bg-background p-7" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }}>
            <s.i className="w-5 h-5" strokeWidth={1.4} />
            <div className="num-tag mt-6">{s.n}</div>
            <p className="text-sm mt-3 leading-relaxed text-muted-foreground">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section index="02 ·" eyebrow="Retail workflow" title="Counter-first, but never spreadsheet-second." variant="muted"
      description="Retailers run BusniessHub for the same reason they trust a good cash drawer: it just behaves the way you expect.">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <ul className="border-t border-border">
            {["Walk-in sales without friction.", "Mixed-tender invoices in one screen.", "Daily close that actually closes.", "Stock alerts that don't get ignored."].map((b, i) => (
              <li key={b} className="border-b border-border py-4 flex items-start gap-4 text-sm"><span className="num-tag pt-1">0{i + 1}</span>{b}</li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7"><Parallax amount={26}><AppFrame><DashboardMock /></AppFrame></Parallax></div>
      </div>
    </Section>

    <Section index="03 ·" eyebrow="Wholesale workflow" title="Credit cycles handled with discipline."
      description="Wholesale operators live and die by allocations and supplier exposure. BusniessHub keeps both honest.">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7"><Parallax amount={26}><AppFrame><ReceiptsMock /></AppFrame></Parallax></div>
        <div className="lg:col-span-5">
          <ul className="border-t border-border">
            {["Customer-by-customer outstanding view.", "Receipts allocate against invoices.", "Supplier exposure visible always.", "Stock ledger you can defend."].map((b, i) => (
              <li key={b} className="border-b border-border py-4 flex items-start gap-4 text-sm"><span className="num-tag pt-1">0{i + 1}</span>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    <Section index="04 ·" eyebrow="Admin & operator users" title="One workspace owners can actually trust." variant="muted">
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {["Roles scoped to the workspace.", "Audit log answers every question.", "Reports are the source — not exports."].map((t, i) => (
          <motion.div key={i} className="bg-background p-7" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }}>
            <div className="num-tag">0{i + 1}</div>
            <p className="text-sm mt-3 leading-relaxed">{t}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section index="05 ·" eyebrow="Operator voices" title="What changes after the switch.">
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {[
          { q: "Closing the day stopped being a fight. The numbers agree.", w: "Owner · 3-store retail" },
          { q: "Outstanding finally matches what we actually owed.", w: "Accounts head · wholesale" },
          { q: "We run three businesses from one login. Audit stays clean.", w: "Operator · multi-business" },
        ].map((c, i) => (
          <motion.figure key={i} className="bg-background p-8" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }}>
            <Quote className="w-4 h-4 text-muted-foreground" />
            <blockquote className="mt-4 font-display text-lg tracking-tight leading-snug">"{c.q}"</blockquote>
            <figcaption className="mt-6 text-xs text-muted-foreground">{c.w}</figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>

    <Section index="06 ·" eyebrow="Before / after" title="The shift, in one frame." variant="muted">
      <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
        {[
          { h: "Before", points: ["Sales in a notebook, stock in a sheet.", "Receipts floated for weeks.", "Closing day was an argument.", "Reports built by hand on Sundays."] },
          { h: "After", points: ["One workspace running the whole loop.", "Receipts allocate the moment they land.", "Daily close in minutes, not hours.", "Reports are the live operating data."] },
        ].map((c) => (
          <div key={c.h} className="bg-background p-8 md:p-10">
            <div className="num-tag">{c.h}</div>
            <ul className="mt-6 space-y-3 text-sm">
              {c.points.map((p) => <li key={p} className="leading-relaxed border-b border-border pb-3">{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    <FinalCTA title="Run the operation the way it should always have run." />
  </>
);

export default Customers;
