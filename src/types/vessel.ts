export interface Vessel {
  id: string;
  name: string;
  description: string;
  capacity: number;
  range_km: number;
  speed_knots: number;
  image_url: string;
  active: boolean;
  created_at?: string;
}
