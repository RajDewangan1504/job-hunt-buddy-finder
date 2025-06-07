
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Briefcase } from 'lucide-react';
import { JobSeekerCard } from '@/components/JobSeekerCard';
import { JobSeeker } from '@/types/jobSeeker';

const JobSeekers = () => {
  const [jobSeekers, setJobSeekers] = useState<JobSeeker[]>([]);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchWork, setSearchWork] = useState('');
  const [filteredJobSeekers, setFilteredJobSeekers] = useState<JobSeeker[]>([]);

  useEffect(() => {
    // Load job seekers from localStorage
    const savedJobSeekers = localStorage.getItem('jobSeekers');
    if (savedJobSeekers) {
      const parsedJobSeekers = JSON.parse(savedJobSeekers);
      setJobSeekers(parsedJobSeekers);
      setFilteredJobSeekers(parsedJobSeekers);
    }
  }, []);

  useEffect(() => {
    // Filter job seekers by location and work category
    let filtered = jobSeekers;

    if (searchLocation) {
      filtered = filtered.filter(seeker =>
        seeker.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
        seeker.wardName.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    if (searchWork) {
      filtered = filtered.filter(seeker =>
        seeker.workName.toLowerCase().includes(searchWork.toLowerCase())
      );
    }

    setFilteredJobSeekers(filtered);
  }, [searchLocation, searchWork, jobSeekers]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Seekers</h1>
          <p className="text-gray-600">Find skilled workers in your area</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search by location or ward..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={searchWork} onValueChange={setSearchWork}>
              <SelectTrigger>
                <div className="flex items-center">
                  <Briefcase className="mr-2 text-gray-400" size={20} />
                  <SelectValue placeholder="Select work category..." />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
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
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Job Seekers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobSeekers.map((jobSeeker) => (
            <JobSeekerCard key={jobSeeker.id} jobSeeker={jobSeeker} />
          ))}
        </div>

        {filteredJobSeekers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No job seekers found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobSeekers;
