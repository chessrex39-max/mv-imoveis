export default function AdminSetupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 py-16">
      <div className="max-w-md text-center">
        <p className="font-display text-2xl text-cream">
          Painel ainda não configurado
        </p>
        <p className="mt-3 text-sm text-cream-soft">
          Configure as variáveis <code className="text-gold">NEXT_PUBLIC_SUPABASE_URL</code>{" "}
          e <code className="text-gold">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> no
          arquivo <code className="text-gold">.env.local</code> (veja o README)
          e reinicie o servidor para acessar o painel administrativo.
        </p>
      </div>
    </div>
  );
}
