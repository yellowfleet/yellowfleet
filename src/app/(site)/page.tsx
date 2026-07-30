import { getFleet } from "@/lib/queries/fleet";
import { Hero } from "@/components/sections/Hero";
import { VisionStatement } from "@/components/sections/VisionStatement";
import { WhyElectric } from "@/components/sections/WhyElectric";
import { FeaturedVessel } from "@/components/sections/FeaturedVessel";
import { CTASection } from "@/components/sections/CTASection";

export default async function Home() {
  const fleet = await getFleet();

  return (
    <>
      <Hero />
      <VisionStatement />
      <WhyElectric />
      {fleet.length > 0 && <FeaturedVessel vessels={fleet} />}
      <CTASection />
    </>
  );
}