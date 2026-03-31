import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiMapPin, FiShield, FiTag } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Badge from "@/ui/Badge.jsx";
import Button from "@/ui/Button.jsx";
import Card from "@/ui/Card.jsx";
import Container from "@/ui/Container.jsx";
import GalleryGrid from "@/ui/GalleryGrid.jsx";
import Lightbox from "@/ui/Lightbox.jsx";
import SectionHeading from "@/ui/SectionHeading.jsx";
import useDocumentTitle from "@/hooks/useDocumentTitle.js";
import { media } from "@/data/media.js";
import { prices, site } from "@/data/site.js";
import { vivienda } from "@/data/specs.js";
import { formatCurrencyMXN } from "@/utils/formatters.js";
import { buildWhatsAppUrl } from "@/utils/whatsapp.js";

export default function Home() {
  useDocumentTitle("Inicio");

  const waHref = buildWhatsAppUrl(site.whatsapp.phoneE164, site.whatsapp.defaultMessage);

  const galleryItems = useMemo(
    () => [...media.exterior.slice(0, 2), ...media.interior.slice(0, 2), ...media.amenidades.slice(0, 2)],
    [],
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const minPrice = Math.min(...prices.map((p) => p.valueMXN));

  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-border bg-white">
        <div className="absolute inset-0">
          <img
            src="/media/exterior/render-zona-1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" />
        </div>

        <Container className="relative py-14 sm:py-20">
          <div className="max-w-2xl animate-fade-up">
            <Badge>Compra con Infonavit</Badge>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Vive en {site.location.city} con un modelo de vivienda pensado para tu día a día
            </h1>
            <p className="mt-4 text-base text-brand-muted sm:text-lg">
              Prototipo {vivienda.prototipo} · {vivienda.superficieConstruccionM2} m² de construcción ·{" "}
              2 recámaras · baño completo. Incluye galería, precios por nivel y contacto directo por WhatsApp.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href={waHref} target="_blank" rel="noreferrer">
                <FaWhatsapp className="text-base" />
                Solicitar información
              </Button>
              <Button as={Link} to="/modelo" variant="secondary">
                <FiHome />
                Ver el modelo
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-brand-border bg-white/80 p-4 backdrop-blur">
                <p className="text-xs font-semibold text-brand-muted">Precios desde</p>
                <p className="mt-1 text-lg font-bold">{formatCurrencyMXN(minPrice)}</p>
              </div>
              <div className="rounded-2xl border border-brand-border bg-white/80 p-4 backdrop-blur">
                <p className="text-xs font-semibold text-brand-muted">Amenidades</p>
                <p className="mt-1 text-lg font-bold">Alberca · Cancha · Dog park · Palapas</p>
              </div>
              <div className="rounded-2xl border border-brand-border bg-white/80 p-4 backdrop-blur">
                <p className="text-xs font-semibold text-brand-muted">Contacto</p>
                <p className="mt-1 text-lg font-bold">{site.whatsapp.display}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="Lo esencial"
            title="Todo lo que necesitas para vender en una sola página"
            subtitle="Estructura lista: información del modelo, precios, galería por categorías, ubicación y CTA por WhatsApp."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <FiTag />
                </div>
                <div>
                  <p className="font-semibold">Precios claros</p>
                  <p className="mt-1 text-sm text-brand-muted">
                    Tabla por nivel (planta baja a 3er nivel) para responder rápido.
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <FiShield />
                </div>
                <div>
                  <p className="font-semibold">Proceso Infonavit</p>
                  <p className="mt-1 text-sm text-brand-muted">
                    Texto genérico editable para puntos, requisitos y seguimiento.
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <FiMapPin />
                </div>
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="mt-1 text-sm text-brand-muted">
                    Mapa incrustado y datos de referencia para agendar visita.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="border-y border-brand-border bg-white py-14">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Galería"
              title="Imágenes listas para mostrar el proyecto"
              subtitle="Exterior, interior y amenidades. Puedes agregar o reemplazar las fotos sin tocar el diseño."
            />
            <Button as={Link} to="/galeria" variant="secondary">
              Ver galería completa
            </Button>
          </div>

          <div className="mt-8">
            <GalleryGrid
              items={galleryItems}
              onSelect={(idx) => {
                setLightboxIndex(idx);
                setLightboxOpen(true);
              }}
            />
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Contacto rápido"
                title="Agenda visita y recibe la información al instante"
                subtitle="Al enviar WhatsApp puedes pedir: disponibilidad, requisitos, simulación y citas para ver la vivienda."
              />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button as="a" href={waHref} target="_blank" rel="noreferrer">
                  <FaWhatsapp className="text-base" />
                  Enviar WhatsApp
                </Button>
                <Button as={Link} to="/contacto" variant="secondary">
                  Ver contacto
                </Button>
              </div>
            </div>

            <Card className="p-6">
              <p className="text-sm font-semibold">Qué preguntar (ejemplo)</p>
              <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                <li>• Disponibilidad y tiempo de entrega</li>
                <li>• Requisitos / puntos Infonavit mínimos</li>
                <li>• Gastos y enganche (si aplica)</li>
                <li>• Cómo agendar visita y horarios</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <Lightbox
        open={lightboxOpen}
        items={galleryItems}
        index={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length)
        }
        onNext={() => setLightboxIndex((i) => (i + 1) % galleryItems.length)}
      />
    </>
  );
}
