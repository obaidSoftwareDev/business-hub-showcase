import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import FinalCTA from "@/components/site/FinalCTA";

const block = (title: string, paragraphs: string[]) => (
  <div className="border-t border-border pt-8">
    <h3 className="h-card">{title}</h3>
    <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
      {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  </div>
);

const Legal = () => (
  <>
    <PageHero
      eyebrow="Legal"
      title="The fine print, in plain English."
      description="Terms, privacy, cookies and operator responsibility — written to be read, not skimmed."
    />

    <Section index="01 ·" eyebrow="Terms" title="Terms of service.">
      <div className="space-y-12">
        {block("Use of the platform", [
          "BusniessHub is provided as an operations platform. By accessing it you agree to use it for legitimate business operations within applicable law.",
          "Workspaces, users and data created in the platform are governed by the workspace owner's responsibility.",
        ])}
        {block("Service availability", [
          "We aim for high availability and ship updates with rollback discipline. Scheduled maintenance is communicated in advance where possible.",
        ])}
        {block("Liability", [
          "BusniessHub is not a substitute for statutory accounting or audit. Operators and their advisors remain responsible for statutory compliance and final reporting.",
        ])}
      </div>
    </Section>

    <Section index="02 ·" eyebrow="Privacy" title="Privacy policy." variant="muted">
      <div className="space-y-12">
        {block("What we collect", [
          "We collect operating data created in your workspace (products, customers, transactions), account information needed to authenticate you, and minimal telemetry to improve the platform.",
        ])}
        {block("How we use it", [
          "Operating data is used solely to provide the platform to your workspace. Telemetry is used to detect issues, improve performance and inform product decisions.",
        ])}
        {block("Your rights", [
          "Workspace owners can export and delete data at any time. Users can request access to their personal information held by the platform.",
        ])}
      </div>
    </Section>

    <Section index="03 ·" eyebrow="Cookies" title="Cookie note.">
      <div className="space-y-12">
        {block("What we use", [
          "We use a minimal set of cookies required to keep you signed in and to remember preferences. We do not use cookies for cross-site advertising.",
        ])}
      </div>
    </Section>

    <Section index="04 ·" eyebrow="Usage & responsibility" title="Operator responsibility note." variant="muted">
      <div className="space-y-12">
        {block("Operators are responsible for", [
          "The accuracy of the data entered into the platform.",
          "The roles and access granted within their workspaces.",
          "The downstream use of reports and exports for statutory and regulatory purposes.",
        ])}
        {block("BusniessHub is responsible for", [
          "The integrity of the platform that operates on your data.",
          "Security and audit visibility at the structural level.",
          "Honest communication about what the platform can and cannot attest to.",
        ])}
      </div>
    </Section>

    <Section index="05 ·" eyebrow="Contact legal" title="Reach the legal contact.">
      <p className="lead">Legal correspondence can be directed to <span className="font-mono text-foreground">legal@busnieshub.app</span>. BusniessHub is operated by EVORIX Systems.</p>
    </Section>

    <FinalCTA eyebrow="Legal" title="Questions about the fine print? Talk to us." primary={{ label: "Contact us", to: "/contact" }} secondary={{ label: "Back home", to: "/" }} />
  </>
);

export default Legal;
