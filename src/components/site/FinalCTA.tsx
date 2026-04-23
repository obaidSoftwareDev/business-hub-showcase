import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/motion/SplitWords";

interface FinalCTAProps {
  eyebrow?: string;
  title: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}

export const FinalCTA = ({ eyebrow = "Get started", title, primary = { label: "Open Workspace", to: "/app" }, secondary = { label: "Book a demo", to: "/contact" } }: FinalCTAProps) => {
  return (
    <section className="relative bg-surface-ink text-background overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.07]" aria-hidden />
      <div className="container-edge relative py-28 md:py-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="num-tag text-background/60">{eyebrow}</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <FadeUp>
              <h2 className="h-display max-w-3xl">{title}</h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to={primary.to}
                  className="btn-sheen inline-flex items-center gap-1.5 bg-background text-foreground text-sm px-5 py-3 rounded-sm hover:opacity-95"
                >
                  {primary.label}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to={secondary.to}
                  className="inline-flex items-center gap-1.5 border border-background/30 text-sm px-5 py-3 rounded-sm hover:bg-background/5 transition-colors"
                >
                  {secondary.label}
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
