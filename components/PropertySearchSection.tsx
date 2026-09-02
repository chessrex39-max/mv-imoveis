import Image from "next/image";
import { SearchBar } from "@/components/SearchBar";
import type { City } from "@/lib/types";
import { getWhatsappHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal";

export function PropertySearchSection({
  cities,
  backgroundImage,
}: {
  cities: City[];
  backgroundImage?: string;
}) {
  const sellHref = getWhatsappHref(undefined, "sell");

  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-black pt-20">
      <Image
        src={backgroundImage ?? "/images/hero-poster.jpg"}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />

      <div className="container-page relative z-10 pb-14 pt-32 sm:pb-20">
        <Reveal>
          <span className="eyebrow">MV Imóveis · CRECI 15063</span>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            O imóvel certo para o seu momento
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Encontre imóveis em Recife e região com atendimento próximo em cada etapa.
          </p>
        </Reveal>

        <div className="mt-8">
          <SearchBar cities={cities} sellHref={sellHref} />
        </div>
      </div>
    </section>
  );
}
