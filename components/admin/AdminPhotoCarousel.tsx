"use client";

import Image from "next/image";
import { useState } from "react";
import type { PropertyPhoto } from "@/lib/types";
import { BuildingPlaceholder } from "@/components/PropertyCard";

export function AdminPhotoCarousel({
  photos,
  title,
}: {
  photos: PropertyPhoto[];
  title: string;
}) {
  const [index, setIndex] = useState(0);

  if (photos.length === 0) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center rounded-t-2xl bg-admin-surface-alt text-admin-ink-soft/40">
        <BuildingPlaceholder className="h-12 w-12" />
      </div>
    );
  }

  const current = photos[index];

  function go(e: React.MouseEvent, delta: number) {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i + delta + photos.length) % photos.length);
  }

  return (
    <div className="group/carousel relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-admin-surface-alt">
      <Image
        src={current.url}
        alt={`${title} — foto ${index + 1}`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />

      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => go(e, -1)}
            aria-label="Foto anterior"
            className="focus-ring absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-opacity group-hover/carousel:opacity-100 hover:bg-black/70"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => go(e, 1)}
            aria-label="Próxima foto"
            className="focus-ring absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-opacity group-hover/carousel:opacity-100 hover:bg-black/70"
          >
            ›
          </button>
          <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1">
            {photos.map((photo, i) => (
              <span
                key={photo.id}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
          <span className="absolute right-2 top-2 rounded-full bg-black/50 px-2 py-0.5 text-[11px] text-white backdrop-blur">
            {index + 1}/{photos.length}
          </span>
        </>
      )}
    </div>
  );
}
