import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Logo from '/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Ideas', path: '/ideas' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const getRoleSpecificItems = () => {
    if (!user) return [];
    
    if (user.role === 'investor') {
      return [{ name: 'Dashboard', path: '/dashboard' }];
    } else if (user.role === 'creator') {
      return [{ name: 'Submit Idea', path: '/submit-idea' }];
    }
    return [];
  };

  const allNavItems = [...navItems, ...getRoleSpecificItems()];

  return (
    <nav className="bg-black/50 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-32 h-32 rounded-lg flex items-center justify-center">
                <img src={Logo} alt="" />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex space-x-6">
              {allNavItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-white border-b-2 border-blue-500' : ''
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Auth Section */}
            <div className="flex items-center space-x-3">
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                      <User size={16} className="text-blue-400" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-white">{user.name}</p>
                      <p className="text-xs text-gray-400 capitalize">{user.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-white/80 hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-white hover:text-blue-400 px-4 py-2 text-sm font-medium border border-white/30 rounded-lg hover:border-blue-400 transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] text-white hover:from-[#4864f0] hover:to-[#7c36eb] px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {allNavItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-white bg-blue-500/20 border-l-4 border-blue-500'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            
            {user ? (
              <div className="border-t border-white/10 pt-3 space-y-2">
                <div className="px-3 py-2">
                  <p className="font-medium text-white">{user.name}</p>
                  <p className="text-xs text-gray-400 capitalize">{user.role}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="border-t border-white/10 pt-3 space-y-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center text-white hover:text-blue-400 px-3 py-2 text-base font-medium border border-white/30 rounded-lg"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] text-white hover:from-[#4864f0] hover:to-[#7c36eb] px-3 py-2 text-base font-medium rounded-lg"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;