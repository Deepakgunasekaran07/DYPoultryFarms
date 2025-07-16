import React, { useState } from 'react';
import { Menu, X, Home, Book, Leaf, Phone, Camera } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: 'home' | 'our-story' | 'sustainability' | 'contact-us' | 'gallery' | 'blog') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', page: 'home' as const, icon: Home },
    { id: 'our-story', label: 'Our Story', page: 'our-story' as const, icon: Book },
    { id: 'sustainability', label: 'Sustainability', page: 'sustainability' as const, icon: Leaf },
    { id: 'gallery', label: 'Gallery', page: 'gallery' as const, icon: Camera },
    { id: 'blog', label: 'Blog', page: 'blog' as const, icon: Book },
    { id: 'contact-us', label: 'Contact Us', page: 'contact-us' as const, icon: Phone },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-neutral-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Mobile Logo */}
          <div className="flex items-center lg:hidden">
            <div className="cursor-pointer" onClick={() => onPageChange('home')}>
              <div className="bg-white p-1 rounded-lg shadow-md border border-gray-200">
                <img
                  src="/Dy Poultry Vertical Transparent.png"
                  alt="DY Poultry Farms"
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Left Nav */}
            <div className="flex items-center space-x-10 justify-center w-1/3">
              {['home', 'our-story', 'gallery'].map((key) => {
                const item = navItems.find(n => n.id === key)!;
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.page)}
                    className={`text-base font-semibold transition-all duration-300 hover:text-red-700 relative ${
                      currentPage === item.page ? 'text-red-700' : 'text-gray-800'
                    }`}
                  >
                    {item.label}
                    {currentPage === item.page && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-700"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Center Logo Floating Box - Small with Shadow */}
            <div className="w-1/3 flex justify-center relative -mb-12 z-50">
              <div
                className="cursor-pointer bg-white rounded-2xl shadow-2xl border border-gray-200 px-4 py-4 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                onClick={() => onPageChange('home')}
              >
                <img
                  src="/Dy Poultry Vertical Transparent.png"
                  alt="DY Poultry Farms"
                  className="w-20 h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Nav */}
            <div className="flex items-center space-x-10 justify-center w-1/3">
              {['sustainability', 'blog'].map((key) => {
                const item = navItems.find(n => n.id === key)!;
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.page)}
                    className={`text-base font-semibold transition-all duration-300 hover:text-red-700 relative ${
                      currentPage === item.page ? 'text-red-700' : 'text-gray-800'
                    }`}
                  >
                    {item.label}
                    {currentPage === item.page && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-700"></div>
                    )}
                  </button>
                );
              })}
              <button
                onClick={() => onPageChange('contact-us')}
                className={`text-base font-semibold transition-all duration-300 hover:text-red-700 relative ${
                  currentPage === 'contact-us' ? 'text-red-700' : 'text-gray-800'
                }`}
              >
                Contact Us
                <Phone className="inline-block w-4 h-4 ml-1 align-text-bottom" />
                {currentPage === 'contact-us' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-700"></div>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-red-700 focus:outline-none p-1"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.page);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-3 w-full px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                  currentPage === item.page
                    ? 'text-red-700 bg-yellow-50'
                    : 'text-gray-800 hover:text-red-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
            <button
              onClick={() => {
                onPageChange('contact-us');
                setIsMenuOpen(false);
              }}
              className="w-full bg-red-700 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-red-800 transition-all duration-300 mt-3 shadow-md"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;