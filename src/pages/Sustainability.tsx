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

      {/* ✅ Hero Section with background image and overlay */}
      <section className="relative h-[90vh] bg-black text-white">
        {/* Background image */}
        <img
          src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752228432/unnamed_copy_2_aax63p.png"
          alt="Sustainability"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Text content */}
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
          <FadeSlideIn direction="left">
            <div className="max-w-2xl text-left space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold font-heading text-white">
                Sustainability
              </h1>
              <div className="w-24 h-1 bg-barn mb-4"></div>
              <p className="text-lg md:text-xl leading-relaxed text-white font-body">
                "To us, sustainability is about responsibly managing our land, water, and feed,
                while upholding and advocating for the humane care of our most important responsibility — our chickens."
              </p>
            </div>
          </FadeSlideIn>
        </div>
      </section>

      {/* 1. Animal Welfare (even → left) */}
      <section className="py-20 bg-cream">
        <FadeSlideIn direction="left">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
                Animal Welfare
              </h2>
              <div className="w-24 h-1 bg-barn mx-auto"></div>
            </div>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-body text-center">
              Animal welfare isn't just a standard—it's a responsibility we take seriously. We place the well-being of our birds at the heart of everything we do.
              Our farms follow rigorous welfare standards, supported by regular internal and third-party audits to ensure ethical and responsible care.
              Each bird has continuous access to clean water and high-quality, locally produced feed designed to support healthy growth.
            </p>
          </div>
        </FadeSlideIn>
      </section>

      {/* 2. Solar Energy (odd → right) */}
      <section className="py-20 bg-white">
        <FadeSlideIn direction="right">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
                Powered by the Sun, Guided by Care
              </h2>
              <div className="w-24 h-1 bg-barn mx-auto"></div>
            </div>
            <div className="space-y-8 text-lg md:text-xl text-neutral-700 leading-relaxed font-body text-center">
              <p>
                Our move into solar energy is rooted in purpose—to be part of the solution to the planet's growing environmental and energy needs.
                By tapping into the power of the sun, we're actively contributing to India's clean energy mission, cutting down emissions, and building a greener future.
              </p>
              <p>
                Today, our solar farms generate 2 MW of clean, renewable power, helping drive the transition toward a low-carbon, energy-secure tomorrow.
              </p>
              <p>
                This isn't just an initiative—it's a reflection of our values, a commitment to sustainability, and a way of giving back to the environment that supports us.
              </p>
            </div>
          </div>
        </FadeSlideIn>
      </section>

      {/* 3. Sustainable Waste Management (even → left) */}
      <section className="py-20 bg-cream">
        <FadeSlideIn direction="left">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
                Sustainable Waste Management
              </h2>
              <div className="w-24 h-1 bg-barn mx-auto"></div>
            </div>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-body text-center">
              In line with our commitment to responsible farming, we follow a closed-loop waste management system that reflects both sustainability and environmental stewardship.
              Poultry litter from our broiler farms is carefully processed and utilized as a natural fertilizer for our mango orchards and dragon fruit plantations.
            </p>
          </div>
        </FadeSlideIn>
      </section>
    </div>
  );
};

export default Sustainability;