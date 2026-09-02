import type { Metadata } from "next";
import { getCities, getNeighborhoods, getProperties } from "@/lib/queries";
import { PropertyFilters } from "@/components/PropertyFilters";
import { PropertyCard } from "@/components/PropertyCard";
import { EmptyState } from "@/components/EmptyState";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Imóveis disponíveis — MV Imóveis",
  description:
    "Explore o catálogo de imóveis da MV Imóveis em Jaboatão dos Guararapes e região.",
};

type SearchParams = Promise<{
  q?: string;
  cidade?: string;
  bairro?: string;
  tipo?: string;
  vendidos?: string;
}>;

export default async function ImoveisPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  const [cities, neighborhoods, properties] = await Promise.all([
    getCities(),
    getNeighborhoods(),
    getProperties({
      q: params.q,
      cityId: params.cidade,
      neighborhoodId: params.bairro,
      type: params.tipo,
      includeSold: params.vendidos === "1",
    }),
  ]);

  return (
    <div className="container-page py-32">
      <Reveal>
        <span className="eyebrow">Catálogo</span>
        <h1 className="font-display mt-2 text-4xl text-cream sm:text-5xl">
          Imóveis disponíveis
        </h1>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
        <Reveal as="div" delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
          <aside>
            <PropertyFilters cities={cities} neighborhoods={neighborhoods} />
          </aside>
        </Reveal>

        <div>
          {properties.length > 0 ? (
            <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3" stagger={0.08}>
              {properties.map((property) => (
                <RevealItem key={property.id}>
                  <PropertyCard property={property} />
                </RevealItem>
              ))}
            </RevealGroup>
          ) : (
            <Reveal>
              <EmptyState
                title="Nenhum imóvel encontrado"
                description="Ajuste os filtros ou fale com a MV Imóveis para saber sobre novidades no catálogo."
              />
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}
