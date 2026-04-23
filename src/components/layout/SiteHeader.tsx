import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const primaryNav = [
  { to: "/", label: "BusniessHub" },
  { to: "/product", label: "Product" },
  { to: "/modules", label: "Modules" },
  { to: "/pricing", label: "Pricing" },
  { to: "/customers", label: "Customers" },
  { to: "/resources", label: "Resources" },
  { to: "/changelog", label: "Changelog" },
  { to: "/security", label: "Security & Trust" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-edge h-14 md:h-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group" aria-label="BusniessHub home">
          <span className="relative flex items-center justify-center w-7 h-7 border border-foreground/80">
            <span className="absolute inset-[3px] bg-foreground" />
            <span className="absolute inset-[3px] bg-background mix-blend-difference" />
          </span>
          <span className="font-display font-semibold tracking-tight text-[15px]">BusniessHub</span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {primaryNav.slice(1).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-3 py-2 text-[13px] tracking-tight transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-px h-px bg-foreground"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/login"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
          >
            Sign in
          </Link>
          <Link
            to="/app"
            className="btn-sheen group inline-flex items-center gap-1.5 bg-foreground text-background text-[13px] font-medium px-3.5 py-2 rounded-sm hover:opacity-95 transition-opacity"
          >
            Open Workspace
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          className="xl:hidden inline-flex items-center justify-center w-9 h-9 border border-border rounded-sm"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden border-t border-border bg-background"
          >
            <div className="container-edge py-6 grid gap-1">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3 border-b border-border text-base ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`
                  }
                >
                  {item.label}
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </NavLink>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-4">
                <Link to="/login" className="text-center py-3 border border-border text-sm">Sign in</Link>
                <Link to="/app" className="text-center py-3 bg-foreground text-background text-sm">Open Workspace</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;
