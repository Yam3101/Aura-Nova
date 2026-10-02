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
		parts.push(
			"¿Me pueden compartir disponibilidad, precios por nivel y requisitos Infonavit?",
		);
		return parts.join("\n");
	}, [name, phone, message]);

	const waHref = buildWhatsAppUrl(site.whatsapp.phoneE164, computedMessage);

	return (
		<>
			<section
				className="border-b border-brand-border bg-white py-12"
				aria-labelledby="contacto-title"
			>
				<Container className="animate-fade-up">
					<SectionHeading
						eyebrow="Contacto"
						id="contacto-title"
						title="Escríbenos y te compartimos disponibilidad"
					/>
				</Container>
			</section>

			<section className="py-14" aria-labelledby="contacto-contenido-title">
				<Container>
					<h2 id="contacto-contenido-title" className="sr-only">
						Contacto y formulario
					</h2>
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
										<p className="mt-1 text-sm text-brand-muted">
											{site.whatsapp.display}
										</p>
										<div className="mt-3">
											<Button
												as="a"
												href={waHref}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="Contactar por WhatsApp"
											>
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
										<p className="mt-1 text-sm text-brand-muted">
											{site.contact.hours}
										</p>
									</div>
								</div>
							</Card>
						</div>

						<Card className="p-6">
							<p className="text-lg font-bold">Mensaje para WhatsApp</p>
							<p className="mt-1 text-sm text-brand-muted">
								Completa el formulario para conocer los precios y
								disponibilidad.
							</p>

							<form
								className="mt-6 space-y-4"
								onSubmit={(e) => {
									e.preventDefault();
									window.open(waHref, "_blank", "noopener,noreferrer");
								}}
							>
								<div className="grid gap-2">
									{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
									<label className="text-sm font-semibold">Nombre</label>
									<input
										className="h-11 rounded-xl border border-brand-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-brand-primary/25"
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder="Tu nombre"
									/>
								</div>
								<div className="grid gap-2">
									{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
									<label className="text-sm font-semibold">Teléfono</label>
									<input
										className="h-11 rounded-xl border border-brand-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-brand-primary/25"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										placeholder="Ej. 9841234567"
									/>
								</div>
								<div className="grid gap-2">
									{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
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
			<section
				className="border-t border-brand-border bg-white py-16"
				aria-labelledby="filosofia-title"
			>
				<Container>
					<div className="mx-auto max-w-4xl">
						<div className="text-center">
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-primary">
								Nuestra forma de acompañarte
							</p>

							<h2
								id="filosofia-title"
								className="mt-3 text-3xl font-bold tracking-tight text-brand-fg sm:text-4xl italic"
							>
								"Nuestro propósito es asesorarte e informarte para que tomes la
								mejor decisión."
							</h2>

							<p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-brand-muted">
								Queremos que tengas la información necesaria para conocer tus
								opciones de vivienda y tomar una decisión con mayor claridad y
								confianza.
							</p>
						</div>

						<div className="mt-12 grid gap-6 md:grid-cols-3">
							<Card className="h-full p-6">
								<p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
									Misión
								</p>

								<h3 className="mt-3 text-xl font-bold text-brand-fg">
									Informar para decidir
								</h3>

								<p className="mt-4 text-sm leading-6 text-brand-muted">
									Brindar información clara, honesta y útil sobre las opciones
									de vivienda disponibles, acompañando a cada persona para que
									pueda conocer sus alternativas, resolver sus dudas y tomar
									decisiones informadas de acuerdo con sus necesidades y
									posibilidades.
								</p>
							</Card>

							<Card className="h-full p-6">
								<p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
									Visión
								</p>

								<h3 className="mt-3 text-xl font-bold text-brand-fg">
									Ser un referente confiable
								</h3>

								<p className="mt-4 text-sm leading-6 text-brand-muted">
									Ser un referente confiable en información y orientación sobre
									vivienda, construyendo relaciones basadas en la transparencia,
									el acompañamiento y la confianza antes, durante y después de
									cada decisión.
								</p>
							</Card>

							<Card className="h-full p-6">
								<p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
									Valores
								</p>

								<h3 className="mt-3 text-xl font-bold text-brand-fg">
									Lo que nos representa
								</h3>

								<ul className="mt-4 space-y-3 text-sm leading-6 text-brand-muted">
									<li>
										<strong className="text-brand-fg">Transparencia:</strong>{" "}
										Comunicamos información clara, sin ocultar detalles
										importantes.
									</li>

									<li>
										<strong className="text-brand-fg">Honestidad:</strong>{" "}
										Orientamos con responsabilidad, buscando que cada persona
										conozca realmente sus opciones.
									</li>

									<li>
										<strong className="text-brand-fg">Información:</strong>{" "}
										Creemos que una decisión importante comienza con información
										comprensible y accesible.
									</li>

									<li>
										<strong className="text-brand-fg">Compromiso:</strong>{" "}
										Acompañamos a nuestros clientes durante el proceso y
										atendemos sus dudas.
									</li>

									<li>
										<strong className="text-brand-fg">Confianza:</strong>{" "}
										Construimos relaciones duraderas mediante un trato
										responsable y cercano.
									</li>
								</ul>
							</Card>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
// SEO: Se agregaron ids/aria-labelledby y mejoras de accesibilidad en CTA de WhatsApp.
