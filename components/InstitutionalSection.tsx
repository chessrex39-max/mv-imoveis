import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const FACTS = [
  { value: "19 anos", label: "conectando pessoas aos seus sonhos" },
  { value: "CRECI 15063", label: "atuação regularizada e confiável" },
  { value: "Atendimento próximo", label: "do primeiro contato às chaves na mão" },
  { value: "Recife e região", label: "raízes e conhecimento da região" },
];

export function InstitutionalSection() {
  return (
    <section id="institucional" className="relative overflow-hidden border-y border-line-light bg-black">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--color-glow)" }}
      />

      <div className="container-page relative py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">A imobiliária</span>
            <h2 className="font-display mt-2 text-3xl font-semibold text-ink sm:text-4xl">
              Há quase duas décadas ao lado de quem confia na MV
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">
              A MV Imóveis conecta você aos melhores imóveis de Recife e
              região, com o cuidado de quem trata cada negociação como única.
              Compra, venda, aluguel ou assessoria completa: nosso
              compromisso é tornar essa experiência memorável, do primeiro
              contato à entrega das chaves.
            </p>
          </Reveal>

          <RevealGroup
            className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-light bg-line-light sm:grid-cols-2"
            stagger={0.1}
          >
            {FACTS.map((fact) => (
              <RevealItem key={fact.value}>
                <div className="h-full bg-surface px-7 py-9 transition-colors duration-500 hover:bg-surface-soft">
                  <p className="font-display text-2xl font-semibold text-gold">
                    {fact.value}
                  </p>
                  <p className="mt-2 text-sm text-ink-soft">{fact.label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
