import { getCities, getNeighborhoods } from "@/lib/queries";
import { CityForm } from "@/components/admin/CityForm";
import { NeighborhoodForm } from "@/components/admin/NeighborhoodForm";

export default async function CidadesPage() {
  const [cities, neighborhoods] = await Promise.all([
    getCities(),
    getNeighborhoods(),
  ]);

  return (
    <div>
      <h1 className="font-display text-2xl text-cream">Cidades e bairros</h1>
      <p className="mt-1 text-sm text-cream-soft">
        Cadastre aqui as regiões usadas nos filtros do site e no cadastro de
        imóveis.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <section className="rounded-xl border border-(--color-line) bg-charcoal p-5">
          <h2 className="eyebrow">Cidades</h2>
          <div className="mt-4">
            <CityForm />
          </div>
          <ul className="mt-5 flex flex-col gap-2">
            {cities.map((city) => (
              <li key={city.id} className="rounded-lg bg-black/30 px-3 py-2 text-sm text-cream-soft">
                {city.name}
              </li>
            ))}
            {cities.length === 0 && (
              <p className="text-sm text-cream-soft/60">Nenhuma cidade cadastrada.</p>
            )}
          </ul>
        </section>

        <section className="rounded-xl border border-(--color-line) bg-charcoal p-5">
          <h2 className="eyebrow">Bairros</h2>
          <div className="mt-4">
            <NeighborhoodForm cities={cities} />
          </div>
          <ul className="mt-5 flex flex-col gap-2">
            {neighborhoods.map((n) => (
              <li key={n.id} className="rounded-lg bg-black/30 px-3 py-2 text-sm text-cream-soft">
                {n.name}
                <span className="text-cream-soft/50">
                  {" — "}
                  {cities.find((c) => c.id === n.city_id)?.name}
                </span>
              </li>
            ))}
            {neighborhoods.length === 0 && (
              <p className="text-sm text-cream-soft/60">Nenhum bairro cadastrado.</p>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
