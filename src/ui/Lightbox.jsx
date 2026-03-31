import { useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export default function Lightbox({ open, items, index, onClose, onPrev, onNext }) {
  const current = items?.[index];

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open || !current) return null;

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imágenes"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl">
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[78dvh] w-full object-contain"
        />

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
          <p className="text-sm font-semibold text-white">{current.alt}</p>
          <p className="text-xs text-white/70">
            {index + 1} / {items.length}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 text-white hover:bg-black/60"
          aria-label="Cerrar"
        >
          <FiX className="text-xl" />
        </button>

        {items.length > 1 ? (
          <>
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl bg-black/40 text-white hover:bg-black/60"
              aria-label="Anterior"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl bg-black/40 text-white hover:bg-black/60"
              aria-label="Siguiente"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

