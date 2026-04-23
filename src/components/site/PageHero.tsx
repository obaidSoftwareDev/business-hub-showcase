import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FadeUp, SplitWords } from "@/components/motion/SplitWords";
import { Parallax } from "@/components/motion/Parallax";
import AppFrame from "@/components/mock/AppFrame";
import Tilt3D from "@/components/motion/Tilt3D";
import MagneticLink from "@/components/motion/MagneticLink";
import AmbientDepth from "@/components/motion/AmbientDepth";

export interface HeroKpi {
  k: string;
  v: string;
  sub?: string;
}

export interface HeroMeta {
  label: string;
  value: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  /** Primary product visual rendered inside the main AppFrame. */
  visual?: ReactNode;
  /** Optional small overlapping panel for layered depth. */
  sidePanel?: ReactNode;
  /** Title for the AppFrame chrome. */
  visualTitle?: string;
  visualUrl?: string;
  /** Optional second mock fragment shown as a tall side rail beside main visual on lg+. */
  secondaryFragment?: ReactNode;
  secondaryTitle?: string;
  secondaryUrl?: string;
  /** Optional mini KPI strip rendered between description and CTAs (and beneath title on stacked layouts). */
  kpis?: HeroKpi[];
  /** Optional top-right meta strip — small mono labels with values. */
  meta?: HeroMeta[];
  /** Optional caption pinned to the visual block (e.g. "Frame 01 / 12"). */
  frameCaption?: string;
  /** Tone tag rendered in the corner ribbon above the visual. */
  tone?: string;
  /** Optional decorative background image rendered behind the hero with a soft mask. */
  bgImage?: string;
}

/**
 * Richer reusable hero used by inner pages.
 *
 * Composition:
 *   - Layered backdrop: ambient depth + masked grid + scan lines + corner crosshairs
 *   - Top: eyebrow (left) + meta strip (right)
 *   - Title block + descriptor + CTA + KPI strip
 *   - Layered visual block: caption ribbon + main AppFrame + optional secondary rail + side panel overlap
 *   - Hand-off ribbon at the bottom that bleeds into the next section
 */
export const PageHero = ({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  visual,
  sidePanel,
  visualTitle,
  visualUrl,
  secondaryFragment,
  secondaryTitle,
  secondaryUrl,
  kpis,
  meta,
  frameCaption,
  tone,
  bgImage,
}: PageHeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -90]);
  const bgScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1.05, 1.12]);

  return (
    <section ref={sectionRef} className="relative pt-32 md:pt-40 pb-0 border-b border-border overflow-hidden">
      {/* Layered backdrop */}
      <AmbientDepth intensity="low" />
      {bgImage && (
        <motion.div
          className="absolute inset-0 -z-10 pointer-events-none will-change-transform"
          style={{ y: bgY, scale: bgScale }}
          aria-hidden
        >
          <img
            src={bgImage}
            alt=""
            data-testid="img-page-hero-background"
            className="w-full h-full object-cover opacity-90 dark:opacity-70 select-none"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/10 to-transparent" />
        </motion.div>
      )}
      <div className="absolute inset-0 grid-bg mask-vignette opacity-50" aria-hidden />
      <div className="absolute inset-0 scan-lines opacity-70 pointer-events-none" aria-hidden />
      {/* Corner crosshairs — strict 2D scaffolding */}
      <div className="container-edge relative">
        <span className="crosshair" style={{ top: 16, left: 0 }} aria-hidden />
        <span className="crosshair tr" style={{ top: 16, right: 0 }} aria-hidden />
      </div>

      <div className="container-edge relative">
        {/* Top row: eyebrow + meta strip */}
        <div className="grid grid-cols-12 gap-6 items-end mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-6">
            <FadeUp>
              <div className="eyebrow">{eyebrow}</div>
            </FadeUp>
          </div>
          {meta && meta.length > 0 && (
            <div className="col-span-12 md:col-span-6">
              <FadeUp delay={0.05}>
                <ul className="flex flex-wrap md:justify-end items-center gap-x-5 gap-y-2 font-mono text-[10px] text-muted-foreground">
                  {meta.map((m, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="meta-dot" aria-hidden />
                      <span className="uppercase tracking-[0.18em]">{m.label}</span>
                      <span className="text-foreground">{m.value}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          )}
        </div>

        {/* Title + descriptor */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="h-display">
              <SplitWords text={title} />
            </h1>
            <FadeUp delay={0.15}>
              <span className="block mt-6 h-px bg-foreground/40 origin-left draw-line" style={{ width: "9rem" }} aria-hidden />
            </FadeUp>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <FadeUp delay={0.2}>
              <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-md">
                {description}
              </p>
              {(primaryCta || secondaryCta) && (
                <div className="mt-6 flex items-center gap-3">
                  {primaryCta && (
                    <MagneticLink strength={5}>
                      <Link
                        to={primaryCta.to}
                        className="btn-sheen group/cta inline-flex items-center gap-1.5 bg-foreground text-background text-sm px-4 py-2.5 rounded-sm"
                      >
                        {primaryCta.label}
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out-expo group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                      </Link>
                    </MagneticLink>
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

        {/* KPI strip */}
        {kpis && kpis.length > 0 && (
          <FadeUp delay={0.25}>
            <div className="hero-kpis bg-background/60 backdrop-blur-[1px] mt-12 md:mt-14">
              {kpis.map((k, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.05 * i }}
                >
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted-foreground">{k.k}</span>
                  <span className="font-display text-2xl md:text-3xl tracking-tight mt-1 leading-none">{k.v}</span>
                  {k.sub && <span className="text-[10.5px] text-muted-foreground mt-1.5">{k.sub}</span>}
                </motion.div>
              ))}
            </div>
          </FadeUp>
        )}

        {/* Visual composition */}
        {visual && (
          <div className="relative mt-14 md:mt-20">
            {/* Caption ribbon above the frame */}
            <div className="flex items-end justify-between mb-3 md:mb-4 gap-4">
              <div className="flex items-center gap-3">
                {tone && (
                  <span className="num-tag uppercase tracking-[0.22em]">{tone}</span>
                )}
                <span className="hidden sm:inline-block h-px bg-border" style={{ width: 60 }} aria-hidden />
                <span className="font-mono text-[10px] text-muted-foreground">
                  {frameCaption ?? "Frame 01 / 01"}
                </span>
              </div>
              <div className="hidden md:flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground status-pulse" />
                <span>Live preview</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-6 items-stretch">
              {/* Main frame */}
              <div className={`col-span-12 ${secondaryFragment ? "lg:col-span-9" : "lg:col-span-12"}`}>
                <Parallax amount={20}>
                  <Tilt3D max={3.5} lift={4}>
                    <motion.div
                      className="relative frame-lift depth-shadow"
                      initial={{ opacity: 0, clipPath: "inset(8% 4% 8% 4%)" }}
                      whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <AppFrame title={visualTitle} url={visualUrl} className="shadow-pop">
                        {visual}
                      </AppFrame>
                      {sidePanel && (
                        <div className="hidden md:block absolute -right-4 -bottom-10 w-72 lg:w-80 z-10" style={{ transform: "translateZ(40px)" }}>
                          <AppFrame title="Quick view" url="quick.busnieshub.com" className="shadow-pop">
                            {sidePanel}
                          </AppFrame>
                        </div>
                      )}
                    </motion.div>
                  </Tilt3D>
                </Parallax>
              </div>

              {/* Secondary rail */}
              {secondaryFragment && (
                <div className="hidden lg:block lg:col-span-3">
                  <Parallax amount={12}>
                    <motion.div
                      className="h-full"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <AppFrame
                        title={secondaryTitle}
                        url={secondaryUrl ?? "panel.busnieshub.com"}
                        className="h-full"
                      >
                        {secondaryFragment}
                      </AppFrame>
                    </motion.div>
                  </Parallax>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="container-edge relative">
          <span className="crosshair bl" style={{ bottom: 56, left: 0 }} aria-hidden />
          <span className="crosshair br" style={{ bottom: 56, right: 0 }} aria-hidden />
        </div>
      </div>

      {/* Hand-off ribbon — bleeds the scaffolding into the next section */}
      <div className="relative mt-16 md:mt-24 h-20 md:h-28 hero-handoff" aria-hidden />
    </section>
  );
};

export default PageHero;
