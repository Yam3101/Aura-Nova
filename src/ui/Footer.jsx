import { Link } from "react-router-dom";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Container from "@/ui/Container.jsx";
import Logo from "@/ui/Logo.jsx";
import { site } from "@/data/site.js";
import { buildWhatsAppUrl } from "@/utils/whatsapp.js";

export default function Footer() {
  const waHref = buildWhatsAppUrl(site.whatsapp.phoneE164, site.whatsapp.defaultMessage);

  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 text-white">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <Logo variant="white" />
            <p className="text-sm text-white/70">
              Sitio informativo de ejemplo. Reemplaza textos, precios y ubicación con
              la información oficial del desarrollo.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Contacto</p>
            <p className="text-sm text-white/70">
              {site.contact.advisorTitle} ·{" "}
              <span className="font-semibold text-white">{site.contact.advisorName}</span>
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              <FaWhatsapp />
              {site.whatsapp.display}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              <FiMail />
              {site.contact.email}
            </a>
            <p className="flex items-center gap-2 text-sm text-white/70">
              <FiPhone />
              {site.contact.hours}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Enlaces</p>
            <div className="grid gap-2">
              <Link to="/modelo" className="text-sm text-white/70 hover:text-white">
                Modelo y precios
              </Link>
              <Link to="/galeria" className="text-sm text-white/70 hover:text-white">
                Galería
              </Link>
              <Link to="/ubicacion" className="text-sm text-white/70 hover:text-white">
                <span className="inline-flex items-center gap-2">
                  <FiMapPin /> Ubicación
                </span>
              </Link>
              <Link to="/contacto" className="text-sm text-white/70 hover:text-white">
                Contacto
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <p>Hecho con React + Tailwind.</p>
        </div>
      </Container>
    </footer>
  );
}
