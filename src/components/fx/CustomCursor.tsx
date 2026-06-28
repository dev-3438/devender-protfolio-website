import { useEffect, useState } from "react";

/** Custom neon cursor with a trailing glow ring. Hidden on touch / reduced motion. */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setActive(!!target.closest("a, button, [role='button'], input, textarea"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const follow = () => {
      setRing((r) => ({ x: r.x + (pos.x - r.x) * 0.18, y: r.y + (pos.y - r.y) * 0.18 }));
      raf = requestAnimationFrame(follow);
    };
    raf = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(raf);
  }, [enabled, pos]);

  if (!enabled) return null;

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-blue/60 transition-[width,height,opacity] duration-200"
        style={{
          left: ring.x,
          top: ring.y,
          width: active ? 56 : 34,
          height: active ? 56 : 34,
          opacity: active ? 1 : 0.6,
          boxShadow: "0 0 18px -2px rgba(34,211,238,0.6)",
        }}
      />
    </>
  );
}
