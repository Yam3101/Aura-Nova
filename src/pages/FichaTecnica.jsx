import {
	FiBox,
	FiCheckCircle,
	FiClipboard,
	FiHome,
	FiLayers,
	FiShield,
	FiTool,
} from "react-icons/fi";
import { FaLeaf, FaWhatsapp } from "react-icons/fa6";
import Container from "@/ui/Container.jsx";
import SectionHeading from "@/ui/SectionHeading.jsx";
import Card from "@/ui/Card.jsx";
import Badge from "@/ui/Badge.jsx";
import Button from "@/ui/Button.jsx";
import useDocumentTitle from "@/hooks/useDocumentTitle.js";
import { fichaTecnica } from "@/data/fichaTecnica.js";
import { site } from "@/data/site.js";
import { buildWhatsAppUrl } from "@/utils/whatsapp.js";

const iconsByTitle = {
	Estructura: FiLayers,
	Acabados: FiTool,
	"Cancelería y puertas": FiShield,
	"Mobiliario incluido": FiBox,
};

export default function FichaTecnica() {
	useDocumentTitle("Ficha técnica");

	const waHref = buildWhatsAppUrl(
		site.whatsapp.phoneE164,
		site.whatsapp.defaultMessage,
	);

	return (
		<>
			<section className="border-b border-brand-border bg-white py-12">
				<Container className="animate-fade-up">
					<Badge>Ficha técnica</Badge>
					<h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
						{fichaTecnica.header.title}
					</h1>
					<p className="mt-2 text-sm text-brand-muted sm:text-base">
						{fichaTecnica.header.subtitle}
					</p>

					<div className="mt-6 flex flex-col gap-3 sm:flex-row">
						<Button as="a" href={waHref} target="_blank" rel="noreferrer">
							<FaWhatsapp className="text-base" />
							Pedir información
						</Button>
						<Button as="a" href="#amenidades" variant="secondary">
							<FiHome />
							Ver amenidades
						</Button>
					</div>
				</Container>
			</section>

			<section className="py-14">
				<Container>
					<SectionHeading
						eyebrow="Resumen"
						title="Datos generales del desarrollo"
						subtitle="Información técnica resumida para que el cliente entienda rápido."
					/>

					<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{fichaTecnica.generales.map((m) => (
							<Card key={m.label} className="p-6">
								<p className="text-xs font-semibold text-brand-muted">
									{m.label}
								</p>
								<p className="mt-2 text-2xl font-extrabold">{m.value}</p>
							</Card>
						))}
					</div>
				</Container>
			</section>

			<section className="border-y border-brand-border bg-white py-14">
				<Container>
					<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
						<div>
							<SectionHeading
								eyebrow="Distribución"
								title="Distribución de la vivienda T1660"
								subtitle="Componentes principales de la vivienda."
							/>
							<div className="mt-6 grid gap-3 sm:grid-cols-2">
								{fichaTecnica.distribucion.map((r) => (
									<div
										key={r}
										className="hover-lift flex items-center gap-3 rounded-2xl border border-brand-border bg-slate-800 p-4 shadow-soft"
									>
										<span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-brand-primary">
											<FiCheckCircle />
										</span>
										<span className="text-md text-white font-semibold">
											{r}
										</span>
									</div>
								))}
							</div>
						</div>

						<Card className="p-6">
							<div className="flex items-center gap-2">
								<FiClipboard className="text-brand-primary" />
								<p className="text-sm font-semibold">Tabla de áreas</p>
							</div>
							<dl className="mt-4 divide-y divide-brand-border">
								{fichaTecnica.tablaAreas.map((row) => (
									<div
										key={row.label}
										className="flex items-center justify-between gap-4 py-2"
									>
										<dt className="text-sm text-brand-muted">{row.label}</dt>
										<dd
											className={`text-sm ${row.strong ? "font-extrabold" : "font-semibold"}`}
										>
											{row.value}
										</dd>
									</div>
								))}
							</dl>
						</Card>
					</div>
				</Container>
			</section>

			<section className="py-14">
				<Container>
					<SectionHeading
						eyebrow="Construcción"
						title="Estructura y construcción"
						subtitle="Materiales y especificaciones principales."
					/>

					<div className="mt-8 grid gap-4 md:grid-cols-2">
						{fichaTecnica.construccion.map((c) => {
							const Icon = iconsByTitle[c.title] || FiTool;
							return (
								<Card key={c.title}>
									<div className="flex items-center gap-3">
										<span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-black">
											<Icon />
										</span>
										<p className="text-sm font-semibold">{c.title}</p>
									</div>
									<ul className="mt-4 text-stone-900 space-y-2 text-sm ">
										{c.items.map((it) => (
											<li key={it}>• {it}</li>
										))}
									</ul>
								</Card>
							);
						})}
					</div>

					<div className="mt-6 rounded-2xl border border-brand-border bg-brand-primary/5 p-6">
						<div className="flex items-start gap-3">
							<span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
								<FaLeaf />
							</span>
							<p className="text-sm text-brand-muted">
								<span className="font-semibold text-brand-fg">
									EDGE Advanced:
								</span>{" "}
								{fichaTecnica.edge}
							</p>
						</div>
					</div>
				</Container>
			</section>

			<section
				id="amenidades"
				className="border-t border-brand-border bg-white py-14"
			>
				<Container>
					<SectionHeading
						eyebrow="Amenidades"
						title="Amenidades del desarrollo"
						subtitle="Resumen técnico y fácil de entender para el cliente."
					/>

					<div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{fichaTecnica.amenidades.map((a) => (
							<Card key={a.title} className="p-6">
								<div className="flex items-start justify-between gap-3">
									<div className="flex items-center gap-2">
										<span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
											<FiHome />
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

					<div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-brand-border bg-white p-6 shadow-soft sm:flex-row sm:items-center">
						<div className="flex items-start gap-3">
							<span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
								<FiHome />
							</span>
							<div>
								<p className="text-sm font-semibold">
									¿Quieres la ficha completa por WhatsApp?
								</p>
								<p className="mt-1 text-sm text-brand-muted">
									Te compartimos disponibilidad, precios por nivel y requisitos
									de compra.
								</p>
							</div>
						</div>
						<Button as="a" href={waHref} target="_blank" rel="noreferrer">
							<FaWhatsapp className="text-base" />
							Enviar mensaje
						</Button>
					</div>
				</Container>
			</section>
		</>
	);
}
