import { Link } from "react-router-dom";

export default function Logo({ variant = "color", className = "" }) {
	const src =
		variant === "white"
			? "/brand/logoMYam.svg"
			: variant === "black"
				? "/brand/logoNegroMYam.svg"
				: "/brand/logo-color.png";

	return (
		<Link to="/" className={`inline-flex items-center gap-2 ${className}`}>
			<img src={src} alt="Logo" className="h-[55px] w-auto" />
			<span className="sr-only">Inicio</span>
		</Link>
	);
}
