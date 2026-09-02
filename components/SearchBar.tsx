"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { City } from "@/lib/types";

export function SearchBar({ cities }: { cities: City[] }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [cityId, setCityId] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (cityId) params.set("cidade", cityId);
    router.push(`/imoveis${params.toString() ? `?${params}` : ""}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-4xl flex-col gap-3 rounded-2xl border border-(--color-line) bg-black/60 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-md sm:flex-row sm:items-center"
    >
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Busque por bairro, título ou código do imóvel"
        className="focus-ring w-full flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream-soft/50 sm:border-r sm:border-(--color-line)"
      />
      <select
        value={cityId}
        onChange={(e) => setCityId(e.target.value)}
        className="focus-ring w-full rounded-xl bg-transparent px-4 py-3 text-sm text-cream-soft sm:w-48"
      >
        <option value="" className="bg-charcoal">
          Todas as cidades
        </option>
        {cities.map((city) => (
          <option key={city.id} value={city.id} className="bg-charcoal">
            {city.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="focus-ring rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
      >
        Buscar imóveis
      </button>
    </form>
  );
}
