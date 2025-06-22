
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { User, Mail, Phone } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  description: string;
}

export const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    // Load team members from localStorage
    const savedTeamMembers = localStorage.getItem('teamMembers');
    if (savedTeamMembers) {
      setTeamMembers(JSON.parse(savedTeamMembers));
    } else {
      // Default team members
      const defaultTeam: TeamMember[] = [
        {
          id: '1',
          name: 'जोन 03 कार्यालय',
          position: 'नगर पालिक निगम रायपुर',
          email: 'rmczone03@gmail.com',
          phone: '+91 78059 *****',
          description: 'Managing the platform and helping workers find opportunities'
        }
      ];
      setTeamMembers(defaultTeam);
      localStorage.setItem('teamMembers', JSON.stringify(defaultTeam));
    }
  }, []);

  return (
    <section className="py-16 bg-white flex ">
      <div className="max-w-6xl mx-auto px-4 justify-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600">
            Meet the dedicated team working to connect workers with opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <User className="text-blue-600" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}  </h3>
                <p className="text-blue-600 font-medium">{member.position}</p>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-gray-600">{member.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-gray-600">
                    <Mail size={16} className="mr-2" />
                    <span className="text-sm">{member.email}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Phone size={16} className="mr-2" />
                    <span className="text-sm">{member.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
