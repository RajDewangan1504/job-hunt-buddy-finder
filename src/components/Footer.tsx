
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="text-blue-400" size={32} />
              <span className="text-2xl font-bold">रोज़गार मार्गदर्शन</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting skilled workers with opportunities in their local communities.
              Empowering workers, building stronger communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/job-seekers" className="text-gray-300 hover:text-white transition-colors">
                  Find Workers
                </Link>
              </li>
              <li>
                <Link to="/admin-login" className="text-gray-300 hover:text-white transition-colors">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Driver Services</li>
              <li>Plumbing Services</li>
              <li>Housekeeping</li>
              <li>Nursing Care</li>
              <li>Carpentry Work</li>
              <li>Tailoring Services</li>
              <li>Electrical Work</li>
              <li>And More...</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">+91 78059 *****</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">rmczone03@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-gray-300">नगर पालिक निगम रायपुर , जोन क्रमांक 03 शंकर नगर रायपुर छत्तीसगढ़</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 रोज़गार मार्गदर्शन. All rights reserved. Connecting communities, creating opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
};
