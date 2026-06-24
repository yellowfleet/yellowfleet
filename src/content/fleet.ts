import { Vessel } from "@/types/vessel";

export const placeholderFleet: Vessel[] = [
  {
    id: "vessel-01",
    name: "YF Golden Crest",
    description: "A 50-passenger electric catamaran built for coastal and harbour routes, designed for quiet, low-wake operation.",
    capacity: 50,
    range_km: 0,
    speed_knots: 12,
    image_url: "/images/vessels/golden-crest-1.png",
    images: [
      "/images/vessels/golden-crest-1.png",
      "/images/vessels/golden-crest-2.png",
      "/images/vessels/golden-crest-3.png",
      "/images/vessels/golden-crest-4.png",
      "/images/vessels/golden-crest-5.png",
      "/images/vessels/golden-crest-7.png",

    ],
    active: true,
  },
  {
    id: "vessel-02",
    name: "YF Solaris",
    description: "An 80-passenger electric catamaran combining extended range with high capacity for inter-coastal routes.",
    capacity: 80,
    range_km: 0,
    speed_knots: 0,
    image_url: "/images/vessels/solaris-1.png",
    images: [
      "/images/vessels/solaris-1.png",
      "/images/vessels/solaris-2.png",
      "/images/vessels/solaris-3.png",
    ],
    active: true,
  },
  {
    id: "vessel-03",
    name: "YF Ecowave",
    description: "A 100-passenger electric vessel engineered for high-frequency water metro and public transport operations.",
    capacity: 100,
    range_km: 0,
    speed_knots: 0,
    image_url: "/images/vessels/ecowave-1.png",
    images: [
      "/images/vessels/ecowave-1.png",
      "/images/vessels/ecowave-2.png",
      "/images/vessels/ecowave-3.png",
    ],
    active: true,
  },
  {
    id: "vessel-04",
    name: "YF Yellowtide",
    description: "A 100-passenger flagship electric catamaran built for large-scale sustainable marine passenger transport.",
    capacity: 100,
    range_km: 0,
    speed_knots: 0,
    image_url: "/images/vessels/yellowtide-1.png",
    images: [
      "/images/vessels/yellowtide-1.png",
      "/images/vessels/yellowtide-2.png",
      "/images/vessels/yellowtide-3.png",
    ],
    active: true,
  },
];