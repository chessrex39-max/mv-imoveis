"use client";

import { useActionState, useRef, useEffect } from "react";
import { createNeighborhood, type ActionState } from "@/app/admin/actions";
import type { City } from "@/lib/types";

export function NeighborhoodForm({ cities }: { cities: City[] }) {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    createNeighborhood,
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <div className="flex flex-col gap-2 sm:flex-row">
        <select
          name="city_id"
          required
          defaultValue=""
          className="focus-ring rounded-lg border border-(--color-line) bg-black/40 px-3 py-2 text-sm text-cream-soft sm:w-48"
        >
          <option value="" disabled>
            Cidade
          </option>
          {cities.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <input
          name="name"
          placeholder="Novo bairro"
          required
          className="focus-ring flex-1 rounded-lg border border-(--color-line) bg-black/40 px-3 py-2 text-sm text-cream"
        />
        <button
          type="submit"
          disabled={pending || cities.length === 0}
          className="focus-ring shrink-0 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-black disabled:opacity-50"
        >
          Adicionar
        </button>
      </div>
      {state?.error && <p className="mt-2 text-xs text-red-400">{state.error}</p>}
    </form>
  );
}
