import { experience, experienceIntro } from "@/content/site";
import Section from "./Section";
import Reveal from "./Reveal";
import Timeline from "./Timeline";
import SpotlightCard from "./SpotlightCard";

export default function Experience() {
  return (
    <Section id="experience" index="05" title="Experience" tone="deep" intro={experienceIntro}>
      <Timeline>
        {experience.map((x, i) => (
          <li key={x.title} className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden="true"
              className={`tl-node ${x.placeholder ? "tl-node-dim" : "tl-node-hot"}`}
            />
            <Reveal delay={i * 80} variant="right">
              <SpotlightCard
                className={`max-w-2xl p-6 ${
                  x.placeholder ? "!border-dashed !border-white/20 !bg-transparent" : ""
                }`}
              >
                <p
                  className={`font-mono text-xs uppercase tracking-[0.18em] ${
                    x.placeholder ? "text-dim" : "text-accent-cyan"
                  }`}
                >
                  {x.period}
                </p>
                <h3
                  className={`mt-2 font-display text-xl font-semibold sm:text-2xl ${
                    x.placeholder ? "text-muted" : ""
                  }`}
                >
                  {x.title}
                </h3>
                <p className="mt-1 text-muted">{x.org}</p>
                <p className="mt-3 text-sm text-dim">{x.description}</p>
              </SpotlightCard>
            </Reveal>
          </li>
        ))}
      </Timeline>
    </Section>
  );
}
