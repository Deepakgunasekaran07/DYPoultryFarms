import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import type { Page } from '../App';

interface FooterProps {
  onPageChange?: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Company Info with Logo */}
          <div className="lg:col-span-1">
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-shrink-0">
                <img 
                  src="/Dy Poultry Vertical Transparent.png" 
                  alt="DY Poultry Farms" 
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-gray-300 leading-relaxed font-body text-center md:text-left mt-4 md:mt-0 text-base">
                Premium farm-fresh chicken raised with ethical practices and modern care techniques for the finest quality poultry.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="font-heading font-bold text-white text-lg mb-3 text-center md:text-left">Follow Us</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.linkedin.com/company/dy-poultry-farms/#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/dy-poultry-farms/#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/dy-poultry-farms/#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/dy-poultry-farms/#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 text-center lg:text-right">
            <h4 className="font-heading font-bold text-white text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-body"
                  onClick={e => {
                    e.preventDefault();
                    if (onPageChange) onPageChange('our-story');
                  }}
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-body"
                  onClick={e => {
                    e.preventDefault();
                    if (onPageChange) onPageChange('sustainability');
                  }}
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-body"
                  onClick={e => {
                    e.preventDefault();
                    if (onPageChange) onPageChange('gallery');
                  }}
                >
                  Visit Our Farm
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-body"
                  onClick={e => {
                    e.preventDefault();
                    if (onPageChange) onPageChange('contact-us');
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Locations */}
          <div className="lg:col-span-1 text-center lg:text-right">
            <h4 className="font-heading font-bold text-white text-lg mb-3">Contact</h4>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-center lg:justify-end space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 font-body">+91 99866 30246</span>
              </div>
              <div className="flex items-center justify-center lg:justify-end space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 font-body">hello@dypoultryfarms.com</span>
              </div>
            </div>

            <h4 className="font-heading font-bold text-white text-lg mb-2">Locations</h4>
            <div className="space-y-2 text-sm text-gray-300 font-body">
              <div className="flex items-start justify-center lg:justify-end space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <span>Andhra Pradesh, India</span>
              </div>
              <div className="flex items-start justify-center lg:justify-end space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <span>Tamil Nadu, India</span>
              </div>
              <div className="flex items-start justify-center lg:justify-end space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <span className="font-semibold">Head Office:</span><br />
                  #171, 1st Floor, MTH Road,<br />
                  Villivakkam, Chennai – 600049,<br />
                  Tamil Nadu, India
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-4 text-center">
          <p className="text-gray-400 font-body text-sm">
            © 2024 DY Poultry Farms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;