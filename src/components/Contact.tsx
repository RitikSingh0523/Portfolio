import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import ResumeDownload from "@/components/ResumeDownload";
import { personalInfo } from "@/data/resume";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--surface-0)] px-6 py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-blob rounded-full bg-accent/10 blur-3xl" />

      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-sm text-foreground/40">
          <span className="text-accent-secondary">06</span>
          <span className="text-foreground/30">{" // "}</span>
          contact
        </p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mx-auto mt-4 max-w-md text-balance leading-relaxed text-foreground/65">
          Open to frontend and full-stack roles. Reach out by email or phone,
          or grab a copy of my resume below.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background shadow-[0_0_30px_var(--accent-glow)] transition-transform hover:scale-105"
          >
            <Mail className="h-4 w-4" />
            {personalInfo.email}
          </a>
          <ResumeDownload triggerClassName="inline-flex items-center gap-2 border border-[var(--line-strong)] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-[var(--line-hover)]" />
        </div>
      </Reveal>
    </section>
  );
}
