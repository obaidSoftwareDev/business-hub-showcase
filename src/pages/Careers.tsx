import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import FinalCTA from "@/components/site/FinalCTA";

const roles = [
  { dept: "Engineering", title: "Senior Product Engineer", loc: "Remote · Full-time", status: "Open soon" },
  { dept: "Design", title: "Product Designer", loc: "Remote · Full-time", status: "Open soon" },
  { dept: "Implementation", title: "Onboarding Specialist", loc: "Remote · Full-time", status: "Open soon" },
];

const Careers = () => (
  <>
    <PageHero
      eyebrow="Careers · join BusniessHub"
      title="Build calm, disciplined software with a small focused team."
      description="We don't grow for the sake of growth. We hire when a role makes the product sharper."
    />

    <Section index="01 ·" eyebrow="Why join" title="Three honest reasons to join.">
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {[
          { t: "Real operators use this every day.", d: "What you ship goes to people who depend on it the next morning. The feedback loop is short and concrete." },
          { t: "Small team, big surface area.", d: "You will own meaningful surface — not a tiny slice of an org chart." },
          { t: "Discipline over hustle.", d: "We work hard. We don't perform working hard." },
        ].map((b, i) => (
          <motion.div key={b.t} className="bg-background p-7" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }}>
            <div className="num-tag">0{i + 1}</div>
            <h3 className="h-card mt-3">{b.t}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section index="02 ·" eyebrow="Product mindset" title="How we think about building." variant="muted">
      <ul className="border-t border-border max-w-3xl">
        {["Calm interfaces over busy ones.", "Tight loops over big launches.", "Audit as default, not as a checkbox.", "Operators first — always."].map((t, i) => (
          <li key={i} className="border-b border-border py-5 flex items-start gap-6 text-base"><span className="num-tag pt-1">0{i + 1}</span>{t}</li>
        ))}
      </ul>
    </Section>

    <Section index="03 ·" eyebrow="Open roles" title="What we're hiring for next.">
      <div className="border border-border bg-background">
        {roles.map((r, i) => (
          <motion.div key={r.title} className="grid grid-cols-12 gap-4 items-center px-6 py-5 border-b border-border last:border-b-0 hover:bg-surface-1/60 transition-colors" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
            <div className="col-span-12 md:col-span-2 num-tag">{r.dept}</div>
            <div className="col-span-12 md:col-span-5 font-display text-lg tracking-tight">{r.title}</div>
            <div className="col-span-12 md:col-span-3 text-sm text-muted-foreground">{r.loc}</div>
            <div className="col-span-12 md:col-span-2 flex items-center md:justify-end gap-2">
              <span className="text-[10px] uppercase tracking-wider border border-border px-2 py-1">{r.status}</span>
              <Link to="/contact" className="inline-flex items-center gap-1 text-xs">Notify me <ArrowUpRight className="w-3 h-3" /></Link>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground max-w-2xl">No formal openings yet — but if you've read this and felt something, write to us anyway. We keep a small list of operators, designers and engineers we'd love to talk to when the time comes.</p>
    </Section>

    <FinalCTA eyebrow="Get in touch" title="Think you'd fit? We'd love to hear from you." primary={{ label: "Write to us", to: "/contact" }} secondary={{ label: "Read About", to: "/about" }} />
  </>
);

export default Careers;
