
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, DollarSign } from 'lucide-react';

export const JobSearch = () => {
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
    salary: '',
    experience: ''
  });

  const activeFilters = Object.entries(filters).filter(([_, value]) => value !== '').length;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Search & Filter Jobs</h2>
          <p className="text-xl text-gray-600">Find the perfect opportunity with our advanced search</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input placeholder="Search jobs..." className="pl-10 h-12" />
              </div>
            </div>
            
            <Select value={filters.jobType} onValueChange={(value) => setFilters({...filters, jobType: value})}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full Time</SelectItem>
                <SelectItem value="part-time">Part Time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.experience} onValueChange={(value) => setFilters({...filters, experience: value})}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="lead">Lead/Manager</SelectItem>
              </SelectContent>
            </Select>

            <Button className="h-12 bg-blue-600 hover:bg-blue-700">
              <Filter className="mr-2" size={16} />
              Filter {activeFilters > 0 && `(${activeFilters})`}
            </Button>
          </div>
        </div>

        {activeFilters > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-gray-600">Active filters:</span>
            {Object.entries(filters).map(([key, value]) => value && (
              <Badge key={key} variant="secondary" className="cursor-pointer" onClick={() => setFilters({...filters, [key]: ''})}>
                {value} ×
              </Badge>
            ))}
            <Button variant="ghost" size="sm" onClick={() => setFilters({jobType: '', location: '', salary: '', experience: ''})}>
              Clear all
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
