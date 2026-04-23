import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees on each axis. Default 4. */
  max?: number;
  /** Subtle z-translate on hover, in px. Default 6. */
  lift?: number;
  /** Easing factor (0-1). Lower = slower follow. Default 0.12. */
  ease?: number;
  /** Disable on touch / coarse pointer devices. Default true. */
  disableOnTouch?: boolean;
}

/**
 * Cursor-reactive perspective tilt. Wraps a single child and tilts it
 * subtly toward the cursor on hover. Premium / restrained — never gimmicky.
 * Honors prefers-reduced-motion and skips on coarse pointers.
 */
export const Tilt3D = ({
  children,
  className = "",
  max = 4,
  lift = 6,
  ease = 0.12,
  disableOnTouch = true,
}: Tilt3DProps) => {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const target = useRef({ rx: 0, ry: 0, l: 0 });
  const cur = useRef({ rx: 0, ry: 0, l: 0 });
  const raf = useRef<number | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (disableOnTouch && window.matchMedia("(pointer: coarse)").matches) return;

    const w = wrap.current;
    const el = inner.current;
    if (!w || !el) return;

    const onMove = (e: PointerEvent) => {
      const r = w.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      target.current = {
        ry: px * max * 2,
        rx: -py * max * 2,
        l: lift,
      };
    };
    const onLeave = () => {
      target.current = { rx: 0, ry: 0, l: 0 };
    };

    const tick = () => {
      cur.current.rx += (target.current.rx - cur.current.rx) * ease;
      cur.current.ry += (target.current.ry - cur.current.ry) * ease;
      cur.current.l += (target.current.l - cur.current.l) * ease;
      el.style.transform = `translate3d(0, -${cur.current.l.toFixed(2)}px, 0) rotateX(${cur.current.rx.toFixed(3)}deg) rotateY(${cur.current.ry.toFixed(3)}deg)`;
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
  }, [reduced, disableOnTouch, max, lift, ease]);

  return (
    <div
      ref={wrap}
      className={className}
      style={{ perspective: 1400, transformStyle: "preserve-3d" }}
    >
      <div
        ref={inner}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
          transition: reduced ? undefined : "transform 60ms linear",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Tilt3D;
