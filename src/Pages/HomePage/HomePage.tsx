import React from 'react';
import { Hero } from './HeroSection';
import { About } from './AboutSection'
import { ServicesSection } from './ServicesSection';
import { PortfolioSection } from './PortfolioSection';
import { WhyChooseUs } from './WhyChooseUs';
import { TestimonialSection } from './TestimonialSection';
import { CTASection } from './CTASection';

export const Home: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#704f62] overflow-hidden font-sans">
      
      
      <Hero />
      <About />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUs />
      <TestimonialSection />
      <CTASection />
    </main>
  );
};

export default Home;