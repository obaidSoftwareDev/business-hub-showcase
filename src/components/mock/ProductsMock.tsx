import { motion } from "framer-motion";
import { Search, Filter, Plus } from "lucide-react";

const products = [
  { sku: "SKU-10421", name: "Premium Basmati 5kg", cat: "Grocery", stock: 142, status: "In stock", price: "₹ 720" },
  { sku: "SKU-10422", name: "Cold Pressed Mustard Oil 1L", cat: "Grocery", stock: 38, status: "Low", price: "₹ 280" },
  { sku: "SKU-10423", name: "Steel Pressure Cooker 5L", cat: "Cookware", stock: 12, status: "Low", price: "₹ 1,840" },
  { sku: "SKU-10424", name: "Cotton Hand Towel — Charcoal", cat: "Linen", stock: 0, status: "Out", price: "₹ 240" },
  { sku: "SKU-10425", name: "LED Desk Lamp 12W", cat: "Lighting", stock: 86, status: "In stock", price: "₹ 1,250" },
  { sku: "SKU-10426", name: "Storage Box · 20L", cat: "Home", stock: 220, status: "In stock", price: "₹ 380" },
  { sku: "SKU-10427", name: "Glass Jar Set · 6", cat: "Kitchen", stock: 64, status: "In stock", price: "₹ 540" },
];

export const ProductsMock = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`bg-background ${className}`}>
      <div className="flex items-center justify-between p-3 border-b border-border">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Inventory · Products</div>
          <div className="text-sm font-medium tracking-tight">2,184 items · 14 categories</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1.5 border border-border rounded-sm px-2 py-1.5 bg-surface-1 text-[11px] text-muted-foreground w-56">
            <Search className="w-3 h-3" /> Search SKU, name, barcode…
          </div>
          <button className="inline-flex items-center gap-1 text-[11px] border border-border rounded-sm px-2 py-1.5">
            <Filter className="w-3 h-3" /> Filters
          </button>
          <button className="inline-flex items-center gap-1 text-[11px] bg-foreground text-background rounded-sm px-2 py-1.5">
            <Plus className="w-3 h-3" /> New
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 px-3 py-2 text-[9px] uppercase tracking-wider text-muted-foreground border-b border-border bg-surface-1/60">
        <div className="col-span-2">SKU</div>
        <div className="col-span-4">Name</div>
        <div className="col-span-2">Category</div>
        <div className="col-span-2">Stock</div>
        <div className="col-span-1">Status</div>
        <div className="col-span-1 text-right">Price</div>
      </div>
      <ul>
        {products.map((p, i) => (
          <motion.li
            key={p.sku}
            className="grid grid-cols-12 px-3 py-2.5 text-[11px] border-b border-border items-center hover:bg-surface-1/60"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
          >
            <div className="col-span-2 font-mono text-muted-foreground">{p.sku}</div>
            <div className="col-span-4">{p.name}</div>
            <div className="col-span-2 text-muted-foreground">{p.cat}</div>
            <div className="col-span-2 font-mono">{p.stock}</div>
            <div className="col-span-1">
              <span
                className={`inline-block text-[9px] px-1.5 py-0.5 rounded-sm border ${
                  p.status === "Out"
                    ? "border-foreground bg-foreground text-background"
                    : p.status === "Low"
                    ? "border-foreground/60 text-foreground"
                    : "border-border text-muted-foreground"
                }`}
              >
                {p.status}
              </span>
            </div>
            <div className="col-span-1 text-right font-mono">{p.price}</div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsMock;
