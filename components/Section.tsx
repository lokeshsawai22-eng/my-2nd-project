import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "paper" | "deep";
};

/** Shared wrapper: numbered eyebrow, gradient accent, title and optional intro. */
export default function Section({ id, index, title, intro, children, tone = "paper" }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`overflow-x-clip ${tone === "deep" ? "border-y border-white/[0.05] bg-white/[0.018]" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="text-gradient font-semibold">{index}</span>
            <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-accent-purple to-transparent" />
            {title}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
          {intro ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p> : null}
        </Reveal>
        <div className="mt-12 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
