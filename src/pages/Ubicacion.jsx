import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Container from "@/ui/Container.jsx";
import SectionHeading from "@/ui/SectionHeading.jsx";
import Card from "@/ui/Card.jsx";
import Button from "@/ui/Button.jsx";
import useDocumentTitle from "@/hooks/useDocumentTitle.js";
import { site } from "@/data/site.js";
import { buildWhatsAppUrl } from "@/utils/whatsapp.js";

export default function Ubicacion() {
  useDocumentTitle("Ubicación");

  const waHref = buildWhatsAppUrl(site.whatsapp.phoneE164, site.whatsapp.defaultMessage);

  return (
    <>
      <section className="border-b border-brand-border bg-white py-12">
        <Container className="animate-fade-up">
          <SectionHeading
            eyebrow="Ubicación"
            title="Encuéntranos y agenda una visita"
            subtitle={site.location.addressLine}
          />
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="overflow-hidden p-0">
              <div className="aspect-[16/10] w-full bg-slate-100">
                <iframe
                  title="Mapa"
                  src={site.location.mapEmbedUrl}
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold">{site.location.city}</p>
                <p className="mt-1 text-sm text-brand-muted">{site.location.addressLine}</p>
              </div>
            </Card>

            <div className="space-y-4">
              <Card>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <FiMapPin />
                  </div>
                  <div>
                    <p className="font-semibold">Cómo ubicarlo rápido</p>
                    <p className="mt-1 text-sm text-brand-muted">{site.location.referenceLine}</p>
                    <p className="mt-2 text-xs text-brand-muted">
                      Dirección exacta: <span className="font-semibold text-brand-fg">{site.location.addressLine}</span>
                    </p>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                      <Button
                        as="a"
                        href={site.location.mapLinkUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                      >
                        Abrir en Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <FiMapPin />
                  </div>
                  <div>
                    <p className="font-semibold">Referencia</p>
                    <p className="mt-1 text-sm text-brand-muted">
                      Sobre <span className="font-semibold text-brand-fg">Av. Juárez</span>.
                    </p>
                    <p className="mt-1 text-sm text-brand-muted">
                      A un costado del <span className="font-semibold text-brand-fg">Colegio Mayaland</span>{" "}
                      y cerca de <span className="font-semibold text-brand-fg">Av. Lilis</span>.
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <FiClock />
                  </div>
                  <div>
                    <p className="font-semibold">Horarios de visita</p>
                    <p className="mt-1 text-sm text-brand-muted">{site.contact.hours}</p>
                  </div>
                </div>
              </Card>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button as="a" href={waHref} target="_blank" rel="noreferrer">
                  <FaWhatsapp className="text-base" />
                  Agendar por WhatsApp
                </Button>
                <Button as={Link} to="/contacto" variant="secondary">
                  <FiPhone />
                  Ver contacto
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
