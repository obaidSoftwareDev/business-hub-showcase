import { motion } from "framer-motion";

const events = [
  { t: "10:42:18", u: "neha@acme", a: "Created sale", o: "INV-1042 · ₹2,140" },
  { t: "10:38:02", u: "rahul@acme", a: "Approved purchase", o: "PO-318 · Vyom Traders" },
  { t: "10:31:55", u: "neha@acme", a: "Allocated receipt", o: "RCT-0902 → INV-1029" },
  { t: "10:24:10", u: "system", a: "Auto-reserved stock", o: "SKU-10422 × 4" },
  { t: "10:18:33", u: "owner@acme", a: "Adjusted stock", o: "ADJ-71 · −12 units" },
  { t: "10:11:21", u: "neha@acme", a: "Edited customer", o: "Mehta Stores · phone" },
  { t: "10:04:08", u: "rahul@acme", a: "Posted supplier payment", o: "SP-204 · ₹38,400" },
];

export const AuditMock = ({ className = "", animated = true }: { className?: string; animated?: boolean }) => {
  return (
    <div className={`bg-background font-mono ${className}`}>
      <div className="p-3 border-b border-border flex items-center justify-between font-sans gap-3">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Audit log</div>
          <div className="text-sm font-medium tracking-tight truncate">Workspace · Acme Retail</div>
        </div>
        <div className="text-[10px] text-muted-foreground inline-flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground status-pulse" /> streaming
        </div>
      </div>
      <ul className="divide-y divide-border">
        {events.map((e, i) => (
          <motion.li
            key={i}
            className={`grid grid-cols-12 gap-2 px-3 py-2 text-[10.5px] ${i === 0 ? "bg-surface-1" : ""}`}
            initial={animated ? { opacity: 0, x: -8 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
          >
            <span className="col-span-2 text-muted-foreground">{e.t}</span>
            <span className="col-span-3 truncate">{e.u}</span>
            <span className="col-span-3 text-foreground/80 truncate">{e.a}</span>
            <span className="col-span-4 text-muted-foreground truncate">{e.o}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default AuditMock;
