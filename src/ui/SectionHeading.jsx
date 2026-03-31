import { cn } from "@/utils/cn.js";

export default function SectionHeading({ eyebrow, title, subtitle, className }) {
  return (
    <div className={cn("space-y-2", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-sm text-brand-muted">{subtitle}</p> : null}
    </div>
  );
}

