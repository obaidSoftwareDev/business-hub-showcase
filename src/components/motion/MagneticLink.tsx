import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

interface MagneticLinkProps {
  children: ReactNode;
  className?: string;
  /** Max pull in px on each axis. Default 6. */
  strength?: number;
  /** Hover scale of inner content. Default 1. */
  scale?: number;
}

/**
 * Magnetic hover wrapper. The wrapped content slides slightly toward the cursor
 * while the pointer is over its hit area, then springs back on leave.
 * Apply to primary CTAs only — restraint is the point.
 */
export const MagneticLink = ({
  children,
  className = "",
  strength = 6,
  scale = 1,
}: MagneticLinkProps) => {
  const wrap = useRef<HTMLSpanElement>(null);
  const inner = useRef<HTMLSpanElement>(null);
  const target = useRef({ x: 0, y: 0, s: 1 });
  const cur = useRef({ x: 0, y: 0, s: 1 });
  const raf = useRef<number | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const w = wrap.current;
    const el = inner.current;
    if (!w || !el) return;

    const onMove = (e: PointerEvent) => {
      const r = w.getBoundingClientRect();
      const cx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const cy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      target.current = { x: cx * strength, y: cy * strength, s: scale };
    };
    const onLeave = () => {
      target.current = { x: 0, y: 0, s: 1 };
    };

    const tick = () => {
      cur.current.x += (target.current.x - cur.current.x) * 0.18;
      cur.current.y += (target.current.y - cur.current.y) * 0.18;
      cur.current.s += (target.current.s - cur.current.s) * 0.18;
      el.style.transform = `translate3d(${cur.current.x.toFixed(2)}px, ${cur.current.y.toFixed(2)}px, 0) scale(${cur.current.s.toFixed(3)})`;
      raf.current = requestAnimationFrame(tick);
    };

    w.addEventListener("pointermove", onMove);
    w.addEventListener("pointerleave", onLeave);
    raf.current = requestAnimationFrame(tick);
    return () => {
      w.removeEventListener("pointermove", onMove);
      w.removeEventListener("pointerleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [reduced, strength, scale]);

  return (
    <span ref={wrap} className={`inline-block ${className}`} style={{ willChange: "transform" }}>
      <span ref={inner} className="inline-block" style={{ willChange: "transform" }}>
        {children}
      </span>
    </span>
  );
};

export default MagneticLink;
