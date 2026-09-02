import Link from "next/link";
import { getProperties } from "@/lib/queries";
import { PROPERTY_TYPE_LABEL } from "@/lib/types";
import { setPropertyStatus } from "@/app/admin/actions";
import { DeletePropertyButton } from "@/components/admin/DeletePropertyButton";

export default async function AdminImoveisPage() {
  const properties = await getProperties({ includeSold: true });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl text-cream">Imóveis</h1>
        <Link
          href="/admin/imoveis/novo"
          className="focus-ring rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-black"
        >
          + Cadastrar imóvel
        </Link>
      </div>

      {properties.length === 0 ? (
        <p className="mt-8 text-sm text-cream-soft">
          Nenhum imóvel cadastrado ainda.
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-(--color-line)">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-(--color-line) text-left text-xs uppercase tracking-wide text-cream-soft/60">
                <th className="px-4 py-3 font-medium">Imóvel</th>
                <th className="px-4 py-3 font-medium">Tipo</th>
                <th className="px-4 py-3 font-medium">Local</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Fotos</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => {
                const nextStatus =
                  property.status === "disponivel" ? "vendido" : "disponivel";
                return (
                  <tr key={property.id} className="border-b border-(--color-line) last:border-0">
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/imoveis/${property.id}`}
                        className="focus-ring font-medium text-cream hover:text-gold"
                      >
                        {property.title}
                      </Link>
                      <p className="text-xs text-cream-soft/60">{property.code}</p>
                    </td>
                    <td className="px-4 py-3 text-cream-soft">
                      {PROPERTY_TYPE_LABEL[property.type]}
                    </td>
                    <td className="px-4 py-3 text-cream-soft">
                      {[property.neighborhood?.name, property.city?.name]
                        .filter(Boolean)
                        .join(", ")}
                    </td>
                    <td className="px-4 py-3">
                      <form action={setPropertyStatus.bind(null, property.id, nextStatus)}>
                        <button
                          type="submit"
                          className={`focus-ring rounded-full px-3 py-1 text-xs font-semibold ${
                            property.status === "disponivel"
                              ? "bg-emerald-500/15 text-emerald-300"
                              : "bg-gold/15 text-gold"
                          }`}
                          title={`Marcar como ${nextStatus === "vendido" ? "vendido" : "disponível"}`}
                        >
                          {property.status === "disponivel" ? "Disponível" : "Vendido"}
                        </button>
                      </form>
                    </td>
                    <td className="px-4 py-3 text-cream-soft">
                      {property.photos?.length ?? 0}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <DeletePropertyButton propertyId={property.id} title={property.title} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
