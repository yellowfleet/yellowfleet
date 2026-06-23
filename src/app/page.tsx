import { getFleet } from "@/lib/queries/fleet";
import { Hero } from "@/components/sections/Hero";
import { VisionStatement } from "@/components/sections/VisionStatement";
import { WhyElectric } from "@/components/sections/WhyElectric";
import { FeaturedVessel } from "@/components/sections/FeaturedVessel"; 
import { CTASection } from "@/components/sections/CTASection";

export default async function Home() {
  const [fleet] = await Promise.all([getFleet()]);
  const featuredVessel = fleet[0];

  return (
    <>
      <Hero />
      <VisionStatement />
      <WhyElectric />
      {featuredVessel && <FeaturedVessel vessel={featuredVessel} />}
      
      
      <CTASection />
    </>
  );
}
