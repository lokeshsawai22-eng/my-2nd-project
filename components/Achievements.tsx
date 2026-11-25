import { Award, Code2, Compass, Globe, Puzzle, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { achievements, certifications, interests } from "@/content/site";
import Section from "./Section";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const interestIcons: LucideIcon[] = [Code2, Globe, Puzzle, Sparkles];

export default function Achievements() {
  return (
    <Section id="achievements" index="06" title="Achievements & Interests">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
        <div>
          <Reveal>
            <h3 className="flex items-center gap-3 font-display text-xl font-semibold">
              <span className="icon-ring">
                <Award size={18} aria-hidden="true" />
              </span>
              Achievements
            </h3>
          </Reveal>
          <ul className="mt-6 space-y-4">
            {achievements.map((a, i) => (
              <li key={a.title}>
                <Reveal delay={i * 90} variant="left">
                  <SpotlightCard className="p-5">
                    <p className="font-medium text-fg">{a.title}</p>
                    <p className="mt-1 text-sm text-muted">{a.description}</p>
                  </SpotlightCard>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-dim">
            {certifications.length === 0
              ? "Certifications will appear here as I earn them."
              : null}
          </p>
          {certifications.length > 0 ? (
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {certifications.map((c) => (
                <li key={c.title}>
                  {c.title}, {c.issuer} ({c.year})
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div>
          <Reveal>
            <h3 className="flex items-center gap-3 font-display text-xl font-semibold">
              <span className="icon-ring">
                <Compass size={18} aria-hidden="true" />
              </span>
              Interests
            </h3>
          </Reveal>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {interests.map((it, i) => {
              const Icon = interestIcons[i % interestIcons.length];
              return (
                <li key={it.title}>
                  <Reveal delay={i * 90} variant="scale" className="h-full">
                    <SpotlightCard className="h-full p-5">
                      <Icon size={20} aria-hidden="true" className="text-accent-purple" />
                      <p className="mt-3 font-medium text-fg">{it.title}</p>
                      <p className="mt-1 text-sm text-muted">{it.description}</p>
                    </SpotlightCard>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
