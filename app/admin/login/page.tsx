"use client";

import { useActionState } from "react";
import Image from "next/image";
import { signIn, type ActionState } from "@/app/admin/actions";

const initialState: ActionState = null;

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(signIn, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="MV Imóveis"
            width={56}
            height={56}
            className="rounded-full"
          />
          <p className="font-display text-xl italic text-cream">
            Painel MV Imóveis
          </p>
        </div>

        <form action={formAction} className="mt-8 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="text-sm text-cream-soft">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="focus-ring mt-1.5 w-full rounded-lg border border-(--color-line) bg-charcoal px-3 py-2.5 text-sm text-cream"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm text-cream-soft">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="focus-ring mt-1.5 w-full rounded-lg border border-(--color-line) bg-charcoal px-3 py-2.5 text-sm text-cream"
            />
          </div>

          {state?.error && (
            <p role="alert" className="text-sm text-red-400">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="focus-ring mt-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {pending ? "Entrando…" : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
