"use client";

import { useActionState, useRef, useEffect } from "react";
import { createCity, type ActionState } from "@/app/admin/actions";
import { button, input } from "@/components/admin/ui";

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
        <input name="name" placeholder="Nova cidade" required className={input} />
        <button type="submit" disabled={pending} className={`${button.primary} shrink-0`}>
          Adicionar
        </button>
      </div>
      {state?.error && (
        <p className="mt-2 text-xs text-admin-danger">{state.error}</p>
      )}
    </form>
  );
}
