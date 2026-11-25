import Image from "next/image";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { contact, experience, hero, site, skills } from "@/content/site";
import Tilt from "./Tilt";

/** Splits text into words that slide up one after another. */
function Words({ text, start = 0, step = 90, className = "" }: { text: string; start?: number; step?: number; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} className="word">
          <span style={{ ["--d" as string]: `${start + i * step}ms` }}>
            <span className={className}>{w}</span>
            {" "}
          </span>
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const languages = skills[0].items.map((s) => s.name);
  const taglineWords = site.tagline.split("·").map((t) => t.trim());
  const floating = [
    { label: languages[0], cls: "-left-3 top-10 sm:-left-8", color: "text-accent-cyan", d: "0ms" },
    { label: languages[1], cls: "-right-2 top-1/3 sm:-right-8", color: "text-accent-purple", d: "1200ms" },
    { label: skills[1].items[0].name, cls: "-bottom-4 left-10 sm:left-14", color: "text-accent-blue", d: "2400ms" },
  ];

  return (
    <section id="top" className="relative overflow-x-clip">
      <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-16 px-5 pb-20 pt-28 sm:px-8 md:pt-32 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
        <div>
          <p
            className="fade-up inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-muted"
            style={{ ["--d" as string]: "100ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            {experience[0].title}
          </p>

          <p
            className="fade-up mt-8 font-mono text-sm text-accent-cyan"
            style={{ ["--d" as string]: "250ms" }}
          >
            {hero.greeting}
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <Words text={site.name} start={350} step={140} className="text-gradient-anim" />
          </h1>
          <p
            className="fade-up mt-5 font-mono text-sm uppercase tracking-[0.18em] text-muted"
            style={{ ["--d" as string]: "750ms" }}
          >
            {site.role}
          </p>
          <p className="mt-8 max-w-xl font-display text-2xl font-medium leading-snug text-fg sm:text-[1.7rem]">
            <Words text={hero.headline} start={850} step={55} />
          </p>
          <p
            className="fade-up mt-5 max-w-xl leading-relaxed text-muted"
            style={{ ["--d" as string]: "1500ms" }}
          >
            {hero.intro}
          </p>

          <div
            className="fade-up mt-9 flex flex-wrap gap-3"
            style={{ ["--d" as string]: "1700ms" }}
          >
            <a href="#projects" className="btn btn-primary">
              Explore My Work <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href={site.resumeFile} download className="btn btn-ghost">
              Download Resume <Download size={16} aria-hidden="true" />
            </a>
          </div>

          <div
            className="fade-up mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
            style={{ ["--d" as string]: "1900ms" }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} aria-hidden="true" className="text-accent-purple" /> {contact.location}
            </span>
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]">
              {taglineWords.map((t, i) => (
                <span key={t} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden="true" className="text-dim">·</span> : null}
                  <span className="text-gradient">{t}</span>
                </span>
              ))}
            </span>
          </div>
        </div>

        <div className="fade-up mx-auto w-full max-w-md lg:max-w-none" style={{ ["--d" as string]: "700ms" }}>
          <Tilt>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] opacity-60 blur-2xl"
                style={{ background: "var(--grad)", opacity: 0.22 }}
              />
              <div className="gborder relative overflow-hidden shadow-2xl shadow-black/50">
                <div className="flex items-center gap-2 border-b border-white/[0.07] px-5 py-3.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
                  <span className="ml-3 font-mono text-xs text-dim">developer.py</span>
                </div>

                {site.photo ? (
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={site.photo}
                      alt={`Portrait of ${site.name}`}
                      fill
                      priority
                      sizes="(min-width: 1024px) 28rem, 90vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  </div>
                ) : null}

                <pre className="overflow-x-auto px-5 py-6 font-mono text-[12.5px] leading-[1.9] text-muted sm:px-7 sm:text-sm">
                  <code>
                    <span className="code-line block" style={{ ["--d" as string]: "1000ms" }}>
                      <span className="text-accent-purple">class</span> <span className="text-accent-cyan">Developer</span>:
                    </span>
                    <span className="code-line block" style={{ ["--d" as string]: "1200ms" }}>
                      {"    "}name <span className="text-dim">=</span> <span className="text-emerald-300">&quot;{site.name}&quot;</span>
                    </span>
                    <span className="code-line block" style={{ ["--d" as string]: "1400ms" }}>
                      {"    "}role <span className="text-dim">=</span> <span className="text-emerald-300">&quot;{site.role}&quot;</span>
                    </span>
                    <span className="code-line block" style={{ ["--d" as string]: "1600ms" }}>
                      {"    "}skills <span className="text-dim">=</span> [
                      {languages.map((l, i) => (
                        <span key={l}>
                          <span className="text-emerald-300">&quot;{l}&quot;</span>
                          {i < languages.length - 1 ? ", " : ""}
                        </span>
                      ))}
                      ]
                    </span>
                    <span className="code-line block" style={{ ["--d" as string]: "1800ms" }}>
                      {"    "}goal <span className="text-dim">=</span> <span className="text-emerald-300">&quot;{taglineWords.join(" · ")}&quot;</span>
                      <span className="caret ml-1" aria-hidden="true" />
                    </span>
                  </code>
                </pre>
              </div>

              {floating.map((f) => (
                <span
                  key={f.label}
                  aria-hidden="true"
                  className={`float-chip absolute ${f.cls} rounded-xl border border-white/10 bg-surface/90 px-3.5 py-2 font-mono text-xs shadow-lg shadow-black/40 backdrop-blur ${f.color}`}
                  style={{ ["--d" as string]: f.d }}
                >
                  {f.label}
                </span>
              ))}
            </div>
          </Tilt>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="scroll-hint absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-dim transition-colors hover:text-fg lg:block"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
