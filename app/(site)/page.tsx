import { Hero } from "@/components/Hero";
import { PropertySearchSection } from "@/components/PropertySearchSection";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { ServicesCards } from "@/components/ServicesCards";
import { InstitutionalSection } from "@/components/InstitutionalSection";
import { ContactCTA } from "@/components/ContactCTA";
import { getCities, getFeaturedProperties } from "@/lib/queries";

export default async function HomePage() {
  const [cities, featured] = await Promise.all([
    getCities(),
    getFeaturedProperties(),
  ]);
  const heroProperty = featured.find((property) => property.photos?.length);
  const heroPhoto =
    heroProperty?.photos?.find((photo) => photo.is_cover) ??
    heroProperty?.photos?.[0];

  return (
    <>
      <PropertySearchSection
        cities={cities}
        backgroundImage={heroPhoto?.url}
      />
      <Hero />
      <FeaturedProperties properties={featured} />
      <ServicesCards />
      <InstitutionalSection />
      <ContactCTA />
    </>
  );
}
