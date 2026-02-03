import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  MapPinIcon 
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed ${email} to newsletter!`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <AcademicCapIcon className="h-6 w-6" />
              <span className="text-lg font-bold">KESNNUR</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering Kenya's future nursing leaders
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/events" className="hover:text-white">Events</Link></li>
              <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <MapPinIcon className="h-4 w-4 mr-2" />
                Nurses Complex KNH, Nairobi
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                +254 791 296 924
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-4 w-4 mr-2" />
                kesnnur@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-3 py-2 rounded text-gray-900 text-sm"
                required
              />
              <button type="submit" className="btn-primary text-sm w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>Copyright © {new Date().getFullYear()} KESNNUR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
