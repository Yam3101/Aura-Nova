import { useMemo, useState } from "react";
import {
	FiCheckCircle,
	FiClipboard,
	FiHome,
	FiShield,
	FiTag,
} from "react-icons/fi";
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
import { amenidades, notas, vivienda } from "@/data/specs.js";
import { formatCurrencyMXN } from "@/utils/formatters.js";
import { buildWhatsAppUrl } from "@/utils/whatsapp.js";

export default function Modelo() {
	useDocumentTitle("Modelo");

	const waHref = buildWhatsAppUrl(
		site.whatsapp.phoneE164,
		site.whatsapp.defaultMessage,
	);
	const interiorItems = useMemo(() => media.interior, []);
	const amenidadesItems = useMemo(() => media.amenidades, []);
	const [viewerOpen, setViewerOpen] = useState(false);
	const [viewerIndex, setViewerIndex] = useState(0);
	const [viewerItems, setViewerItems] = useState(interiorItems);

	return (
		<>
			<section className="border-b border-brand-border bg-white py-12">
				<Container>
					<div className="grid gap-8 lg:grid-cols-2 lg:items-center">
						<div className="space-y-4 animate-fade-up">
							<Badge>Un solo modelo · lista para vender</Badge>
							<h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
								MODELO AURA MAR <br />
								<span className="text-lg">
									{vivienda.tipo} · Prototipo {vivienda.prototipo}
								</span>
							</h1>
							<p className="text-sm text-brand-muted sm:text-base">
								{vivienda.niveles} plantas con {vivienda.viviendasPorNivel}{" "}
								viviendas por nivel. Superficie de construcción:{" "}
								<span className="font-semibold">
									{vivienda.superficieConstruccionM2} m²
								</span>{" "}
								por vivienda.
							</p>

							<div className="flex flex-col gap-3 sm:flex-row">
								<Button as="a" href={waHref} target="_blank" rel="noreferrer">
									<FaWhatsapp className="text-base" />
									Cotizar por WhatsApp
								</Button>
								<Button as="a" href="#precios" variant="secondary">
									<FiTag />
									Ver precios
								</Button>
							</div>

							<div className="mt-6 grid gap-3 sm:grid-cols-2">
								<div className="rounded-2xl border border-brand-border bg-white/90 p-4 shadow-soft">
									<p className="text-xs font-semibold text-brand-muted">
										Superficie de construcción
									</p>
									<p className="mt-1 text-lg font-extrabold">
										{vivienda.superficieConstruccionM2} m²
									</p>
								</div>
								<div className="rounded-2xl border border-brand-border bg-white/90 p-4 shadow-soft">
									<p className="text-xs font-semibold text-brand-muted">
										Distribución
									</p>
									<p className="mt-1 text-lg font-extrabold">
										2 recámaras · 1 baño
									</p>
								</div>
								<div className="rounded-2xl border border-brand-border bg-white/90 p-4 shadow-soft">
									<p className="text-xs font-semibold text-brand-muted">
										Edificio
									</p>
									<p className="mt-1 text-lg font-extrabold">
										{vivienda.niveles} niveles ·{" "}
										{vivienda.niveles * vivienda.viviendasPorNivel} viviendas
									</p>
								</div>
								<div className="rounded-2xl border border-brand-border bg-white/90 p-4 shadow-soft">
									<p className="text-xs font-semibold text-brand-muted">
										Incluye
									</p>
									<p className="mt-1 text-lg font-extrabold">
										Patio de servicio
									</p>
								</div>
							</div>
						</div>

						<div className="overflow-hidden rounded-3xl border border-brand-border bg-slate-100 shadow-soft">
							<img
								src="/media/exterior/casa-exterior-1.jpg"
								alt="Fachada exterior"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</Container>
			</section>

			<section className="py-14">
				<Container>
					<div className="grid gap-4 md:grid-cols-3">
						<Card>
							<div className="flex items-start gap-3">
								<div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
									<FiHome />
								</div>
								<div>
									<p className="font-semibold">Distribución</p>
									<p className="mt-1 text-sm text-brand-muted">
										{vivienda.espacios.slice(0, 3).join(" · ")}
									</p>
									<p className="mt-1 text-sm text-brand-muted">
										{vivienda.espacios.slice(3).join(" · ")}
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
									<p className="font-semibold">Certificación</p>
									<p className="mt-1 text-sm text-brand-muted">
										{vivienda.certificacion.nombre}: eficiencia y
										sustentabilidad como diferenciador comercial.
									</p>
								</div>
							</div>
						</Card>
						<Card>
							<div className="flex items-start gap-3">
								<div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
									<FiCheckCircle />
								</div>
								<div>
									<p className="font-semibold">Acompañamiento</p>
									<p className="mt-1 text-sm text-brand-muted">
										Te guiamos en requisitos y pasos para compra con Infonavit.
									</p>
								</div>
							</div>
						</Card>
					</div>

					<div className="mt-6">
						<Card className="p-6">
							<p className="text-sm font-semibold">
								Certificación {vivienda.certificacion.nombre}
							</p>
							<ul className="mt-3 space-y-2 text-sm text-brand-muted">
								{vivienda.certificacion.puntosClave.map((t) => (
									<li key={t}>• {t}</li>
								))}
							</ul>
						</Card>
					</div>
				</Container>
			</section>

			<section
				id="precios"
				className="border-y border-brand-border bg-white py-14"
			>
				<Container>
					<SectionHeading
						eyebrow="Precios"
						title="Precios por nivel"
						subtitle="Precio sujeto a disponibilidad y cambios.*"
					/>

					<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{prices.map((p) => (
							<Card key={p.label} className="p-6">
								<p className="text-xs font-semibold text-brand-muted">
									{p.label}
								</p>
								<p className="mt-2 text-2xl font-extrabold">
									{formatCurrencyMXN(p.valueMXN)}
								</p>
								<p className="mt-3 text-xs text-brand-muted">
									* Precio sujeto a disponibilidad y cambios.
								</p>
							</Card>
						))}
					</div>
				</Container>
			</section>

			<section className="py-14">
				<Container>
					<div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-start">
						<div className="space-y-4">
							<SectionHeading
								eyebrow="Amenidades"
								title="Áreas recreativas del desarrollo"
								subtitle={notas.medidasPuedenVariar}
							/>
							<div className="grid gap-3 sm:grid-cols-2">
								{amenidades.map((a) => (
									<Card
										key={a.key}
										className={`p-4 ${a.key === "alberca" ? "sm:col-span-2" : ""}`}
									>
										<p className="text-sm font-semibold">{a.titulo}</p>
										<ul className="mt-2 space-y-1 text-xs text-brand-muted">
											{a.datos.map((d) => (
												<li key={d}>• {d}</li>
											))}
										</ul>
									</Card>
								))}
							</div>
						</div>

						<div className="space-y-4">
							<SectionHeading
								eyebrow="Fotos"
								title="Amenidades en imágenes"
								subtitle="Haz clic para ver en grande."
							/>
							<GalleryGrid
								items={amenidadesItems}
								className="lg:grid-cols-2"
								onSelect={(idx) => {
									setViewerItems(amenidadesItems);
									setViewerIndex(idx);
									setViewerOpen(true);
								}}
							/>
						</div>
					</div>

					<div className="grid gap-10 lg:grid-cols-2">
						<div className="space-y-4">
							<SectionHeading
								eyebrow="Compra con Infonavit"
								title="Proceso de asesoría"
								subtitle="Te acompañamos en tu proceso de compra con nuestro asesor, que te guiará en todo el proceso."
							/>
							<div className="grid gap-3">
								<Card>
									<div className="flex items-start gap-3">
										<div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
											<FiClipboard />
										</div>
										<div>
											<p className="font-semibold">1) Validación inicial</p>
											<p className="mt-1 text-sm text-brand-muted">
												Revisamos puntos, precalificación y documentación
												básica.
											</p>
										</div>
									</div>
								</Card>
								<Card>
									<div className="flex items-start gap-3">
										<div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
											<FiCheckCircle />
										</div>
										<div>
											<p className="font-semibold">2) Simulación y apartado</p>
											<p className="mt-1 text-sm text-brand-muted">
												Confirmamos precio por nivel, disponibilidad y agenda de
												visita.
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
											<p className="font-semibold">3) Trámite y firma</p>
											<p className="mt-1 text-sm text-brand-muted">
												Te acompañamos hasta la entrega conforme a tu tipo de
												crédito.
											</p>
										</div>
									</div>
								</Card>
							</div>
							<Button as="a" href={waHref} target="_blank" rel="noreferrer">
								<FaWhatsapp className="text-base" />
								Contactame
							</Button>
						</div>

						<div className="space-y-4">
							<SectionHeading
								eyebrow="Galería interior"
								title="Conoce la vivienda por dentro"
								subtitle="Haz clic en cualquier imagen para verla en grande y navegar."
							/>
							<GalleryGrid
								items={interiorItems}
								className="lg:grid-cols-2"
								onSelect={(idx) => {
									setViewerItems(interiorItems);
									setViewerIndex(idx);
									setViewerOpen(true);
								}}
							/>
						</div>
					</div>
				</Container>
			</section>

			<Lightbox
				open={viewerOpen}
				items={viewerItems}
				index={viewerIndex}
				onClose={() => setViewerOpen(false)}
				onPrev={() =>
					setViewerIndex(
						(i) => (i - 1 + viewerItems.length) % viewerItems.length,
					)
				}
				onNext={() => setViewerIndex((i) => (i + 1) % viewerItems.length)}
			/>
		</>
	);
}
