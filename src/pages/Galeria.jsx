import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "@/ui/Container.jsx";
import SectionHeading from "@/ui/SectionHeading.jsx";
import GalleryGrid from "@/ui/GalleryGrid.jsx";
import Lightbox from "@/ui/Lightbox.jsx";
import useDocumentTitle from "@/hooks/useDocumentTitle.js";
import { media } from "@/data/media.js";
import { cn } from "@/utils/cn.js";

const tabs = [
  { key: "exterior", label: "Exterior" },
  { key: "interior", label: "Interior" },
  { key: "amenidades", label: "Amenidades" },
];

export default function Galeria() {
  useDocumentTitle("Galería");

  const [params, setParams] = useSearchParams();
  const type = params.get("tipo") || "exterior";

  const items = useMemo(() => {
    if (type === "interior") return media.interior;
    if (type === "amenidades") return media.amenidades;
    return media.exterior;
  }, [type]);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <section className="border-b border-brand-border bg-white py-12">
        <Container className="animate-fade-up">
          <SectionHeading
            eyebrow="Galería"
            title="Fotos del proyecto"
            subtitle="Cambia entre exterior, interior y amenidades."
          />

          <div className="mt-6 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setParams({ tipo: t.key })}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-semibold ring-1 ring-brand-border transition",
                  type === t.key
                    ? "bg-brand-primary text-brand-primaryFg ring-brand-primary"
                    : "bg-white text-brand-muted hover:bg-slate-50 hover:text-brand-fg",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <GalleryGrid
            items={items}
            onSelect={(idx) => {
              setIndex(idx);
              setOpen(true);
            }}
          />
        </Container>
      </section>

      <Lightbox
        open={open}
        items={items}
        index={index}
        onClose={() => setOpen(false)}
        onPrev={() => setIndex((i) => (i - 1 + items.length) % items.length)}
        onNext={() => setIndex((i) => (i + 1) % items.length)}
      />
    </>
  );
}
