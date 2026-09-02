"use client";

import { useActionState } from "react";
import Image from "next/image";
import { signIn, type ActionState } from "@/app/admin/actions";
import { button, card, input, label } from "@/components/admin/ui";

const initialState: ActionState = null;

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(signIn, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-admin-bg px-6 py-16">
      <div className={`w-full max-w-sm p-8 ${card}`}>
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="MV Imóveis"
            width={52}
            height={52}
            className="rounded-full"
          />
          <div className="text-center">
            <p className="text-lg font-semibold text-admin-ink">
              Painel MV Imóveis
            </p>
            <p className="text-sm text-admin-ink-soft">
              Entre para gerenciar o site
            </p>
          </div>
        </div>

        <form action={formAction} className="mt-7 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className={label}>
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={`${input} mt-1.5`}
            />
          </div>

          <div>
            <label htmlFor="password" className={label}>
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className={`${input} mt-1.5`}
            />
          </div>

          {state?.error && (
            <p
              role="alert"
              className="rounded-lg bg-admin-danger-soft px-3 py-2 text-sm text-admin-danger"
            >
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className={`${button.primary} mt-2 w-full`}
          >
            {pending ? "Entrando…" : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
