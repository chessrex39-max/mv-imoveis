import Link from "next/link";
import { requireAdmin } from "@/lib/supabase/admin";
import { signOut } from "@/app/admin/actions";

const NAV = [
  { href: "/admin", label: "Visão geral" },
  { href: "/admin/imoveis", label: "Imóveis" },
  { href: "/admin/cidades", label: "Cidades e bairros" },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await requireAdmin();

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-(--color-line)">
        <div className="container-page flex h-16 items-center justify-between">
          <span className="font-display text-lg italic text-cream">
            Painel MV Imóveis
          </span>
          <div className="flex items-center gap-4 text-sm text-cream-soft">
            <span className="hidden sm:inline">{user.email}</span>
            <form action={signOut}>
              <button
                type="submit"
                className="focus-ring rounded-full border border-(--color-line) px-4 py-1.5 hover:border-gold hover:text-gold"
              >
                Sair
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="container-page grid grid-cols-1 gap-8 py-8 lg:grid-cols-[220px_1fr]">
        <nav className="flex gap-2 overflow-x-auto lg:flex-col">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring shrink-0 rounded-lg px-3 py-2 text-sm text-cream-soft hover:bg-charcoal hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/"
            target="_blank"
            className="focus-ring mt-2 shrink-0 rounded-lg px-3 py-2 text-sm text-gold/80 hover:text-gold"
          >
            Ver site →
          </Link>
        </nav>

        <main>{children}</main>
      </div>
    </div>
  );
}
