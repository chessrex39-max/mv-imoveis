import Image from "next/image";
import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { InstagramIcon, MapPinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-(--color-line) bg-black">
      <RevealGroup
        className="container-page grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.08}
      >
        <RevealItem>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="MV Imóveis"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-display text-lg italic text-cream">
              MV Imóveis
            </span>
          </div>
          <p className="mt-4 text-sm text-cream-soft">
            Realizando sonhos, construindo histórias. Há 19 anos conectando
            você aos melhores imóveis.
          </p>
        </RevealItem>

        <RevealItem>
          <p className="eyebrow">Navegação</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream-soft">
            <li><Link href="/" className="focus-ring hover:text-gold">Início</Link></li>
            <li><Link href="/imoveis" className="focus-ring hover:text-gold">Imóveis</Link></li>
            <li><Link href="/#contato" className="focus-ring hover:text-gold">Contato</Link></li>
          </ul>
        </RevealItem>

        <RevealItem>
          <p className="eyebrow">Contato</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Avenida+Bernardo+Vieira+de+Melo%2C+1204+-+Loja+01%2C+Piedade%2C+Jaboat%C3%A3o+dos+Guararapes+-+PE"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group mt-4 flex items-start gap-3 rounded-2xl border border-(--color-line) bg-white/[0.03] p-4 transition-colors duration-300 hover:border-gold/50"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
              <MapPinIcon className="h-4 w-4" />
            </span>
            <span className="text-sm text-cream-soft">
              <span className="block font-medium text-cream">Unidade Piedade</span>
              Av. Bernardo Vieira de Melo, 1204 – Loja 01
              <br />
              Piedade, Jaboatão dos Guararapes – PE
              <span className="mt-1.5 block text-xs text-gold/80 transition-colors group-hover:text-gold">
                Ver no mapa →
              </span>
            </span>
          </a>
          <div className="mt-5 flex flex-wrap gap-3">
            <WhatsAppButton className="focus-ring inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-black">
              Chamar no WhatsApp
            </WhatsAppButton>
            <a
              href="https://www.instagram.com/imoveis_mv/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-(--color-line) px-5 py-2.5 text-sm font-semibold text-cream-soft transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </RevealItem>

        <RevealItem>
          <p className="eyebrow">Registro</p>
          <p className="mt-4 text-sm text-cream-soft">CRECI 15063</p>
        </RevealItem>
      </RevealGroup>

      <div className="border-t border-(--color-line)">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-soft/60 sm:flex-row">
          <p>© {new Date().getFullYear()} MV Imóveis. Todos os direitos reservados.</p>
          <p>Site desenvolvido pela NEXO</p>
        </div>
      </div>
    </footer>
  );
}
