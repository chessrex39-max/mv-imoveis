import { createClient } from "@/lib/supabase/server";
import type { City, Neighborhood, Property } from "@/lib/types";

const PROPERTY_SELECT =
  "*, city:cities(*), neighborhood:neighborhoods(*), photos:property_photos(*)";

// Supabase ainda não conectado (sem NEXT_PUBLIC_SUPABASE_URL): as páginas
// públicas continuam renderizáveis com catálogo vazio em vez de quebrar.
const isSupabaseConfigured = () =>
  Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);

function sortPhotos(property: Property): Property {
  if (!property.photos) return property;
  return {
    ...property,
    photos: [...property.photos].sort((a, b) => a.position - b.position),
  };
}

export async function getFeaturedProperties(limit = 6): Promise<Property[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("properties")
    .select(PROPERTY_SELECT)
    .eq("is_featured", true)
    .eq("status", "disponivel")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  return (data ?? []).map((p) => sortPhotos(p as Property));
}

export type PropertyFilters = {
  q?: string;
  cityId?: string;
  neighborhoodId?: string;
  type?: string;
  includeSold?: boolean;
};

export async function getProperties(
  filters: PropertyFilters = {}
): Promise<Property[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  let query = supabase
    .from("properties")
    .select(PROPERTY_SELECT)
    .order("created_at", { ascending: false });

  if (!filters.includeSold) {
    query = query.eq("status", "disponivel");
  }
  if (filters.cityId) {
    query = query.eq("city_id", filters.cityId);
  }
  if (filters.neighborhoodId) {
    query = query.eq("neighborhood_id", filters.neighborhoodId);
  }
  if (filters.type) {
    query = query.eq("type", filters.type);
  }
  if (filters.q) {
    query = query.or(
      `title.ilike.%${filters.q}%,code.ilike.%${filters.q}%,description.ilike.%${filters.q}%`
    );
  }

  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []).map((p) => sortPhotos(p as Property));
}

export async function getPropertyBySlug(
  slug: string
): Promise<Property | null> {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("properties")
    .select(PROPERTY_SELECT)
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;
  return sortPhotos(data as Property);
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("properties")
    .select(PROPERTY_SELECT)
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;
  return sortPhotos(data as Property);
}

export async function getCities(): Promise<City[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("cities")
    .select("*")
    .order("name");
  if (error) throw error;
  return data ?? [];
}

export async function getNeighborhoods(): Promise<Neighborhood[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("neighborhoods")
    .select("*")
    .order("name");
  if (error) throw error;
  return data ?? [];
}
