import { useMemo, useState } from "react";
import { FiClock, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Container from "@/ui/Container.jsx";
import SectionHeading from "@/ui/SectionHeading.jsx";
import Card from "@/ui/Card.jsx";
import Button from "@/ui/Button.jsx";
import useDocumentTitle from "@/hooks/useDocumentTitle.js";
import { site } from "@/data/site.js";
import { buildWhatsAppUrl } from "@/utils/whatsapp.js";

export default function Contacto() {
  useDocumentTitle("Contacto");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const computedMessage = useMemo(() => {
    const parts = [];
    parts.push("Hola, me gustaría información sobre las viviendas.");
    if (name.trim()) parts.push(`Nombre: ${name.trim()}`);
    if (phone.trim()) parts.push(`Teléfono: ${phone.trim()}`);
    if (message.trim()) parts.push(`Mensaje: ${message.trim()}`);
    parts.push("¿Me pueden compartir disponibilidad, precios por nivel y requisitos Infonavit?");
    return parts.join("\n");
  }, [name, phone, message]);

  const waHref = buildWhatsAppUrl(site.whatsapp.phoneE164, computedMessage);

  return (
    <>
      <section className="border-b border-brand-border bg-white py-12">
        <Container className="animate-fade-up">
          <SectionHeading
            eyebrow="Contacto"
            title="Escríbenos y te compartimos disponibilidad"
            subtitle="El formulario no envía datos a un servidor: abre WhatsApp con un mensaje prellenado (puedes cambiarlo)."
          />
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <Card>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="font-semibold">
                      {site.contact.advisorTitle} · {site.contact.advisorName}
                    </p>
                    <p className="mt-1 text-sm text-brand-muted">WhatsApp</p>
                    <p className="mt-1 text-sm text-brand-muted">{site.whatsapp.display}</p>
                    <div className="mt-3">
                      <Button as="a" href={waHref} target="_blank" rel="noreferrer">
                        Abrir WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <FiMail />
                  </div>
                  <div>
                    <p className="font-semibold">Correo</p>
                    <a
                      className="mt-1 block text-sm text-brand-muted hover:text-brand-fg"
                      href={`mailto:${site.contact.email}`}
                    >
                      {site.contact.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <FiClock />
                  </div>
                  <div>
                    <p className="font-semibold">Horario</p>
                    <p className="mt-1 text-sm text-brand-muted">{site.contact.hours}</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <p className="text-lg font-bold">Mensaje para WhatsApp</p>
              <p className="mt-1 text-sm text-brand-muted">
                Completa el formulario y abre WhatsApp. Puedes editar el texto antes de enviarlo.
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(waHref, "_blank", "noopener,noreferrer");
                }}
              >
                <div className="grid gap-2">
                  <label className="text-sm font-semibold">Nombre</label>
                  <input
                    className="h-11 rounded-xl border border-brand-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-brand-primary/25"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold">Teléfono</label>
                  <input
                    className="h-11 rounded-xl border border-brand-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-brand-primary/25"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. 9841234567"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold">Mensaje</label>
                  <textarea
                    className="min-h-28 rounded-xl border border-brand-border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-primary/25"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ej. Estoy interesado en planta baja, ¿hay disponibilidad?"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" className="w-full sm:w-auto">
                    <FaWhatsapp className="text-base" />
                    Enviar por WhatsApp
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    className="w-full sm:w-auto"
                    onClick={() => {
                      setName("");
                      setPhone("");
                      setMessage("");
                    }}
                  >
                    Limpiar
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
