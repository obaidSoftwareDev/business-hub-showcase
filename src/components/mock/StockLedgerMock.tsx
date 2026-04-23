import { motion } from "framer-motion";
import { Search } from "lucide-react";

const rows = [
  { d: "2026-04-22", p: "Simple White Earpod", t: "Sale", ref: "INV-0079", in: 0, out: 2, cost: "580.00", note: "Sale delivered" },
  { d: "2026-04-22", p: "Simple White Earpod", t: "Cancel", ref: "INV-0079", in: 2, out: 0, cost: "580.00", note: "Sale cancelled" },
  { d: "2026-04-21", p: "AMB Business HF", t: "Sale", ref: "INV-0073", in: 0, out: 2, cost: "230.00", note: "Sale delivered" },
  { d: "2026-04-21", p: "Stereo Earpod", t: "Sale", ref: "INV-0073", in: 0, out: 1, cost: "500.00", note: "Sale delivered" },
  { d: "2026-04-21", p: "Quick Cable Type C", t: "Sale", ref: "INV-0073", in: 0, out: 2, cost: "130.00", note: "Sale delivered" },
  { d: "2026-04-21", p: "Metal Cable Lift", t: "Sale", ref: "INV-0073", in: 0, out: 2, cost: "100.00", note: "Sale delivered" },
  { d: "2026-04-20", p: "AMB Dhoom Handfree", t: "Inward", ref: "PUR-0021", in: 24, out: 0, cost: "112.00", note: "PO received" },
  { d: "2026-04-20", p: "Power Bank 20000mAh", t: "Adjust", ref: "ADJ-0007", in: 0, out: 3, cost: "—", note: "Damaged · write-off" },
];

export const StockLedgerMock = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`bg-background ${className}`}>
      <div className="flex items-center justify-between p-3 border-b border-border">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Stock · Ledger</div>
          <div className="text-sm font-medium tracking-tight">Read-only log · sales, purchases, adjustments</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1.5 border border-border rounded-sm px-2 py-1.5 bg-surface-1 text-[11px] text-muted-foreground w-56">
            <Search className="w-3 h-3" /> Search product, reference, ref #
          </div>
          <button className="text-[11px] border border-border rounded-sm px-2 py-1.5">All Types</button>
          <button className="text-[11px] bg-foreground text-background rounded-sm px-2 py-1.5">Apply</button>
        </div>
      </div>
      <div className="grid grid-cols-12 px-3 py-2 text-[9px] uppercase tracking-wider text-muted-foreground border-b border-border bg-surface-1/60">
        <div className="col-span-2">Date</div>
        <div className="col-span-3">Product</div>
        <div className="col-span-1">Type</div>
        <div className="col-span-2">Reference</div>
        <div className="col-span-1 text-right">In</div>
        <div className="col-span-1 text-right">Out</div>
        <div className="col-span-1 text-right">Unit cost</div>
        <div className="col-span-1 text-right">Note</div>
      </div>
      <ul>
        {rows.map((r, i) => (
          <motion.li
            key={i}
            className="grid grid-cols-12 px-3 py-2.5 text-[10.5px] border-b border-border items-center hover:bg-surface-1/60"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
          >
            <div className="col-span-2 font-mono text-muted-foreground">{r.d}</div>
            <div className="col-span-3 truncate">{r.p}</div>
            <div className="col-span-1">
              <span className="inline-block text-[9px] px-1.5 py-0.5 rounded-sm border border-border text-muted-foreground">{r.t}</span>
            </div>
            <div className="col-span-2 font-mono text-muted-foreground">{r.ref}</div>
            <div className="col-span-1 text-right font-mono">{r.in || "—"}</div>
            <div className="col-span-1 text-right font-mono">{r.out || "—"}</div>
            <div className="col-span-1 text-right font-mono">{r.cost}</div>
            <div className="col-span-1 text-right text-muted-foreground truncate">{r.note}</div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default StockLedgerMock;
