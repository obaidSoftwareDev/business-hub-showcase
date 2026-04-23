import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ScrollToTop from "./ScrollToTop";

export const SiteLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <ScrollToTop />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
