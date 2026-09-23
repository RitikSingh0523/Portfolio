import { Briefcase } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="03" title="Professional Experience" />

      <div className="relative space-y-10 sm:pl-4">
        <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent via-accent-secondary/50 to-transparent sm:block" />

        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.period}`} delay={i * 0.1}>
            <div className="relative sm:pl-12">
              <span className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-background text-accent shadow-[0_0_20px_var(--accent-glow)] sm:flex">
                <Briefcase className="h-4 w-4" />
              </span>

              <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-1)] p-6 transition-colors hover:border-accent/30 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <span className="rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1 font-mono text-xs text-accent">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-foreground/60">
                  {job.company} · {job.location}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2.5 text-sm leading-relaxed text-foreground/75"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent-secondary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
