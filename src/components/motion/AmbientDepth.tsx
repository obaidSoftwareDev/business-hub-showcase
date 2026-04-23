import { useEffect, useRef } from "react";

/**
 * Lightweight 2D atmospheric depth canvas.
 * Renders a few slow-moving graphite "planes" + faint grain. No 3D, no heavy GPU work.
 * Sits behind hero areas to add depth without ever feeling like a game.
 */
interface AmbientDepthProps {
  className?: string;
  intensity?: "low" | "med";
}

export const AmbientDepth = ({ className = "", intensity = "low" }: AmbientDepthProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const planeCount = intensity === "med" ? 5 : 3;
    const planes = Array.from({ length: planeCount }).map((_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 220 + Math.random() * 360,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.04,
      o: 0.04 + Math.random() * 0.05,
      i,
    }));

    let t = 0;
    const tick = () => {
      t += 1;
      ctx.clearRect(0, 0, w, h);
      planes.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -p.r) p.x = w + p.r;
        if (p.x > w + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = h + p.r;
        if (p.y > h + p.r) p.y = -p.r;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        grad.addColorStop(0, `rgba(0,0,0,${p.o})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      ro.disconnect();
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export default AmbientDepth;
