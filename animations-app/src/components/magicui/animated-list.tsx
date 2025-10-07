"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type AnimatedListItem = {
  id: string;
  title: string;
  description: string;
};

type AnimatedListProps = {
  items: AnimatedListItem[];
  className?: string;
  interval?: number;
};

const spring = {
  type: "spring",
  stiffness: 320,
  damping: 26,
};

export function AnimatedList({
  items,
  className,
  interval = 3800,
}: AnimatedListProps) {
  const stableItems = useMemo(() => items, [items]);
  const [renderItems, setRenderItems] = useState(stableItems);

  useEffect(() => {
    setRenderItems(stableItems);
  }, [stableItems]);

  useEffect(() => {
    if (stableItems.length <= 1) return;

    const id = window.setInterval(() => {
      setRenderItems((current) => {
        if (current.length <= 1) {
          return current;
        }

        const [first, ...rest] = current;
        return [...rest, first];
      });
    }, interval);

    return () => window.clearInterval(id);
  }, [interval, stableItems.length]);

  return (
    <div className={cn("relative flex w-full flex-col gap-4", className)}>
      <AnimatePresence initial={false}>
        {renderItems.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ ...spring, delay: index * 0.04 }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur"
            style={{ zIndex: renderItems.length - index }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex flex-col gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/90">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
