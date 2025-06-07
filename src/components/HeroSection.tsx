
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Find Your Dream Job
          <span className="block text-yellow-300">Today</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Connect with top employers and discover opportunities that match your skills and passion
        </p>
        
        <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                placeholder="Job title, keywords, or company"
                className="pl-12 h-14 text-lg border-gray-200 focus:border-blue-500"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                placeholder="City, state, or remote"
                className="pl-12 h-14 text-lg border-gray-200 focus:border-blue-500"
              />
            </div>
            <Button className="h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Search Jobs
            </Button>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <span className="text-blue-200">Popular searches:</span>
          {['Frontend Developer', 'Product Manager', 'Data Scientist', 'UX Designer'].map((term) => (
            <button key={term} className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
              {term}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
