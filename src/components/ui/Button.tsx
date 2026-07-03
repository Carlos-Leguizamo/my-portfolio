import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

type AsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    as?: "button";
  };

type AsAnchor = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
    as: "a";
  };

type ButtonProps = AsButton | AsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-hover shadow-[0_0_0_1px_rgba(139,92,246,0.4)]",
  secondary:
    "bg-white/5 text-foreground border border-border hover:border-accent/60 hover:bg-white/10",
  ghost: "text-foreground/80 hover:text-foreground hover:bg-white/5",
};

// Renders as a <button> by default, or an <a> when `as="a"` is passed
// (paired with an `href`), e.g. for CTA links to anchor sections.
export function Button({
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 ${variantClasses[variant]} ${className}`;

  if (rest.as === "a") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- discriminant only, dropped from DOM props
    const { as, ...anchorProps } = rest;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- discriminant only, dropped from DOM props
  const { as, ...buttonProps } = rest;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
