"use client";

import dynamic from "next/dynamic";

const Intro = dynamic(() => import("./Intro").then((mod) => mod.Intro), {
  ssr: false,
});

export function IntroLoader() {
  return <Intro />;
}
