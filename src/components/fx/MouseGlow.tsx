import { useEffect, useState } from "react";

/** Soft glow that follows the mouse. Render inside a relative container. */
export function MouseGlow() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.3 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 transition-[background] duration-300"
      style={{
        background: `radial-gradient(600px circle at ${pos.x * 100}% ${pos.y * 100}%, rgba(59,130,246,0.12), transparent 60%)`,
      }}
    />
  );
}
