
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, User, Briefcase } from 'lucide-react';
import { JobSeeker } from '@/types/jobSeeker';

interface JobSeekerCardProps {
  jobSeeker: JobSeeker;
}

export const JobSeekerCard: React.FC<JobSeekerCardProps> = ({ jobSeeker }) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="text-blue-600" size={20} />
            <h3 className="font-bold text-lg text-gray-900">{jobSeeker.name}</h3>
          </div>
          <Badge 
            variant={jobSeeker.status === 'Available' ? 'default' : 'destructive'}
            className={jobSeeker.status === 'Available' ? 'bg-green-100 text-green-700' : ''}
          >
            {jobSeeker.status}
          </Badge>
        </div>
        <p className="text-gray-600 text-sm">Father/Husband: {jobSeeker.fatherOrHusbandName}</p>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin size={14} className="mr-2" />
          <span>{jobSeeker.address}</span>
        </div>

        <div className="text-sm text-gray-600">
          <span className="font-medium">Ward:</span> {jobSeeker.wardNumber} - {jobSeeker.wardName}
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            <span className="font-medium">Gender:</span> {jobSeeker.gender}
          </span>
        </div>

        <div className="flex items-center text-gray-700">
          <Briefcase size={14} className="mr-2 text-blue-600" />
          <span className="font-medium">{jobSeeker.workCategory}</span>
        </div>

        <div className="text-sm text-gray-600">
          <span className="font-medium">Experience:</span> {jobSeeker.workExperience}
        </div>

        <div className="flex items-center text-gray-700 pt-2 border-t">
          <Phone size={14} className="mr-2 text-green-600" />
          <span className="font-medium">{jobSeeker.phone}</span>
        </div>
      </CardContent>
    </Card>
  );
};
