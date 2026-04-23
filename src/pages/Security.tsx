import { motion } from "framer-motion";
import { ShieldCheck, KeyRound, Users, Database, ScrollText, BarChart3, Lock } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import heroSecurityBg from "@assets/generated_images/hero_security.png";
import Section from "@/components/site/Section";
import FinalCTA from "@/components/site/FinalCTA";
import FAQList from "@/components/site/FAQList";
import { Parallax } from "@/components/motion/Parallax";
import AppFrame from "@/components/mock/AppFrame";
import AuditMock from "@/components/mock/AuditMock";

const pillars = [
  { i: KeyRound, t: "Secure access & sign-in", d: "Sessions are managed, sign-in is controlled, and access can be revoked at the workspace level." },
  { i: Users, t: "Roles & controlled access", d: "Role-based access scopes what each operator can see and do — by module and by action." },
  { i: Database, t: "Workspace separation", d: "Books, audit, users and reports stay scoped to the workspace they belong to. No bleed across businesses." },
  { i: ScrollText, t: "Audit visibility", d: "Every create, edit and approval is recorded against the user who performed it — and surfaced where it matters." },
  { i: BarChart3, t: "Reporting & traceability", d: "Reports are built directly from the operating data — no exports, no reconstruction, no surprise." },
  { i: Lock, t: "Operational discipline", d: "The product makes the right thing the easy thing — and the wrong thing visible." },
];

const Security = () => (
  <>
    <PageHero
      bgImage={heroSecurityBg}
      eyebrow="Security & Trust"
      title="Trust comes from how the system is built — not from badges on a page."
      description="Our trust story is grounded in product structure, operational transparency and disciplined workflows."
      primaryCta={{ label: "Talk to our team", to: "/contact" }}
      secondaryCta={{ label: "Read our pillars", to: "#pillars" }}
      visualTitle="Audit log · streaming"
      visualUrl="app.busnieshub.com/audit"
      visual={<AuditMock />}
      tone="Trust by structure"
      frameCaption="Frame 07 / 12 · Audit log"
      meta={[
        { label: "Audit", value: "always-on" },
        { label: "Roles", value: "scoped" },
        { label: "Workspaces", value: "separated" },
      ]}
      kpis={[
        { k: "Audit coverage", v: "100%", sub: "Every operating action" },
        { k: "Role tiers", v: "4", sub: "Owner → Viewer" },
        { k: "Workspace bleed", v: "0", sub: "Books fully scoped" },
        { k: "Silent disable", v: "Impossible", sub: "Audit is structural" },
      ]}
      secondaryTitle="Access · roles"
      secondaryUrl="security.busnieshub.com"
      secondaryFragment={
        <div className="p-4">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Roles in workspace</div>
          <ul className="mt-3 grid grid-cols-2 gap-px bg-border border border-border">
            {[
              { r: "Owner", c: "Full" },
              { r: "Admin", c: "Scoped" },
              { r: "Operator", c: "Module" },
              { r: "Viewer", c: "Read" },
            ].map((x) => (
              <li key={x.r} className="bg-background p-2.5 flex flex-col">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{x.c}</span>
                <span className="text-sm font-medium tracking-tight mt-0.5">{x.r}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-border text-[11px]">
            <div className="flex items-center justify-between"><span>Sessions</span><span className="font-mono">Managed</span></div>
            <div className="flex items-center justify-between mt-1.5"><span>Revocation</span><span className="font-mono">Audited</span></div>
            <div className="flex items-center justify-between mt-1.5"><span>Tokens</span><span className="font-mono">Workspace-scoped</span></div>
          </div>
        </div>
      }
    />

    <Section index="01 ·" eyebrow="Pillars" title="Six pillars that hold the platform together.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {pillars.map((p, i) => (
          <motion.div key={p.t} className="bg-background p-7" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.04 }}>
            <p.i className="w-5 h-5" strokeWidth={1.4} />
            <h3 className="h-card mt-4">{p.t}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section index="02 ·" eyebrow="Sign-in" title="Secure access is the front door." variant="muted"
      description="Authentication is structured. Sessions are managed. Access can be revoked at the workspace level at any time.">
      <ul className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {["Managed sessions with explicit sign-out.", "Workspace-scoped access tokens.", "Revocation visible in the audit log."].map((t, i) => (
          <li key={i} className="bg-background p-6 text-sm leading-relaxed"><span className="num-tag block mb-2">0{i + 1}</span>{t}</li>
        ))}
      </ul>
    </Section>

    <Section index="03 ·" eyebrow="Roles" title="Access scoped to action, not just module."
      description="Roles control what an operator can see — and what they can do. Approvals are explicit, not implied.">
      <div className="grid md:grid-cols-4 gap-px bg-border border border-border">
        {["Owner", "Admin", "Operator", "Viewer"].map((r, i) => (
          <motion.div key={r} className="bg-background p-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
            <ShieldCheck className="w-4 h-4" strokeWidth={1.4} />
            <div className="font-display text-lg tracking-tight mt-3">{r}</div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Scoped permissions across modules and actions.</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section index="04 ·" eyebrow="Workspaces" title="Books, audit and reports — separated by design." variant="muted">
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {["Each business is a workspace.", "Users belong to one or many.", "Audit is per-workspace by design."].map((t, i) => (
          <div key={i} className="bg-background p-6 text-sm leading-relaxed"><span className="num-tag block mb-2">0{i + 1}</span>{t}</div>
        ))}
      </div>
    </Section>

    <Section index="05 ·" eyebrow="Audit log" title="Every action is accountable.">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <p className="lead">The audit log isn't a feature switched on — it's the spine of the platform. Every create, edit and approval is recorded against the user who performed it.</p>
          <ul className="mt-8 border-t border-border">
            {["Streamed live across the workspace.", "Queryable by user, action and entity.", "Cannot be silently disabled."].map((t, i) => (
              <li key={i} className="border-b border-border py-4 flex items-start gap-4 text-sm"><span className="num-tag pt-1">0{i + 1}</span>{t}</li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7"><Parallax amount={26}><AppFrame><AuditMock /></AppFrame></Parallax></div>
      </div>
    </Section>

    <Section index="06 ·" eyebrow="Data handling" title="Operational discipline as policy." variant="muted"
      description="Data is handled with the same discipline the product enforces on operators — explicit, scoped, and traceable.">
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {[
          { t: "Scoped by workspace", d: "Data lives inside the workspace it belongs to — and only crosses with explicit owner action." },
          { t: "Encrypted in transit", d: "All operating traffic moves over modern transport-layer security." },
          { t: "Operator-led retention", d: "Retention and export policies are owned by the workspace owner, not hidden in fine print." },
        ].map((c, i) => (
          <motion.div key={c.t} className="bg-background p-7" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }}>
            <div className="num-tag">0{i + 1}</div>
            <h3 className="h-card mt-3">{c.t}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section index="07 ·" eyebrow="FAQ" title="Trust questions, answered honestly.">
      <FAQList items={[
        { q: "Do you claim formal compliance certifications?", a: "We don't claim certifications we don't hold. Where formal compliance matters for your workspace, talk to us — we'll be straight about what we can and can't attest to today." },
        { q: "How is sign-in handled?", a: "Sessions are managed by the platform with explicit sign-out, scoped tokens and revocation visibility in the audit log." },
        { q: "Can I export my data?", a: "Yes. Reporting and CSV export are first-class. Your data does not get locked behind a paywall." },
        { q: "Who can see the audit log?", a: "Operators with audit-log access for the workspace. The audit log is scoped per workspace, like every other piece of operating data." },
      ]} />
    </Section>

    <FinalCTA eyebrow="Trust by structure" title="Ask us anything about how the platform handles trust." secondary={{ label: "Contact our team", to: "/contact" }} primary={{ label: "Open Workspace", to: "/app" }} />
  </>
);

export default Security;
