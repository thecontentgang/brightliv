import React from 'react';
import { motion, type Variants } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: EASE } 
  }
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: EASE }
  }
};

// Single Featured Project Data
const featuredProject = {
  title: "ASBL Residence",
  desc: "A premium residential space designed with timeless interiors, seamlessly blending indoor and outdoor functional areas for a resort-like feel.",
  category: "Luxury Residential",
  img: "/ASBL/fifteen.jpeg",
  slug: "asbl-flat"
};

export const FeaturedProjectSection: React.FC = () => {
  return (
    <section className="w-full bg-[var(--color-background)] text-[var(--color-body)] py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Centered Header Section - Tighter Spacing */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeUp} 
          className="flex flex-col items-center text-center mb-10 md:mb-12"
        >
          <span className="text-xs tracking-[0.25em] uppercase font-bold text-[var(--color-accent)] mb-4">
            Featured Work
          </span>
          <h2 className="text-[32px] md:text-[44px] cooper-light leading-[1.1] text-[var(--color-heading)] max-w-2xl">
            A masterclass in <br className="hidden sm:block" /> 
            <span className="italic text-[var(--color-primary)]">mindful design.</span>
          </h2>
        </motion.div>

        {/* Single Project Editorial Layout - Reduced Height */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center group">
          
          {/* Main Background Image */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={imageReveal}
            className="absolute inset-0 w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl"
          >
            <img 
              src={featuredProject.img} 
              alt={featuredProject.title} 
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            {/* Subtle overlay to ensure the card pops */}
            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
          </motion.div>

          {/* Floating Content Card - Highly compacted for mobile, expands on sm/md */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-8 md:left-8 md:right-auto max-w-[450px] bg-white/95 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-white/50"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
              <div className="h-[2px] w-4 sm:w-6 bg-[var(--color-accent)]" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-muted)]">
                {featuredProject.category}
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl cooper-light text-[var(--color-heading)] mb-1 sm:mb-3 leading-tight">
              {featuredProject.title}
            </h3>
            
            <p className="text-xs sm:text-sm md:text-base text-[var(--color-body)] leading-relaxed m-0">
              {featuredProject.desc}
            </p>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
};