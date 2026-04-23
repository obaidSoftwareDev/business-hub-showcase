import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import evorixWordmark from "@/assets/evorix-wordmark.webp";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import FinalCTA from "@/components/site/FinalCTA";
import DashboardMock from "@/components/mock/DashboardMock";

const About = () => (
  <>
    <PageHero
      eyebrow="About BusniessHub"
      title="A product built for the people who run the business."
      description="BusniessHub exists because operators deserve a single, disciplined platform — not five tools they reconcile every Sunday."
      primaryCta={{ label: "Talk to the team", to: "/contact" }}
      secondaryCta={{ label: "See the product", to: "/product" }}
      visualTitle="Operating loop · today"
      visualUrl="app.busnieshub.com"
      visual={<DashboardMock />}
      tone="Maker · EVORIX Systems"
      frameCaption="Frame 08 / 12 · Workspace"
      meta={[
        { label: "Product", value: "BusniessHub" },
        { label: "Maker", value: "EVORIX Systems" },
        { label: "Focus", value: "One product" },
      ]}
      kpis={[
        { k: "One product", v: "BusniessHub", sub: "No portfolio" },
        { k: "Built by", v: "EVORIX", sub: "Small focused team" },
        { k: "Operating principle", v: "Discipline", sub: "Over dashboards" },
        { k: "We stay", v: "Week 1", sub: "Through every release" },
      ]}
      secondaryTitle="Maker"
      secondaryUrl="evorix.systems"
      secondaryFragment={
        <div className="p-4 flex flex-col h-full">
          <div className="bg-foreground p-6 flex items-center justify-center">
            <img src={evorixWordmark} alt="EVORIX Systems" className="w-full max-w-[120px] h-auto" />
          </div>
          <div className="mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Builder</div>
          <p className="mt-2 text-[11px] leading-relaxed">
            EVORIX Systems is the team behind BusniessHub. One product. Built with discipline. Used every day.
          </p>
          <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <span>Est. 2024</span>
            <span>India</span>
          </div>
        </div>
      }
    />

    <Section index="01 ·" eyebrow="Why BusniessHub exists" title={<>We built it because <span className="text-muted-foreground">we kept watching operators glue tools together.</span></>}
      description="Spreadsheets for stock. A POS for the floor. A WhatsApp group for receipts. A monthly accountant to find out what really happened. The cost wasn't software — it was time, trust and clarity.">
    </Section>

    <Section index="02 ·" eyebrow="Philosophy" title="What we believe about operations." variant="muted">
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {[
          { t: "Discipline > dashboards", d: "Dashboards are downstream. Discipline in the operating loop is upstream — and that's where the wins come from." },
          { t: "Operators first", d: "The system is built for the people who use it every single day, not for the people who buy it." },
          { t: "Audit as default", d: "Trust isn't a marketing word. It's a structural property — the audit log is the spine." },
          { t: "One workspace", d: "We refuse to ship a product that requires you to reconcile across modules. They share data, share scope, share truth." },
          { t: "Calm software", d: "No noisy interfaces. No bright distractions. Tools should work hard so operators don't have to think harder." },
          { t: "Long-term partner", d: "We stay for the first operating week — and every release after that." },
        ].map((p, i) => (
          <motion.div key={p.t} className="bg-background p-7" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.04 }}>
            <div className="num-tag">0{i + 1}</div>
            <h3 className="h-card mt-3">{p.t}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section index="03 ·" eyebrow="Operational clarity" title="Why operational clarity matters."
      description="Every business has the same problem in some shape: the floor doesn't agree with the books. BusniessHub is built so the loop closes — every day, not every quarter.">
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {["The faster the loop closes, the faster you can act.", "The cleaner the audit, the calmer the team.", "The more disciplined the workflow, the rarer the surprise."].map((t, i) => (
          <div key={i} className="bg-background p-7"><div className="num-tag">0{i + 1}</div><p className="text-sm mt-3 leading-relaxed">{t}</p></div>
        ))}
      </div>
    </Section>

    <Section index="04 ·" eyebrow="Who it is for" title="The kind of business this is built for." variant="muted">
      <ul className="border-t border-border max-w-3xl">
        {["Owner-operated retailers ready to outgrow spreadsheets.", "Wholesalers managing real credit cycles and supplier exposure.", "Multi-business operators who need clean separation across workspaces.", "Admin teams who want one workspace they can defend."].map((t, i) => (
          <li key={i} className="border-b border-border py-5 flex items-start gap-6 text-base"><span className="num-tag pt-1">0{i + 1}</span>{t}</li>
        ))}
      </ul>
    </Section>

    <Section index="05 ·" eyebrow="The maker" title="Built by EVORIX Systems.">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <p className="lead">BusniessHub is the product. EVORIX Systems is the team behind it. We're a small, focused product team that ships disciplined operations software for serious businesses.</p>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">We don't sell a portfolio. We build one product, and we spend our days making it tighter, calmer and more useful. If that resonates, talk to us.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-1.5 text-sm border-b border-foreground pb-0.5">Talk to the team →</Link>
        </div>
        <div className="lg:col-span-5">
          <div className="bg-foreground p-10 flex items-center justify-center">
            <img src={evorixWordmark} alt="EVORIX Systems" className="w-full max-w-xs h-auto" />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Maker · EVORIX Systems</p>
        </div>
      </div>
    </Section>

    <FinalCTA eyebrow="About" title="One product. Built with discipline. Used every day." />
  </>
);

export default About;
