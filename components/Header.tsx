"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/imoveis", label: "Imóveis" },
  { href: "/#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-black/90 backdrop-blur-md border-b border-(--color-line)"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 focus-ring" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.jpeg"
            alt="MV Imóveis"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <span className="font-display text-lg italic text-cream">
            MV Imóveis
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring group relative text-sm font-medium tracking-wide text-cream-soft transition-colors hover:text-gold"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton className="focus-ring inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-semibold text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-black">
            Falar com a MV
          </WhatsAppButton>
        </div>

        <button
          type="button"
          className="focus-ring flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-cream transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-cream transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-(--color-line) bg-black px-6 pb-6 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-md px-2 py-3 text-base text-cream-soft transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <WhatsAppButton className="focus-ring mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold">
            Falar com a MV
          </WhatsAppButton>
        </nav>
      )}
    </motion.header>
  );
}
