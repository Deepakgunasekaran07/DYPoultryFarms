import React from 'react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Poultry Wellness',
      description: 'Happy, healthy birds raised in state-of-the-art EC poultry houses with optimal conditions for their wellbeing and natural behavior.',
    },
    {
      title: 'Humane Practices',
      description: 'Our farming methods are rooted in care, dignity, and ethical treatment, ensuring every bird lives comfortably and stress-free.',
    },
    {
      title: 'Fresh & Safe',
      description: 'Hygienic processing and zero-compromise freshness from farm to table, with rigorous quality controls and safety standards.',
    },
    {
      title: 'Expert Team',
      description: 'A people-first farm culture where trained professionals are passionate about animal welfare, quality, and sustainable farming.',
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-body">
            Four pillars that make DY Poultry Farms your trusted partner for 
            premium, ethically-raised poultry with traditional farming values.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-wood border-2 border-neutral-200 flex flex-col items-center justify-center p-8">
                  <div className="w-20 h-20 bg-barn rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-3xl font-heading font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 text-center leading-tight">
                    {feature.title}
                  </h3>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-barn to-accent-red rounded-xl shadow-barn border-2 border-barn flex flex-col items-center justify-center p-8 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-heading font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-center text-white/90 font-body">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;