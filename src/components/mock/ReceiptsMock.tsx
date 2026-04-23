import { motion } from "framer-motion";

const rows = [
  { date: "23 Apr", code: "RCT-0902", customer: "Sumit Wholesale", invoice: "INV-1029", paid: "12,000", balance: "0" },
  { date: "23 Apr", code: "RCT-0901", customer: "Aarav Kirana", invoice: "INV-1027", paid: "6,820", balance: "0" },
  { date: "22 Apr", code: "RCT-0900", customer: "Mehta Stores", invoice: "INV-1024", paid: "4,210", balance: "1,250" },
  { date: "22 Apr", code: "RCT-0899", customer: "Neel Provisions", invoice: "INV-1018", paid: "9,400", balance: "0" },
  { date: "21 Apr", code: "RCT-0898", customer: "Vyom Traders", invoice: "INV-1011", paid: "18,400", balance: "0" },
];

export const ReceiptsMock = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`bg-background ${className}`}>
      <div className="p-3 border-b border-border flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Customer Receipts</div>
          <div className="text-sm font-medium tracking-tight">Allocations · Last 7 days</div>
        </div>
        <div className="text-[10px] font-mono text-muted-foreground">Total received · ₹ 50,830</div>
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
          className="grid grid-cols-12 px-3 py-2.5 text-[11px] border-b border-border items-center"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
        >
          <div className="col-span-1 text-muted-foreground font-mono">{r.date}</div>
          <div className="col-span-2 font-mono">{r.code}</div>
          <div className="col-span-3">{r.customer}</div>
          <div className="col-span-2 text-muted-foreground font-mono">{r.invoice}</div>
          <div className="col-span-2 text-right font-mono">{r.paid}</div>
          <div className="col-span-2 text-right font-mono">{r.balance === "0" ? <span className="text-muted-foreground">—</span> : r.balance}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default ReceiptsMock;
