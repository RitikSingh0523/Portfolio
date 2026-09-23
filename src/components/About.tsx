import { Award, Languages as LanguagesIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { achievements, languages, personalInfo } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01" title="About Me" />

      <div className="grid gap-10 md:grid-cols-5">
        <Reveal delay={0.1} className="md:col-span-3">
          <div className="h-full rounded-xl border border-[var(--line)] bg-[var(--surface-1)] p-8">
            <p className="text-balance leading-relaxed text-foreground/75">
              {personalInfo.summary}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-2 space-y-6">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-1)] p-6">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent">
              <Award className="h-4 w-4" />
              Achievements
            </h3>
            <ul className="space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-foreground/75"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-1)] p-6">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent">
              <LanguagesIcon className="h-4 w-4" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang.name}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1 text-xs text-foreground/70"
                >
                  {lang.name} · {lang.level}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
