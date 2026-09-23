import {
  Blocks,
  Bot,
  FolderKanban,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/resume";

const icons: Record<string, LucideIcon> = {
  "Enterprise Conversational AI Assistant (LINA)": Bot,
  "Enterprise Employee Intranet Portal (MyLTTS)": LayoutDashboard,
  "AppStudio Component Library & Micro-Frontend Playground": Blocks,
  "File Management Dashboard": FolderKanban,
};

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[var(--surface-0)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" title="Projects" />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = icons[project.name] ?? FolderKanban;
            return (
              <Reveal key={project.name} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-1)] p-6 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_40px_var(--accent-glow-soft)] sm:p-8">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-accent-secondary opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold leading-tight text-foreground">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-accent">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-2 py-0.5 text-xs text-foreground/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {project.bullets.map((bullet) => (
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
