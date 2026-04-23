import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Lightweight scroll reveal using IntersectionObserver.
 * Adds .is-in to trigger CSS transition defined in index.css (.reveal).
 */
export const Reveal = ({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            window.setTimeout(() => node.classList.add("is-in"), delay);
            io.unobserve(node);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [delay]);

  const Component = Tag as any;
  return (
    <Component ref={ref as any} className={`reveal ${className}`}>
      {children}
    </Component>
  );
};

export default Reveal;
