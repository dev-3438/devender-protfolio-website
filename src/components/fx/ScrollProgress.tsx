import { motion, useScroll, useSpring } from "framer-motion";

/** Top scroll-progress bar. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[9997] h-1 origin-left bg-[image:var(--gradient-brand)]"
    />
  );
}
