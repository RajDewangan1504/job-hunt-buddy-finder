
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';

export const HeroSection = () => {
  return (
  <section
  className="relative bg-cover bg-center text-white py-20 px-4"
  style={{ backgroundImage: "url('/banner image.jpg')" }}
>
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="relative max-w-6xl mx-auto text-center">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
      Find Employees Easily To 
      <span className="block text-yellow-300"> Make Your Work Easy</span>
    </h1>
    <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
      Connect with top employers and discover opportunities that match your skills and passion
    </p>
  </div>
</section>
  );
};
