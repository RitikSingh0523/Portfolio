import type { ReactNode } from "react";

export const Kw = ({ children }: { children: ReactNode }) => (
  <span className="text-accent">{children}</span>
);

export const Prop = ({ children }: { children: ReactNode }) => (
  <span className="text-accent-secondary">{children}</span>
);

export const Str = ({ children }: { children: ReactNode }) => (
  <span className="text-accent-green">{children}</span>
);

export const Num = ({ children }: { children: ReactNode }) => (
  <span className="text-accent-orange">{children}</span>
);

export const Punct = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground/40">{children}</span>
);

export const Comment = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground/35 italic">{children}</span>
);
