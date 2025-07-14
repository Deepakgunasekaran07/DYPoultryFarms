import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation wrapper
const FadeSlideIn = ({
  children,
  direction = 'left',
}: {
  children: React.ReactNode;
  direction?: 'left' | 'right';
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ✅ Hero Section - Text Left, Image Right (Split Layout) */}
      <section className="flex flex-col md:flex-row items-center bg-cream min-h-[90vh]">
        {/* Text Left */}
        <div className="w-full md:w-1/2 px-6 py-16 md:py-0 flex items-center justify-center">
          <FadeSlideIn direction="left">
            <div className="max-w-xl space-y-6 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-heading text-black">
                Sustainability
              </h1>
              <div className="w-24 h-1 bg-barn mb-4"></div>
              <p className="text-lg md:text-xl leading-relaxed text-neutral-800 font-body">
                "To us, sustainability is about responsibly managing our land, water, and feed,
                while upholding and advocating for the humane care of our most important responsibility — our chickens."
              </p>
            </div>
          </FadeSlideIn>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752228432/unnamed_copy_2_aax63p.png"
            alt="Sustainability"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 1. Animal Welfare */}
      <section className="py-20 bg-amber-50">
        <FadeSlideIn direction="left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Topic */}
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
                  Animal Welfare
                </h2>
                <div className="w-24 h-1 bg-barn mb-8"></div>
              </div>
              {/* Right Side - Content */}
              <div>
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-body text-left">
                  Animal welfare isn't just a standard—it's a responsibility we take seriously. We place the well-being of our birds at the heart of everything we do.
                  Our farms follow rigorous welfare standards, supported by regular internal and third-party audits to ensure ethical and responsible care.
                  Each bird has continuous access to clean water and high-quality, locally produced feed designed to support healthy growth.
                </p>
              </div>
            </div>
          </div>
        </FadeSlideIn>
      </section>

      {/* 2. Solar Energy */}
      <section className="py-20 bg-white">
        <FadeSlideIn direction="left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Topic */}
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
                  Powered by the Sun, Guided by Care
                </h2>
                <div className="w-24 h-1 bg-barn mb-8"></div>
              </div>
              {/* Right Side - Content */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-body text-left">
                  Our move into solar energy is rooted in purpose—to be part of the solution to the planet's growing environmental and energy needs.
                  By tapping into the power of the sun, we're actively contributing to India's clean energy mission, cutting down emissions, and building a greener future.
                </p>
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-body text-left">
                  Today, our solar farms generate 2 MW of clean, renewable power, helping drive the transition toward a low-carbon, energy-secure tomorrow.
                </p>
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-body text-left">
                  This isn't just an initiative—it's a reflection of our values, a commitment to sustainability, and a way of giving back to the environment that supports us.
                </p>
              </div>
            </div>
          </div>
        </FadeSlideIn>
      </section>

      {/* 3. Sustainable Waste Management */}
      <section className="py-20 bg-cream">
        <FadeSlideIn direction="left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Topic */}
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
                  Sustainable Waste Management
                </h2>
                <div className="w-24 h-1 bg-barn mb-8"></div>
              </div>
              {/* Right Side - Content */}
              <div>
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-body text-left">
                  In line with our commitment to responsible farming, we follow a closed-loop waste management system that reflects both sustainability and environmental stewardship.
                  Poultry litter from our broiler farms is carefully processed and utilized as a natural fertilizer for our mango orchards and dragon fruit plantations.
                </p>
              </div>
            </div>
          </div>
        </FadeSlideIn>
      </section>

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

export default Sustainability;