import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import SiteLayout from "@/components/layout/SiteLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Modules from "./pages/Modules";
import Pricing from "./pages/Pricing";
import Customers from "./pages/Customers";
import Resources from "./pages/Resources";
import Changelog from "./pages/Changelog";
import Security from "./pages/Security";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Login from "./pages/Login";
import AppPlaceholder from "./pages/AppPlaceholder";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/security" element={<Security />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppPlaceholder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
