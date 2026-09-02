import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPropertyBySlug } from "@/lib/queries";
import { PROPERTY_TYPE_LABEL } from "@/lib/types";
import { PropertyGallery } from "@/components/PropertyGallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) return {};
  return {
    title: `${property.title} — MV Imóveis`,
    description: property.description.slice(0, 155),
  };
}

const SPEC_LABELS: Array<{
  key: "area_m2" | "bedrooms" | "bathrooms" | "parking_spots";
  label: (v: number) => string;
}> = [
  { key: "area_m2", label: (v) => `${v} m²` },
  { key: "bedrooms", label: (v) => `${v} quarto${v === 1 ? "" : "s"}` },
  { key: "bathrooms", label: (v) => `${v} banheiro${v === 1 ? "" : "s"}` },
  { key: "parking_spots", label: (v) => `${v} vaga${v === 1 ? "" : "s"}` },
];

export default async function PropertyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) notFound();

  const isSold = property.status === "vendido";
  const location = [property.neighborhood?.name, property.city?.name]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="min-h-screen bg-surface py-32">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <PropertyGallery photos={property.photos ?? []} title={property.title} />

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow">
                {PROPERTY_TYPE_LABEL[property.type]} · Código {property.code}
              </span>
              {isSold && (
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
                  Vendido
                </span>
              )}
            </div>
            <h1 className="font-display mt-2 text-3xl font-semibold text-ink sm:text-4xl">
              {property.title}
            </h1>
            {location && (
              <p className="mt-2 text-base text-ink-soft">{location}</p>
            )}

            {SPEC_LABELS.some(({ key }) => property[key] != null) && (
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-line-light py-5">
                {SPEC_LABELS.map(({ key, label }) => {
                  const value = property[key];
                  if (value == null) return null;
                  return (
                    <div key={key}>
                      <p className="font-display text-xl font-semibold text-gold">
                        {label(Number(value))}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {property.description && (
              <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-ink-soft">
                {property.description}
              </p>
            )}

            {property.features.length > 0 && (
              <div className="mt-8">
                <h2 className="eyebrow">Características e diferenciais</h2>
                <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
                  {property.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-ink-soft">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(property.address || property.zip_code) && (
              <div className="mt-8">
                <h2 className="eyebrow">Localização</h2>
                <p className="mt-3 text-sm text-ink-soft">
                  {[property.address, property.zip_code].filter(Boolean).join(" — ")}
                </p>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal as="div" delay={0.15} className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-line-light bg-charcoal p-6 shadow-[0_14px_35px_rgba(0,0,0,0.3)]">
            <p className="font-display text-2xl font-semibold text-ink">
              {isSold ? "Este imóvel já foi vendido" : "Interessado neste imóvel?"}
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              {isSold
                ? "Fale com a MV Imóveis para conhecer outras opções disponíveis."
                : "Fale agora com a equipe MV Imóveis pelo WhatsApp e agende uma visita."}
            </p>
            <WhatsAppButton
              property={property}
              className="focus-ring mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Falar no WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
