export function SceneFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
      <div className="h-56 w-56 animate-pulse rounded-full bg-gradient-to-br from-accent/50 via-accent/20 to-transparent blur-2xl sm:h-72 sm:w-72" />
    </div>
  );
}
