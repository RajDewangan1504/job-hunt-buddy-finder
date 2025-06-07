
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { JobSeeker } from '@/types/jobSeeker';

interface JobSeekerFormProps {
  jobSeeker?: JobSeeker | null;
  onSave: (jobSeeker: Omit<JobSeeker, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
}

export const JobSeekerForm: React.FC<JobSeekerFormProps> = ({ jobSeeker, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    location: '',
    wardNumber: '',
    wardName: '',
    gender: 'Male' as 'Male' | 'Female' | 'Other',
    workName: '',
    experience: '',
    mobileNumber: '',
    status: 'Available' as 'Available' | 'Booked',
  });

  useEffect(() => {
    if (jobSeeker) {
      setFormData({
        name: jobSeeker.name,
        fatherName: jobSeeker.fatherName,
        location: jobSeeker.location,
        wardNumber: jobSeeker.wardNumber,
        wardName: jobSeeker.wardName,
        gender: jobSeeker.gender,
        workName: jobSeeker.workName,
        experience: jobSeeker.experience,
        mobileNumber: jobSeeker.mobileNumber,
        status: jobSeeker.status,
      });
    }
  }, [jobSeeker]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{jobSeeker ? 'Edit Job Seeker' : 'Add New Job Seeker'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fatherName">Father Name</Label>
              <Input
                id="fatherName"
                value={formData.fatherName}
                onChange={(e) => handleChange('fatherName', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wardNumber">Ward Number</Label>
              <Input
                id="wardNumber"
                value={formData.wardNumber}
                onChange={(e) => handleChange('wardNumber', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wardName">Ward Name</Label>
              <Input
                id="wardName"
                value={formData.wardName}
                onChange={(e) => handleChange('wardName', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                value={formData.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="workName">Work/Profession</Label>
              <Input
                id="workName"
                value={formData.workName}
                onChange={(e) => handleChange('workName', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Experience</Label>
              <Input
                id="experience"
                value={formData.experience}
                onChange={(e) => handleChange('experience', e.target.value)}
                placeholder="e.g., 2 years"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobileNumber">Mobile Number</Label>
              <Input
                id="mobileNumber"
                value={formData.mobileNumber}
                onChange={(e) => handleChange('mobileNumber', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => handleChange('status', e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                required
              >
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">
              {jobSeeker ? 'Update' : 'Save'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
