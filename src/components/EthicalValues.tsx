import React from 'react';

const EthicalValues: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            Our Farming Values
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-body">
            Every decision we make is guided by our commitment to animal welfare and environmental responsibility. We deliver the highest quality poultry to your family.
          </p>
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mt-12 mb-0">Our Ethics</h3>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
        </div>

        {/* ✅ Clean Image (no box) */}
        <div className="text-center">
          <img
            src="/cards copy copy.png"
            alt="DY Poultry Farms Values - Cage Free, Animal Welfare, Steroid Free, Licensed Veterinarian"
            className="w-full h-auto" style={{ filter: 'brightness(1.15) contrast(1.15) saturate(1.1)' }}
            onError={(e) => {
              console.error('Cards image failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default EthicalValues;