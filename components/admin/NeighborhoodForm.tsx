"use client";

import { useActionState, useRef, useEffect } from "react";
import { createNeighborhood, type ActionState } from "@/app/admin/actions";
import type { City } from "@/lib/types";
import { button, input } from "@/components/admin/ui";

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
          className={`${input} sm:w-48`}
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
        <input name="name" placeholder="Novo bairro" required className={`${input} flex-1`} />
        <button
          type="submit"
          disabled={pending || cities.length === 0}
          className={`${button.primary} shrink-0`}
        >
          Adicionar
        </button>
      </div>
      {state?.error && (
        <p className="mt-2 text-xs text-admin-danger">{state.error}</p>
      )}
    </form>
  );
}
