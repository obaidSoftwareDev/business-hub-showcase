import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  index?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  variant?: "default" | "ink" | "muted";
  id?: string;
}

/**
 * Premium section wrapper with consistent rhythm, marker numerals, and editorial header.
 */
export const Section = ({ children, className = "", index, eyebrow, title, description, variant = "default", id }: SectionProps) => {
  const bg =
    variant === "ink"
      ? "bg-surface-ink text-background"
      : variant === "muted"
      ? "bg-surface-1"
      : "bg-background";
  const border = variant === "ink" ? "border-foreground/10" : "border-border";
  return (
    <section id={id} className={`relative py-24 md:py-32 border-b ${border} ${bg} ${className}`}>
      <div className="container-edge">
        {(index || eyebrow || title || description) && (
          <header className="mb-16 md:mb-20 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4 flex items-start gap-4">
              {index && <span className="num-tag mt-2">{index}</span>}
              {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            </div>
            <div className="col-span-12 md:col-span-8">
              {title && <h2 className="h-section">{title}</h2>}
              {description && <p className="lead mt-5">{description}</p>}
            </div>
          </header>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
