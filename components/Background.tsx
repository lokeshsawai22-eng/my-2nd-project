"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed, decorative background: faint grid, three slowly drifting colour orbs
 * and (on devices with a mouse) a soft glow that trails the cursor.
 * Only transform and opacity are animated, so it stays cheap.
 */
export default function Background() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glow.current;
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    let raf = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      raf = 0;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.classList.add("on");
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => el.classList.remove("on");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-grid" />
      <div className="orb orb-purple" />
      <div className="orb orb-blue" />
      <div className="orb orb-cyan" />
      <div ref={glow} className="cursor-glow" />
    </div>
  );
}
