
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';
import { JobSeekerCard } from '@/components/JobSeekerCard';
import { JobSeeker } from '@/types/jobSeeker';

const JobSeekers = () => {
  const [jobSeekers, setJobSeekers] = useState<JobSeeker[]>([]);
  const [searchLocation, setSearchLocation] = useState('');
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
    // Filter job seekers by location
    if (searchLocation) {
      const filtered = jobSeekers.filter(seeker =>
        seeker.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
        seeker.wardName.toLowerCase().includes(searchLocation.toLowerCase())
      );
      setFilteredJobSeekers(filtered);
    } else {
      setFilteredJobSeekers(jobSeekers);
    }
  }, [searchLocation, jobSeekers]);

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
          <div className="relative max-w-md">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search by location or ward..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="pl-10"
            />
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
            <p className="text-gray-500 text-lg">No job seekers found in this location.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobSeekers;
