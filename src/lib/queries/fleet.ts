import { Vessel } from "@/types/vessel";
import { placeholderFleet } from "@/content/fleet";

/**
 * Returns the active fleet.
 * Currently backed by placeholder content. In Phase 2, swap the body of
 * this function for a Supabase query against the `vessels` table —
 * components consuming this function do not need to change.
 */
export async function getFleet(): Promise<Vessel[]> {
  return placeholderFleet.filter((vessel) => vessel.active);
}

export async function getVesselById(id: string): Promise<Vessel | undefined> {
  return placeholderFleet.find((vessel) => vessel.id === id);
}
