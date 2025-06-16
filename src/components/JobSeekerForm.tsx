



import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { JobSeeker } from '@/types/jobSeeker';
import { CloudCog, Briefcase } from 'lucide-react';
import { Console } from 'console';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

interface JobSeekerFormProps {
  jobSeeker?: JobSeeker | null;
  onSave: (jobSeeker: Omit<JobSeeker, 'id' | 'createdAt'> & { imageFile?: File | null }) => void;
  onCancel: () => void;
}

export const JobSeekerForm: React.FC<JobSeekerFormProps> = ({ jobSeeker, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    fatherOrHusbandName: '',
    address: '',
    wardNumber: 1,
    wardName: '',
    gender: 'Male' as 'Male' | 'Female' | 'Other',
    workCategory: '',
    workExperience: 1,
    phone: '',
    status: 'Available' as 'Available' | 'Unavailable',
    image: '',
    imageFile: null as File | null,
    aadharNumber: '',
  });

  useEffect(() => {
    if (jobSeeker) {
      setFormData({
        name: jobSeeker.name,
        fatherOrHusbandName: jobSeeker.fatherOrHusbandName,
        address: jobSeeker.address,
        wardNumber: jobSeeker.wardNumber,
        wardName: jobSeeker.wardName,
        gender: jobSeeker.gender,
        workCategory: jobSeeker.workCategory,
        workExperience: jobSeeker.workExperience,
        phone: jobSeeker.phone,
        status: jobSeeker.status,
        image: jobSeeker.image || '',
        imageFile: null,
        aadharNumber: jobSeeker.aadharNumber || '',
      });
    }
  }, [jobSeeker]);




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSend = {
      name: formData.name,
      fatherOrHusbandName: formData.fatherOrHusbandName,
      gender: formData.gender,
      aadharNumber: formData.aadharNumber,
      phone: formData.phone,
      workCategory: formData.workCategory,
      workExperience: formData.workExperience,
      status: formData.status,
      wardNumber: formData.wardNumber,
      wardName: formData.wardName,
      address: formData.address,
      image: formData.image,
    };

    try {
      let response;

      if (jobSeeker?.id) {
        response = await fetch(`https://rojgar-margadarshan.onrender.com/api/v1/workers/update-worker/${jobSeeker.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataToSend),
        });
      } else {
        response = await fetch('https://rojgar-margadarshan.onrender.com/api/v1/workers/add-worker', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataToSend),
        });
      }

      const result = await response.json();
      console.log('API response:', result);

      if (!response.ok) {
        throw new Error(result.message || 'Unknown error');
      }

      alert(`Job seeker ${jobSeeker ? 'updated' : 'saved'} successfully!`);
      onCancel();
    } catch (error: any) {
      console.error('Error saving job seeker:', error);
      alert(`Failed to save job seeker: ${error.message}`);
    }
  };



  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({
        ...prev,
        image: imageUrl,
        imageFile: file,
      }));
    }
  };


  console.log('Form Data:', formData);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{jobSeeker ? 'Edit Job Seeker' : 'Add New Job Seeker'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Other inputs */}
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
                id="fatherOrHusbandName"
                value={formData.fatherOrHusbandName}
                onChange={(e) => handleChange('fatherOrHusbandName', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="aadharNumber">Aadhar Number</Label>
              <Input
                id="aadharNumber"
                value={formData.aadharNumber}
                onChange={(e) => handleChange('aadharNumber', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
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
            {/* <div className="space-y-2">
              <Label htmlFor="workName">Work/Profession</Label>
              <Input
                id="workCategory"
                value={formData.workCategory}
                onChange={(e) => handleChange('workCategory', e.target.value)}
                required
              />
            </div> */}

            <div className="space-y-2">
              <Label htmlFor="workCategory">Work/Profession</Label>
              <Select
                value={formData.workCategory}
                onValueChange={(value) => handleChange('workCategory', value)}
              >
                <SelectTrigger id="workCategory">
                  <div className="flex items-center">
                    <Briefcase className="mr-2 text-gray-400" size={20} />
                    <SelectValue placeholder="Select work category..." />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="driver">Driver</SelectItem>
                  <SelectItem value="plumber">Plumber</SelectItem>
                  <SelectItem value="maid">Maid</SelectItem>
                  <SelectItem value="nurse">Nurse</SelectItem>
                  <SelectItem value="carpenter">Carpenter</SelectItem>
                  <SelectItem value="tailor">Tailor</SelectItem>
                  <SelectItem value="electrician">Electrician</SelectItem>
                  <SelectItem value="cook">Cook</SelectItem>
                  <SelectItem value="gardener">Gardener</SelectItem>
                  <SelectItem value="security guard">Security Guard</SelectItem>
                  <SelectItem value="cleaner">Cleaner</SelectItem>
                  <SelectItem value="painter">Painter</SelectItem>
                  <SelectItem value="mechanic">Mechanic</SelectItem>
                  <SelectItem value="welder">Welder</SelectItem>
                  <SelectItem value="mason">Mason</SelectItem>
                  <SelectItem value="delivery boy">Delivery Boy</SelectItem>
                  <SelectItem value="house keeping">House Keeping</SelectItem>
                  <SelectItem value="tiles worker">Tiles Worker</SelectItem>
                  <SelectItem value="labour">Labour</SelectItem>
                  <SelectItem value="store keeping">Store Keeping</SelectItem>
                  <SelectItem value="ac service">AC Service</SelectItem>
                  <SelectItem value="technician">Technician</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Experience</Label>
              <Input
                id="workExperience"
                value={formData.workExperience}
                onChange={(e) => handleChange('workExperience', e.target.value)}
                placeholder="e.g., 2 years"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobileNumber">Mobile Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
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
                <option value="Booked">Unavailable</option>
              </select>
            </div>

            {/* 👇 Image Upload Field */}
            <div className="space-y-2">
              <Label htmlFor="image">Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="mt-2 h-20 w-20 rounded-md object-cover"
                />
              )}
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

