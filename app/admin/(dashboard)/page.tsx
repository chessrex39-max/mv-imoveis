import Link from "next/link";
import { getProperties, getCities } from "@/lib/queries";

export default async function AdminHomePage() {
  const [all, cities] = await Promise.all([
    getProperties({ includeSold: true }),
    getCities(),
  ]);

  const available = all.filter((p) => p.status === "disponivel").length;
  const sold = all.filter((p) => p.status === "vendido").length;
  const featured = all.filter((p) => p.is_featured).length;

  return (
    <div>
      <h1 className="font-display text-2xl text-cream">Visão geral</h1>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Imóveis cadastrados", value: all.length },
          { label: "Disponíveis", value: available },
          { label: "Vendidos", value: sold },
          { label: "Em destaque", value: featured },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-(--color-line) bg-charcoal p-5">
            <p className="font-display text-3xl text-gold">{stat.value}</p>
            <p className="mt-1 text-xs text-cream-soft">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/admin/imoveis/novo"
          className="focus-ring rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-black"
        >
          + Cadastrar imóvel
        </Link>
        <Link
          href="/admin/cidades"
          className="focus-ring rounded-lg border border-(--color-line) px-5 py-2.5 text-sm text-cream-soft hover:text-cream"
        >
          Gerenciar cidades e bairros
        </Link>
      </div>

      {cities.length === 0 && (
        <p className="mt-6 max-w-md text-sm text-cream-soft">
          Nenhuma cidade cadastrada ainda. Cadastre pelo menos uma cidade e um
          bairro em &quot;Cidades e bairros&quot; antes de criar o primeiro imóvel.
        </p>
      )}
    </div>
  );
}
