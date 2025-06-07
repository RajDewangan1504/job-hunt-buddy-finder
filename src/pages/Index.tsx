
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { JobSearch } from '@/components/JobSearch';
import { FeaturedJobs } from '@/components/FeaturedJobs';
import { StatsSection } from '@/components/StatsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <JobSearch />
      <FeaturedJobs />
    </div>
  );
};

export default Index;
