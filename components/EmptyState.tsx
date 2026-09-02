import { BuildingPlaceholder } from "@/components/PropertyCard";

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-(--color-line) px-6 py-16 text-center">
      <BuildingPlaceholder className="h-10 w-10 text-gold/60" />
      <p className="font-display text-xl text-cream">{title}</p>
      <p className="max-w-sm text-sm text-cream-soft">{description}</p>
    </div>
  );
}
