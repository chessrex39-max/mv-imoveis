import { SearchBar } from "@/components/SearchBar";
import type { City } from "@/lib/types";
import { getWhatsappHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal";

export function PropertySearchSection({ cities }: { cities: City[] }) {
  const sellHref = getWhatsappHref(undefined, "sell");

  return (
    <section className="relative flex min-h-[42rem] items-center overflow-hidden bg-black pt-20 sm:min-h-[44rem]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 18%, rgba(212, 172, 94, 0.18), transparent 34%), radial-gradient(circle at 82% 82%, rgba(44, 36, 23, 0.9), transparent 42%), linear-gradient(135deg, #070503 0%, #110d08 50%, #201a12 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,210,142,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(239,210,142,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-black/55 to-black" />

      <div className="container-page relative z-10 py-16 sm:py-20">
        <Reveal>
          <span className="eyebrow">MV Imóveis · CRECI 15063</span>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            Encontre um imóvel à altura dos seus planos
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Uma seleção de oportunidades em Recife e região, com atendimento
            próximo para você comprar ou alugar com segurança.
          </p>
        </Reveal>

        <div className="mt-8">
          <SearchBar cities={cities} sellHref={sellHref} />
        </div>
      </div>
    </section>
  );
}
