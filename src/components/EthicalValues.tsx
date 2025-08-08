import React from 'react';

const EthicalValues: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-12 mb-0">Our Ethics</h3>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
        </div>

        {/* 4 Ethics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Inside our Poultry Feed */}
          <div className="bg-amber-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1754579932/a_ijco6m.jpg"
              alt="Inside our Poultry Feed"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Card 2: Raised by farmers trained in Animal-Welfare */}
          <div className="bg-amber-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1754579936/b_oacfy8.jpg"
              alt="Raised by farmers trained in Animal-Welfare"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Card 3: Free of added Steroids and Hormones */}
          <div className="bg-amber-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1754579948/c_akrabu.jpg"
              alt="Free of added Steroids and Hormones"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Card 4: Monitored by Licensed veterinarian */}
          <div className="bg-amber-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1754579952/d_nhdxpz.jpg"
              alt="Monitored by Licensed veterinarian"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicalValues;