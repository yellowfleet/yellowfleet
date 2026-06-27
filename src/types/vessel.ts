export interface Vessel {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  capacity: number;
  hull_material?: string;
  speed_knots: number;
  hull_type?: string;
  class?: string;
  length_m?: number;
  breadth_m?: number;
  draft_m?: number;
  air_draft_m?: number;
  freeboard_m?: number;
  dwt_t?: number;
  range_km: number;
  image_url: string;
  images?: string[];
  active: boolean;
  created_at?: string;
}