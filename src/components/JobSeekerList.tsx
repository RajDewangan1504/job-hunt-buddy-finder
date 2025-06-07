
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Edit, Trash2, User, Phone, MapPin } from 'lucide-react';
import { JobSeeker } from '@/types/jobSeeker';

interface JobSeekerListProps {
  jobSeekers: JobSeeker[];
  onEdit: (jobSeeker: JobSeeker) => void;
  onUpdateStatus: (id: string, status: 'Available' | 'Booked') => void;
  onDelete: (id: string) => void;
}

export const JobSeekerList: React.FC<JobSeekerListProps> = ({
  jobSeekers,
  onEdit,
  onUpdateStatus,
  onDelete,
}) => {
  return (
    <div className="space-y-4">
      {jobSeekers.map((jobSeeker) => (
        <Card key={jobSeeker.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="text-blue-600" size={16} />
                    <h3 className="font-semibold text-lg">{jobSeeker.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">Father: {jobSeeker.fatherName}</p>
                  <p className="text-sm text-gray-600">Gender: {jobSeeker.gender}</p>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="text-green-600" size={16} />
                    <span className="font-medium">{jobSeeker.location}</span>
                  </div>
                  <p className="text-sm text-gray-600">Ward: {jobSeeker.wardNumber} - {jobSeeker.wardName}</p>
                  <p className="text-sm text-gray-600">Work: {jobSeeker.workName}</p>
                  <p className="text-sm text-gray-600">Experience: {jobSeeker.experience}</p>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="text-purple-600" size={16} />
                    <span className="font-medium">{jobSeeker.mobileNumber}</span>
                  </div>
                  <div className="mb-2">
                    <Badge 
                      variant={jobSeeker.status === 'Available' ? 'default' : 'destructive'}
                      className={jobSeeker.status === 'Available' ? 'bg-green-100 text-green-700' : ''}
                    >
                      {jobSeeker.status}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 ml-4">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onEdit(jobSeeker)}
                >
                  <Edit size={14} className="mr-1" />
                  Edit
                </Button>
                
                <Button
                  size="sm"
                  variant={jobSeeker.status === 'Available' ? 'destructive' : 'default'}
                  onClick={() => onUpdateStatus(
                    jobSeeker.id, 
                    jobSeeker.status === 'Available' ? 'Booked' : 'Available'
                  )}
                >
                  {jobSeeker.status === 'Available' ? 'Mark Booked' : 'Mark Available'}
                </Button>
                
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onDelete(jobSeeker.id)}
                >
                  <Trash2 size={14} className="mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      {jobSeekers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No job seekers found.</p>
        </div>
      )}
    </div>
  );
};
