
import React from 'react';
import { Target, Users, MapPin, Handshake } from 'lucide-react';

export const AimSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Aim</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between skilled workers and employers, creating opportunities for everyone in our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Empower Workers</h3>
            <p className="text-gray-600">
              Help skilled workers find meaningful employment opportunities in their local area
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect Communities</h3>
            <p className="text-gray-600">
              Build stronger communities by connecting local workers with nearby employers
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Focus</h3>
            <p className="text-gray-600">
              Focus on ward-level connections to ensure workers find jobs close to home
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Handshake className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fair Opportunities</h3>
            <p className="text-gray-600">
              Ensure fair and transparent job opportunities for all skilled workers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
