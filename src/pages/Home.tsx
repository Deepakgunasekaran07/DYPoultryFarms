import React from 'react';
import HeroSection from '../components/HeroSection';
import EthicalValues from '../components/EthicalValues';
import type { Page } from '../App';

const features = [
  {
    image:
      'https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw=',
    title: 'Free-Range Living',
    description: 'Spacious pastures with natural shelter and protection.',
  },
  {
    image:
      'https://images.squarespace-cdn.com/content/v1/593fcf915016e1a7b799ad78/3bc0d579-c928-4335-9da2-6db077d3e72a/Your_guide_to_red_mite_treatment_in_commercial_poultry_2.png',
    title: 'Ethical Treatment',
    description: 'Highest standards ensuring stress-free, natural lives.',
  },
  {
    image:
      'https://myexeed.com/wp-content/uploads/2024/03/Eco-friendly-business-ideas-in-2022.png',
    title: 'Sustainable Practices',
    description: 'Solar energy and organic composting systems.',
  },
];

const MeetTheFarm: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#e9ddc7] py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Meet the Farm
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto"></div>
      </div>

      <div className="relative max-w-5xl mx-auto pl-8 md:pl-16">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-300 via-amber-300 to-emerald-400 rounded-full"></div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-6 md:gap-10 transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Circular Image */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover" style={{ filter: 'brightness(1.15) contrast(1.15) saturate(1.1)' }}
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface HomeProps {
  onPageChange?: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const handleLearnMore = () => {
    if (onPageChange) {
      onPageChange('our-story');
    }
  };
  return (
    <div className="min-h-screen">
      <HeroSection onLearnMore={handleLearnMore} />
      <EthicalValues />
      <MeetTheFarm />
      {/* Bottom Image Section - Full image visible */}
      <section className="relative h-[300px] overflow-hidden">
  <img
    src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752584462/5a04ac7e-941d-412c-a175-34762d2256ff_audxjg.jpg"
    alt="Contact and Footer Background"
    className="w-full h-full object-cover object-bottom"
  />
</section>
    </div>
  );
};

export default Home;