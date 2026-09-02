"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "mv-intro-seen";
const DURATION = 2600;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function Intro() {
  // Visível por padrão — inclusive na renderização do servidor — para que
  // a capa já esteja na primeira pintura da página, sem o site "pipocar"
  // por trás antes dela aparecer.
  const [visible, setVisible] = useState(true);
  const hasCheckedRef = useRef(false);

  useLayoutEffect(() => {
    // Guarda contra o duplo-disparo de efeitos do Strict Mode em
    // desenvolvimento: sem isso, a segunda execução lê o próprio
    // sessionStorage que a primeira acabou de escrever e esconde a
    // capa na hora.
    if (hasCheckedRef.current) return;
    hasCheckedRef.current = true;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const alreadySeen = sessionStorage.getItem(SESSION_KEY);

    if (reduced || alreadySeen) {
      // Só decidimos se a capa deve ser pulada depois de montar (a
      // checagem depende de sessionStorage/matchMedia, que não existem
      // no servidor) — por isso o setState síncrono aqui é intencional.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "1");
  }, []);

  useEffect(() => {
    if (!visible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setVisible(false), DURATION);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-black px-6"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.75, ease: EASE_OUT }}
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
          }}
        >
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: "var(--color-glow)" }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: [0, 0.6, 0.4], scale: [0.7, 1.1, 1] }}
            transition={{ duration: 1.8, ease: EASE_OUT }}
          />

          {[
            "left-6 top-6 border-l border-t",
            "right-6 top-6 border-r border-t",
            "left-6 bottom-6 border-l border-b",
            "right-6 bottom-6 border-r border-b",
          ].map((corner, i) => (
            <motion.span
              key={corner}
              className={`pointer-events-none absolute h-8 w-8 border-gold/50 sm:h-12 sm:w-12 ${corner}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.15 + i * 0.06 }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
            className="relative"
          >
            <Image
              src="/images/logo.jpeg"
              alt=""
              width={84}
              height={84}
              priority
              className="rounded-full shadow-[0_8px_30px_rgba(212,172,94,0.35)]"
            />
          </motion.div>

          <div className="relative mt-6 -my-[0.1em] overflow-hidden py-[0.1em]">
            <motion.span
              className="font-display block text-[15vw] italic text-cream sm:text-6xl md:text-7xl"
              initial={{ y: "120%", scale: 0.92 }}
              animate={{ y: "0%", scale: 1 }}
              transition={{ type: "spring", stiffness: 190, damping: 18, delay: 0.35 }}
            >
              MV Imóveis
            </motion.span>
          </div>

          <motion.div
            className="relative mt-6 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <span className="eyebrow text-center">
              Realizando sonhos, construindo histórias
            </span>
            <motion.span
              className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.6, delay: 1.05, ease: EASE_OUT }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
