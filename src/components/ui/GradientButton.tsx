import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

type GradientButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asChildHref?: never;
};

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  solid:
    "text-primary-foreground bg-[image:var(--gradient-brand)] animate-gradient shadow-[0_8px_30px_-8px_rgba(59,130,246,0.6)] hover:shadow-[0_10px_40px_-6px_rgba(168,85,247,0.7)] hover:-translate-y-0.5",
  outline:
    "text-foreground border border-border glass hover:border-neon-cyan/60 hover:text-neon-cyan hover:-translate-y-0.5",
  ghost: "text-muted-foreground hover:text-foreground",
};

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "solid", children, ...props }, ref) => (
    <button ref={ref} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  ),
);
GradientButton.displayName = "GradientButton";

type GradientLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant };

export const GradientLink = forwardRef<HTMLAnchorElement, GradientLinkProps>(
  ({ className, variant = "solid", children, ...props }, ref) => (
    <a ref={ref} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  ),
);
GradientLink.displayName = "GradientLink";
