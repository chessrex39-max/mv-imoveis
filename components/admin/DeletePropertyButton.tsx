"use client";

import { useTransition } from "react";
import { deleteProperty } from "@/app/admin/actions";

export function DeletePropertyButton({
  propertyId,
  title,
}: {
  propertyId: string;
  title: string;
}) {
  const [pending, startTransition] = useTransition();

  function handleClick() {
    const confirmed = window.confirm(
      `Remover definitivamente o imóvel "${title}"? Esta ação não pode ser desfeita.`
    );
    if (!confirmed) return;
    startTransition(() => deleteProperty(propertyId));
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={pending}
      className="focus-ring text-xs font-medium text-red-400 hover:text-red-300 disabled:opacity-50"
    >
      {pending ? "Removendo…" : "Remover"}
    </button>
  );
}
