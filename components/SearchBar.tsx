"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import type { City } from "@/lib/types";
import { PROPERTY_TYPE_LABEL } from "@/lib/types";
import { BuildingIcon, HomeIcon, KeyIcon } from "@/components/icons";

export function SearchBar({
  cities,
  sellHref,
}: {
  cities: City[];
  sellHref: string | null;
}) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [cityId, setCityId] = useState("");
  const [type, setType] = useState("");
  const [transactionType, setTransactionType] = useState<"venda" | "aluguel">("venda");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (cityId) params.set("cidade", cityId);
    if (type) params.set("tipo", type);
    params.set("negocio", transactionType);
    router.push(`/imoveis${params.toString() ? `?${params}` : ""}`);
  }

  return (
    <motion.div
      className="w-full max-w-5xl"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="inline-flex overflow-hidden rounded-t-xl bg-white shadow-lg">
        <ModeButton
          active={transactionType === "venda"}
          onClick={() => setTransactionType("venda")}
          icon={HomeIcon}
        >
          Comprar
        </ModeButton>
        <ModeButton
          active={transactionType === "aluguel"}
          onClick={() => setTransactionType("aluguel")}
          icon={KeyIcon}
        >
          Alugar
        </ModeButton>
        <a
          href={sellHref ?? "#contato"}
          target={sellHref ? "_blank" : undefined}
          rel={sellHref ? "noreferrer" : undefined}
          className="focus-ring flex items-center gap-2 border-l border-line-light px-5 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-surface-soft sm:px-7"
        >
          <BuildingIcon className="h-4 w-4" />
          Vender
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-3 rounded-b-2xl rounded-tr-2xl bg-white p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_auto] lg:items-center"
      >
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Bairro, título ou código do imóvel"
          aria-label="Pesquisar imóveis"
          className="focus-ring min-w-0 rounded-xl border border-line-light bg-surface px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft/60"
        />
        <select
          value={cityId}
          onChange={(e) => setCityId(e.target.value)}
          aria-label="Cidade"
          className="focus-ring rounded-xl border border-line-light bg-surface px-4 py-3.5 text-sm text-ink"
        >
          <option value="">Todas as cidades</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          aria-label="Tipo de imóvel"
          className="focus-ring rounded-xl border border-line-light bg-surface px-4 py-3.5 text-sm text-ink"
        >
          <option value="">Tipo de imóvel</option>
          {Object.entries(PROPERTY_TYPE_LABEL).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="focus-ring rounded-xl bg-gold px-7 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft"
        >
          Buscar imóveis
        </button>
      </form>
    </motion.div>
  );
}

function ModeButton({
  active,
  onClick,
  icon: Icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`focus-ring flex items-center gap-2 px-5 py-3.5 text-sm font-semibold transition-colors sm:px-7 ${
        active ? "bg-gold text-black" : "text-ink hover:bg-surface-soft"
      }`}
    >
      <Icon className="h-4 w-4" />
      {children}
    </button>
  );
}
