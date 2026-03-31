import { cn } from "@/utils/cn.js";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-primary/25 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "bg-brand-primary text-brand-primaryFg hover:brightness-110 hover:shadow-soft",
  secondary:
    "bg-white text-brand-fg ring-1 ring-brand-border hover:bg-slate-50 hover:shadow-soft",
  ghost: "text-brand-fg hover:bg-slate-100",
};

export default function Button({
  as: Comp = "button",
  className,
  variant = "primary",
  ...props
}) {
  return (
    <Comp className={cn(base, variants[variant] || variants.primary, className)} {...props} />
  );
}
