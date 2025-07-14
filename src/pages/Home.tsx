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

const testimonials = [
  {
    quote:
      "DY Poultry Farms provides the highest quality, most flavorful poultry I've ever used in my restaurant. My customers can taste the difference.",
    name: 'Sarah Johnson',
    role: 'Local Chef',
    image:
      'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    quote:
      "Once you try ethically raised chicken from DY Farms, you can never go back to store-bought. The quality and taste are incomparable.",
    name: 'James Thompson',
    role: 'Loyal Customer',
    image:
      'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      "I recommend DY Poultry Farms to all my clients who care about where their food comes from. Truly sustainable and nutritious poultry.",
    name: 'Elena Rodriguez',
    role: 'Nutritionist',
    image:
      'https://randomuser.me/api/portraits/women/42.jpg',
  },
];

const Testimonials: React.FC = () => {
  const [visibleCards, setVisibleCards] = React.useState<number[]>([]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const cards = document.querySelectorAll('[data-testimonial-card]');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="bg-[#f8f2e9] py-20 px-4">
      <div className="text-center mb-12">
        <p className="uppercase text-sm tracking-wide text-brown-500 font-semibold mb-2">
          Testimonials
        </p>
        <h2 className="text-4xl font-bold text-[#7c4a1e]">
          What Our Customers Say
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#946c4f] text-lg">
          We're proud to serve our community with the highest quality poultry products.
          Here's what some of our customers have to say about DY Poultry Farms.
        </p>
      </div>

      <div className="flex flex-col space-y-16 max-w-4xl mx-auto">
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            data-testimonial-card
            data-index={idx}
            className={`flex flex-col md:flex-row items-start md:items-center gap-6 transition-all duration-1000 ease-out ${
              visibleCards.includes(idx)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: `${idx * 200}ms`
            }}
          >
            {/* Profile Image */}
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full shadow-md border-2 border-white"
            />

            {/* Quote */}
            <div className="relative bg-white/80 p-6 rounded-xl shadow-sm">
              <span className="absolute -top-5 -left-5 text-4xl text-[#e2c4a6] opacity-40">"</span>
              <p className="italic text-[#7a563a] text-lg mb-4">"{t.quote}"</p>
              <div>
                <p className="font-bold text-[#5b3a21]">{t.name}</p>
                <p className="text-[#96724e]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
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
      <Testimonials />
      {/* Bottom Image Section - Full image visible */}
      <section className="relative">
        <img
          src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752235157/WhatsApp_Image_2025-07-11_at_5.28.42_PM_nxbdi8.jpg"
          alt="Contact and Footer Background"
          className="w-full object-contain"
        />
      </section>
    </div>
  );
};

export default Home;