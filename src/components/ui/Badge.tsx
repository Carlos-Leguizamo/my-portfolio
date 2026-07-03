import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  dot?: boolean;
};

export function Badge({ children, className = "", dot = false }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-foreground/80 ${className}`}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
      {children}
    </span>
  );
}
