import React from 'react';
import { MapPin, Phone, Calendar } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary via-secondary to-barn relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-wood-grain opacity-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-cream mb-4">
            Visit Our Farm
          </h2>
          <p className="text-lg md:text-xl text-cream/90 leading-relaxed font-body max-w-2xl mx-auto">
            Experience our traditional farming practices firsthand and see how we raise them right.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <button className="bg-cream text-barn px-8 py-3 rounded-lg font-heading font-bold text-lg hover:bg-cream/90 transition-all duration-300 hover:scale-105 shadow-barn hover:shadow-xl flex items-center space-x-2 border border-neutral-200">
            <Calendar className="w-5 h-5" />
            <span>Schedule a Tour</span>
          </button>
          
          <button className="border-2 border-cream text-cream px-8 py-3 rounded-lg font-heading font-bold text-lg hover:bg-cream hover:text-barn transition-all duration-300 hover:scale-105 shadow-wood hover:shadow-barn flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>Call Us Today</span>
          </button>
        </div>

        {/* Contact Info - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cream/20 hover:bg-white/20 transition-colors duration-300">
            <MapPin className="w-8 h-8 text-cream mx-auto mb-3" />
            <h3 className="font-heading font-bold text-cream mb-2 text-lg">Visit Us</h3>
            <p className="text-cream/80 text-sm font-body">
              Agricultural District<br />
              Karnataka, India
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cream/20 hover:bg-white/20 transition-colors duration-300">
            <Phone className="w-8 h-8 text-cream mx-auto mb-3" />
            <h3 className="font-heading font-bold text-cream mb-2 text-lg">Call Us</h3>
            <p className="text-cream/80 text-sm font-body">
              +91 98765 43210<br />
              9 AM - 6 PM, Mon-Sat
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cream/20 hover:bg-white/20 transition-colors duration-300">
            <Calendar className="w-8 h-8 text-cream mx-auto mb-3" />
            <h3 className="font-heading font-bold text-cream mb-2 text-lg">Tour Hours</h3>
            <p className="text-cream/80 text-sm font-body">
              10 AM - 4 PM<br />
              Advance booking preferred
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;