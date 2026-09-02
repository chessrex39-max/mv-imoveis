"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HomeIcon, BuildingIcon, KeyIcon, HandshakeIcon } from "@/components/icons";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  { label: "Compra", icon: HomeIcon },
  { label: "Venda", icon: BuildingIcon },
  { label: "Aluguel", icon: KeyIcon },
  { label: "Assessoria completa", icon: HandshakeIcon },
];

export function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative flex min-h-[78svh] items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        {!videoFailed && (
          <motion.video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-poster.jpg"
            onError={() => setVideoFailed(true)}
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: EASE_OUT }}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </motion.video>
        )}
        {videoFailed && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-charcoal-soft),_var(--color-black)_65%)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="container-page relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <Image
            src="/images/logo.jpeg"
            alt="MV Imóveis"
            width={68}
            height={68}
            priority
            className="rounded-full drop-shadow-[0_4px_18px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        <motion.span
          className="eyebrow mt-5 inline-block"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          MV Imóveis · CRECI 15063 · 19 anos de história
        </motion.span>

        <div className="mt-4 max-w-2xl overflow-hidden py-[0.1em]">
          <motion.h1
            className="font-display text-[9vw] font-semibold leading-[1.05] text-cream drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-4xl md:text-5xl"
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.25 }}
          >
            Realizando sonhos,
            <br />
            <span className="text-gold">construindo histórias.</span>
          </motion.h1>
        </div>

        <motion.p
          className="mt-6 max-w-xl text-base text-cream-soft drop-shadow-[0_1px_12px_rgba(0,0,0,0.6)] sm:text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Encontre o imóvel ideal para você em Recife e região, com o
          acompanhamento próximo de quem conecta pessoas aos melhores
          imóveis há quase duas décadas.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap gap-x-8 gap-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.75 } },
          }}
        >
          {PILLARS.map(({ label, icon: Icon }) => (
            <motion.div
              key={label}
              className="flex items-center gap-2.5"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
            >
              <Icon className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium text-cream-soft">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}
