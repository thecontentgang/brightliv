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
    <section className="w-full bg-[var(--color-background)] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-12 md:mb-20"
        >
          <span className="text-xs tracking-[0.25em] uppercase font-bold text-[var(--color-accent)] mb-4">
            Bright Arena By The Numbers
          </span>
          <h2 className="text-[32px] md:text-[44px] cooper-light leading-[1.1] text-[var(--color-heading)] max-w-2xl">
            A legacy built on <br className="hidden sm:block" />
            <span className="italic text-[var(--color-primary)]">precision and trust.</span>
          </h2>
        </motion.div>

        {/* 4-Column Grid for Desktop, 2-Column Grid for Mobile */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              // Adjusted padding (p-6) for smaller mobile screens
              className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-10 md:p-12 flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_30px_rgba(107,83,97,0.06)] hover:shadow-[0_20px_40px_rgba(107,83,97,0.12)] border border-[var(--color-primary)]/5 relative overflow-hidden group"
            >
              {/* Subtle hover accent line at the bottom of the card */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Scaled down text (text-4xl) on mobile so it fits the 2x2 layout */}
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl cooper-light text-[var(--color-primary)] mb-2 sm:mb-4">
                {stat.value}
              </h3>
              
              {/* Scaled down text size and tracking on mobile */}
              <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[var(--color-body)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};