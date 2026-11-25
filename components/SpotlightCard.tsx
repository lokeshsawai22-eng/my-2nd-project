"use client";

import { useRef, type ElementType, type PointerEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/** Card whose soft glow follows the pointer (styles live in globals.css: .spot). */
export default function SpotlightCard({ children, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  function onMove(e: PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <Tag ref={ref} onPointerMove={onMove} className={`spot ${className}`}>
      {children}
    </Tag>
  );
}
