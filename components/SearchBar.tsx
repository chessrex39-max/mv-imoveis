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
      <div className="grid w-full grid-cols-3 overflow-hidden rounded-t-xl border border-b-0 border-line-light bg-charcoal/95 shadow-lg sm:inline-flex sm:w-auto">
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
          className="focus-ring flex min-w-0 items-center justify-center gap-1.5 border-l border-line-light px-2 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-charcoal-soft sm:px-7"
        >
          <BuildingIcon className="h-4 w-4" />
          Vender
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-3 rounded-b-2xl border border-line-light bg-charcoal/95 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.4)] backdrop-blur-md sm:grid-cols-2 sm:rounded-tr-2xl lg:grid-cols-[1.7fr_1fr_1fr_auto] lg:items-center"
      >
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Bairro, título ou código do imóvel"
          aria-label="Pesquisar imóveis"
          className="focus-ring min-w-0 rounded-xl border border-line-light bg-black/55 px-4 py-3.5 text-sm text-cream placeholder:text-cream-soft/55"
        />
        <select
          value={cityId}
          onChange={(e) => setCityId(e.target.value)}
          aria-label="Cidade"
          className="focus-ring rounded-xl border border-line-light bg-black/55 px-4 py-3.5 text-sm text-cream"
        >
          <option value="" className="bg-charcoal">Todas as cidades</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id} className="bg-charcoal">
              {city.name}
            </option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          aria-label="Tipo de imóvel"
          className="focus-ring rounded-xl border border-line-light bg-black/55 px-4 py-3.5 text-sm text-cream"
        >
          <option value="" className="bg-charcoal">Tipo de imóvel</option>
          {Object.entries(PROPERTY_TYPE_LABEL).map(([value, label]) => (
            <option key={value} value={value} className="bg-charcoal">
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
      className={`focus-ring flex min-w-0 items-center justify-center gap-1.5 px-2 py-3.5 text-sm font-semibold transition-colors sm:px-7 ${
        active ? "bg-gold text-black" : "text-cream hover:bg-charcoal-soft"
      }`}
    >
      <Icon className="h-4 w-4" />
      {children}
    </button>
  );
}
