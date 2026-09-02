import { getCities, getNeighborhoods } from "@/lib/queries";
import { CityForm } from "@/components/admin/CityForm";
import { NeighborhoodForm } from "@/components/admin/NeighborhoodForm";
import { card } from "@/components/admin/ui";

export default async function CidadesPage() {
  const [cities, neighborhoods] = await Promise.all([
    getCities(),
    getNeighborhoods(),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-admin-ink">
        Cidades e bairros
      </h1>
      <p className="mt-1 text-sm text-admin-ink-soft">
        Cadastre aqui as regiões usadas nos filtros do site e no cadastro de
        imóveis.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className={`p-6 ${card}`}>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-admin-ink-soft">
            Cidades
          </h2>
          <div className="mt-4">
            <CityForm />
          </div>
          <ul className="mt-5 flex flex-col gap-2">
            {cities.map((city) => (
              <li
                key={city.id}
                className="rounded-lg bg-admin-surface-alt px-3 py-2 text-sm text-admin-ink"
              >
                {city.name}
              </li>
            ))}
            {cities.length === 0 && (
              <p className="text-sm text-admin-ink-soft/70">
                Nenhuma cidade cadastrada.
              </p>
            )}
          </ul>
        </section>

        <section className={`p-6 ${card}`}>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-admin-ink-soft">
            Bairros
          </h2>
          <div className="mt-4">
            <NeighborhoodForm cities={cities} />
          </div>
          <ul className="mt-5 flex flex-col gap-2">
            {neighborhoods.map((n) => (
              <li
                key={n.id}
                className="rounded-lg bg-admin-surface-alt px-3 py-2 text-sm text-admin-ink"
              >
                {n.name}
                <span className="text-admin-ink-soft">
                  {" — "}
                  {cities.find((c) => c.id === n.city_id)?.name}
                </span>
              </li>
            ))}
            {neighborhoods.length === 0 && (
              <p className="text-sm text-admin-ink-soft/70">
                Nenhum bairro cadastrado.
              </p>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
