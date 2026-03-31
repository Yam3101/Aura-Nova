import { Link } from "react-router-dom";
import Container from "@/ui/Container.jsx";
import Button from "@/ui/Button.jsx";
import useDocumentTitle from "@/hooks/useDocumentTitle.js";

export default function NotFound() {
  useDocumentTitle("Página no encontrada");

  return (
    <section className="py-20">
      <Container className="text-center">
        <p className="text-sm font-semibold text-brand-primary">404</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Esta página no existe
        </h1>
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

