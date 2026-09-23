import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--line-strong)] bg-background px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-foreground/50 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
