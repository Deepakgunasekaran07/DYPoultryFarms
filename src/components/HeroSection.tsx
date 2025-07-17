import React from 'react';

interface HeroSectionProps {
  onLearnMore?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onLearnMore }) => {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752499628/ChatGPT_Image_Jul_14_2025_06_56_48_PM_xyez5b.png"
            alt="Hero background image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex justify-start items-center min-h-[90vh]">
          {/* Content Aligned Left */}
          <div className="max-w-2xl space-y-6 text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              From <span className="text-white">Family Farm</span> To{' '}
              <span className="text-white">Family Table</span>
            </h1>
            <p className="text-lg md:text-2xl text-white drop-shadow-md">
              Premium farm-fresh chicken raised with wholesome practices and modern care.
            </p>
            <button
              className="mt-4 px-8 py-3 bg-red-700 text-white rounded-lg font-heading font-bold text-lg hover:bg-red-800 transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={onLearnMore}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center bg-white py-2 pt-24">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-red-700 text-center">
          Raising Happy, Healthy, Wholesome Chickens.
        </h2>
      </div>
    </>
  );
};

export default HeroSection;