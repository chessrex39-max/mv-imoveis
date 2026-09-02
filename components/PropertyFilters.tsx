"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import type { City, Neighborhood } from "@/lib/types";
import { PROPERTY_TYPE_LABEL } from "@/lib/types";

export function PropertyFilters({
  cities,
  neighborhoods,
}: {
  cities: City[];
  neighborhoods: Neighborhood[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [q, setQ] = useState(searchParams.get("q") ?? "");
  const cityId = searchParams.get("cidade") ?? "";
  const neighborhoodId = searchParams.get("bairro") ?? "";
  const type = searchParams.get("tipo") ?? "";
  const includeSold = searchParams.get("vendidos") === "1";

  const filteredNeighborhoods = cityId
    ? neighborhoods.filter((n) => n.city_id === cityId)
    : neighborhoods;

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    if (key === "cidade") params.delete("bairro");
    router.push(`/imoveis${params.toString() ? `?${params}` : ""}`);
  }

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    updateParam("q", q.trim());
  }

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-(--color-line) bg-charcoal p-5">
      <form onSubmit={handleSearchSubmit} className="flex gap-2">
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por título ou código"
          className="focus-ring w-full rounded-lg border border-(--color-line) bg-black/40 px-3 py-2 text-sm text-cream placeholder:text-cream-soft/50"
        />
        <button
          type="submit"
          className="focus-ring shrink-0 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-black"
        >
          Buscar
        </button>
      </form>

      <div className="grid grid-cols-1 gap-3">
        <select
          value={cityId}
          onChange={(e) => updateParam("cidade", e.target.value)}
          className="focus-ring rounded-lg border border-(--color-line) bg-black/40 px-3 py-2 text-sm text-cream-soft"
        >
          <option value="">Todas as cidades</option>
          {cities.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          value={neighborhoodId}
          onChange={(e) => updateParam("bairro", e.target.value)}
          className="focus-ring rounded-lg border border-(--color-line) bg-black/40 px-3 py-2 text-sm text-cream-soft"
        >
          <option value="">Todos os bairros</option>
          {filteredNeighborhoods.map((n) => (
            <option key={n.id} value={n.id}>
              {n.name}
            </option>
          ))}
        </select>

        <select
          value={type}
          onChange={(e) => updateParam("tipo", e.target.value)}
          className="focus-ring rounded-lg border border-(--color-line) bg-black/40 px-3 py-2 text-sm text-cream-soft"
        >
          <option value="">Todos os tipos</option>
          {Object.entries(PROPERTY_TYPE_LABEL).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <label className="flex items-center gap-2 text-sm text-cream-soft">
        <input
          type="checkbox"
          checked={includeSold}
          onChange={(e) => updateParam("vendidos", e.target.checked ? "1" : "")}
          className="focus-ring h-4 w-4 accent-(--color-gold)"
        />
        Mostrar também imóveis vendidos
      </label>
    </div>
  );
}
