type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="text-sm font-medium uppercase tracking-widest text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-foreground/70">
          {description}
        </p>
      )}
    </div>
  );
}
