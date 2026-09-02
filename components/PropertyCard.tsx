import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/types";
import {
  PROPERTY_TRANSACTION_LABEL,
  PROPERTY_TYPE_LABEL,
} from "@/lib/types";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function PropertyCard({ property }: { property: Property }) {
  const cover =
    property.photos?.find((p) => p.is_cover) ?? property.photos?.[0];
  const isSold = property.status === "vendido";
  const transactionType = property.transaction_type ?? "venda";

  const specs = [
    property.area_m2 ? `${property.area_m2} m²` : null,
    property.bedrooms != null ? `${property.bedrooms} quartos` : null,
    property.bathrooms != null ? `${property.bathrooms} banheiros` : null,
    property.parking_spots != null ? `${property.parking_spots} vagas` : null,
  ].filter(Boolean);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line-light bg-charcoal shadow-[0_12px_35px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
      <Link
        href={`/imoveis/${property.slug}`}
        className="focus-ring block"
        aria-label={`Ver detalhes de ${property.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-soft">
        {cover ? (
          <Image
            src={cover.url}
            alt={property.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
              isSold ? "grayscale" : ""
            }`}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-ink-soft/30">
            <BuildingPlaceholder className="h-14 w-14" />
          </div>
        )}

        {isSold && (
          <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
            Vendido
          </span>
        )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow !text-gold">{PROPERTY_TYPE_LABEL[property.type]}</span>
          <span className="rounded-full bg-surface-soft px-2.5 py-1 text-[0.7rem] font-semibold text-ink-soft">
            {PROPERTY_TRANSACTION_LABEL[transactionType]}
          </span>
        </div>
        <Link href={`/imoveis/${property.slug}`} className="focus-ring mt-2 block">
          <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-gold sm:text-xl">
            {property.title}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-ink-soft">
          {property.neighborhood?.name}
          {property.neighborhood?.name && property.city?.name ? ", " : ""}
          {property.city?.name}
        </p>
        {specs.length > 0 && (
          <p className="mt-3 text-xs text-ink-soft/80">
            {specs.join(" · ")}
          </p>
        )}
        <div className="mt-auto pt-5">
          <WhatsAppButton
            property={property}
            className="focus-ring flex w-full items-center justify-center rounded-xl bg-[#238636] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1f7a32]"
          >
            Chamar no WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}

export function BuildingPlaceholder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" strokeLinecap="round" />
      <path d="M10 21v-3h4v3" />
    </svg>
  );
}
