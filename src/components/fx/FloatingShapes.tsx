import { motion } from "framer-motion";

const shapes = [
  { className: "left-[8%] top-[18%] h-24 w-24 rounded-3xl", delay: 0, color: "from-neon-cyan/30" },
  { className: "right-[12%] top-[24%] h-16 w-16 rounded-full", delay: 1.2, color: "from-neon-purple/30" },
  { className: "left-[18%] bottom-[16%] h-20 w-20 rotate-45 rounded-2xl", delay: 0.6, color: "from-neon-blue/30" },
  { className: "right-[22%] bottom-[22%] h-12 w-12 rounded-full", delay: 1.8, color: "from-neon-emerald/30" },
];

/** Decorative floating geometric shapes for the hero. */
export function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute bg-gradient-to-br ${s.color} to-transparent backdrop-blur-sm border border-white/5 ${s.className}`}
          animate={{ y: [0, -22, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
