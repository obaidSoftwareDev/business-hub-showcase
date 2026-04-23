import { motion } from "framer-motion";

const data = [
  { label: "Mon", a: 60, b: 45 },
  { label: "Tue", a: 72, b: 52 },
  { label: "Wed", a: 58, b: 60 },
  { label: "Thu", a: 80, b: 64 },
  { label: "Fri", a: 96, b: 70 },
  { label: "Sat", a: 110, b: 84 },
  { label: "Sun", a: 88, b: 76 },
];

const ranges = ["7d", "30d", "QTD", "YTD"];

export const ReportsMock = ({ className = "", animated = true }: { className?: string; animated?: boolean }) => {
  const max = 120;
  return (
    <div className={`bg-background ${className}`}>
      <div className="p-3 border-b border-border flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Reports · Sales vs Receipts</div>
          <div className="text-sm font-medium tracking-tight truncate">Weekly summary · Apr 17–23</div>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {ranges.map((r, i) => (
            <button
              key={r}
              className={`relative text-[10px] font-mono px-2 py-1 rounded-sm border transition-colors ${
                i === 0 ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground"
              }`}
            >
              {r}
              {i === 0 && (
                <motion.span
                  layoutId="reports-range"
                  className="absolute -bottom-px left-0 right-0 h-px bg-foreground"
                />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-7 gap-3 h-44 items-end">
          {data.map((d, i) => (
            <div key={d.label} className="flex flex-col items-center gap-1.5">
              <div className="flex items-end gap-0.5 w-full h-full">
                <motion.div
                  className="flex-1 bg-foreground rounded-[1px] origin-bottom"
                  initial={animated ? { scaleY: 0 } : { scaleY: 1 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: `${(d.a / max) * 100}%` }}
                />
                <motion.div
                  className="flex-1 bg-foreground/30 rounded-[1px] origin-bottom"
                  initial={animated ? { scaleY: 0 } : { scaleY: 1 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.18 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: `${(d.b / max) * 100}%` }}
                />
              </div>
              <div className="text-[9px] text-muted-foreground font-mono">{d.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 bg-foreground inline-block" /> Sales</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 bg-foreground/30 inline-block" /> Receipts</span>
          </div>
          <span className="font-mono inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground status-pulse" /> auto-refresh
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReportsMock;
