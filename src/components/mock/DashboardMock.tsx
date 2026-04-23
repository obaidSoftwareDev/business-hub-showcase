import { motion } from "framer-motion";
import { LayoutGrid, Boxes, ShoppingCart, Users, Receipt, BarChart3, ScrollText, Wallet, FolderTree, Truck, Layers, Settings } from "lucide-react";

const navItems = [
  { icon: LayoutGrid, label: "Dashboard", active: true },
  { icon: Boxes, label: "Products" },
  { icon: FolderTree, label: "Categories" },
  { icon: Truck, label: "Purchases" },
  { icon: ShoppingCart, label: "Sales" },
  { icon: Users, label: "Customers" },
  { icon: Layers, label: "Collections" },
  { icon: Wallet, label: "Payments" },
  { icon: Receipt, label: "Receipts" },
  { icon: BarChart3, label: "Reports" },
  { icon: ScrollText, label: "Audit Log" },
];

const statRows = [
  { label: "Sales today", value: "₹ 1,84,210", delta: "+12.4%", trend: [12, 18, 14, 22, 19, 28, 31, 27, 34, 41, 38, 46] },
  { label: "Receipts", value: "₹ 92,430", delta: "+4.1%", trend: [22, 18, 24, 21, 28, 26, 31, 29, 33, 30, 36, 38] },
  { label: "Stock value", value: "₹ 18.6L", delta: "−0.6%", trend: [40, 38, 41, 39, 36, 38, 35, 33, 34, 32, 30, 31] },
  { label: "Open POs", value: "23", delta: "+3", trend: [3, 5, 4, 6, 7, 6, 8, 9, 8, 10, 11, 9] },
];

const ledger = [
  { time: "10:42", code: "INV-1042", who: "Walk-in", amount: "+ 2,140" },
  { time: "10:38", code: "PO-318", who: "Vyom Traders", amount: "− 18,400" },
  { time: "10:31", code: "INV-1041", who: "Aarav Kirana", amount: "+ 6,820" },
  { time: "10:24", code: "RCT-902", who: "Sumit Wholesale", amount: "+ 12,000" },
  { time: "10:18", code: "ADJ-71", who: "Stock recount", amount: "− 12 units" },
  { time: "10:11", code: "INV-1040", who: "Mehta Stores", amount: "+ 4,210" },
];

interface DashboardMockProps {
  className?: string;
  /** when true, animates bars on mount/in view */
  animated?: boolean;
}

const Sparkline = ({ data, animated = true }: { data: number[]; animated?: boolean }) => {
  const max = Math.max(...data);
  const path = data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${(i / (data.length - 1)) * 100} ${30 - (v / max) * 28}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 30" className="w-full h-8" preserveAspectRatio="none">
      <motion.path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        vectorEffect="non-scaling-stroke"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
};

export const DashboardMock = ({ className = "", animated = true }: DashboardMockProps) => {
  return (
    <div className={`grid grid-cols-12 bg-background ${className}`}>
      {/* Sidebar */}
      <aside className="col-span-3 border-r border-border bg-surface-1/60 p-3">
        <div className="flex items-center gap-2 px-2 py-2">
          <span className="w-4 h-4 border border-foreground/80 relative flex items-center justify-center">
            <span className="absolute inset-[2px] bg-foreground" />
          </span>
          <span className="text-[11px] font-medium tracking-tight">Acme Retail · Main</span>
        </div>
        <div className="mt-3 grid gap-0.5">
          {navItems.map((it, i) => (
            <button
              key={it.label}
              className={`group flex items-center gap-2 rounded-sm px-2 py-1.5 text-[11px] transition-colors ${
                it.active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground hover:bg-surface-2/60"
              }`}
            >
              <it.icon className="w-3 h-3" />
              <span>{it.label}</span>
              {it.active && <span className="ml-auto text-[9px] opacity-60">⌘1</span>}
              <span className="hidden">{i}</span>
            </button>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-border">
          <button className="flex items-center gap-2 px-2 py-1.5 text-[11px] text-muted-foreground">
            <Settings className="w-3 h-3" /> Settings
          </button>
        </div>
      </aside>

      {/* Main */}
      <section className="col-span-9 p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Dashboard</div>
            <div className="text-sm font-medium tracking-tight">Today · 23 Apr 2026</div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="text-[10px] font-mono text-muted-foreground bg-surface-1 px-2 py-1 border border-border rounded-sm">⌘ K</div>
            <div className="text-[10px] font-mono text-muted-foreground bg-surface-1 px-2 py-1 border border-border rounded-sm">Live</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-3">
          {statRows.map((s, i) => (
            <motion.div
              key={s.label}
              className="border border-border rounded-sm p-2.5 bg-surface-0"
              initial={animated ? { opacity: 0, y: 8 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
              <div className="text-[13px] font-medium tracking-tight mt-1">{s.value}</div>
              <div className="flex items-center justify-between text-[9px] text-muted-foreground mt-0.5">
                <span>{s.delta}</span>
              </div>
              <div className="text-foreground/70 mt-1">
                <Sparkline data={s.trend} animated={animated} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-2">
          {/* Bar chart */}
          <div className="col-span-7 border border-border rounded-sm p-3 bg-surface-0">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Sales · last 14 days</div>
              <div className="text-[9px] text-muted-foreground font-mono">view: stacked</div>
            </div>
            <div className="h-28 flex items-end gap-1.5">
              {[42, 58, 36, 64, 71, 49, 82, 68, 74, 90, 66, 78, 88, 96].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-foreground/80 rounded-[1px] origin-bottom"
                  initial={animated ? { scaleY: 0 } : { scaleY: 1 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center gap-3 text-[9px] text-muted-foreground">
              <span className="inline-flex items-center gap-1"><span className="w-2 h-2 bg-foreground/80 inline-block" /> Cash</span>
              <span className="inline-flex items-center gap-1"><span className="w-2 h-2 bg-foreground/30 inline-block" /> Credit</span>
            </div>
          </div>

          {/* Activity */}
          <div className="col-span-5 border border-border rounded-sm bg-surface-0 overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 border-b border-border">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Activity</div>
              <div className="text-[9px] text-muted-foreground font-mono">audit · live</div>
            </div>
            <ul className="divide-y divide-border">
              {ledger.map((l, i) => (
                <motion.li
                  key={i}
                  className="px-3 py-2 flex items-center gap-2 text-[10.5px]"
                  initial={animated ? { opacity: 0, x: -8 } : false}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <span className="font-mono text-muted-foreground w-9">{l.time}</span>
                  <span className="font-mono">{l.code}</span>
                  <span className="text-muted-foreground truncate flex-1">{l.who}</span>
                  <span className="font-mono text-foreground/90">{l.amount}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardMock;
