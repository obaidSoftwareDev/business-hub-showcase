import { motion } from "framer-motion";
import { Search, Plus } from "lucide-react";

const rows = [
  { name: "ADAPTER", desc: "All types of adapters", count: 3, status: "Active" },
  { name: "CHARGER", desc: "All types of chargers · Micro, Type-C, iPhone", count: 15, status: "Active" },
  { name: "DATA CABLE", desc: "Charging cables, transfer cables", count: 22, status: "Active" },
  { name: "EARPOD", desc: "Earpods, bluetooth audio", count: 10, status: "Active" },
  { name: "HAND FREE", desc: "All types of handfrees", count: 17, status: "Active" },
  { name: "HEADSET", desc: "Wired and wireless headsets", count: 1, status: "Active" },
  { name: "POWER BANK", desc: "10000–20000 mAh & more", count: 2, status: "Active" },
  { name: "SPEAKER", desc: "3 inch · 4 inch & more", count: 2, status: "Active" },
];

export const CategoriesMock = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`bg-background ${className}`}>
      <div className="flex items-center justify-between p-3 border-b border-border">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Inventory · Categories</div>
          <div className="text-sm font-medium tracking-tight">Manage product categories</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1.5 border border-border rounded-sm px-2 py-1.5 bg-surface-1 text-[11px] text-muted-foreground w-48">
            <Search className="w-3 h-3" /> Search categories…
          </div>
          <button className="inline-flex items-center gap-1 text-[11px] bg-foreground text-background rounded-sm px-2 py-1.5">
            <Plus className="w-3 h-3" /> Add Category
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 px-3 py-2 text-[9px] uppercase tracking-wider text-muted-foreground border-b border-border bg-surface-1/60">
        <div className="col-span-3">Name</div>
        <div className="col-span-6">Description</div>
        <div className="col-span-1 text-right">Items</div>
        <div className="col-span-2 text-right">Status</div>
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
            <div className="col-span-3 font-mono tracking-wide">{r.name}</div>
            <div className="col-span-6 text-muted-foreground truncate">{r.desc}</div>
            <div className="col-span-1 text-right font-mono">{r.count}</div>
            <div className="col-span-2 text-right">
              <span className="inline-block text-[9px] px-1.5 py-0.5 rounded-sm border border-border text-muted-foreground">
                {r.status}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesMock;
