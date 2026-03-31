import { cn } from "@/utils/cn.js";

export default function GalleryGrid({ items, onSelect, className }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((it, idx) => (
        <button
          key={`${it.src}-${idx}`}
          type="button"
          onClick={() => onSelect?.(idx)}
          className="hover-lift group overflow-hidden rounded-2xl border border-brand-border bg-white text-left shadow-soft hover:border-brand-primary/30"
        >
          <div className="aspect-[4/3] overflow-hidden bg-slate-100">
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold">{it.alt}</p>
            <p className="mt-1 text-xs text-brand-muted">Toca para ver en grande</p>
          </div>
        </button>
      ))}
    </div>
  );
}
