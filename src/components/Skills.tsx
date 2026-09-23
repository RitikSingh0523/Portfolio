import {
  Cloud,
  Code2,
  Database,
  Layers,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import CodeWindow from "@/components/CodeWindow";
import { Kw, Prop, Punct, Str } from "@/components/CodeTokens";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/resume";

const meta: Record<
  string,
  { icon: LucideIcon; varName: string; color: string }
> = {
  Frontend: { icon: Code2, varName: "frontend", color: "text-accent" },
  "Micro-Frontend": {
    icon: Layers,
    varName: "microFrontend",
    color: "text-accent-secondary",
  },
  Backend: { icon: Server, varName: "backend", color: "text-accent-green" },
  Databases: {
    icon: Database,
    varName: "databases",
    color: "text-accent-orange",
  },
  "Cloud, DevOps & Integrations": {
    icon: Cloud,
    varName: "cloudAndDevOps",
    color: "text-accent",
  },
  "Tools & Practices": {
    icon: Wrench,
    varName: "toolsAndPractices",
    color: "text-accent-secondary",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[var(--surface-0)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title="Technical Skills" />

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, i) => {
            const info = meta[group.label] ?? {
              icon: Code2,
              varName: "skills",
              color: "text-accent",
            };
            const Icon = info.icon;
            return (
              <Reveal key={group.label} delay={i * 0.06}>
                <CodeWindow filename={`${info.varName}.ts`}>
                  <div className="mb-3 flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${info.color}`} />
                    <span className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
                      {group.label}
                    </span>
                  </div>
                  <pre className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed">
                    <code>
                      <Kw>const</Kw> <Prop>{info.varName}</Prop>{" "}
                      <Punct>= [</Punct>
                      {"\n"}
                      {group.skills.map((skill) => (
                        <span key={skill}>
                          {"  "}
                          <Str>&quot;{skill}&quot;</Str>
                          <Punct>,</Punct>
                          {"\n"}
                        </span>
                      ))}
                      <Punct>];</Punct>
                    </code>
                  </pre>
                </CodeWindow>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
