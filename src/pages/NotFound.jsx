import { Link } from "react-router-dom";
import Container from "@/ui/Container.jsx";
import Button from "@/ui/Button.jsx";
import useDocumentTitle from "@/hooks/useDocumentTitle.js";

export default function NotFound() {
  useDocumentTitle("Página no encontrada");

  return (
    <section className="py-20" aria-labelledby="notfound-title">
      <Container className="text-center">
        <p className="text-sm font-semibold text-brand-primary">404</p>
        <h2
          id="notfound-title"
          className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          Página no encontrada
        </h2>
        <p className="mt-3 text-sm text-brand-muted">
          Revisa la URL o regresa al inicio.
        </p>
        <div className="mt-8 flex justify-center">
          <Button as={Link} to="/" variant="secondary">
            Volver al inicio
          </Button>
        </div>
      </Container>
    </section>
  );
}
// SEO: Se ajustó el 404 a mensaje amigable y sin h1 para mantener jerarquía consistente.
