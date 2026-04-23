import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface SectionStitchProps {
  className?: string;
  /** Optional label rendered in mono on the right side of the stitch. */
  label?: string;
  /** Use inverted (light-on-dark) treatment. */
  inverted?: boolean;
}

/**
 * Editorial section divider that "stitches" two sections together.
 * A hairline draws across as it scrolls into view, with a soft
 * indicator dot that drifts left→right. Pure 2D, restrained.
 */
export const SectionStitch = ({ className = "", label, inverted = false }: SectionStitchProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 95%", "end 5%"] });

  const draw = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const dotX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotO = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const tone = inverted ? "bg-background/60" : "bg-foreground/70";
  const text = inverted ? "text-background/50" : "text-muted-foreground";
  const trackTone = inverted ? "bg-background/15" : "bg-border";

  return (
    <div
      ref={ref}
      className={`relative container-edge h-10 md:h-12 flex items-center ${className}`}
      aria-hidden
    >
      <div className={`relative h-px flex-1 overflow-hidden ${trackTone}`}>
        <motion.span
          className={`absolute inset-y-0 left-0 ${tone}`}
          style={{
            scaleX: reduced ? 1 : draw,
            transformOrigin: "left center",
            width: "100%",
            display: "block",
          }}
        />
        {!reduced && (
          <motion.span
            className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${tone}`}
            style={{ left: dotX, opacity: dotO, x: "-50%" }}
          />
        )}
      </div>
      {label && (
        <span className={`ml-4 font-mono text-[10px] tracking-[0.2em] uppercase ${text}`}>
          {label}
        </span>
      )}
    </div>
  );
};

export default SectionStitch;
