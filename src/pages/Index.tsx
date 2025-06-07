
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { JobSearch } from '@/components/JobSearch';
import { StatsSection } from '@/components/StatsSection';
import { Navigation } from '@/components/Navigation';
import { AimSection } from '@/components/AimSection';
import { TeamSection } from '@/components/TeamSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <JobSearch />
      <AimSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
