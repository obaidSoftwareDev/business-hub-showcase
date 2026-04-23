import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** translateY in px from -value to +value across viewport */
  amount?: number;
}

export const Parallax = ({ children, className = "", amount = 60 }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [amount, -amount]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

export const useParallaxY = (amount = 60): { ref: any; y: MotionValue<number> } => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [amount, -amount]);
  return { ref, y };
};

export default Parallax;
