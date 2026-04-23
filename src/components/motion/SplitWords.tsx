import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface SplitWordsProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

/**
 * Word-level masked reveal for editorial headlines.
 * Wraps each word in an overflow-hidden span and animates from below.
 */
export const SplitWords = ({ text, className = "", delay = 0, stagger = 0.05 }: SplitWordsProps) => {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.22em]">
          <motion.span
            className="inline-block"
            initial={reduced ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: delay + i * stagger }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export const FadeUp = ({ children, className, delay = 0, y = 24 }: FadeUpProps) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
};
