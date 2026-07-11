import React from 'react';
import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const stats = [
  { value: "11+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "100%", label: "Timely Delivery" },
  { value: "99%", label: "Client Satisfaction" }
];

export const WhyChooseUs: React.FC = () => {
  return (
    // Section uses the primary deep plum color to create high contrast for the light glass cards
    <section className="w-full bg-[var(--color-primary)] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Optional Context Header */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="flex justify-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-bold text-[var(--color-background)]/70">
            BrightLiv By The Numbers
          </span>
        </motion.div>

        {/* 4-Column Grid for Stats */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              // Elevated glass-like cards using slight opacity and a thin border based on the light background variable
              className="bg-[var(--color-background)]/5 border border-[var(--color-background)]/10 rounded-[2rem] p-10 md:p-14 flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 hover:bg-[var(--color-background)]/10"
            >
              {/* Massive Stat Value - Light text to pop against the dark background */}
              <h3 className="text-5xl md:text-6xl lg:text-7xl cooper-light text-[var(--color-background)] mb-4">
                {stat.value}
              </h3>
              
              {/* Clean Uppercase Label - Slightly faded for visual hierarchy */}
              <p className="text-sm md:text-xs lg:text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-background)]/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};