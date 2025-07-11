import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Company Info with Logo */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <img 
                src="/Dy Poultry Vertical Transparent.png" 
                alt="DY Poultry Farms" 
                  className="h-16 w-auto"
              />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed font-body text-center md:text-left">
              Premium farm-fresh chicken raised with traditional values and modern care techniques for the finest quality poultry.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 text-center lg:text-right">
            <h4 className="font-heading font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-body">Our Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-body">Sustainability</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-body">Visit Our Farm</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 text-center lg:text-right">
            <h4 className="font-heading font-bold text-white text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-end space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 font-body">+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center lg:justify-end space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 font-body">hello@dypoultryfarms.com</span>
              </div>
              <div className="flex items-start justify-center lg:justify-end space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-body">Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-body">
            © 2024 DY Poultry Farms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;