import type { ReactNode } from "react";

export default function CodeWindow({
  filename,
  children,
  className = "",
}: {
  filename: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[var(--line)] bg-surface shadow-[0_25px_50px_-12px_var(--shadow-color)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--surface-1)] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#f78c6c]/80" />
          <span className="h-3 w-3 rounded-full bg-[#e5c07b]/80" />
          <span className="h-3 w-3 rounded-full bg-[#addb67]/80" />
        </div>
        <span className="ml-2 font-mono text-xs text-foreground/40">
          {filename}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
