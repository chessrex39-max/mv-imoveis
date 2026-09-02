export default function AdminSetupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-admin-bg px-6 py-16">
      <div className="max-w-md rounded-2xl border border-admin-border bg-admin-surface p-8 text-center shadow-sm">
        <p className="text-xl font-semibold text-admin-ink">
          Painel ainda não configurado
        </p>
        <p className="mt-3 text-sm text-admin-ink-soft">
          Configure as variáveis{" "}
          <code className="text-admin-accent">NEXT_PUBLIC_SUPABASE_URL</code>{" "}
          e{" "}
          <code className="text-admin-accent">
            NEXT_PUBLIC_SUPABASE_ANON_KEY
          </code>{" "}
          no arquivo <code className="text-admin-accent">.env.local</code>{" "}
          (veja o README) e reinicie o servidor para acessar o painel
          administrativo.
        </p>
      </div>
    </div>
  );
}
