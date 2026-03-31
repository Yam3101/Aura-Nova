import { cn } from "@/utils/cn.js";

export default function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}

