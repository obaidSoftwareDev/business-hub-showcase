import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

export const FAQList = ({ items }: { items: FAQ[] }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-border">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-border">
            <button
              className="w-full flex items-center justify-between py-6 text-left group"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="text-base md:text-lg font-medium tracking-tight pr-6">{it.q}</span>
              <Plus
                className={`w-4 h-4 shrink-0 transition-transform duration-500 ease-out-expo ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-10 text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-3xl">
                    {it.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQList;
