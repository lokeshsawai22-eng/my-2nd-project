import { Code2, GraduationCap, Languages, MapPin, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { about } from "@/content/site";
import Section from "./Section";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const factIcons: LucideIcon[] = [GraduationCap, MapPin, Code2, Languages];

export default function About() {
  return (
    <Section id="about" index="01" title="About" tone="deep">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
        <div className="space-y-6 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => (
            <Reveal key={p} delay={i * 90}>
              <p>{p}</p>
            </Reveal>
          ))}

          <Reveal delay={180}>
            <SpotlightCard className="spot-static p-6">
              <div className="flex items-start gap-4">
                <span className="icon-ring">
                  <Target size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-cyan">
                    {"What I'm aiming for"}
                  </p>
                  <p className="mt-2 text-base text-fg">{about.goal}</p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={240}>
            <p className="text-gradient font-display text-xl font-medium italic leading-snug sm:text-2xl">
              {about.motto}
            </p>
          </Reveal>
        </div>

        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {about.facts.map((f, i) => {
            const Icon = factIcons[i % factIcons.length];
            return (
              <Reveal key={f.label} delay={i * 90} variant="right">
                <SpotlightCard className="flex items-center gap-4 p-5">
                  <span className="icon-ring">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.15em] text-dim">{f.label}</dt>
                    <dd className="mt-1 text-sm font-medium text-fg">{f.value}</dd>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </dl>
      </div>
    </Section>
  );
}
