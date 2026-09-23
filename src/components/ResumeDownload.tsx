"use client";

import { ChevronDown, Download, FileText, File as FileIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/data/resume";

export default function ResumeDownload({
  triggerClassName,
  menuAlign = "left",
}: {
  triggerClassName: string;
  menuAlign?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative inline-flex">
      <div className="inline-flex overflow-hidden rounded-lg">
        <a href={personalInfo.resumeFilePdf} download className={triggerClassName}>
          <Download className="h-4 w-4" />
          Download Resume
        </a>
        <button
          type="button"
          aria-label="Choose resume format"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`${triggerClassName} border-l border-[var(--line)] px-2.5`}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div
          className={`absolute top-full z-20 mt-2 w-48 overflow-hidden rounded-lg border border-[var(--line)] bg-surface shadow-[0_25px_50px_-12px_var(--shadow-color)] ${
            menuAlign === "right" ? "right-0" : "left-0"
          }`}
        >
          <a
            href={personalInfo.resumeFilePdf}
            download
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-[var(--surface-2)]"
          >
            <FileText className="h-4 w-4 text-accent" />
            <span>
              PDF <span className="text-foreground/40">.pdf</span>
            </span>
          </a>
          <a
            href={personalInfo.resumeFileDocx}
            download
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-[var(--surface-2)]"
          >
            <FileIcon className="h-4 w-4 text-accent-secondary" />
            <span>
              Word <span className="text-foreground/40">.docx</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
