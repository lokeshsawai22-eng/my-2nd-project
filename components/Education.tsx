import { GraduationCap } from "lucide-react";
import { education } from "@/content/site";
import Section from "./Section";
import Reveal from "./Reveal";
import Timeline from "./Timeline";
import SpotlightCard from "./SpotlightCard";

export default function Education() {
  return (
    <Section id="education" index="02" title="Education">
      <Timeline>
        {education.map((e, i) => (
          <li key={e.title} className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
            <span aria-hidden="true" className={`tl-node ${i === 0 ? "tl-node-hot" : "tl-node-dim"}`} />
            <Reveal delay={i * 80} variant="right">
              <SpotlightCard className="max-w-2xl p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-cyan">{e.years}</p>
                <h3 className="mt-2 flex items-center gap-2.5 font-display text-xl font-semibold sm:text-2xl">
                  {i === 0 ? (
                    <GraduationCap size={22} aria-hidden="true" className="text-accent-purple" />
                  ) : null}
                  {e.title}
                </h3>
                <p className="mt-1 text-muted">
                  {e.institution}
                  {e.detail ? `, ${e.detail}` : ""}
                </p>
                {e.note ? <p className="mt-3 text-sm text-dim">{e.note}</p> : null}
              </SpotlightCard>
            </Reveal>
          </li>
        ))}
      </Timeline>
    </Section>
  );
}
