import { useMemo, useState } from "react";
import { FiMapPin, FiStar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Container from "@/ui/Container.jsx";
import SectionHeading from "@/ui/SectionHeading.jsx";
import Card from "@/ui/Card.jsx";
import Badge from "@/ui/Badge.jsx";
import Button from "@/ui/Button.jsx";
import GalleryGrid from "@/ui/GalleryGrid.jsx";
import Lightbox from "@/ui/Lightbox.jsx";
import useDocumentTitle from "@/hooks/useDocumentTitle.js";
import { fichaTecnica } from "@/data/fichaTecnica.js";
import { media } from "@/data/media.js";
import { site } from "@/data/site.js";
import { buildWhatsAppUrl } from "@/utils/whatsapp.js";

export default function Amenidades() {
	useDocumentTitle("Amenidades");

	const waHref = buildWhatsAppUrl(site.whatsapp.phoneE164, site.whatsapp.defaultMessage);
	const items = useMemo(() => media.amenidades, []);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	return (
		<>
			<section
				className="border-b border-brand-border bg-white py-12"
				aria-labelledby="amenidades-title"
			>
				<Container className="animate-fade-up">
					<Badge>Amenidades</Badge>
					<h2
						id="amenidades-title"
						className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl"
					>
						Amenidades en Aura Nova Hogar
					</h2>
					<p className="mt-2 text-sm text-brand-muted sm:text-base">
						Conoce las amenidades del residencial en Playa del Carmen, Quintana Roo,
						Riviera Maya. Ideal para disfrutar en familia y como inversión.
					</p>

					<div className="mt-6 flex flex-col gap-3 sm:flex-row">
						<Button
							as="a"
							href={waHref}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Contactar por WhatsApp"
						>
							<FaWhatsapp className="text-base" />
							Contactar por WhatsApp
						</Button>
						<Button as="a" href="/ubicacion" variant="secondary">
							<FiMapPin />
							Ver ubicación
						</Button>
					</div>
				</Container>
			</section>

			<section className="py-14" aria-labelledby="amenidades-lista-title">
				<Container>
					<SectionHeading
						id="amenidades-lista-title"
						eyebrow="Resumen"
						title="Amenidades del desarrollo"
						subtitle="Información técnica resumida y fácil de entender."
					/>

					<div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{fichaTecnica.amenidades.map((a) => (
							<Card key={a.title} className="p-6">
								<div className="flex items-start justify-between gap-3">
									<div className="flex items-center gap-2">
										<span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
											<FiStar />
										</span>
										<p className="text-sm font-semibold">{a.title}</p>
									</div>
									<span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
										{a.tag}
									</span>
								</div>
								<p className="mt-3 inline-flex rounded-xl bg-slate-50 px-3 py-1 text-xs font-semibold text-brand-muted ring-1 ring-brand-border">
									{a.dims}
								</p>
								<ul className="mt-4 space-y-2 text-sm text-brand-muted">
									{a.items.map((it) => (
										<li key={it}>• {it}</li>
									))}
								</ul>
							</Card>
						))}
					</div>
				</Container>
			</section>

			<section className="border-y border-brand-border bg-white py-14" aria-labelledby="amenidades-fotos-title">
				<Container>
					<div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
						<SectionHeading
							id="amenidades-fotos-title"
							eyebrow="Fotos"
							title="Amenidades en imágenes"
							subtitle="Haz clic en cualquier imagen para verla en grande."
						/>
					</div>

					<div className="mt-8">
						<GalleryGrid
							items={items}
							onSelect={(idx) => {
								setIndex(idx);
								setOpen(true);
							}}
						/>
					</div>
				</Container>
			</section>

			<Lightbox
				open={open}
				items={items}
				index={index}
				onClose={() => setOpen(false)}
				onPrev={() => setIndex((i) => (i - 1 + items.length) % items.length)}
				onNext={() => setIndex((i) => (i + 1) % items.length)}
			/>
		</>
	);
}
// SEO: Se creó página dedicada de amenidades con keywords y estructura semántica para indexación.

