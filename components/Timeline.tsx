"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Vertical timeline whose gradient line draws itself as it scrolls into view. */
export default function Timeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setDrawn(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ol ref={ref} className="relative ml-3">
      <span aria-hidden="true" className={`tl-line ${drawn ? "in" : ""}`} />
      {children}
    </ol>
  );
}
