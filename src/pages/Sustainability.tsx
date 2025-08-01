import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Reusable animation wrapper
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
    <div className="w-full bg-white overflow-hidden">

      {/* Top Split Layout: Text + Big Image */}
      <section className="flex flex-col md:flex-row w-full min-h-[60vh] pb-8 md:pb-16">
        {/* Left: Text */}
        <div className="w-full md:w-[35%] bg-gray-100 flex items-center justify-center px-4 py-8 md:py-0">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-left">
            Sustainability
          </h1>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-[65%] h-[60vh]">
          <img
            src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752759536/71749ba3-4ead-42e5-bd44-426ffd16d6c1_alncvn.jpg"
            alt="Sustainability"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-20">
        <div className="space-y-6 text-left">
          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-body">
            To us, sustainability is about responsibly managing our land, water, and feed while upholding and advocating for the humane care of our most important responsibility which is our chickens.
          </p>
        </div>
      </section>

      {/* 1. Animal Welfare */}
      <section className="py-12 bg-amber-50 min-h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Title */}
            <FadeSlideIn direction="left">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
                  Animal Welfare
                </h2>
                <div className="w-24 h-1 bg-barn mb-8"></div>
              </div>
            </FadeSlideIn>
            {/* Content */}
            <FadeSlideIn direction="right">
              <div>
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-body text-left">
                  Animal welfare isn't just a standard—it's a responsibility we take seriously. We place the well-being of our birds at the heart of everything we do.
                  Our farms follow rigorous welfare standards, supported by regular internal and third-party audits to ensure ethical and responsible care.
                  Each bird has continuous access to clean water and high-quality, locally produced feed designed to support healthy growth.
                </p>
              </div>
            </FadeSlideIn>
          </div>
        </div>
      </section>

      {/* 2. Solar Energy */}
      <section className="py-12 bg-white min-h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <FadeSlideIn direction="right">
              <div className="space-y-6 order-2 lg:order-1">
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
            </FadeSlideIn>
            {/* Title */}
            <FadeSlideIn direction="left">
              <div className="text-left order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
                  Powered by the Sun, Guided by Care
                </h2>
                <div className="w-24 h-1 bg-barn mb-8"></div>
              </div>
            </FadeSlideIn>
          </div>
        </div>
      </section>

      {/* 3. Sustainable Waste Management */}
      <section className="py-12 bg-cream min-h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Title */}
            <FadeSlideIn direction="left">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
                  Sustainable Waste Management
                </h2>
                <div className="w-24 h-1 bg-barn mb-8"></div>
              </div>
            </FadeSlideIn>
            {/* Content */}
            <FadeSlideIn direction="right">
              <div>
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-body text-left">
                  In line with our commitment to responsible farming, we follow a closed-loop waste management system that reflects both sustainability and environmental stewardship.
                  Poultry litter from our broiler farms is carefully processed and utilized as a natural fertilizer for our mango orchards and dragon fruit plantations.
                </p>
              </div>
            </FadeSlideIn>
          </div>
        </div>
      </section>

      {/* Bottom Image Section */}
      <section className="relative h-[300px] overflow-hidden bg-primary">
        <img
          src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1754008399/Untitled_design_1_wnwgjr.png"
          alt="Contact and Footer Background"
          className="w-full h-full object-cover object-bottom"
        />
      </section>
    </div>
  );
};

export default Sustainability;