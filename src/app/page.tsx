import { getFleet } from "@/lib/queries/fleet";
import { getProjects } from "@/lib/queries/projects";
import { Hero } from "@/components/sections/Hero";
import { VisionStatement } from "@/components/sections/VisionStatement";
import { WhyElectric } from "@/components/sections/WhyElectric";
import { FeaturedVessel } from "@/components/sections/FeaturedVessel";  
import { SustainabilityImpact } from "@/components/sections/SustainabilityImpact";
import { CTASection } from "@/components/sections/CTASection";

export default async function Home() {
  const [fleet, projects] = await Promise.all([getFleet(), getProjects()]);
  const featuredVessel = fleet[0];
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      <Hero />
      <VisionStatement />
      <WhyElectric />
      {featuredVessel && <FeaturedVessel vessel={featuredVessel} />}
      <FeaturedProjects projects={featuredProjects} />
      <SustainabilityImpact />
      <CTASection />
    </>
  );
}
