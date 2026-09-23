"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ResumeDownload from "@/components/ResumeDownload";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b backdrop-blur-md transition-colors ${
        scrolled
          ? "border-[var(--line)] bg-background/80"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="text-accent-secondary">~/</span>ritik
          <span className="text-accent">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition-colors hover:text-foreground [&:hover]:after:w-full after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <ResumeDownload
            menuAlign="right"
            triggerClassName="inline-flex items-center gap-2 bg-accent/10 border border-accent/40 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
          />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            className="text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--line)] bg-background px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm text-foreground/70">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <ResumeDownload triggerClassName="inline-flex items-center gap-2 bg-accent/10 border border-accent/40 px-4 py-2 text-sm font-medium text-accent" />
          </div>
        </div>
      )}
    </header>
  );
}
