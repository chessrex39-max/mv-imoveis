import { SearchBar } from "@/components/SearchBar";
import type { City } from "@/lib/types";

export function PropertySearchSection({ cities }: { cities: City[] }) {
  return (
    <section className="relative flex min-h-[58svh] items-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_var(--color-charcoal-soft),_transparent_58%)] opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container-page relative z-10 py-20 text-center sm:py-24">
        <span className="eyebrow">Busca de imóveis</span>
        <h1 className="font-display mx-auto mt-4 max-w-3xl text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
          Encontre o imóvel ideal para você
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-cream-soft sm:text-lg">
          Pesquise por bairro, título, código do imóvel ou cidade.
        </p>

        <div className="mt-9 flex justify-center">
          <SearchBar cities={cities} />
        </div>
      </div>
    </section>
  );
}
