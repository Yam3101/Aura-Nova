import { cn } from "@/utils/cn.js";

export default function SectionHeading({
  id,
  as: Comp = "h2",
  eyebrow,
  title,
  subtitle,
  className,
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
          {eyebrow}
        </p>
      ) : null}
      <Comp id={id} className="text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </Comp>
      {subtitle ? <p className="max-w-2xl text-sm text-brand-muted">{subtitle}</p> : null}
    </div>
  );
}
// SEO: Se agregó soporte para id/as para enlazar aria-labelledby y controlar niveles de encabezado.
