import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/types";
import { PROPERTY_TYPE_LABEL } from "@/lib/types";

export function PropertyCard({ property }: { property: Property }) {
  const cover =
    property.photos?.find((p) => p.is_cover) ?? property.photos?.[0];
  const isSold = property.status === "vendido";

  const specs = [
    property.area_m2 ? `${property.area_m2} m²` : null,
    property.bedrooms != null ? `${property.bedrooms} quartos` : null,
    property.bathrooms != null ? `${property.bathrooms} banheiros` : null,
    property.parking_spots != null ? `${property.parking_spots} vagas` : null,
  ].filter(Boolean);

  return (
    <Link
      href={`/imoveis/${property.slug}`}
      className="focus-ring group block overflow-hidden rounded-2xl border border-(--color-line) bg-charcoal transition-all duration-500 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_18px_40px_-16px_rgba(212,172,94,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-soft">
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
          <div className="flex h-full items-center justify-center text-cream-soft/30">
            <BuildingPlaceholder className="h-14 w-14" />
          </div>
        )}

        {isSold && (
          <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
            Vendido
          </span>
        )}
      </div>

      <div className="p-5">
        <span className="eyebrow">{PROPERTY_TYPE_LABEL[property.type]}</span>
        <h3 className="font-display mt-1.5 text-xl text-cream">
          {property.title}
        </h3>
        <p className="mt-1 text-sm text-cream-soft">
          {property.neighborhood?.name}
          {property.neighborhood?.name && property.city?.name ? ", " : ""}
          {property.city?.name}
        </p>
        {specs.length > 0 && (
          <p className="mt-3 text-xs text-cream-soft/70">
            {specs.join(" · ")}
          </p>
        )}
      </div>
    </Link>
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
