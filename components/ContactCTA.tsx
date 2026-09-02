import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";

export function ContactCTA() {
  return (
    <section id="contato" className="container-page py-24">
      <Reveal className="relative overflow-hidden rounded-3xl border border-(--color-line) bg-[radial-gradient(ellipse_at_top,_var(--color-charcoal-soft),_var(--color-black)_70%)] px-8 py-16 text-center sm:px-16">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--color-glow)" }}
        />
        <div className="relative">
          <span className="eyebrow">Encontre o imóvel ideal para você</span>
          <h2 className="font-display mx-auto mt-3 max-w-xl text-3xl text-cream sm:text-4xl">
            Vamos conversar sobre o seu <span className="italic text-gold">próximo endereço?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-cream-soft sm:text-base">
            Fale agora com a equipe MV Imóveis pelo WhatsApp e receba
            atendimento próximo para comprar, vender ou alugar.
          </p>
          <WhatsAppButton className="glow-gold focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-90">
            Falar no WhatsApp
          </WhatsAppButton>
        </div>
      </Reveal>
    </section>
  );
}
