import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Plus, ArrowDown } from "lucide-react";

const products = [
  { sku: "SKU-10421", name: "Premium Basmati 5kg", cat: "Grocery", stock: 142, status: "In stock", price: "₹ 720" },
  { sku: "SKU-10422", name: "Cold Pressed Mustard Oil 1L", cat: "Grocery", stock: 38, status: "Low", price: "₹ 280" },
  { sku: "SKU-10423", name: "Steel Pressure Cooker 5L", cat: "Cookware", stock: 12, status: "Low", price: "₹ 1,840" },
  { sku: "SKU-10424", name: "Cotton Hand Towel — Charcoal", cat: "Linen", stock: 0, status: "Out", price: "₹ 240" },
  { sku: "SKU-10425", name: "LED Desk Lamp 12W", cat: "Lighting", stock: 86, status: "In stock", price: "₹ 1,250" },
  { sku: "SKU-10426", name: "Storage Box · 20L", cat: "Home", stock: 220, status: "In stock", price: "₹ 380" },
  { sku: "SKU-10427", name: "Glass Jar Set · 6", cat: "Kitchen", stock: 64, status: "In stock", price: "₹ 540" },
];

const filterChips = ["All", "Grocery", "Cookware", "Low stock", "Out"];
const TYPE_TARGET = "mustard oil";

export const ProductsMock = ({ className = "", animated = true }: { className?: string; animated?: boolean }) => {
  const [typed, setTyped] = useState(animated ? "" : TYPE_TARGET);
  const [activeChip, setActiveChip] = useState(0);
  const [hoverRow, setHoverRow] = useState<string | null>("SKU-10422");

  useEffect(() => {
    if (!animated) return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(TYPE_TARGET.slice(0, i));
      if (i >= TYPE_TARGET.length) window.clearInterval(id);
    }, 90);
    return () => window.clearInterval(id);
  }, [animated]);

  useEffect(() => {
    if (!animated) return;
    const id = window.setInterval(() => {
      setActiveChip((c) => (c + 1) % filterChips.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, [animated]);

  return (
    <div className={`bg-background ${className}`}>
      <div className="flex items-center justify-between p-3 border-b border-border gap-3">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Inventory · Products</div>
          <div className="text-sm font-medium tracking-tight truncate">2,184 items · 14 categories</div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 border border-border rounded-sm px-2 py-1.5 bg-surface-1 text-[11px] text-muted-foreground w-44 md:w-56">
            <Search className="w-3 h-3 shrink-0" />
            <span className="truncate text-foreground/80">{typed}</span>
            <span className="caret-blink text-foreground" />
          </div>
          <button className="inline-flex items-center gap-1 text-[11px] border border-border rounded-sm px-2 py-1.5">
            <Filter className="w-3 h-3" /> Filters
          </button>
          <button className="inline-flex items-center gap-1 text-[11px] bg-foreground text-background rounded-sm px-2 py-1.5">
            <Plus className="w-3 h-3" /> New
          </button>
        </div>
      </div>

      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-surface-1/40 overflow-x-auto">
        {filterChips.map((chip, i) => (
          <button
            key={chip}
            className={`relative text-[10px] tracking-tight px-2 py-1 rounded-sm border whitespace-nowrap transition-colors ${
              i === activeChip
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground"
            }`}
          >
            {chip}
          </button>
        ))}
        <span className="ml-auto text-[9px] font-mono text-muted-foreground hidden md:inline">7 of 2,184</span>
      </div>

      <div className="grid grid-cols-12 px-3 py-2 text-[9px] uppercase tracking-wider text-muted-foreground border-b border-border bg-surface-1/60">
        <div className="col-span-2 inline-flex items-center gap-1">SKU <ArrowDown className="w-2.5 h-2.5 opacity-50" /></div>
        <div className="col-span-4">Name</div>
        <div className="col-span-2">Category</div>
        <div className="col-span-2">Stock</div>
        <div className="col-span-1">Status</div>
        <div className="col-span-1 text-right">Price</div>
      </div>
      <ul>
        {products.map((p, i) => {
          const isHover = hoverRow === p.sku;
          return (
            <motion.li
              key={p.sku}
              onMouseEnter={() => setHoverRow(p.sku)}
              className={`relative grid grid-cols-12 px-3 py-2.5 text-[11px] border-b border-border items-center cursor-default transition-colors ${
                isHover ? "bg-surface-1" : ""
              } ${isHover ? "row-sweep" : ""}`}
              initial={animated ? { opacity: 0, y: 6 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <div className="col-span-2 font-mono text-muted-foreground">{p.sku}</div>
              <div className="col-span-4 truncate pr-2">{p.name}</div>
              <div className="col-span-2 text-muted-foreground">{p.cat}</div>
              <div className="col-span-2 font-mono">{p.stock}</div>
              <div className="col-span-1">
                <span
                  className={`inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-sm border ${
                    p.status === "Out"
                      ? "border-foreground bg-foreground text-background"
                      : p.status === "Low"
                      ? "border-foreground/60 text-foreground badge-pulse"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {p.status === "Low" && <span className="w-1 h-1 rounded-full bg-foreground" />}
                  {p.status}
                </span>
              </div>
              <div className="col-span-1 text-right font-mono">{p.price}</div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsMock;
