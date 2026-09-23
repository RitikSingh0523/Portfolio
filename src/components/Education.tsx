import { GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="05" title="Education" />

      <div className="mx-auto max-w-2xl space-y-6">
        {education.map((item) => (
          <Reveal key={item.institution}>
            <div className="flex flex-wrap items-center gap-4 rounded-xl border border-[var(--line)] bg-[var(--surface-1)] p-6 transition-colors hover:border-accent/30">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 text-accent">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/60">
                    {item.institution}
                  </p>
                </div>
                <span className="rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1 font-mono text-xs text-accent">
                  {item.period}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
