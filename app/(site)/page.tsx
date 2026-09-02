import { Hero } from "@/components/Hero";
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

  return (
    <>
      <Hero cities={cities} />
      <FeaturedProperties properties={featured} />
      <ServicesCards />
      <InstitutionalSection />
      <ContactCTA />
    </>
  );
}
