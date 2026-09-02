"use client";

import Image from "next/image";
import { useState } from "react";
import type { PropertyPhoto } from "@/lib/types";
import { BuildingPlaceholder } from "@/components/PropertyCard";

export function PropertyGallery({
  photos,
  title,
}: {
  photos: PropertyPhoto[];
  title: string;
}) {
  const [index, setIndex] = useState(0);

  if (photos.length === 0) {
    return (
      <div className="flex aspect-[16/10] w-full items-center justify-center rounded-2xl border border-(--color-line) bg-charcoal text-cream-soft/30">
        <BuildingPlaceholder className="h-16 w-16" />
      </div>
    );
  }

  const current = photos[index];

  function go(delta: number) {
    setIndex((i) => (i + delta + photos.length) % photos.length);
  }

  return (
    <div>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-(--color-line) bg-charcoal">
        <Image
          src={current.url}
          alt={`${title} — foto ${index + 1} de ${photos.length}`}
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          priority={index === 0}
          className="object-cover"
        />

        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto anterior"
              className="focus-ring absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-cream backdrop-blur hover:bg-black/80"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próxima foto"
              className="focus-ring absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-cream backdrop-blur hover:bg-black/80"
            >
              ›
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-cream backdrop-blur">
              {index + 1} / {photos.length}
            </span>
          </>
        )}
      </div>

      {photos.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver foto ${i + 1}`}
              aria-current={i === index}
              className={`focus-ring relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border transition-opacity ${
                i === index
                  ? "border-gold opacity-100"
                  : "border-(--color-line) opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={photo.url} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
