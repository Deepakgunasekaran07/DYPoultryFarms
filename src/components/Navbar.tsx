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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-28">
            
            {/* Mobile Logo */}
            <div className="flex items-center lg:hidden">
              <div className="cursor-pointer" onClick={() => onPageChange('home')}>
                <div className="bg-white p-2 rounded-lg shadow-md border border-gray-200">
                  <img 
                    src="/Dy Poultry Vertical Transparent.png" 
                    alt="DY Poultry Farms" 
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between w-full">
              
              {/* Left Navigation */}
              <div className="flex items-center space-x-8 flex-1 justify-start">
                <button
                  onClick={() => onPageChange('home')}
                  className={`text-lg font-heading font-bold transition-all duration-300 hover:text-red-700 relative ${
                    currentPage === 'home'
                      ? 'text-red-700'
                      : 'text-gray-800'
                  }`}
                >
                  Home
                  {currentPage === 'home' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-700"></div>
                  )}
                </button>
                <button
                  onClick={() => onPageChange('our-story')}
                  className={`text-lg font-heading font-bold transition-all duration-300 hover:text-red-700 relative ${
                    currentPage === 'our-story'
                      ? 'text-red-700'
                      : 'text-gray-800'
                  }`}
                >
                  Our Story
                  {currentPage === 'our-story' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-700"></div>
                  )}
                </button>
                <button
                  onClick={() => onPageChange('gallery')}
                  className={`text-lg font-heading font-bold transition-all duration-300 hover:text-red-700 relative ${
                    currentPage === 'gallery'
                      ? 'text-red-700'
                      : 'text-gray-800'
                  }`}
                >
                  Gallery
                  {currentPage === 'gallery' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-700"></div>
                  )}
                </button>
              </div>

              {/* Center Logo */}
              <div className="flex justify-center flex-shrink-0 mt-6 z-10">
                <div className="cursor-pointer" onClick={() => onPageChange('home')}>
                  <div className="bg-white w-36 h-36 rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                    <img 
                      src="/Dy Poultry Vertical Transparent.png" 
                      alt="DY Poultry Farms" 
                      className="max-w-[80%] max-h-[80%] object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Right Navigation */}
              <div className="flex items-center space-x-8 flex-1 justify-end">
                <button
                  onClick={() => onPageChange('sustainability')}
                  className={`text-lg font-heading font-bold transition-all duration-300 hover:text-red-700 relative ${
                    currentPage === 'sustainability'
                      ? 'text-red-700'
                      : 'text-gray-800'
                  }`}
                >
                  Sustainability
                  {currentPage === 'sustainability' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-700"></div>
                  )}
                </button>
                <button
                  onClick={() => onPageChange('blog')}
                  className={`text-lg font-heading font-bold transition-all duration-300 hover:text-red-700 relative ${
                    currentPage === 'blog'
                      ? 'text-red-700'
                      : 'text-gray-800'
                  }`}
                >
                  Blog
                  {currentPage === 'blog' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-700"></div>
                  )}
                </button>
                <button
                  onClick={() => onPageChange('contact-us')}
                  className={`text-lg font-heading font-bold transition-all duration-300 hover:text-red-700 relative ${
                    currentPage === 'contact-us'
                      ? 'text-red-700'
                      : 'text-gray-800'
                  }`}
                >
                  Contact Us
                  <Phone className="inline-block w-5 h-5 ml-2 align-text-bottom" />
                  {currentPage === 'contact-us' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-700"></div>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-red-700 focus:outline-none p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full px-4 py-3 text-lg font-heading font-medium rounded-lg transition-all duration-300 ${
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
                className="w-full bg-red-700 text-white px-6 py-3 rounded-lg font-heading font-bold hover:bg-red-800 transition-all duration-300 mt-4 shadow-md"
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