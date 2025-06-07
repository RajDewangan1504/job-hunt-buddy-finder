
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { JobSearch } from '@/components/JobSearch';
import { FeaturedJobs } from '@/components/FeaturedJobs';
import { StatsSection } from '@/components/StatsSection';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <JobSearch />
      <FeaturedJobs />
    </div>
  );
};

export default Index;
