import { cn } from "@/utils/cn.js";

export default function Card({ className, children }) {
  return (
    <div
      className={cn(
        "hover-lift rounded-2xl border border-brand-border bg-white p-5 shadow-soft",
        className,
      )}
    >
      {children}
    </div>
  );
}
