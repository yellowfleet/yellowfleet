export interface CompanyInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  mission: string;
  vision: string;
  sustainabilityCommitment: string;
  phone: string;
  email: string;
  address: string;
}

export interface ContactInquiry {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  created_at?: string;
}
