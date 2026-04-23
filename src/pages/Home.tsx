import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Boxes, ShoppingCart, Users, Wallet, BarChart3, ScrollText, LayoutGrid, Layers, Truck, FolderTree, Receipt, Search } from "lucide-react";

import Section from "@/components/site/Section";
import FinalCTA from "@/components/site/FinalCTA";
import { FadeUp, SplitWords } from "@/components/motion/SplitWords";
import { Parallax } from "@/components/motion/Parallax";
import CursorDepth from "@/components/motion/CursorDepth";
import AmbientDepth from "@/components/motion/AmbientDepth";
import AppFrame from "@/components/mock/AppFrame";
import heroBg from "@assets/generated_images/hero_bg.png";
import DashboardMock from "@/components/mock/DashboardMock";
import ProductsMock from "@/components/mock/ProductsMock";
import ReceiptsMock from "@/components/mock/ReceiptsMock";
import AuditMock from "@/components/mock/AuditMock";
import ReportsMock from "@/components/mock/ReportsMock";

/* --------------------------------------------------------------- HERO */

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -60]);
  const bgY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -100]);
  const bgScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1.05, 1.14]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);

  return (
    <section ref={ref} className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden border-b border-border">
      <AmbientDepth intensity="med" />
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 will-change-transform"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src={heroBg}
          alt=""
          data-testid="img-hero-background"
          className="w-full h-full object-cover opacity-[0.18] dark:opacity-[0.22] mask-vignette select-none pointer-events-none"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
      </motion.div>
      <div className="absolute inset-0 grid-bg mask-vignette opacity-50" aria-hidden />

      <div className="container-edge relative">
        <div className="grid grid-cols-12 gap-6">
          <motion.div className="col-span-12 lg:col-span-8" style={{ y: y2 }}>
            <FadeUp>
              <div className="eyebrow">Operating system · v3.4 · Built by EVORIX Systems</div>
            </FadeUp>

            <h1 className="h-display mt-8 max-w-4xl">
              <SplitWords text="Run inventory, sales and reporting" />
              <br className="hidden md:block" />
              <SplitWords text="from one disciplined workspace." delay={0.15} />
            </h1>

            <FadeUp delay={0.4}>
              <p className="lead mt-8 max-w-xl">
                BusniessHub is the operations platform for retailers and wholesalers — products, purchases,
                customers, payments and audit, all under one workspace. No spreadsheets. No drift.
              </p>
            </FadeUp>

            <FadeUp delay={0.55}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/app"
                  className="btn-sheen group inline-flex items-center gap-1.5 bg-foreground text-background text-sm px-5 py-3 rounded-sm"
                >
                  Open Workspace
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/product"
                  className="inline-flex items-center gap-1.5 border border-border text-sm px-5 py-3 rounded-sm hover:bg-surface-1 transition-colors"
                >
                  Explore product
                </Link>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground px-2 py-3 inline-flex items-center gap-1"
                >
                  Book demo <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeUp>
          </motion.div>

          <motion.aside className="hidden lg:block lg:col-span-4 self-end" style={{ y: y1, opacity }}>
            <div className="grid grid-cols-2 gap-px bg-border border border-border">
              {[
                { k: "Workflows", v: "11" },
                { k: "Modules", v: "12" },
                { k: "Workspaces", v: "∞" },
                { k: "Audit events", v: "live" },
              ].map((s) => (
                <div key={s.k} className="bg-background p-4">
                  <div className="num-tag">{s.k}</div>
                  <div className="mt-2 text-2xl font-display font-medium tracking-tight">{s.v}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-muted-foreground leading-relaxed">
              One operator-grade platform — from product master to receipts. Designed to be used every single day.
            </p>
          </motion.aside>
        </div>

        {/* Layered hero visual */}
        <CursorDepth className="relative mt-16 md:mt-24" intensity={10}>
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative"
          >
            <div data-depth="0.4" className="will-change-transform">
              <AppFrame className="shadow-pop">
                <DashboardMock className="text-foreground" />
              </AppFrame>
            </div>

            {/* Floating panels */}
            <div data-depth="0.9" className="hidden md:block absolute -left-8 -bottom-12 w-72 will-change-transform">
              <AppFrame className="shadow-pop">
                <div className="p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Quick action</div>
                  <div className="text-sm font-medium tracking-tight mt-1">New sale</div>
                  <div className="mt-3 flex items-center gap-1.5 border border-border rounded-sm px-2 py-1.5 bg-surface-1 text-[11px] text-muted-foreground">
                    <Search className="w-3 h-3" /> Customer or SKU
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-1.5 text-[10px]">
                    {["Cash", "Credit", "Mixed"].map((m, i) => (
                      <div key={m} className={`text-center px-1 py-1 rounded-sm border ${i === 0 ? "bg-foreground text-background border-foreground" : "border-border"}`}>{m}</div>
                    ))}
                  </div>
                </div>
              </AppFrame>
            </div>

            <div data-depth="1.2" className="hidden md:block absolute -right-6 -top-10 w-80 will-change-transform">
              <AppFrame className="shadow-pop">
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Stock alert</div>
                    <span className="text-[9px] font-mono text-muted-foreground animate-blink">●</span>
                  </div>
                  <div className="mt-1 text-sm font-medium tracking-tight">3 SKUs below threshold</div>
                  <ul className="mt-2 divide-y divide-border text-[10.5px]">
                    <li className="flex items-center justify-between py-1.5"><span>SKU-10422 · Mustard Oil</span><span className="font-mono">12</span></li>
                    <li className="flex items-center justify-between py-1.5"><span>SKU-10423 · Cooker 5L</span><span className="font-mono">4</span></li>
                    <li className="flex items-center justify-between py-1.5"><span>SKU-10428 · Towel C</span><span className="font-mono">6</span></li>
                  </ul>
                </div>
              </AppFrame>
            </div>
          </motion.div>
        </CursorDepth>
      </div>
    </section>
  );
};

/* --------------------------------------------------------------- VALUE STRIP */

const ValueStrip = () => {
  const items = [
    "One workspace",
    "Operational clarity",
    "Inventory to reporting",
    "Daily control",
    "Trustworthy workflows",
    "Audit by design",
  ];
  return (
    <section className="border-b border-border bg-surface-1/60 overflow-hidden">
      <div className="py-6 flex">
        <div className="marquee-track">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-16 pr-16">
              {items.map((it, i) => (
                <div key={`${dup}-${i}`} className="flex items-center gap-3 text-sm">
                  <span className="w-1 h-1 rounded-full bg-foreground" />
                  <span className="font-display tracking-tight">{it}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --------------------------------------------------------------- WORKFLOW STORY */

const workflow = [
  { n: "01", t: "Add products", d: "Define SKUs, categories, units, pricing and reorder thresholds. Master data stays clean." },
  { n: "02", t: "Receive stock", d: "Raise purchases, receive inwards against suppliers, post supplier payments and reconcile." },
  { n: "03", t: "Sell stock", d: "Run cash, credit or mixed sales. Invoices, allocations and ledgers update in real time." },
  { n: "04", t: "Collect payments", d: "Issue receipts, allocate to invoices, watch outstanding shrink customer-by-customer." },
  { n: "05", t: "Review reports", d: "Sales vs receipts, stock value, top customers, supplier exposure — at the moment you need them." },
  { n: "06", t: "Trace activity", d: "Every action attributed in the audit log. No black boxes. No missing context." },
];

const WorkflowStory = () => {
  return (
    <Section
      index="03 ·"
      eyebrow="Daily operating loop"
      title={<><span className="text-muted-foreground">From the first SKU to the closing report,</span> the same disciplined loop runs every day.</>}
      description="BusniessHub is built around one rhythm operators already trust. Six steps. Repeatable. Auditable."
    >
      <div className="grid gap-px bg-border border border-border">
        {workflow.map((w, i) => (
          <motion.div
            key={w.n}
            className="grid grid-cols-12 gap-6 bg-background p-6 md:p-8 group hover:bg-surface-1 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="col-span-2 md:col-span-1 num-tag pt-1">{w.n}</div>
            <div className="col-span-10 md:col-span-4">
              <div className="h-card">{w.t}</div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-xl">{w.d}</p>
            </div>
            <div className="col-span-12 md:col-span-1 flex md:justify-end items-start">
              <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-transform duration-500 group-hover:rotate-45 group-hover:text-foreground" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

/* --------------------------------------------------------------- MODULE SPOTLIGHT */

const modules = [
  { icon: LayoutGrid, name: "Dashboard", t: "The day at a glance", d: "Sales, receipts, stock value and open POs in one immediate view." },
  { icon: Boxes, name: "Products", t: "A clean SKU master", d: "Full product, pricing, units and threshold control with category structure." },
  { icon: Truck, name: "Purchases", t: "From PO to inward", d: "Raise purchases, receive against suppliers, settle with supplier payments." },
  { icon: Users, name: "Customers", t: "Operator-grade ledgers", d: "Customer accounts, balances, invoice history and receipt allocations." },
  { icon: Layers, name: "Collections", t: "Move money cleanly", d: "Receipts grouped, allocated and reconciled — never floating in limbo." },
  { icon: BarChart3, name: "Reports", t: "Decision visibility", d: "Sales vs receipts, top SKUs, supplier exposure, period summaries." },
  { icon: ScrollText, name: "Audit Log", t: "Trace every action", d: "Every create, edit and approval is attributed and timestamped." },
  { icon: FolderTree, name: "Categories", t: "Structure that scales", d: "Group SKUs into clean categories that drive reports and pricing logic." },
];

const ModuleSpotlight = () => {
  return (
    <Section
      index="04 ·"
      eyebrow="Module spotlight"
      title={<>Twelve modules. One operating loop. <span className="text-muted-foreground">Each one earns its place.</span></>}
      description="Every module is built to be used daily — not configured once and forgotten."
      variant="muted"
    >
      <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4">
        {modules.map((m, i) => (
          <motion.article
            key={m.name}
            className="bg-background p-6 md:p-7 group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-grad-veil pointer-events-none" />
            <m.icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            <div className="num-tag mt-6">{m.name}</div>
            <h3 className="h-card mt-2">{m.t}</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.d}</p>
            <div className="mt-8 flex items-center justify-between">
              <Link to="/modules" className="text-xs text-muted-foreground group-hover:text-foreground transition-colors inline-flex items-center gap-1">
                View module <ArrowUpRight className="w-3 h-3" />
              </Link>
              <div className="h-px w-10 bg-border group-hover:w-16 group-hover:bg-foreground transition-all duration-700" />
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

/* --------------------------------------------------------------- SCREENSHOT THEATER */

const screens = [
  {
    eyebrow: "Dashboard",
    title: "The operating day, in one frame.",
    caption: "Sales, receipts, stock value and open POs — sized for daily reading, not month-end review.",
    node: <DashboardMock />,
  },
  {
    eyebrow: "Products",
    title: "A clean SKU master.",
    caption: "Search, filter, status. Stock states emphasized where they matter — never lost in the table.",
    node: <ProductsMock />,
  },
  {
    eyebrow: "Receipts",
    title: "Allocations without drift.",
    caption: "Each receipt lands on an invoice. Outstanding balances shrink in plain sight.",
    node: <ReceiptsMock />,
  },
  {
    eyebrow: "Reports",
    title: "Weekly decision view.",
    caption: "Sales versus receipts at a glance — the same numbers used to close the period.",
    node: <ReportsMock />,
  },
  {
    eyebrow: "Audit log",
    title: "Every action accounted for.",
    caption: "Streaming events, attributed to a person. No black boxes. No missing context.",
    node: <AuditMock />,
  },
];

const ScreenshotTheater = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  return (
    <section
      ref={ref}
      className="relative bg-surface-ink text-background border-b border-foreground/10 overflow-hidden"
    >
      <div className="container-edge pt-24 md:pt-32 pb-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 flex items-start gap-4">
            <span className="num-tag text-background/60">05 ·</span>
            <span className="eyebrow text-background/70">Screenshot theater</span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="h-section">
              <SplitWords text="The product, frame by frame." />
            </h2>
            <p className="lead mt-5 text-background/70">
              Every screen is built for repeat use. Tight density. Calm chrome. Information where you expect it.
            </p>
          </div>
        </div>
      </div>

      <div className="container-edge pb-24 md:pb-32 space-y-20 md:space-y-32">
        {screens.map((s, i) => {
          const flipped = i % 2 === 1;
          return (
            <div
              key={i}
              className={`grid grid-cols-12 gap-6 lg:gap-10 items-start ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Caption column */}
              <div className="col-span-12 lg:col-span-3 lg:sticky lg:top-28">
                <div className="num-tag text-background/50">0{i + 1} · {s.eyebrow}</div>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight mt-3 leading-[1.05]">
                  {s.title}
                </h3>
                <p className="text-[13.5px] text-background/65 leading-relaxed mt-4 max-w-sm">
                  {s.caption}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-background/45">
                  <span className="w-1.5 h-1.5 rounded-full bg-background/70 status-pulse" />
                  Live workspace
                </div>
              </div>

              {/* Frame column */}
              <div className="col-span-12 lg:col-span-9">
                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 32, clipPath: "inset(8% 0 8% 0)" }}
                  whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0% 0)" }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  className="relative frame-lift"
                >
                  <div className="bg-background text-foreground rounded-md overflow-hidden shadow-pop border border-foreground/10">
                    <div className="app-frame-bar">
                      <span className="app-dot" />
                      <span className="app-dot" />
                      <span className="app-dot" />
                      <div className="flex-1 text-center text-[10px] text-muted-foreground font-mono tracking-wide">
                        app.busnieshub.com / {s.eyebrow.toLowerCase()}
                      </div>
                      <span className="text-[10px] text-muted-foreground font-mono inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground status-pulse" />
                        live
                      </span>
                    </div>
                    {s.node}
                  </div>
                  {/* Soft layered caption tag */}
                  <div className="hidden md:flex absolute -bottom-4 left-4 items-center gap-2 bg-background text-foreground border border-foreground/15 px-2.5 py-1.5 rounded-sm shadow-soft">
                    <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">Frame</span>
                    <span className="font-mono text-[10px]">0{i + 1} / {screens.length}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container-edge pb-16 text-background/55 text-xs flex justify-between border-t border-foreground/10 pt-8">
        <span>Real screens. No fake live demo.</span>
        <span className="font-mono">{screens.length} frames · 1 product</span>
      </div>
    </section>
  );
};

/* --------------------------------------------------------------- WHY */

const whyPoints = [
  { t: "Operational clarity, not feature noise.", d: "Every module exists because operators use it daily. Not a bloated stack of modules sold by feature count." },
  { t: "Workspace by workspace.", d: "Run multiple businesses with full separation — books, audit, users and stock." },
  { t: "Discipline by design.", d: "Receipts allocate. Adjustments log. Audit records. The platform makes the right thing the easy thing." },
  { t: "Built for operators, not analysts.", d: "Built for people who run the business — owners, admins, store managers, accountants — not just dashboards." },
];

const WhySection = () => (
  <Section
    index="06 ·"
    eyebrow="Why BusniessHub"
    title={<>Built like operations work — <span className="text-muted-foreground">not like a SaaS feature list.</span></>}
  >
    <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
      {whyPoints.map((p, i) => (
        <motion.div
          key={i}
          className="bg-background p-8 md:p-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.05 }}
        >
          <div className="num-tag">0{i + 1}</div>
          <h3 className="h-card mt-3">{p.t}</h3>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-md">{p.d}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* --------------------------------------------------------------- WHO */

const audiences = [
  { tag: "Retailers", t: "Fast counters, tight stock", d: "Run daily sales, manage walk-in customers, keep stock honest, close the day with confidence." },
  { tag: "Wholesalers", t: "Credit, allocations, ledgers", d: "Operate against credit cycles, allocate receipts cleanly, watch supplier exposure in one view." },
  { tag: "Operator-led businesses", t: "Owners who run the floor", d: "Made for people who use the system every single day — not for one-off configuration." },
  { tag: "Admins", t: "One workspace to govern", d: "Roles, audit and reporting in a single shape, across every business you operate." },
];

const WhoSection = () => (
  <Section index="07 ·" eyebrow="Who it is for" title="Built for the people who run the business." variant="muted">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
      {audiences.map((a, i) => (
        <motion.div
          key={i}
          className="bg-background p-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.06 }}
        >
          <div className="num-tag">{a.tag}</div>
          <h3 className="h-card mt-3">{a.t}</h3>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{a.d}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* --------------------------------------------------------------- TRUST */

const trust = [
  { t: "Reporting", d: "Daily, weekly and period reports straight from the operating data — no exports, no drift." },
  { t: "Audit log", d: "Every create, update and approval recorded against the user who made it." },
  { t: "Structured workflows", d: "Receipts allocate. Stock adjusts with reasons. Approvals are explicit, not implied." },
  { t: "Workspace separation", d: "Books, users, audit and reports stay scoped to the business they belong to." },
  { t: "Operator discipline", d: "The product makes the right action the easiest one — and the wrong one visible." },
];

const TrustSection = () => (
  <Section index="08 ·" eyebrow="Trust by structure" title={<>Trust comes from <span className="text-muted-foreground">structure, not slogans.</span></>}>
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
      <div className="lg:col-span-5">
        <Parallax amount={30}>
          <AppFrame>
            <AuditMock />
          </AppFrame>
        </Parallax>
      </div>
      <div className="lg:col-span-7">
        <ul className="border-t border-border">
          {trust.map((t, i) => (
            <motion.li
              key={i}
              className="border-b border-border py-6 grid grid-cols-12 gap-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <div className="col-span-3 md:col-span-2 num-tag pt-1">0{i + 1}</div>
              <div className="col-span-9 md:col-span-4 font-display text-base md:text-lg tracking-tight">{t.t}</div>
              <div className="col-span-12 md:col-span-6 text-sm text-muted-foreground leading-relaxed">{t.d}</div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

/* --------------------------------------------------------------- PRICING PREVIEW */

const PricingPreview = () => (
  <Section index="09 ·" eyebrow="Pricing" title="Plans that match the way you operate." variant="muted">
    <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
      {[
        { name: "Starter", desc: "For a single workspace and a focused team.", price: "Talk to us" },
        { name: "Business", desc: "For multi-user retail and wholesale operations.", price: "Recommended", featured: true },
        { name: "Enterprise", desc: "For multi-business operators with admin needs.", price: "Custom" },
      ].map((p, i) => (
        <motion.div
          key={p.name}
          className={`bg-background p-8 ${p.featured ? "lg:scale-[1.01]" : ""}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.07 }}
        >
          <div className="flex items-center justify-between">
            <div className="num-tag">{p.name}</div>
            {p.featured && <span className="text-[9px] uppercase tracking-wider bg-foreground text-background px-2 py-1">Recommended</span>}
          </div>
          <h3 className="h-card mt-3">{p.desc}</h3>
          <div className="mt-8 text-2xl font-display tracking-tight">{p.price}</div>
          <Link to="/pricing" className="mt-6 inline-flex items-center gap-1.5 text-sm border-b border-foreground pb-0.5">
            View plan <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* --------------------------------------------------------------- HOME */

const Home = () => {
  return (
    <>
      <HeroSection />
      <ValueStrip />
      <WorkflowStory />
      <ModuleSpotlight />
      <ScreenshotTheater />
      <WhySection />
      <WhoSection />
      <TrustSection />
      <PricingPreview />
      <FinalCTA
        eyebrow="Start operating"
        title="Bring your inventory, sales and reporting under one disciplined roof."
      />
    </>
  );
};

export default Home;
