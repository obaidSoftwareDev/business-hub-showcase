import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

import PageHero from "@/components/site/PageHero";
import heroPricingBg from "@assets/generated_images/hero_pricing.png";
import Section from "@/components/site/Section";
import FinalCTA from "@/components/site/FinalCTA";
import FAQList from "@/components/site/FAQList";
import ReportsMock from "@/components/mock/ReportsMock";

const tiers = [
  {
    name: "Starter",
    audience: "For one focused workspace.",
    desc: "A single business with a small team that wants the BusniessHub operating loop without complexity.",
    cta: { label: "Talk to setup", to: "/contact" },
    features: ["Single workspace", "Up to 5 users", "All core modules", "Email support"],
    featured: false,
  },
  {
    name: "Business",
    audience: "For multi-user retail and wholesale.",
    desc: "Recommended for active operators with floor staff, accounts and reporting needs.",
    cta: { label: "Book demo", to: "/contact" },
    features: ["Single workspace", "Up to 25 users", "All modules + advanced reports", "Priority support", "Onboarding included"],
    featured: true,
  },
  {
    name: "Enterprise",
    audience: "For multi-business operators.",
    desc: "Multiple workspaces, admin governance and tailored onboarding.",
    cta: { label: "Contact sales", to: "/contact" },
    features: ["Multiple workspaces", "Unlimited users", "Custom roles & approvals", "Dedicated implementation", "SLA-backed support"],
    featured: false,
  },
];

const matrix = [
  { feature: "Dashboard", values: [true, true, true] },
  { feature: "Products & categories", values: [true, true, true] },
  { feature: "Purchases & supplier payments", values: [true, true, true] },
  { feature: "Sales & customer ledgers", values: [true, true, true] },
  { feature: "Receipts & allocations", values: [true, true, true] },
  { feature: "Reports — daily / weekly", values: [true, true, true] },
  { feature: "Reports — period close", values: [false, true, true] },
  { feature: "Audit log access", values: [true, true, true] },
  { feature: "Multiple workspaces", values: [false, false, true] },
  { feature: "Custom roles & approvals", values: [false, false, true] },
  { feature: "Onboarding sessions", values: [false, true, true] },
  { feature: "Priority support", values: [false, true, true] },
  { feature: "SLA-backed support", values: [false, false, true] },
];

const PricingPage = () => {
  return (
    <>
      <PageHero
        bgImage={heroPricingBg}
        eyebrow="Pricing · operator-shaped"
        title="Three plans. Each shaped around how operators actually run."
        description="No seat-count gymnastics. No hidden tiers. Pricing is a function of how your business operates."
        primaryCta={{ label: "Book a demo", to: "/contact" }}
        secondaryCta={{ label: "Compare features", to: "#feature-comparison" }}
        visualTitle="Reports · weekly summary"
        visualUrl="app.busnieshub.com/reports"
        visual={<ReportsMock />}
        tone="Pricing & onboarding"
        frameCaption="Frame 03 / 12 · Reports"
        meta={[
          { label: "Plans", value: "3" },
          { label: "Onboarding", value: "Included" },
          { label: "Setup", value: "Implementation-led" },
        ]}
        kpis={[
          { k: "Plans", v: "3", sub: "Starter · Business · Enterprise" },
          { k: "Setup model", v: "Implementation", sub: "Not configuration" },
          { k: "Onboarding", v: "1 week", sub: "On-floor presence" },
          { k: "Hidden tiers", v: "0", sub: "Transparent matrix" },
        ]}
        secondaryTitle="Plan suggestion"
        secondaryUrl="setup.busnieshub.com"
        secondaryFragment={
          <div className="p-4">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Where most land</div>
            <div className="text-sm font-medium tracking-tight mt-1">Business</div>
            <div className="mt-3 border border-border p-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Recommended</span>
                <span className="font-mono text-[10px]">Tier 02</span>
              </div>
              <ul className="mt-3 space-y-1.5 text-[11px]">
                <li>Single workspace</li>
                <li>Up to 25 users</li>
                <li>Advanced reports</li>
                <li>Onboarding included</li>
              </ul>
            </div>
            <div className="mt-3 grid grid-cols-3 text-center border border-border">
              <div className="p-2 border-r border-border">
                <div className="font-mono text-[9px] text-muted-foreground">Start</div>
                <div className="text-sm font-medium mt-0.5">S</div>
              </div>
              <div className="p-2 border-r border-border bg-foreground text-background">
                <div className="font-mono text-[9px] opacity-60">Pick</div>
                <div className="text-sm font-medium mt-0.5">B</div>
              </div>
              <div className="p-2">
                <div className="font-mono text-[9px] text-muted-foreground">Scale</div>
                <div className="text-sm font-medium mt-0.5">E</div>
              </div>
            </div>
          </div>
        }
      />

      <Section index="01 ·" eyebrow="Which plan fits" title="A short orientation, before the table." variant="muted">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {[
            { t: "Starter", d: "Single workspace, small team, the full operating loop." },
            { t: "Business", d: "Active retail or wholesale with floor staff and accounts. Most operators land here." },
            { t: "Enterprise", d: "Multiple businesses or workspaces with admin governance and SLA needs." },
          ].map((b, i) => (
            <motion.div
              key={b.t}
              className="bg-background p-7"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
            >
              <div className="num-tag">{b.t}</div>
              <p className="text-sm mt-3 leading-relaxed">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tiers */}
      <Section index="02 ·" eyebrow="Plans" title="Three tiers — built around the way you operate.">
        <div className="grid md:grid-cols-3 gap-6 md:gap-7">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              className={`plan-card relative bg-background p-8 md:p-10 flex flex-col border ${t.featured ? "border-foreground" : "border-border"}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              {t.featured && (
                <span className="absolute -top-2.5 left-8 bg-foreground text-background text-[9px] uppercase tracking-[0.18em] px-2.5 py-1 font-mono">
                  Most operators land here
                </span>
              )}
              <div className="flex items-center justify-between">
                <div className="num-tag">Plan 0{i + 1}</div>
                <div className="font-mono text-[10px] text-muted-foreground">{t.name}</div>
              </div>
              <h3 className="h-card mt-4">{t.audience}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.desc}</p>
              <div className="mt-6 h-px bg-border" />
              <ul className="mt-6 space-y-2.5 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 mt-1 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Link
                  to={t.cta.to}
                  className={`btn-sheen group inline-flex items-center justify-center w-full text-sm py-3 rounded-sm ${
                    t.featured ? "bg-foreground text-background" : "border border-border hover:bg-surface-1"
                  }`}
                >
                  {t.cta.label}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <p className="mt-3 text-[10.5px] text-muted-foreground text-center font-mono">
                  Implementation-led setup · No fake checkout
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section id="feature-comparison" index="03 ·" eyebrow="Feature comparison" title="What's included, plan by plan." variant="muted">
        <div className="border border-border bg-background overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-1/60">
                <th className="text-left p-4 font-medium tracking-tight">Feature</th>
                {tiers.map((t) => (
                  <th key={t.name} className="text-left p-4 font-medium tracking-tight">{t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrix.map((r, i) => (
                <tr key={r.feature} className={`border-b border-border ${i % 2 === 0 ? "" : "bg-surface-1/30"}`}>
                  <td className="p-4">{r.feature}</td>
                  {r.values.map((v, j) => (
                    <td key={j} className="p-4">
                      {v ? <Check className="w-4 h-4" /> : <Minus className="w-4 h-4 text-muted-foreground/60" />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section index="04 ·" eyebrow="Onboarding" title="What onboarding actually includes."
        description="Every paid plan ships with structured onboarding designed for operators, not configuration sessions for IT.">
        <div className="grid md:grid-cols-4 gap-px bg-border border border-border">
          {[
            { n: "01", t: "Workspace setup", d: "Workspace, users, roles, business profile." },
            { n: "02", t: "Master data", d: "Categories, products, suppliers, customers." },
            { n: "03", t: "First operating week", d: "We sit with your team for the first real week." },
            { n: "04", t: "Reporting handover", d: "Review the reports that matter to your business." },
          ].map((s, i) => (
            <motion.div key={s.n} className="bg-background p-7" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }}>
              <div className="num-tag">{s.n}</div>
              <h3 className="h-card mt-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section index="05 ·" eyebrow="Setup note" title="Implementation, not deployment." variant="muted"
        description="BusniessHub runs in the browser — there's nothing to deploy. What we focus on instead is implementation: master data, workflows and operator habits.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Setup is structured and respectful of your time.",
            "We don't disappear after kickoff — we stay for the first operating week.",
            "Every plan includes the operating loop, not a stripped-down preview.",
          ].map((t, i) => (
            <motion.div key={i} className="border border-border p-7 bg-background" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }}>
              <div className="num-tag">0{i + 1}</div>
              <p className="text-sm mt-3 leading-relaxed">{t}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section index="06 ·" eyebrow="FAQ" title="Pricing questions, answered.">
        <FAQList
          items={[
            { q: "Is there a free trial?", a: "We don't run a self-serve free trial. Every onboarding includes a structured first week with our team. Book a demo and we'll show you how it shapes up for your business." },
            { q: "Are there setup fees?", a: "Setup is included in Business and Enterprise plans. Starter onboarding is light-touch and self-serve with documentation." },
            { q: "Can I move between tiers?", a: "Yes. You can upgrade or downgrade as your operation changes. We'll help you migrate cleanly." },
            { q: "How is the price calculated?", a: "Pricing reflects the size and shape of your operation — workspaces, users and modules in active use." },
          ]}
        />
      </Section>

      <FinalCTA eyebrow="Choose your plan" title="Pick the plan that fits today. Move when your operation moves." />
    </>
  );
};

export default PricingPage;
