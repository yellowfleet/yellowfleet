import { Vessel } from "@/types/vessel";
import { placeholderFleet } from "@/content/fleet";

export async function getFleet(): Promise<Vessel[]> {
  return placeholderFleet.filter((vessel) => vessel.active);
}

export async function getVesselById(id: string): Promise<Vessel | undefined> {
  return placeholderFleet.find((vessel) => vessel.id === id);
}