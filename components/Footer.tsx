import { ArrowUp } from "lucide-react";
import { about, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-dim sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-display italic text-muted">{about.motto}</p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
        >
          Back to top
          <ArrowUp
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </footer>
  );
}
