import React from 'react';
import { Star, Quote, Award } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Daya Anna',
      role: 'Regular Customer',
      content: "The quality of chicken from DY Poultry Farms is exceptional. You can taste the difference - it's fresh, tender, and you know it's been raised ethically. My family won't buy chicken from anywhere else now.",
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      name: 'Narendra',
      role: 'Restaurant Owner',
      content: "As a restaurant owner, quality is everything. DY Poultry Farms consistently delivers the freshest, highest-quality chicken. Their commitment to ethical farming practices aligns perfectly with our values.",
      rating: 5,
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg'
    },
    {
      name: 'Priya Sharma',
      role: 'Mother of Two',
      content: "Knowing that the chicken I serve my children comes from a farm that prioritizes animal welfare and uses no hormones gives me peace of mind. The taste is incredible and the freshness is unmatched.",
      rating: 5,
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-neutral-800 mb-6">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Real feedback from families and businesses who trust DY Poultry Farms 
            for their premium chicken needs and traditional farming values.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-wood hover:shadow-barn transition-all duration-500 hover:scale-105 relative overflow-hidden border-2 border-neutral-200 hover:border-barn/20"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-wood-grain opacity-5"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-16 h-16 text-barn" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-accent-yellow fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-neutral-700 leading-relaxed mb-8 relative z-10 text-lg font-body">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-neutral-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-neutral-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-neutral-600 font-body">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-barn to-accent-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 md:p-16 shadow-barn border border-cream relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-wood-grain opacity-10"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <Award className="w-16 h-16 text-cream mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-cream mb-4">
                Trusted by Families Across Karnataka
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-cream/20">
                <div className="text-4xl font-heading font-bold text-cream mb-2">500+</div>
                <div className="text-cream/90 font-body">Happy Families</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-cream/20">
                <div className="text-4xl font-heading font-bold text-cream mb-2">50+</div>
                <div className="text-cream/90 font-body">Restaurant Partners</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-cream/20">
                <div className="text-4xl font-heading font-bold text-cream mb-2">4.9★</div>
                <div className="text-cream/90 font-body">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;