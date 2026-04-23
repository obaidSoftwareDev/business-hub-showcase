import { motion } from "framer-motion";
import { LayoutGrid, Boxes, FolderTree, Truck, ShoppingCart, Users, Layers, Wallet, Receipt, BarChart3, ScrollText, ShieldCheck, KeyRound, Database } from "lucide-react";

import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import FinalCTA from "@/components/site/FinalCTA";
import { FadeUp } from "@/components/motion/SplitWords";
import { Parallax } from "@/components/motion/Parallax";
import AppFrame from "@/components/mock/AppFrame";
import DashboardMock from "@/components/mock/DashboardMock";
import ProductsMock from "@/components/mock/ProductsMock";
import ReceiptsMock from "@/components/mock/ReceiptsMock";
import AuditMock from "@/components/mock/AuditMock";
import ReportsMock from "@/components/mock/ReportsMock";

interface Mod {
  i: any;
  name: string;
  short: string;
  controls: string;
  matters: string;
  bullets: string[];
  mock?: React.ReactNode;
}

const modules: Mod[] = [
  {
    i: LayoutGrid, name: "Dashboard",
    short: "The day at a glance — what changed, what needs attention.",
    controls: "Operational visibility, alert thresholds, today's posture.",
    matters: "Operators need a single screen to know whether the day is healthy. The dashboard is that screen.",
    bullets: ["Live KPIs", "Activity stream", "Alert zones", "Period switcher"],
    mock: <DashboardMock />,
  },
  {
    i: Boxes, name: "Products",
    short: "A clean SKU master that drives every downstream workflow.",
    controls: "SKUs, units, pricing, reorder thresholds, categories.",
    matters: "Bad product data poisons every downstream report. Get the master right once.",
    bullets: ["SKU master", "Pricing tiers", "Reorder thresholds", "Barcode support"],
    mock: <ProductsMock />,
  },
  {
    i: FolderTree, name: "Categories",
    short: "Structure that scales sales, stock and reporting.",
    controls: "Category trees, parent-child structure, category-level reporting.",
    matters: "Clean categories drive clean reports — and clean buying decisions.",
    bullets: ["Hierarchy", "Reorganise without breaking history", "Category P&L"],
    mock: <ProductsMock />,
  },
  {
    i: Truck, name: "Purchases",
    short: "PO, inward, supplier ledger — one inbound flow.",
    controls: "Purchase orders, inward stock, supplier balances, settlements.",
    matters: "Inbound discipline determines outbound margin.",
    bullets: ["PO lifecycle", "Inward receipts", "Supplier ledger", "Returns"],
    mock: <DashboardMock />,
  },
  {
    i: Users, name: "Customers",
    short: "Operator-grade customer ledgers, balances and history.",
    controls: "Customer accounts, ledgers, outstanding, communication notes.",
    matters: "Customers are the relationship — the ledger is the truth.",
    bullets: ["Ledger", "Outstanding view", "History", "Allocations link"],
    mock: <ProductsMock />,
  },
  {
    i: Layers, name: "Collections",
    short: "Receipts that allocate cleanly to invoices.",
    controls: "Receipt issuance, allocations, reconciliation.",
    matters: "Money received without allocation is money you don't really have. Allocations close the loop.",
    bullets: ["Allocation engine", "Partial settlements", "Adjustments separate"],
    mock: <ReceiptsMock />,
  },
  {
    i: BarChart3, name: "Reports",
    short: "Decision visibility — built from live operating data.",
    controls: "Period reports, category reports, customer & supplier exposure.",
    matters: "Reports built from exported spreadsheets are reports you cannot trust.",
    bullets: ["Sales vs receipts", "Top SKUs", "Period closes", "CSV export"],
    mock: <ReportsMock />,
  },
  {
    i: ScrollText, name: "Audit Log",
    short: "Every action attributed and timestamped.",
    controls: "Create, update and approval events across the workspace.",
    matters: "When something looks wrong, the audit log is the first place to look — and it must always answer.",
    bullets: ["Streaming", "Per-user", "Queryable", "Immutable"],
    mock: <AuditMock />,
  },
  {
    i: Database, name: "Business Management",
    short: "Multiple businesses, full separation of books.",
    controls: "Workspaces, business profiles, scope of users and reports.",
    matters: "Operators running multiple businesses need clean walls — not shared spreadsheets.",
    bullets: ["Workspaces", "Per-workspace audit", "Switch cleanly"],
    mock: <DashboardMock />,
  },
  {
    i: ShieldCheck, name: "Security & Roles",
    short: "Sign-in, role-based access, scoped permissions.",
    controls: "Roles, sessions, scoped access to modules and actions.",
    matters: "Operations involve money. Access has to be earned, scoped and reviewable.",
    bullets: ["Role-based access", "Scoped to workspace", "Session controls"],
    mock: <AuditMock />,
  },
  {
    i: Receipt, name: "Receipts & Payments",
    short: "Money in and money out, properly allocated.",
    controls: "Customer receipts, supplier payments, allocation history.",
    matters: "Receipts and payments without allocation create work later — or losses.",
    bullets: ["Customer receipts", "Supplier payments", "Allocations"],
    mock: <ReceiptsMock />,
  },
  {
    i: Wallet, name: "Stock visibility & ledger",
    short: "Stock value, ledger and adjustments — all auditable.",
    controls: "Stock ledger, adjustments with reasons, valuation.",
    matters: "If you can't trust the stock number, you can't trust the report it appears in.",
    bullets: ["Stock ledger", "Adjustments with reasons", "Valuation snapshot"],
    mock: <ReportsMock />,
  },
];

const ModulesPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Modules · twelve, all first-class"
        title="A full breakdown of every module that ships with BusniessHub."
        description="Each module is built to earn its place in your daily workflow."
        primaryCta={{ label: "See pricing", to: "/pricing" }}
        secondaryCta={{ label: "Open Workspace", to: "/app" }}
        visualTitle="Products · 2,184 SKUs"
        visual={<ProductsMock />}
      />

      {modules.map((m, idx) => (
        <Section
          key={m.name}
          variant={idx % 2 === 0 ? "default" : "muted"}
          index={`${String(idx + 1).padStart(2, "0")} ·`}
          eyebrow={m.name}
        >
          <div className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-start ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""}`}>
            <div className="lg:col-span-5">
              <m.i className="w-6 h-6" strokeWidth={1.4} />
              <h2 className="h-section mt-6">{m.short}</h2>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                <div className="bg-background p-5">
                  <div className="num-tag">What it controls</div>
                  <p className="text-sm mt-2 leading-relaxed">{m.controls}</p>
                </div>
                <div className="bg-background p-5">
                  <div className="num-tag">Why it matters</div>
                  <p className="text-sm mt-2 leading-relaxed">{m.matters}</p>
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {m.bullets.map((b) => (
                  <li key={b} className="text-[11px] uppercase tracking-wider border border-border px-2.5 py-1.5">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <Parallax amount={26}>
                <AppFrame>{m.mock}</AppFrame>
              </Parallax>
            </div>
          </div>
        </Section>
      ))}

      <FinalCTA title="Twelve modules. One workspace. One operating loop." />
    </>
  );
};

export default ModulesPage;
