import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, SplitWords } from "@/components/motion/SplitWords";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
}

/** Editorial reusable hero used by inner pages. */
export const PageHero = ({ eyebrow, title, description, primaryCta, secondaryCta }: PageHeroProps) => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 border-b border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg mask-vignette opacity-60" aria-hidden />
      <div className="container-edge relative">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-9">
            <FadeUp>
              <div className="eyebrow">{eyebrow}</div>
            </FadeUp>
            <h1 className="h-display mt-6">
              <SplitWords text={title} />
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:text-right">
            <FadeUp delay={0.2}>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md lg:ml-auto">
                {description}
              </p>
              {(primaryCta || secondaryCta) && (
                <div className="mt-6 flex lg:justify-end items-center gap-3">
                  {primaryCta && (
                    <Link
                      to={primaryCta.to}
                      className="btn-sheen inline-flex items-center gap-1.5 bg-foreground text-background text-sm px-4 py-2.5 rounded-sm"
                    >
                      {primaryCta.label}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                  {secondaryCta && (
                    <Link
                      to={secondaryCta.to}
                      className="inline-flex items-center gap-1.5 border border-border text-sm px-4 py-2.5 rounded-sm hover:bg-surface-1 transition-colors"
                    >
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              )}
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
