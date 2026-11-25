"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/[0.08] bg-bg/75 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="group font-display text-lg font-semibold tracking-tight">
          {site.name}
          <span className="text-gradient transition-opacity group-hover:opacity-70">.</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={`link-draw text-sm transition-colors hover:text-fg ${
                  active === n.id ? "text-fg" : "text-muted"
                }`}
              >
                {n.label}
                {active === n.id ? (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-[3px] left-0 right-0 h-px"
                    style={{ background: "var(--grad)" }}
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={site.resumeFile} download className="btn btn-ghost hidden !px-4 !py-2 sm:inline-flex">
            Resume <Download size={14} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-fg transition-colors hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open ? (
        <ul
          id="mobile-menu"
          className="menu-panel border-t border-white/[0.08] px-5 pb-6 pt-2 lg:hidden"
        >
          {nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={`block border-b border-white/[0.06] py-3.5 text-base transition-colors hover:text-fg ${
                  active === n.id ? "text-fg" : "text-muted"
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
          <li className="pt-4 sm:hidden">
            <a href={site.resumeFile} download className="btn btn-primary w-full">
              Download Resume <Download size={16} aria-hidden="true" />
            </a>
          </li>
        </ul>
      ) : null}
    </header>
  );
}
