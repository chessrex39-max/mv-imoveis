import Image from "next/image";
import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/Reveal";

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
            <li><Link href="/#institucional" className="focus-ring hover:text-gold">A imobiliária</Link></li>
            <li><Link href="/#contato" className="focus-ring hover:text-gold">Contato</Link></li>
          </ul>
        </RevealItem>

        <RevealItem>
          <p className="eyebrow">Contato</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream-soft">
            <li>Jaboatão dos Guararapes — PE</li>
            <li>
              <a
                href="https://www.instagram.com/imoveis_mv/"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring hover:text-gold"
              >
                @imoveis_mv
              </a>
            </li>
          </ul>
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
