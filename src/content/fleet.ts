import { Vessel } from "@/types/vessel";

/**
 * PLACEHOLDER CONTENT
 * Inspired by publicly available electric catamaran specifications.
 * Replace with real fleet data before production launch.
 * Shape matches the future Supabase `vessels` table so this file can be
 * swapped for a query with no component changes (see lib/queries/fleet.ts).
 */
export const placeholderFleet: Vessel[] = [
  {
    id: "vessel-01",
    name: "Surya 24",
    description:
      "A 24-passenger electric catamaran designed for short coastal and harbour routes, built for quiet, low-wake operation.",
    capacity: 24,
    range_km: 80,
    speed_knots: 18,
    image_url: "/images/vessels/placeholder-surya-24.jpg",
    active: true,
  },
  {
    id: "vessel-02",
    name: "Tarang 40",
    description:
      "A 40-passenger electric catamaran for inter-island and water metro style routes, balancing range and capacity.",
    capacity: 40,
    range_km: 120,
    speed_knots: 16,
    image_url: "/images/vessels/placeholder-tarang-40.jpg",
    active: true,
  },
];
