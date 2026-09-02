import Link from "next/link";
import type { Property } from "@/lib/types";
import { PropertyCard } from "@/components/PropertyCard";
import { EmptyState } from "@/components/EmptyState";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export function FeaturedProperties({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <section className="container-page py-24">
      <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="eyebrow">Seleção MV</span>
          <h2 className="font-display mt-2 text-3xl text-cream sm:text-4xl">
            Imóveis em destaque
          </h2>
        </div>
        <Link
          href="/imoveis"
          className="focus-ring text-sm font-semibold text-gold underline-offset-4 hover:underline"
        >
          Ver todos os imóveis →
        </Link>
      </Reveal>

      <div className="gold-divider my-10" />

      {properties.length > 0 ? (
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {properties.map((property) => (
            <RevealItem key={property.id}>
              <PropertyCard property={property} />
            </RevealItem>
          ))}
        </RevealGroup>
      ) : (
        <Reveal>
          <EmptyState
            title="Novos imóveis em breve"
            description="Nossa seleção de destaques está sendo preparada. Fale com a equipe MV Imóveis para conhecer as oportunidades disponíveis agora."
          />
        </Reveal>
      )}
    </section>
  );
}
