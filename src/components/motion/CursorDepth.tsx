import { useEffect, useRef } from "react";

/**
 * Cursor-reactive depth: child layers shift slightly based on pointer position.
 * Pure 2D, GPU-accelerated transforms.
 */
interface CursorDepthProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const CursorDepth = ({ children, className = "", intensity = 12 }: CursorDepthProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const cx = (e.clientX - r.left) / r.width - 0.5;
      const cy = (e.clientY - r.top) / r.height - 0.5;
      target.current = { x: cx, y: cy };
    };
    const onLeave = () => { target.current = { x: 0, y: 0 }; };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;
      const layers = el.querySelectorAll<HTMLElement>("[data-depth]");
      layers.forEach((layer) => {
        const d = parseFloat(layer.dataset.depth || "1");
        layer.style.transform = `translate3d(${current.current.x * intensity * d}px, ${current.current.y * intensity * d}px, 0)`;
      });
      raf.current = requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    raf.current = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [intensity]);

  return (
    <div ref={ref} className={className} style={{ perspective: 1200 }}>
      {children}
    </div>
  );
};

export default CursorDepth;
