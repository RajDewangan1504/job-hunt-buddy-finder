
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, Building } from 'lucide-react';
import { Job } from '@/components/FeaturedJobs';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white border-gray-200 hover:border-blue-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={job.logo} 
              alt={`${job.company} logo`}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                {job.title}
              </h3>
              <p className="text-gray-600 flex items-center">
                <Building size={14} className="mr-1" />
                {job.company}
              </p>
            </div>
          </div>
          {job.isRemote && (
            <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
              Remote
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center text-gray-600 text-sm space-x-4">
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            {job.location}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {job.posted}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-700">
            <DollarSign size={16} className="mr-1 text-green-600" />
            <span className="font-semibold">{job.salary}</span>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-200">
            {job.type}
          </Badge>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 2).map((req, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {req}
            </Badge>
          ))}
          {job.requirements.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{job.requirements.length - 2} more
            </Badge>
          )}
        </div>

        <Button 
          onClick={onClick}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};
