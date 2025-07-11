import React from 'react';
import HeroSection from '../components/HeroSection';
import EthicalValues from '../components/EthicalValues';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EthicalValues />
    </div>
  );
};

export default Home;