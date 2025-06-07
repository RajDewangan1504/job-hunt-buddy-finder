
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, Users, UserCheck } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="text-blue-600" size={32} />
            <span className="text-2xl font-bold text-gray-900">JobPortal</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/job-seekers">
              <Button variant="outline" className="flex items-center space-x-2">
                <Users size={16} />
                <span>Find Workers</span>
              </Button>
            </Link>
            
            <Link to="/admin-login">
              <Button className="flex items-center space-x-2">
                <UserCheck size={16} />
                <span>Admin</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
