"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "mv-intro-seen";
const DURATION = 2200;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

function shouldShowIntro() {
  if (typeof window === "undefined") return false;
  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (reduced) return false;
  if (sessionStorage.getItem(SESSION_KEY)) return false;
  return true;
}

export function Intro() {
  const [visible, setVisible] = useState(shouldShowIntro);

  useEffect(() => {
    if (!visible) return;
    sessionStorage.setItem(SESSION_KEY, "1");
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black px-6"
          exit={{ opacity: 0, y: "-3%" }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          aria-hidden="true"
        >
          <div className="-my-[0.1em] overflow-hidden py-[0.1em]">
            <motion.span
              className="font-display block text-[13vw] italic text-cream sm:text-[5rem] md:text-[5.5rem]"
              initial={{ y: "120%", scale: 0.94 }}
              animate={{ y: "0%", scale: 1 }}
              transition={{ type: "spring", stiffness: 190, damping: 18, delay: 0.1 }}
            >
              MV Imóveis
            </motion.span>
          </div>

          <motion.div
            className="mt-6 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <span className="eyebrow">Realizando sonhos, construindo histórias</span>
            <motion.span
              className="h-px bg-gold"
              initial={{ width: 0 }}
              animate={{ width: 56 }}
              transition={{ duration: 0.5, delay: 0.75, ease: EASE_OUT }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
