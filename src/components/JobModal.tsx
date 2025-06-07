
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Clock, DollarSign, Building, Users, Award, Heart } from 'lucide-react';
import { Job } from '@/components/FeaturedJobs';
import { useToast } from "@/hooks/use-toast";

interface JobModalProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
}

export const JobModal: React.FC<JobModalProps> = ({ job, isOpen, onClose }) => {
  const { toast } = useToast();

  const handleApply = () => {
    toast({
      title: "Application Submitted!",
      description: `Your application for ${job.title} at ${job.company} has been submitted successfully.`,
    });
    onClose();
  };

  const handleSave = () => {
    toast({
      title: "Job Saved!",
      description: `${job.title} has been saved to your favorites.`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src={job.logo} 
                alt={`${job.company} logo`}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  {job.title}
                </DialogTitle>
                <p className="text-lg text-gray-600 flex items-center mt-1">
                  <Building size={16} className="mr-2" />
                  {job.company}
                </p>
              </div>
            </div>
            {job.isRemote && (
              <Badge className="bg-green-100 text-green-700 border-green-200">
                Remote Friendly
              </Badge>
            )}
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 space-y-6">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {job.posted}
              </div>
              <div className="flex items-center">
                <DollarSign size={16} className="mr-2 text-green-600" />
                <span className="font-semibold">{job.salary}</span>
              </div>
              <Badge variant="outline" className="text-blue-600">
                {job.type}
              </Badge>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Users size={20} className="mr-2 text-blue-600" />
                Job Description
              </h3>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Award size={20} className="mr-2 text-purple-600" />
                Requirements
              </h3>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Heart size={20} className="mr-2 text-red-500" />
                Benefits & Perks
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {job.benefits.map((benefit, index) => (
                  <Badge key={index} variant="secondary" className="justify-start">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <h4 className="font-semibold text-lg mb-4">Ready to Apply?</h4>
              <Button 
                onClick={handleApply}
                className="w-full mb-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                onClick={handleSave}
                className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Save Job
              </Button>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Company Info</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Industry:</strong> Technology</p>
                <p><strong>Size:</strong> 500-1000 employees</p>
                <p><strong>Founded:</strong> 2015</p>
                <p><strong>Location:</strong> {job.location}</p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>💡 Tip:</strong> Make sure your resume highlights relevant experience for this role!
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
