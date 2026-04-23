import { motion } from "framer-motion";
import { Search, Plus } from "lucide-react";

const rows = [
  { name: "GoldGrain Mills", contact: "Usman Malik", phone: "0333-555-1234", city: "Faisalabad", purchases: "0.00", out: "0.00", status: "Inactive" },
  { name: "PK Mobile Sheikhupura", contact: "—", phone: "—", city: "—", purchases: "3,25,320", out: "2,55,320", status: "Active" },
  { name: "TechPro Distributors", contact: "Ahmed Khan", phone: "0300-123-4567", city: "Karachi", purchases: "0.00", out: "0.00", status: "Inactive" },
  { name: "WritePlus Wholesale", contact: "Sara Ali", phone: "0321-987-6543", city: "Lahore", purchases: "0.00", out: "0.00", status: "Inactive" },
  { name: "Vyom Traders", contact: "Rohit P.", phone: "0332-444-7788", city: "Mumbai", purchases: "1,12,400", out: "18,400", status: "Active" },
];

export const SuppliersMock = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`bg-background ${className}`}>
      <div className="flex items-center justify-between p-3 border-b border-border">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Partners · Suppliers</div>
          <div className="text-sm font-medium tracking-tight">Supplier ledger and outstanding payables</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1.5 border border-border rounded-sm px-2 py-1.5 bg-surface-1 text-[11px] text-muted-foreground w-48">
            <Search className="w-3 h-3" /> Search suppliers…
          </div>
          <button className="inline-flex items-center gap-1 text-[11px] bg-foreground text-background rounded-sm px-2 py-1.5">
            <Plus className="w-3 h-3" /> Add Supplier
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 px-3 py-2 text-[9px] uppercase tracking-wider text-muted-foreground border-b border-border bg-surface-1/60">
        <div className="col-span-3">Name</div>
        <div className="col-span-2">Contact</div>
        <div className="col-span-2">Phone</div>
        <div className="col-span-2 text-right">Purchases</div>
        <div className="col-span-2 text-right">Outstanding</div>
        <div className="col-span-1 text-right">Status</div>
      </div>
      <ul>
        {rows.map((r, i) => (
          <motion.li
            key={r.name}
            className="grid grid-cols-12 px-3 py-2.5 text-[11px] border-b border-border items-center hover:bg-surface-1/60"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
          >
            <div className="col-span-3">{r.name}</div>
            <div className="col-span-2 text-muted-foreground">{r.contact}</div>
            <div className="col-span-2 font-mono text-muted-foreground">{r.phone}</div>
            <div className="col-span-2 text-right font-mono">{r.purchases}</div>
            <div className="col-span-2 text-right font-mono">{r.out}</div>
            <div className="col-span-1 text-right">
              <span
                className={`inline-block text-[9px] px-1.5 py-0.5 rounded-sm border ${
                  r.status === "Active" ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground"
                }`}
              >
                {r.status}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SuppliersMock;
