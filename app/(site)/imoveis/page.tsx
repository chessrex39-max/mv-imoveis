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
  negocio?: "venda" | "aluguel";
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
      transactionType: params.negocio === "aluguel" ? "aluguel" : "venda",
      includeSold: params.vendidos === "1",
    }),
  ]);

  const isRental = params.negocio === "aluguel";

  return (
    <div className="min-h-screen bg-surface">
      <section className="bg-black pb-10 pt-28 text-white sm:pb-12">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Catálogo MV</span>
            <h1 className="font-display mt-2 text-3xl font-semibold text-white sm:text-4xl">
              {isRental ? "Imóveis para alugar" : "Imóveis para comprar"}
            </h1>
          </Reveal>
          <Reveal as="div" delay={0.1} className="mt-8">
            <PropertyFilters cities={cities} neighborhoods={neighborhoods} />
          </Reveal>
        </div>
      </section>

      <section className="container-page py-14 sm:py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Resultados</span>
            <h2 className="font-display mt-2 text-2xl font-semibold text-ink sm:text-3xl">
              {properties.length} {properties.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}
            </h2>
          </div>
        </div>

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
      </section>
    </div>
  );
}
