"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Direction the content slides in from. */
  variant?: "up" | "left" | "right" | "scale";
};

/** Fades and slides content in once when it scrolls into view. */
export default function Reveal({ children, className = "", delay = 0, variant = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-v={variant}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
