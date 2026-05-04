import { useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiBox, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Container from "@/ui/Container.jsx";
import Button from "@/ui/Button.jsx";
import Logo from "@/ui/Logo.jsx";
import { site } from "@/data/site.js";
import { buildWhatsAppUrl } from "@/utils/whatsapp.js";

const navLinkBase =
	"rounded-lg px-3 py-2 text-sm font-semibold text-brand-muted hover:bg-slate-100 hover:text-brand-fg";
const navLinkActive = "bg-slate-100 text-brand-fg";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	const items = useMemo(
		() => [
			{ to: "/modelo", label: "Modelo" },
			{ to: "/galeria", label: "Galería" },
			{ to: "/ubicacion", label: "Ubicación" },
			{ to: "/contacto", label: "Contacto" },
		],
		[],
	);

	const waHref = buildWhatsAppUrl(
		site.whatsapp.phoneE164,
		site.whatsapp.defaultMessage,
	);
	const tour3dHref = "https://my.matterport.com/show/?m=9zf9WWX3CG8";

	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-brand-border bg-brand-card/85 backdrop-blur">
			<Container className="flex h-16 items-center justify-between">
				<div className="flex items-center gap-3">
					<Logo />
					<div className="hidden sm:block">
						<p className="text-sm font-semibold leading-none">{site.name}</p>
						<p className="text-xs text-brand-muted">{site.tagline}</p>
					</div>
				</div>

				<nav className="hidden items-center gap-1 md:flex">
					{items.map((it) => (
						<NavLink
							key={it.to}
							to={it.to}
							className={({ isActive }) =>
								`${navLinkBase} ${isActive ? navLinkActive : ""}`
							}
						>
							{it.label}
						</NavLink>
					))}
				</nav>

				<div className="hidden items-center gap-2 md:flex">
					<Button
						as="a"
						href={tour3dHref}
						target="_blank"
						rel="noreferrer"
						className="rounded-xl"
					>
						<FiBox className="text-base" />
						Tour 3D
					</Button>
					<Button
						as="a"
						href={waHref}
						target="_blank"
						rel="noreferrer"
						className="rounded-xl bg-emerald-700"
					>
						<FaWhatsapp className="text-base" />
						WhatsApp
					</Button>
				</div>

				<div className="md:hidden">
					<button
						type="button"
						onClick={() => setOpen((v) => !v)}
						className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-slate-100"
						aria-label={open ? "Cerrar menú" : "Abrir menú"}
					>
						{open ? (
							<FiX className="text-xl" />
						) : (
							<FiMenu className="text-xl" />
						)}
					</button>
				</div>
			</Container>

			{open && (
				<div className="border-t border-brand-border bg-white md:hidden">
					<Container className="py-3">
						<div className="grid gap-2">
							{items.map((it) => (
								<Link
									key={it.to}
									to={it.to}
									onClick={() => setOpen(false)}
									className={`rounded-xl px-3 py-2 text-sm font-semibold ${
										location.pathname === it.to
											? "bg-slate-100 text-brand-fg"
											: "text-brand-muted hover:bg-slate-50 hover:text-brand-fg"
									}`}
								>
									{it.label}
								</Link>
							))}
							<Button
								as="a"
								href={tour3dHref}
								target="_blank"
								rel="noreferrer"
								onClick={() => setOpen(false)}
								className="w-full"
							>
								<FiBox className="text-base" />
								Ver Tour 3D
							</Button>
							<Button
								as="a"
								href={waHref}
								target="_blank"
								rel="noreferrer"
								onClick={() => setOpen(false)}
								className="w-full"
								variant="secondary"
							>
								<FaWhatsapp className="text-base" />
								Escribir por WhatsApp
							</Button>
						</div>
					</Container>
				</div>
			)}
		</header>
	);
}
