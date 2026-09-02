import { notFound } from "next/navigation";
import { getCities, getNeighborhoods, getPropertyById } from "@/lib/queries";
import { updateProperty } from "@/app/admin/actions";
import { PropertyForm } from "@/components/admin/PropertyForm";
import { PhotoManager } from "@/components/admin/PhotoManager";

export default async function EditarImovelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [property, cities, neighborhoods] = await Promise.all([
    getPropertyById(id),
    getCities(),
    getNeighborhoods(),
  ]);

  if (!property) notFound();

  return (
    <div>
      <h1 className="font-display text-2xl text-cream">{property.title}</h1>
      <p className="mt-1 text-sm text-cream-soft">Código {property.code}</p>

      <div className="mt-8 max-w-2xl">
        <PropertyForm
          action={updateProperty.bind(null, property.id)}
          cities={cities}
          neighborhoods={neighborhoods}
          property={property}
          submitLabel="Salvar alterações"
        />
      </div>

      <div className="mt-12 max-w-3xl border-t border-(--color-line) pt-8">
        <h2 className="font-display text-xl text-cream">Fotos</h2>
        <p className="mt-1 text-sm text-cream-soft">
          A primeira foto marcada como capa aparece nos cards do site.
        </p>
        <div className="mt-5">
          <PhotoManager propertyId={property.id} photos={property.photos ?? []} />
        </div>
      </div>
    </div>
  );
}
