
export interface JobSeeker {
  id: string;
  name: string;
  fatherName: string;
  location: string;
  wardNumber: string;
  wardName: string;
  gender: 'Male' | 'Female' | 'Other';
  workName: string;
  experience: string;
  mobileNumber: string;
  status: 'Available' | 'Booked';
  createdAt: string;
}
