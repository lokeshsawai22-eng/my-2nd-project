import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { contact, site } from "@/content/site";
import Section from "./Section";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const subject = encodeURIComponent("Hello Lokesh, reaching out from your portfolio");

function Row({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="icon-ring" aria-hidden="true">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-xs uppercase tracking-[0.15em] text-dim">{label}</span>
        <span className={`block truncate ${href ? "text-fg" : "text-muted"}`}>{value}</span>
      </span>
      {href ? (
        <ArrowUpRight
          size={18}
          aria-hidden="true"
          className="shrink-0 text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-cyan"
        />
      ) : null}
    </>
  );
  const base = "flex items-center gap-4 p-4";
  return href ? (
    <SpotlightCard className="group">
      <a
        href={href}
        className={`${base} rounded-[inherit]`}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    </SpotlightCard>
  ) : (
    <SpotlightCard className="spot-static">
      <div className={base}>{content}</div>
    </SpotlightCard>
  );
}

export default function Contact() {
  return (
    <Section
      id="contact"
      index="07"
      title="Contact"
      tone="deep"
      intro="I'm open to internships, training programmes and entry-level Python or web development roles. The best way to reach me is by email."
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-3">
          <Reveal delay={0}>
            <Row icon={<Mail size={18} />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          </Reveal>
          <Reveal delay={70}>
            <Row icon={<Phone size={18} />} label="Phone" value={contact.phone} href={`tel:+91${contact.phone}`} />
          </Reveal>
          <Reveal delay={140}>
            <Row icon={<MapPin size={18} />} label="Location" value={contact.location} />
          </Reveal>
          <Reveal delay={210}>
            <Row
              icon={<Linkedin size={18} />}
              label="LinkedIn"
              value={contact.linkedin ? "View profile" : "Coming soon"}
              href={contact.linkedin || undefined}
              external
            />
          </Reveal>
          <Reveal delay={280}>
            <Row
              icon={<Github size={18} />}
              label="GitHub"
              value={contact.github ? "View profile" : "Coming soon"}
              href={contact.github || undefined}
              external
            />
          </Reveal>
        </div>

        <Reveal delay={120} variant="left" className="h-full">
          <div className="gborder relative flex h-full flex-col justify-center overflow-hidden p-8 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
              style={{
                background: "radial-gradient(circle, rgb(var(--c-purple) / 0.35), transparent 70%)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full"
              style={{
                background: "radial-gradient(circle, rgb(var(--c-cyan) / 0.18), transparent 70%)",
              }}
            />
            <p className="relative font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
              {"Have an opportunity or a project in mind? "}
              <span className="text-gradient-anim">{"Let's talk."}</span>
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${contact.email}?subject=${subject}`} className="btn btn-primary">
                Send an email <Mail size={16} aria-hidden="true" />
              </a>
              <a href={site.resumeFile} download className="btn btn-ghost">
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
