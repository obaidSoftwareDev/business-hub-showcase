import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const rows = [
  { date: "23 Apr", code: "RCT-0902", customer: "Sumit Wholesale", invoice: "INV-1029", paid: 12000, balance: 0, selected: true },
  { date: "23 Apr", code: "RCT-0901", customer: "Aarav Kirana", invoice: "INV-1027", paid: 6820, balance: 0 },
  { date: "22 Apr", code: "RCT-0900", customer: "Mehta Stores", invoice: "INV-1024", paid: 4210, balance: 1250 },
  { date: "22 Apr", code: "RCT-0899", customer: "Neel Provisions", invoice: "INV-1018", paid: 9400, balance: 0 },
  { date: "21 Apr", code: "RCT-0898", customer: "Vyom Traders", invoice: "INV-1011", paid: 18400, balance: 0 },
];

const TOTAL = 50830;

const Total = ({ animated = true }: { animated?: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [v, setV] = useState(animated ? 0 : TOTAL);
  useEffect(() => {
    if (!animated || !inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1200);
      setV(Math.round(TOTAL * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animated, inView]);
  return <span ref={ref}>₹ {v.toLocaleString("en-IN")}</span>;
};

export const ReceiptsMock = ({ className = "", animated = true }: { className?: string; animated?: boolean }) => {
  return (
    <div className={`bg-background ${className}`}>
      <div className="p-3 border-b border-border flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Customer Receipts</div>
          <div className="text-sm font-medium tracking-tight truncate">Allocations · Last 7 days</div>
        </div>
        <div className="text-[10px] font-mono text-muted-foreground tabular-nums shrink-0">
          Total received · <Total animated={animated} />
        </div>
      </div>
      <div className="grid grid-cols-12 px-3 py-2 text-[9px] uppercase tracking-wider text-muted-foreground border-b border-border bg-surface-1/60">
        <div className="col-span-1">Date</div>
        <div className="col-span-2">Receipt</div>
        <div className="col-span-3">Customer</div>
        <div className="col-span-2">Invoice</div>
        <div className="col-span-2 text-right">Paid</div>
        <div className="col-span-2 text-right">Balance</div>
      </div>
      {rows.map((r, i) => (
        <motion.div
          key={r.code}
          className={`relative grid grid-cols-12 px-3 py-2.5 text-[11px] border-b border-border items-center ${
            r.selected ? "bg-surface-1 row-sweep" : ""
          }`}
          initial={animated ? { opacity: 0, y: 6 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
        >
          <div className="col-span-1 text-muted-foreground font-mono">{r.date}</div>
          <div className="col-span-2 font-mono">{r.code}</div>
          <div className="col-span-3 truncate pr-2">{r.customer}</div>
          <div className="col-span-2 text-muted-foreground font-mono">{r.invoice}</div>
          <div className="col-span-2 text-right font-mono">{r.paid.toLocaleString("en-IN")}</div>
          <div className="col-span-2 text-right font-mono">
            {r.balance === 0 ? <span className="text-muted-foreground">—</span> : r.balance.toLocaleString("en-IN")}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ReceiptsMock;
