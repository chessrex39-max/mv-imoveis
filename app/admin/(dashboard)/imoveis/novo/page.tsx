import { getCities, getNeighborhoods } from "@/lib/queries";
import { createProperty } from "@/app/admin/actions";
import { PropertyForm } from "@/components/admin/PropertyForm";

export default async function NovoImovelPage() {
  const [cities, neighborhoods] = await Promise.all([
    getCities(),
    getNeighborhoods(),
  ]);

  return (
    <div>
      <h1 className="font-display text-2xl text-cream">Cadastrar imóvel</h1>
      <p className="mt-1 text-sm text-cream-soft">
        Depois de salvar, você poderá enviar as fotos do imóvel.
      </p>

      <div className="mt-8 max-w-2xl">
        {cities.length === 0 ? (
          <p className="text-sm text-cream-soft">
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
