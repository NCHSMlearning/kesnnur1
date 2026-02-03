import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon 
} from '@heroicons/react/24/outline';
import { useAuth } from '../../hooks/useAuth';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <AcademicCapIcon className="h-8 w-8 text-kesnnur-blue" />
            <div>
              <h1 className="text-xl font-bold text-kesnnur-blue">KESNNUR</h1>
              <p className="text-xs text-gray-600">Kenya Students & Novice Nurses</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-kesnnur-blue">Home</Link>
            <Link to="/events" className="text-gray-700 hover:text-kesnnur-blue">Events</Link>
            <Link to="/resources" className="text-gray-700 hover:text-kesnnur-blue">Resources</Link>
            {user && <Link to="/member" className="text-gray-700 hover:text-kesnnur-blue">Dashboard</Link>}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600">Welcome, {user.email?.split('@')[0]}</span>
                <button onClick={() => signOut()} className="btn-secondary text-sm">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-kesnnur-blue hover:text-kesnnur-light">
                  Login
                </Link>
                <Link to="/register" className="btn-primary text-sm">
                  Join KESNNUR
                </Link>
              </>
            )}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t pt-4">
            <div className="space-y-3">
              <Link to="/" className="block py-2">Home</Link>
              <Link to="/events" className="block py-2">Events</Link>
              <Link to="/resources" className="block py-2">Resources</Link>
              {user && <Link to="/member" className="block py-2">Dashboard</Link>}
              
              {user ? (
                <button onClick={() => signOut()} className="block w-full text-left py-2 text-red-600">
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="block py-2">Login</Link>
                  <Link to="/register" className="block py-2 btn-primary text-center">
                    Join KESNNUR
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
