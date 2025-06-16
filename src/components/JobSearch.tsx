
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Briefcase } from 'lucide-react';
import { JobSeekerCard } from '@/components/JobSeekerCard';
import { JobSeeker } from '@/types/jobSeeker';
import axios from 'axios';

export const JobSearch = () => {
  const [jobSeekers, setJobSeekers] = useState<JobSeeker[]>([]);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchWork, setSearchWork] = useState('');
  const [filteredJobSeekers, setFilteredJobSeekers] = useState<JobSeeker[]>([]);



  useEffect(() => {
    const fetchJobSeekers = async () => {
      try {
        const res = await axios.get('https://rojgar-margadarshan.onrender.com/api/v1/workers/get-workers');
        const formatted = res.data.Workers.map((worker: any) => ({
          id: worker._id,
          name: worker.name,
          fatherOrHusbandName: worker.fatherOrHusbandName,
          gender: worker.gender,
          aadharNumber: worker.aadharNumber,
          phone: worker.phone,
          workCategory: worker.workCategory,
          workExperience: worker.workExperience,
          status: worker.status,
          wardNumber: worker.wardNumber,
          wardName: worker.wardName,
          address: worker.address,
          image: worker.image,
        }));

        setJobSeekers(formatted);
        setFilteredJobSeekers(formatted);
      } catch (error) {
        console.error('Error fetching job seekers:', error);
      }
    };

    fetchJobSeekers();
  }, []);


  useEffect(() => {
    // Filter job seekers by location/ward and work category
    let filtered = jobSeekers;

    if (searchLocation) {
      filtered = filtered.filter(seeker =>
        seeker.address.toLowerCase().includes(searchLocation.toLowerCase()) ||
        seeker.wardName.toLowerCase().includes(searchLocation.toLowerCase())
        // seeker.wardNumber.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    if (searchWork && searchWork !== 'all') {
      filtered = filtered.filter(seeker =>
        seeker.workCategory.toLowerCase().includes(searchWork.toLowerCase())
      );
    }

    setFilteredJobSeekers(filtered.slice(0, 6)); // Limit to 6 results on home page
  }, [searchLocation, searchWork, jobSeekers]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Workers</h2>
          <p className="text-xl text-gray-600">Search for skilled workers in your area</p>
        </div>

        {/* Search Section */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search by location, ward name or number..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            <Select value={searchWork} onValueChange={setSearchWork}>
              <SelectTrigger className="h-12">
                <div className="flex items-center">
                  <Briefcase className="mr-2 text-gray-400" size={20} />
                  <SelectValue placeholder="Select work category..." />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
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
                <SelectItem value="House keeping">House keeping</SelectItem>
                <SelectItem value="Tiles Worker">Tiles Worker</SelectItem>
                <SelectItem value="Labour">Labour</SelectItem>
                <SelectItem value="Store Keeping">Store Keeping</SelectItem>
                <SelectItem value="AC Service">AC Service</SelectItem>
                <SelectItem value="Technician">Technician</SelectItem>
              </SelectContent>
            </Select>

            <Button className="h-12 bg-blue-600 hover:bg-blue-700" onClick={() => window.location.href = '/job-seekers'}>
              <Search className="mr-2" size={16} />
              View All Workers
            </Button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobSeekers.map((jobSeeker) => (
            <JobSeekerCard key={jobSeeker.id} jobSeeker={jobSeeker} />
          ))}
        </div>

        {filteredJobSeekers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No workers found matching your search criteria.</p>
          </div>
        )}

        {jobSeekers.length > 6 && (
          <div className="text-center mt-8">
            <Button onClick={() => window.location.href = '/job-seekers'} variant="outline" size="lg">
              View All {jobSeekers.length} Workers
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
