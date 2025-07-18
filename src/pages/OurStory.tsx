import React from 'react';

const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Story Content */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#e9ddc7' }}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Story Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-black mb-8 animate-fade-in">
                  Our Story
                </h1>
                <div className="w-32 h-1 bg-black mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg md:text-xl text-black leading-relaxed font-body animate-slide-up">
                <p>
                  Established in 2024, we operate modern farms with a capacity of 1.25 lakh birds and are currently expanding with a new facility to house an additional 1 lakh birds.
                </p>
                <p>
                  Our focus on biosecurity and hygiene is backed by state-of-the-art infrastructure and a dedicated team driven by care and precision. We believe that healthy birds lead to healthy meals, and we raise them with that purpose in mind.
                </p>
                <p>
                  Our farms are equipped with fully automated Environment Control (EC) systems that regulate temperature, humidity, airflow, and lighting throughout the day. This ensures optimal living conditions tailored to each stage of bird growth, reduces stress, boosts immunity, and supports overall health and performance. Within this well-managed environment, our birds are free to roam, stay active, and express natural behaviors, keeping them happy, healthy, and thriving.
                </p>
              </div>
            </div>

            {/* Right Side - Frame */}
            <div className="relative flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752758060/unnamed_1_u4jqjq.png"
                alt="Our Story Card"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-80 md:h-96 rounded-3xl shadow-barn border-2 border-neutral-200 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-amber-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">
              From Our Founder
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Side - Founder Photo */}
            <div className="flex justify-start lg:w-1/3 w-full h-full">
              <div className="relative flex items-center justify-center h-full">
                <div className="w-[28rem] h-[28rem] bg-gradient-to-br from-barn to-accent-red rounded-2xl shadow-barn border-2 border-cream flex items-center justify-center overflow-hidden p-0">
                  {/* Founder photo */}
                  <img
                    src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752230942/e32a5120-7f39-45ed-8d61-606329cdb826_gostrb.jpg"
                    alt="Founder"
                    className="w-full h-full object-cover rounded-2xl m-0"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-yellow/30 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-green/30 rounded-full animate-bounce-gentle"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8 lg:w-2/3 w-full">
              <div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-6">
                  Why He Started
                </h3>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-6">
                  Future Goals
                </h3>
              </div>
              
              <div className="pt-6 border-t-2 border-neutral-200">
                <p className="font-heading font-bold text-black text-2xl">— Venkataranama reddy</p>
                <p className="text-black/80 mt-2 font-body text-lg">Founder, DY Poultry Farms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-body">
              Four pillars that make DY Poultry Farms your trusted partner for premium poultry with traditional farming values.
            </p>
          </div>

          {/* Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12">
            <div className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-wood border-2 border-neutral-200 flex flex-col items-center justify-center p-8 overflow-hidden">
                  {/* Poultry Wellness Background Image */}
                  <img
                    src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752758406/unnamed_u3xpal.jpg"
                    alt="Poultry Wellness"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  {/* Subtle black overlay for readability */}
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
                  <div className="w-20 h-20 bg-white/20 border-2 border-white rounded-full flex items-center justify-center mb-6 shadow-lg">
  <span className="text-3xl font-heading font-bold text-white">1</span>
</div>
                    <h3 className="text-2xl font-heading font-bold text-gray-100 text-center leading-tight">
                      Poultry Wellness
                    </h3>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-barn border-2 border-barn flex flex-col items-center justify-center p-8 overflow-hidden">
                  {/* Poultry Wellness Background Image */}
                  <img
                    src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752758406/unnamed_u3xpal.jpg"
                    alt="Poultry Wellness"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  {/* Subtle black overlay for readability */}
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <span className="text-2xl font-heading font-bold text-white">1</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-4 text-center text-white">
                      Poultry Wellness
                    </h3>
                    <p className="text-lg md:text-xl leading-relaxed text-center text-white/90 font-body">
                      Happy, healthy birds raised in state-of-the-art EC poultry houses with optimal conditions for their wellbeing and natural behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-wood border-2 border-neutral-200 flex flex-col items-center justify-center p-8 overflow-hidden">
                  {/* Humane Practices Background Image */}
                  <img
                    src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752759011/Screenshot_2025-07-17_at_6.59.24_PM_gqrmwb.png"
                    alt="Humane Practices"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  {/* Black overlay for readability */}
                  <div className="absolute inset-0 bg-black/30 z-10"></div>
                  <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
                    <div className="w-20 h-20 bg-white/20 border-2 border-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <span className="text-3xl font-heading font-bold text-white">2</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-100 text-center leading-tight">
                      Humane Practices
                    </h3>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-barn border-2 border-barn flex flex-col items-center justify-center p-8 overflow-hidden">
                  {/* Humane Practices Background Image */}
                  <img
                    src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752759011/Screenshot_2025-07-17_at_6.59.24_PM_gqrmwb.png"
                    alt="Humane Practices"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  {/* Subtle black overlay for readability */}
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <span className="text-2xl font-heading font-bold text-white">2</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-4 text-center text-white">
                      Humane Practices
                    </h3>
                    <p className="text-lg md:text-xl leading-relaxed text-center text-white/90 font-body">
                      Our farming methods are rooted in care, dignity, and ethical treatment, ensuring every bird lives comfortably and stress-free.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-wood border-2 border-neutral-200 flex flex-col items-center justify-center p-8 overflow-hidden">
                  {/* Fresh & Safe Background Image */}
                  <img
                    src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752590277/unnamed_ljop1t.png"
                    alt="Fresh & Safe"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  {/* Black overlay for readability */}
                  <div className="absolute inset-0 bg-black/30 z-10"></div>
                  <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
                    <div className="w-20 h-20 bg-white/20 border-2 border-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <span className="text-3xl font-heading font-bold text-white">3</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-100 text-center leading-tight">
                      Fresh & Safe
                    </h3>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-barn border-2 border-barn flex flex-col items-center justify-center p-8 overflow-hidden">
                  {/* Fresh & Safe Background Image */}
                  <img
                    src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752590277/unnamed_ljop1t.png"
                    alt="Fresh & Safe"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  {/* Subtle black overlay for readability */}
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <span className="text-2xl font-heading font-bold text-white">3</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-4 text-center text-white">
                      Fresh & Safe
                    </h3>
                    <p className="text-lg md:text-xl leading-relaxed text-center text-white/90 font-body">
                      Hygienic processing and zero-compromise freshness from farm to table, with rigorous quality controls and safety standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-wood border-2 border-neutral-200 flex flex-col items-center justify-center p-8 overflow-hidden">
                  {/* Expert Team Background Image */}
                  <img
                    src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752222116/unnamed_team_obhiz0.png"
                    alt="Expert Team"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  {/* Black overlay for readability */}
                  <div className="absolute inset-0 bg-black/30 z-10"></div>
                  <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
                    <div className="w-20 h-20 bg-white/20 border-2 border-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <span className="text-3xl font-heading font-bold text-white">4</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-100 text-center leading-tight">
                      Expert Team
                    </h3>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-barn border-2 border-barn flex flex-col items-center justify-center p-8 overflow-hidden">
                  {/* Expert Team Background Image */}
                  <img
                    src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752222116/unnamed_team_obhiz0.png"
                    alt="Expert Team"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  {/* Subtle black overlay for readability */}
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <span className="text-2xl font-heading font-bold text-white">4</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-4 text-center text-white">
                      Expert Team
                    </h3>
                    <p className="text-lg md:text-xl leading-relaxed text-center text-white/90 font-body">
                      A people-first farm culture where trained professionals are passionate about animal welfare, quality, and sustainable farming.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default OurStory;