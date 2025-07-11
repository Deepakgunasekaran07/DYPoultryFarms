import React from 'react';
import { ArrowRight, MapPin, Store } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752231832/It_s_a_summer_sale_extravaganza_at_Sugar_Feather_Farm_%EF%B8%8F_Get_ready_to_expand_your_flock_with_15_off_ALL_hatching_eggs_the_discount_automatically_applies_in_your_cart__Plus_our_handsome_cockerels_are_all_marked_down_sitewide_ij2nde.jpg"
          alt="Hero background image"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center justify-center min-h-screen">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-center text-white">
            <span className="whitespace-nowrap">
              From{' '}
              <span className="text-white drop-shadow-lg">Family Farm</span>
              {' '}To{' '}
              <span className="text-white drop-shadow-lg">Family Table</span>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl text-white drop-shadow-md font-body text-center">
            Premium farm-fresh chicken raised with traditional values and modern care
          </p>


        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;