import { HomeIcon, BuildingIcon, KeyIcon } from "@/components/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const SERVICES = [
  {
    icon: HomeIcon,
    title: "Comprar",
    description:
      "Encontramos o imóvel certo para a sua próxima fase, com curadoria alinhada ao que você procura e acompanhamento em cada visita.",
  },
  {
    icon: BuildingIcon,
    title: "Vender",
    description:
      "Cuidamos da divulgação, das negociações e da documentação para que o seu imóvel chegue ao comprador certo, sem complicação.",
  },
  {
    icon: KeyIcon,
    title: "Alugar",
    description:
      "Conectamos proprietários e inquilinos com segurança, da análise à assinatura do contrato, com assessoria completa em cada etapa.",
  },
];

export function ServicesCards() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24">
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--color-glow)" }}
      />

      <div className="container-page relative">
        <Reveal>
          <span className="eyebrow">Como podemos ajudar</span>
          <h2 className="font-display mt-2 max-w-lg text-3xl text-cream sm:text-4xl">
            Um caminho claro para o seu próximo imóvel
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.12}
        >
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <RevealItem key={title}>
              <div className="glow-gold group h-full rounded-2xl border border-(--color-line) bg-black/40 p-8 transition-transform duration-500 hover:-translate-y-1.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-black">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-6 text-2xl text-cream">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-soft">
                  {description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
