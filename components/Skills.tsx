import { Brain, Code2, Database, Globe, Languages } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skills, type SkillGroup } from "@/content/site";
import Section from "./Section";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const icons: Record<SkillGroup["icon"], LucideIcon> = {
  code: Code2,
  globe: Globe,
  brain: Brain,
  database: Database,
  languages: Languages,
};

/** Technical groups only (everything except spoken languages) for the scrolling strip. */
const techNames = skills.filter((g) => g.icon !== "languages").flatMap((g) => g.items.map((s) => s.name));

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={hidden || undefined}>
      {techNames.map((n) => (
        <li
          key={n}
          className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-mono text-sm text-muted"
        >
          {n}
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      title="Skills"
      tone="deep"
      intro="The tools and fundamentals I work with today, grouped by what they're used for."
    >
      <Reveal variant="scale" className="mb-12">
        <div className="marquee" role="group" aria-label="Technologies I work with">
          <div className="marquee-track">
            <MarqueeGroup />
            <MarqueeGroup hidden />
          </div>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <Reveal key={group.title} delay={(i % 3) * 90} className="h-full">
              <SpotlightCard className="h-full p-6">
                <h3 className="flex items-center gap-3 font-display text-lg font-semibold">
                  <span className="icon-ring">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((s, j) => (
                    <li
                      key={s.name}
                      style={{ ["--i" as string]: j }}
                      className={`chip ${s.hint === "Primary focus" ? "chip-hot" : ""}`}
                    >
                      {s.name}
                      {s.hint ? (
                        <span className="ml-2 font-mono text-[11px] text-dim">{s.hint}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
