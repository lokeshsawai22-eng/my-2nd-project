"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/** Gently tilts its content towards the pointer. Disabled for touch input. */
export default function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(1000px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 9).toFixed(2)}deg)`;
    });
  }

  function reset() {
    const el = ref.current;
    cancelAnimationFrame(raf.current);
    if (el) el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={className}
      style={{ transition: "transform 0.45s cubic-bezier(0.2, 0.75, 0.2, 1)", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
