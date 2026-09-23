"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import CodeWindow from "@/components/CodeWindow";
import { Comment, Kw, Num, Prop, Punct, Str } from "@/components/CodeTokens";
import ResumeDownload from "@/components/ResumeDownload";
import { personalInfo, stats } from "@/data/resume";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[image:linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 h-96 w-96 animate-blob rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-96 w-96 animate-blob rounded-full bg-accent-secondary/15 blur-3xl [animation-delay:5s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-accent-green/10 blur-3xl [animation-delay:10s]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1.5 font-mono text-xs text-foreground/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
            </span>
            open to work
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            {personalInfo.name}
          </h1>

          <p className="mt-4 font-mono text-lg text-accent-secondary sm:text-xl">
            {personalInfo.title}
            <span className="animate-blink text-accent">_</span>
          </p>

          <p className="mt-6 max-w-xl text-balance leading-relaxed text-foreground/65">
            {personalInfo.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/55">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent" />
              {personalInfo.location}
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4 text-accent" />
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" />
              {personalInfo.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ResumeDownload triggerClassName="group inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-background shadow-[0_0_30px_var(--accent-glow)] transition-transform hover:scale-105" />
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--line-strong)] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-[var(--line-hover)]"
            >
              View Projects
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="rounded-lg border border-[var(--line)] bg-[var(--surface-1)] px-3 py-4"
              >
                <p className="font-mono text-xl font-bold text-accent sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-foreground/50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <CodeWindow filename="developer.ts" className="animate-float">
            <pre className="font-mono text-[13px] leading-relaxed">
              <code>
                <Kw>const</Kw> <Prop>developer</Prop> <Punct>=</Punct>{" "}
                <Punct>{"{"}</Punct>
                {"\n"}
                {"  "}
                <Prop>name</Prop>
                <Punct>:</Punct> <Str>&quot;Ritik Kumar Singh&quot;</Str>
                <Punct>,</Punct>
                {"\n"}
                {"  "}
                <Prop>role</Prop>
                <Punct>:</Punct>{" "}
                <Str>&quot;Frontend / Full Stack Dev&quot;</Str>
                <Punct>,</Punct>
                {"\n"}
                {"  "}
                <Prop>experience</Prop>
                <Punct>:</Punct> <Num>3.9</Num>
                <Punct>,</Punct>
                {"\n"}
                {"  "}
                <Prop>stack</Prop>
                <Punct>:</Punct> <Punct>[</Punct>
                {"\n"}
                {"    "}
                <Str>&quot;React&quot;</Str>
                <Punct>,</Punct> <Str>&quot;Angular&quot;</Str>
                <Punct>,</Punct> <Str>&quot;TypeScript&quot;</Str>
                <Punct>,</Punct>
                {"\n"}
                {"    "}
                <Str>&quot;Node.js&quot;</Str>
                <Punct>,</Punct> <Str>&quot;WebSocket&quot;</Str>
                <Punct>,</Punct>
                {"\n"}
                {"  "}
                <Punct>],</Punct>
                {"\n"}
                {"  "}
                <Prop>currentlyBuilding</Prop>
                <Punct>:</Punct> <Str>&quot;Enterprise AI UIs&quot;</Str>
                <Punct>,</Punct>
                {"\n"}
                {"  "}
                <Prop>hireable</Prop>
                <Punct>:</Punct> <Kw>true</Kw>
                <Punct>,</Punct>
                {"\n"}
                <Punct>{"}"}</Punct>
                <Punct>;</Punct>
                {"\n\n"}
                <Comment>{"// promoted L1 -> L3 in 15 months"}</Comment>
              </code>
            </pre>
          </CodeWindow>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-float text-foreground/30 transition-colors hover:text-accent lg:inline-flex"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
