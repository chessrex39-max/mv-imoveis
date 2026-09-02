"use client";

import { useActionState, useRef, useEffect } from "react";
import { createCity, type ActionState } from "@/app/admin/actions";

export function CityForm() {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    createCity,
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <div className="flex gap-2">
        <input
          name="name"
          placeholder="Nova cidade"
          required
          className="focus-ring flex-1 rounded-lg border border-(--color-line) bg-black/40 px-3 py-2 text-sm text-cream"
        />
        <button
          type="submit"
          disabled={pending}
          className="focus-ring shrink-0 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-black disabled:opacity-50"
        >
          Adicionar
        </button>
      </div>
      {state?.error && <p className="mt-2 text-xs text-red-400">{state.error}</p>}
    </form>
  );
}
