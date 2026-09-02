import { getCities, getNeighborhoods } from "@/lib/queries";
import { createProperty } from "@/app/admin/actions";
import { PropertyForm } from "@/components/admin/PropertyForm";
import { card } from "@/components/admin/ui";

export default async function NovoImovelPage() {
  const [cities, neighborhoods] = await Promise.all([
    getCities(),
    getNeighborhoods(),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-admin-ink">
        Cadastrar imóvel
      </h1>
      <p className="mt-1 text-sm text-admin-ink-soft">
        Depois de salvar, você poderá enviar as fotos do imóvel.
      </p>

      <div className={`mt-8 max-w-2xl p-6 sm:p-8 ${card}`}>
        {cities.length === 0 ? (
          <p className="text-sm text-admin-ink-soft">
            Cadastre uma cidade e um bairro antes de criar um imóvel.
          </p>
        ) : (
          <PropertyForm
            action={createProperty}
            cities={cities}
            neighborhoods={neighborhoods}
            submitLabel="Salvar e continuar"
          />
        )}
      </div>
    </div>
  );
}
