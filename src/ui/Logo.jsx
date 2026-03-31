import { Link } from "react-router-dom";

export default function Logo({ variant = "color", className = "" }) {
  const src =
    variant === "white"
      ? "/brand/logo-blanco.png"
      : variant === "black"
        ? "/brand/logo-negro.png"
        : "/brand/logo-color.png";

  return (
    <Link to="/" className={`inline-flex items-center gap-2 ${className}`}>
      <img src={src} alt="Logo" className="h-8 w-auto" />
      <span className="sr-only">Inicio</span>
    </Link>
  );
}

