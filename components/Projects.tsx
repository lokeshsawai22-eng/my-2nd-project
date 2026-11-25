import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects, projectsIntro, type Project } from "@/content/site";
import Section from "./Section";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

function ProjectCard({ p, n }: { p: Project; n: number }) {
  return (
    <SpotlightCard
      as="article"
      className={`group flex h-full flex-col p-7 sm:p-8 ${
        p.placeholder ? "!border-dashed !border-white/20 !bg-transparent" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] ${
            p.placeholder
              ? "border-white/15 text-dim"
              : "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan"
          }`}
        >
          {!p.placeholder ? (
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
          ) : null}
          {p.status}
        </span>
        <span
          aria-hidden="true"
          className="font-display text-4xl font-bold text-white/[0.07] transition-colors duration-500 group-hover:text-accent-purple/40"
        >
          {String(n).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-5 flex items-center gap-2 font-display text-2xl font-semibold tracking-tight">
        {p.title}
        <ArrowUpRight
          size={20}
          aria-hidden="true"
          className="-translate-x-1 translate-y-1 text-accent-cyan opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </h3>
      <p className="mt-3 leading-relaxed text-muted">{p.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {p.tech.map((t) => (
          <li key={t} className="tech-tag">
            {t}
          </li>
        ))}
      </ul>

      <dl className="mt-6 space-y-4 border-t border-white/[0.07] pt-6 text-sm">
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.15em] text-dim">My contribution</dt>
          <dd className="mt-1 text-muted">{p.contribution}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.15em] text-dim">Outcome</dt>
          <dd className="mt-1 text-muted">{p.outcome}</dd>
        </div>
      </dl>

      <div className="mt-auto flex flex-wrap gap-5 pt-7 text-sm">
        {p.github ? (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw inline-flex items-center gap-1.5 font-medium text-fg hover:text-accent-cyan"
          >
            <Github size={16} aria-hidden="true" /> Source code
          </a>
        ) : null}
        {p.live ? (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw inline-flex items-center gap-1.5 font-medium text-fg hover:text-accent-cyan"
          >
            <ExternalLink size={16} aria-hidden="true" /> Live project
          </a>
        ) : null}
        {!p.github && !p.live ? <span className="text-dim">Links coming soon</span> : null}
      </div>
    </SpotlightCard>
  );
}

export default function Projects() {
  return (
    <Section id="projects" index="04" title="Projects" intro={projectsIntro}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 110} className="h-full">
            <ProjectCard p={p} n={i + 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
