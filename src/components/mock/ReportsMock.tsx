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

export const ReportsMock = ({ className = "" }: { className?: string }) => {
  const max = 120;
  return (
    <div className={`bg-background ${className}`}>
      <div className="p-3 border-b border-border flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Reports · Sales vs Receipts</div>
          <div className="text-sm font-medium tracking-tight">Weekly summary · Apr 17–23</div>
        </div>
        <div className="text-[10px] font-mono text-muted-foreground">period: 7d</div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-7 gap-3 h-44 items-end">
          {data.map((d, i) => (
            <div key={d.label} className="flex flex-col items-center gap-1.5">
              <div className="flex items-end gap-0.5 w-full h-full">
                <motion.div
                  className="flex-1 bg-foreground rounded-[1px] origin-bottom"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: `${(d.a / max) * 100}%` }}
                />
                <motion.div
                  className="flex-1 bg-foreground/30 rounded-[1px] origin-bottom"
                  initial={{ scaleY: 0 }}
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
        <div className="mt-3 flex items-center gap-4 text-[10px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 bg-foreground inline-block" /> Sales</span>
          <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 bg-foreground/30 inline-block" /> Receipts</span>
        </div>
      </div>
    </div>
  );
};

export default ReportsMock;
