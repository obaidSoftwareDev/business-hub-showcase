import { Link } from "react-router-dom";
import evorixWordmark from "@/assets/evorix-wordmark.webp";
import footerBg from "@assets/generated_images/footer_bg.png";
import { ArrowUpRight } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: [
      { to: "/product", label: "Overview" },
      { to: "/modules", label: "Modules" },
      { to: "/pricing", label: "Pricing" },
      { to: "/changelog", label: "Changelog" },
      { to: "/security", label: "Security & Trust" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/resources", label: "Guides" },
      { to: "/customers", label: "Customers" },
      { to: "/resources#release-notes", label: "Release notes" },
      { to: "/resources#faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
      { to: "/legal", label: "Legal" },
    ],
  },
  {
    title: "Workspace",
    links: [
      { to: "/login", label: "Sign in" },
      { to: "/app", label: "Open Workspace" },
      { to: "/contact", label: "Book demo" },
    ],
  },
];

export const SiteFooter = () => {
  return (
    <footer className="relative border-t border-border bg-surface-1 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <img
          src={footerBg}
          alt=""
          data-testid="img-footer-background"
          className="w-full h-full object-cover opacity-60 select-none"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/70 to-surface-1/40" />
      </div>
      <div className="relative container-edge py-16 md:py-24">
        <div className="grid gap-12 lg:gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="relative flex items-center justify-center w-7 h-7 border border-foreground/80">
                <span className="absolute inset-[3px] bg-foreground" />
              </span>
              <span className="font-display font-semibold tracking-tight text-[15px]">BusniessHub</span>
            </Link>
            <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
              The operating system for inventory, sales, purchases, payments, and reporting. One disciplined workspace.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity"
            >
              Talk to the team
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <div className="num-tag mb-4">{col.title}</div>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline mt-16" />

        <div className="mt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} BusniessHub.</span>
            <span className="opacity-60">All rights reserved.</span>
          </div>

          <a
            href="#"
            className="group inline-flex items-center gap-3"
            aria-label="Built by EVORIX Systems"
          >
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Built by</span>
            <span className="block bg-foreground rounded-sm px-2 py-1.5">
              <img src={evorixWordmark} alt="EVORIX Systems" className="h-3.5 w-auto opacity-95" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
