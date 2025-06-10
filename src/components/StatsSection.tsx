
import React from 'react';
import { Users, Briefcase, Building, TrendingUp } from 'lucide-react';

export const StatsSection = () => {
  const stats = [
    { icon: Briefcase, value: '30+', label: 'Active Jobs' },
    { icon: Building, value: 'free', label: 'Employment cost' },
    { icon: Users, value: '500', label: 'Job Seekers' },
    { icon: TrendingUp, value: '90%', label: 'Success Rate' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <stat.icon className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
