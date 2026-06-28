import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Full-screen branded preloader shown briefly on first paint. */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setDone(true), reduced ? 0 : 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] grid place-items-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="relative grid h-20 w-20 place-items-center rounded-2xl glass-strong"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold text-gradient font-display">{"</>"}</span>
              <div className="absolute -inset-1 rounded-2xl bg-[image:var(--gradient-brand)] opacity-30 blur-md animate-pulse-glow" />
            </motion.div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full bg-[image:var(--gradient-brand)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
