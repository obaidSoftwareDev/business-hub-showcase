import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/motion/SplitWords";
import MagneticLink from "@/components/motion/MagneticLink";
import SectionStitch from "@/components/motion/SectionStitch";
import finalCtaBg from "@assets/generated_images/final_cta_bg.png";

interface FinalCTAProps {
  eyebrow?: string;
  title: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}

export const FinalCTA = ({ eyebrow = "Get started", title, primary = { label: "Open Workspace", to: "/app" }, secondary = { label: "Book a demo", to: "/contact" } }: FinalCTAProps) => {
  return (
    <>
      <SectionStitch label="End of page" />
      <section className="relative bg-surface-ink text-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <img
            src={finalCtaBg}
            alt=""
            data-testid="img-final-cta-background"
            className="w-full h-full object-cover opacity-45 select-none"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-ink via-surface-ink/60 to-surface-ink/40" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-[0.07]" aria-hidden />
        <div className="container-edge relative py-28 md:py-40">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <div className="num-tag text-background/60">{eyebrow}</div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <FadeUp>
                <h2 className="h-display max-w-3xl">{title}</h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <MagneticLink strength={6}>
                    <Link
                      to={primary.to}
                      className="btn-sheen group/cta inline-flex items-center gap-1.5 bg-background text-foreground text-sm px-5 py-3 rounded-sm hover:opacity-95"
                    >
                      {primary.label}
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out-expo group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                    </Link>
                  </MagneticLink>
                  <Link
                    to={secondary.to}
                    className="inline-flex items-center gap-1.5 border border-background/30 text-sm px-5 py-3 rounded-sm hover:bg-background/5 transition-colors"
                  >
                    {secondary.label}
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCTA;
