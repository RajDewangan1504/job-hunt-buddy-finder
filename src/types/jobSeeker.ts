
export interface JobSeeker {
  id: string;
  name: string;
  fatherOrHusbandName: string;
  address: string;
  wardNumber: number;
  wardName: string;
  gender: 'Male' | 'Female' | 'Other';
  workCategory: string;
  workExperience: number;
  phone: string;
  status: 'Available' | 'Unavailable',
  createdAt: string;
  image?: string;
  aadharNumber: string;
}
