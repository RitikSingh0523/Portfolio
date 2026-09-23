"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themes only knows the real theme after the client mounts (it reads
  // localStorage); rendering an icon before that would mismatch the SSR html.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- required mount-detection guard for next-themes SSR safety
    setMounted(true);
  }, []);

  const isLight = mounted && theme === "light";

  return (
    <button
      type="button"
      aria-label="Toggle light and dark theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface-1)] text-foreground/70 transition-colors hover:border-accent/40 hover:text-accent ${className}`}
    >
      {mounted &&
        (isLight ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        ))}
    </button>
  );
}
