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
  const transactionType =
    searchParams.get("negocio") === "aluguel" ? "aluguel" : "venda";
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
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2" aria-label="Finalidade do imóvel">
        <button
          type="button"
          onClick={() => updateParam("negocio", "venda")}
          aria-pressed={transactionType === "venda"}
          className={`focus-ring rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
            transactionType === "venda"
              ? "bg-gold text-black"
              : "bg-white/10 text-white hover:bg-white/15"
          }`}
        >
          Comprar
        </button>
        <button
          type="button"
          onClick={() => updateParam("negocio", "aluguel")}
          aria-pressed={transactionType === "aluguel"}
          className={`focus-ring rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
            transactionType === "aluguel"
              ? "bg-gold text-black"
              : "bg-white/10 text-white hover:bg-white/15"
          }`}
        >
          Alugar
        </button>
      </div>

      <form
        onSubmit={handleSearchSubmit}
        className="grid gap-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr_auto]"
      >
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por título ou código"
          className="focus-ring w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60"
        />
        <select
          value={cityId}
          onChange={(e) => updateParam("cidade", e.target.value)}
          className="focus-ring rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-ink"
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
          className="focus-ring rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-ink"
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
          className="focus-ring rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-ink"
        >
          <option value="">Todos os tipos</option>
          {Object.entries(PROPERTY_TYPE_LABEL).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="focus-ring shrink-0 rounded-xl bg-gold px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-gold-soft"
        >
          Buscar
        </button>
      </form>

      <label className="flex items-center gap-2 text-sm text-white/75">
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
