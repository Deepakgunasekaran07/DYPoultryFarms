import React from 'react';
import { Heart, Users, Home, Award } from 'lucide-react';

const VisionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
                Raising happy, healthy, wholesome chickens.
                <span className="text-red-700 block mt-2">for Your Family</span>
              </h2>
              
              <div className="bg-cream rounded-2xl p-8 shadow-wood border border-neutral-200">
                <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed italic mb-8 font-body">
                  "At DY Poultry Farms, we understand that the food your family eats matters. 
                  That's why we've dedicated ourselves to raising chickens with the same care 
                  and attention we'd want for our own loved ones. Every bird is treated with 
                  dignity, respect, and love."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-600 rounded-full flex items-center justify-center shadow-wood">
                    <span className="text-white font-heading font-bold text-xl">M</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-red-700 text-lg">Mavayya</p>
                    <p className="text-gray-600 font-body">Founder, DY Poultry Farms</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Taglines */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-wood border border-neutral-200 hover:shadow-barn transition-shadow duration-300">
                <Heart className="w-10 h-10 text-accent-red flex-shrink-0" />
                <p className="text-xl font-heading font-bold text-gray-900">
                  "Wholesome Chicken, Raised Right"
                </p>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-wood border border-neutral-200 hover:shadow-barn transition-shadow duration-300">
                <Users className="w-10 h-10 text-accent-yellow flex-shrink-0" />
                <p className="text-xl font-heading font-bold text-gray-900">
                  "Love in every feather. Freshness in every bite."
                </p>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-wood border border-neutral-200 hover:shadow-barn transition-shadow duration-300">
                <Home className="w-10 h-10 text-sage flex-shrink-0" />
                <p className="text-xl font-heading font-bold text-gray-900">
                  "From our farm family to your dinner table"
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cream to-neutral-100 rounded-3xl p-12 shadow-barn border border-neutral-200 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-wood-grain opacity-5"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-20 h-20 bg-accent-yellow/20 rounded-full animate-float"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-accent-red/20 rounded-full animate-bounce-gentle"></div>
              
              {/* Main content */}
              <div className="text-center relative z-10">
                <div className="w-40 h-40 bg-gradient-to-br from-red-700 to-red-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-barn animate-bounce-gentle border-4 border-cream">
                  <Heart className="w-20 h-20 text-white" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                  Family Values
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg font-body">
                  Every chicken raised with the care and attention your family deserves
                </p>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-barn animate-float border border-neutral-200">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-red-700 mb-2">1.25L+</div>
                <div className="text-sm text-gray-600 font-body">Happy Birds</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-barn animate-bounce-gentle border border-neutral-200">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent-green mb-2">100%</div>
                <div className="text-sm text-gray-600 font-body">Natural Care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;