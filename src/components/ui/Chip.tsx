import { cn } from "@/lib/utils";

/** Small tech / tag chip used across project & skill cards. */
export function Chip({
  children,
  className,
  glow,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors",
        glow && "hover:border-neon-cyan/60 hover:text-neon-cyan",
        className,
      )}
    >
      {children}
    </span>
  );
}
