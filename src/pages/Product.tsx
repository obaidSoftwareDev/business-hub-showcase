import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Boxes, FolderTree, Truck, ShoppingCart, Layers, BarChart3, ScrollText, Users, LayoutGrid, Wallet, ShieldCheck } from "lucide-react";

import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import FinalCTA from "@/components/site/FinalCTA";
import FAQList from "@/components/site/FAQList";
import { FadeUp, SplitWords } from "@/components/motion/SplitWords";
import { Parallax } from "@/components/motion/Parallax";
import AppFrame from "@/components/mock/AppFrame";
import DashboardMock from "@/components/mock/DashboardMock";
import ProductsMock from "@/components/mock/ProductsMock";
import ReceiptsMock from "@/components/mock/ReceiptsMock";
import AuditMock from "@/components/mock/AuditMock";
import ReportsMock from "@/components/mock/ReportsMock";

const ProductBlock = ({
  index,
  eyebrow,
  title,
  description,
  bullets,
  mock,
  reverse = false,
  icon: Icon,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  mock: React.ReactNode;
  reverse?: boolean;
  icon: any;
}) => (
  <Section index={index} eyebrow={eyebrow} variant={reverse ? "muted" : "default"}>
    <div className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-start ${reverse ? "lg:[&>*:first-child]:order-last" : ""}`}>
      <div className="lg:col-span-5">
        <Icon className="w-6 h-6" strokeWidth={1.4} />
        <h2 className="h-section mt-6">
          <SplitWords text={title} />
        </h2>
        <p className="lead mt-5">{description}</p>
        <ul className="mt-8 border-t border-border">
          {bullets.map((b, i) => (
            <motion.li
              key={i}
              className="border-b border-border py-4 flex items-start gap-4"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="num-tag pt-1">0{i + 1}</span>
              <span className="text-sm md:text-[15px] leading-relaxed">{b}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-7">
        <Parallax amount={28}>
          <AppFrame>{mock}</AppFrame>
        </Parallax>
      </div>
    </div>
  </Section>
);

const Product = () => {
  return (
    <>
      <PageHero
        eyebrow="Product · the operating platform"
        title="A serious operations platform — covering the entire daily loop."
        description="From product master to reporting and audit, BusniessHub is the full operating surface your business runs on."
        primaryCta={{ label: "Open Workspace", to: "/app" }}
        secondaryCta={{ label: "See pricing", to: "/pricing" }}
        visualTitle="Dashboard · Acme Retail"
        visualUrl="app.busnieshub.com/dashboard"
        visual={<DashboardMock />}
        tone="Workspace overview"
        frameCaption="Frame 01 / 12 · Dashboard"
        meta={[
          { label: "Build", value: "v3.4" },
          { label: "Modules", value: "12" },
          { label: "Audit", value: "live" },
        ]}
        kpis={[
          { k: "Modules shipped", v: "12", sub: "All first-class" },
          { k: "Operating loop", v: "6 steps", sub: "Add → Trace" },
          { k: "Audit log", v: "Streaming", sub: "Every action" },
          { k: "Workspaces", v: "Multi", sub: "Books fully scoped" },
        ]}
        secondaryTitle="Stock alert"
        secondaryUrl="alerts.busnieshub.com"
        secondaryFragment={
          <div className="p-4">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">3 SKUs below threshold</div>
            <ul className="mt-3 divide-y divide-border text-[11px]">
              <li className="flex items-center justify-between py-2"><span>SKU-10422 · Mustard Oil</span><span className="font-mono">12</span></li>
              <li className="flex items-center justify-between py-2"><span>SKU-10423 · Cooker 5L</span><span className="font-mono">4</span></li>
              <li className="flex items-center justify-between py-2"><span>SKU-10428 · Towel C</span><span className="font-mono">6</span></li>
            </ul>
            <div className="mt-4 pt-3 border-t border-border">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Today</div>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="font-display text-xl tracking-tight">₹4.82L</span>
                <span className="font-mono text-[10px] text-muted-foreground">+12%</span>
              </div>
              <div className="mt-3 h-1.5 bg-surface-1 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-foreground" style={{ width: "62%" }} />
              </div>
            </div>
          </div>
        }
        sidePanel={
          <div className="p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Open POs</div>
            <div className="text-sm font-medium tracking-tight mt-1">7 awaiting receipt</div>
            <ul className="mt-2 divide-y divide-border text-[10.5px]">
              <li className="flex items-center justify-between py-1.5"><span>PO-3041 · Sundar Wholesale</span><span className="font-mono">₹62k</span></li>
              <li className="flex items-center justify-between py-1.5"><span>PO-3045 · Ambika Foods</span><span className="font-mono">₹38k</span></li>
            </ul>
          </div>
        }
      />

      {/* Architecture */}
      <Section index="01 ·" eyebrow="Architecture" title={<>One workspace, twelve modules, <span className="text-muted-foreground">one shared ledger of truth.</span></>}
        description="Every module is a first-class citizen. They share data, share audit, share scope.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {[
            { i: LayoutGrid, n: "Dashboard" },
            { i: Boxes, n: "Products" },
            { i: FolderTree, n: "Categories" },
            { i: Truck, n: "Purchases" },
            { i: ShoppingCart, n: "Sales" },
            { i: Users, n: "Customers" },
            { i: Layers, n: "Collections" },
            { i: Wallet, n: "Payments" },
            { i: BarChart3, n: "Reports" },
            { i: ScrollText, n: "Audit Log" },
            { i: ShieldCheck, n: "Security" },
            { i: ArrowUpRight, n: "Workspace" },
          ].map((m, i) => (
            <motion.div
              key={m.n}
              className="bg-background p-6 flex flex-col gap-4 group"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
            >
              <m.i className="w-5 h-5" strokeWidth={1.4} />
              <div className="text-sm font-medium tracking-tight">{m.n}</div>
              <div className="h-px w-8 bg-border group-hover:w-14 group-hover:bg-foreground transition-all duration-700 mt-auto" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Operating loop */}
      <Section index="02 ·" eyebrow="Daily loop" title="One rhythm. Every operating day." variant="muted"
        description="Add. Receive. Sell. Collect. Review. Trace. The same disciplined sequence — every day.">
        <div className="grid md:grid-cols-6 gap-px bg-border border border-border">
          {["Add", "Receive", "Sell", "Collect", "Review", "Trace"].map((s, i) => (
            <motion.div
              key={s}
              className="bg-background p-6 md:p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
            >
              <div className="num-tag">0{i + 1}</div>
              <div className="mt-3 font-display text-xl tracking-tight">{s}.</div>
            </motion.div>
          ))}
        </div>
      </Section>

      <ProductBlock
        index="03 ·"
        eyebrow="Dashboard"
        title="The operating day, at a glance."
        description="A single screen that tells you whether the business is healthy today — and where to look first if it isn't."
        bullets={[
          "Sales, receipts, stock value and open POs in one immediate view.",
          "Live activity stream attributed to the user behind every action.",
          "Customisable to the indicators your operators actually trust.",
        ]}
        icon={LayoutGrid}
        mock={<DashboardMock />}
      />

      <ProductBlock
        index="04 ·"
        eyebrow="Inventory and products"
        title="A clean SKU master that scales."
        description="Products are the foundation of every other workflow. Get them right and everything downstream gets easier."
        bullets={[
          "SKU, name, units, pricing, reorder thresholds and category structure.",
          "Stock visibility per product — including in-flight purchases and reserved units.",
          "Adjustments captured with a reason — never silent corrections.",
        ]}
        icon={Boxes}
        reverse
        mock={<ProductsMock />}
      />

      <ProductBlock
        index="05 ·"
        eyebrow="Categories"
        title="Structure that powers everything else."
        description="Clean category architecture drives clean reports and clean pricing logic across the platform."
        bullets={[
          "Group SKUs into categories that mirror how you actually sell.",
          "Category-level reporting on sales, stock value and movement.",
          "Reorganise without breaking historical reports.",
        ]}
        icon={FolderTree}
        mock={<ProductsMock />}
      />

      <ProductBlock
        index="06 ·"
        eyebrow="Purchases & suppliers"
        title="Purchase orders, inwards, supplier payments — joined up."
        description="The whole inbound side of your operation, from PO to settlement, in one place."
        bullets={[
          "Raise purchases against suppliers with clear pricing and terms.",
          "Receive inwards into stock with quantity and quality checks.",
          "Post supplier payments and reconcile against open invoices.",
        ]}
        icon={Truck}
        reverse
        mock={<DashboardMock />}
      />

      <ProductBlock
        index="07 ·"
        eyebrow="Sales & customers"
        title="Cash, credit and mixed sales — without spreadsheets."
        description="Run the sale, generate the invoice, allocate the receipt — without leaving the screen."
        bullets={[
          "Cash, credit and mixed-tender sales with instant invoicing.",
          "Customer ledgers with running balance and full invoice history.",
          "Outstanding visibility per customer, per period.",
        ]}
        icon={ShoppingCart}
        mock={<ProductsMock />}
      />

      <ProductBlock
        index="08 ·"
        eyebrow="Collections & receipts"
        title="Receipts that allocate cleanly — every time."
        description="Money in, allocated to invoices, reflected in customer balances. No floating amounts. No reconciliations later."
        bullets={[
          "Issue receipts and allocate to one or many invoices.",
          "Watch outstanding shrink customer-by-customer.",
          "Full receipt history with adjustments captured separately.",
        ]}
        icon={Layers}
        reverse
        mock={<ReceiptsMock />}
      />

      <ProductBlock
        index="09 ·"
        eyebrow="Reports"
        title="Decision visibility — at the moment you need it."
        description="Operating reports built from the live data. No exports. No reconciliations. No surprise."
        bullets={[
          "Sales vs receipts across daily, weekly and period ranges.",
          "Top SKUs, top customers, supplier exposure and stock value.",
          "Period closes that don't rely on spreadsheet gymnastics.",
        ]}
        icon={BarChart3}
        mock={<ReportsMock />}
      />

      <ProductBlock
        index="10 ·"
        eyebrow="Audit log & accountability"
        title="Every action attributed. No black boxes."
        description="The audit log isn't a feature — it's the spine. Operators see exactly what happened, when and by whom."
        bullets={[
          "Create, update and approve events recorded against the user.",
          "Streamed live and queryable across the workspace.",
          "Foundation for trust, dispute resolution and process discipline.",
        ]}
        icon={ScrollText}
        reverse
        mock={<AuditMock />}
      />

      <ProductBlock
        index="11 ·"
        eyebrow="Workspace scope"
        title="Run multiple businesses without bleed."
        description="Each business is its own workspace — books, users, audit and reports stay scoped where they belong."
        bullets={[
          "Separate workspaces per business or location.",
          "Role-based access scoped to the workspace.",
          "Switch context cleanly — never accidentally cross books.",
        ]}
        icon={ShieldCheck}
        mock={<DashboardMock />}
      />

      <Section index="12 ·" eyebrow="FAQ" title="Common questions about the product." variant="muted">
        <FAQList
          items={[
            { q: "Is BusniessHub a POS or an ERP?", a: "Neither — and both. It's an operations platform built for retailers and wholesalers. It runs the daily counter and keeps the operating books in one shape, without the heaviness of a traditional ERP." },
            { q: "Can I run multiple businesses?", a: "Yes. Each business is a separate workspace with its own users, books, audit and reports. Operators with access to multiple workspaces can switch cleanly between them." },
            { q: "How does pricing work?", a: "Three tiers: Starter, Business and Enterprise. Pricing is based on the size and shape of your operation, not seat-count gymnastics." },
            { q: "Do I need to install anything?", a: "No. BusniessHub runs entirely in the browser. Sign in, open your workspace, and you're operating." },
            { q: "Is this built by EVORIX Systems?", a: "Yes. BusniessHub is the product. EVORIX Systems is the team behind it." },
          ]}
        />
      </Section>

      <FinalCTA title="Operate the whole loop in one workspace." />
    </>
  );
};

export default Product;
