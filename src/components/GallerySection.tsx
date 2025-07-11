import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Camera, Award } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const galleryItems = [
    {
      type: 'image',
      title: 'Happy Chicks in Natural Environment',
      description: 'Our baby chicks roam freely in spacious, well-ventilated facilities with plenty of room to grow',
      placeholder: 'https://images.pexels.com/photos/1300361/pexels-photo-1300361.jpeg'
    },
    {
      type: 'image',
      title: 'State-of-the-Art Poultry Houses',
      description: 'Modern EC systems ensure optimal temperature and air quality for bird comfort',
      placeholder: 'https://images.pexels.com/photos/1202232/pexels-photo-1202232.jpeg'
    },
    {
      type: 'image',
      title: 'Dedicated Farm Team',
      description: 'Our trained professionals provide round-the-clock care with traditional farming wisdom',
      placeholder: 'https://images.pexels.com/photos/2889482/pexels-photo-2889482.jpeg'
    },
    {
      type: 'image',
      title: 'Solar-Powered Sustainability',
      description: '2MW solar installation powering our entire operation sustainably',
      placeholder: 'https://images.pexels.com/photos/3693286/pexels-photo-3693286.jpeg'
    },
    {
      type: 'image',
      title: 'Quality Assurance Process',
      description: 'Rigorous health monitoring and quality control with veterinary oversight',
      placeholder: 'https://images.pexels.com/photos/1300363/pexels-photo-1300363.jpeg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-neutral-800 mb-6">
            Meet Our Farm
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour through our facilities and see how we create the perfect 
            environment for healthy, happy chickens using traditional methods and modern technology.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative bg-white rounded-2xl shadow-barn overflow-hidden border-2 border-neutral-200">
          <div className="relative h-96 md:h-[500px]">
            {/* Current Slide */}
            <div className="relative w-full h-full">
              <img
                src={galleryItems[currentSlide].placeholder}
                alt={galleryItems[currentSlide].title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="max-w-2xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <Camera className="w-6 h-6" />
                    <span className="text-sm font-body font-medium opacity-90">
                      {currentSlide + 1} of {galleryItems.length}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    {galleryItems[currentSlide].title}
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed font-body">
                    {galleryItems[currentSlide].description}
                  </p>
                </div>
              </div>

              {/* Play Button for Video Items */}
              {galleryItems[currentSlide].type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 group border-2 border-white/30">
                    <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              )}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 group border-2 border-white/30"
            >
              <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 group border-2 border-white/30"
            >
              <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="p-8 bg-cream border-t-2 border-neutral-200">
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
              {galleryItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                    currentSlide === index 
                      ? 'border-barn shadow-barn scale-105' 
                      : 'border-neutral-300 opacity-70 hover:opacity-100 hover:border-barn/50'
                  }`}
                >
                  <img
                    src={item.placeholder}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-cream rounded-xl p-6 text-center shadow-wood hover:shadow-barn transition-shadow duration-300 border border-neutral-200">
            <div className="text-3xl font-heading font-bold text-red-700 mb-2">1.25L+</div>
            <div className="text-neutral-600 font-body">Bird Capacity</div>
          </div>
          <div className="bg-cream rounded-xl p-6 text-center shadow-wood hover:shadow-barn transition-shadow duration-300 border border-neutral-200">
            <div className="text-3xl font-heading font-bold text-accent-yellow mb-2">2MW</div>
            <div className="text-neutral-600 font-body">Solar Power</div>
          </div>
          <div className="bg-cream rounded-xl p-6 text-center shadow-wood hover:shadow-barn transition-shadow duration-300 border border-neutral-200">
            <div className="text-3xl font-heading font-bold text-accent-green mb-2">24/7</div>
            <div className="text-neutral-600 font-body">Care & Monitoring</div>
          </div>
          <div className="bg-cream rounded-xl p-6 text-center shadow-wood hover:shadow-barn transition-shadow duration-300 border border-neutral-200">
            <div className="text-3xl font-heading font-bold text-accent-red mb-2">100%</div>
            <div className="text-neutral-600 font-body">Ethical Practices</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;