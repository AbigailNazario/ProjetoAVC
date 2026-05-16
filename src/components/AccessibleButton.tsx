import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:opacity-95",
  secondary: "bg-secondary text-secondary-foreground hover:opacity-95",
  ghost: "bg-card text-foreground border-2 border-border hover:bg-muted",
  danger: "bg-destructive text-destructive-foreground hover:opacity-95",
};

export const AccessibleButton = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "primary", fullWidth, className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold shadow-sm transition active:scale-[0.98] disabled:opacity-50",
        variants[variant],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
AccessibleButton.displayName = "AccessibleButton";