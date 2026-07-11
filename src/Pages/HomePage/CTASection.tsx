import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

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

export const CTASection: React.FC = () => {
  return (
   
    <section className="relative w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] mx-auto my-12 md:my-20 bg-[var(--color-primary)] text-[var(--color-background)] py-32 md:py-48 overflow-hidden rounded-[2rem] md:rounded-[3rem]">
      
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 md:px-12 relative z-10 text-center">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          
          {/* Tagline */}
          <motion.span 
            variants={fadeUp} 
            className="text-xs md:text-sm tracking-[0.3em] uppercase font-bold text-[var(--color-accent)] mb-8 block"
          >
            Start Your Project
          </motion.span>
          
          {/* Massive Headline */}
          <motion.h2 
            variants={fadeUp} 
            className="text-[48px] md:text-[72px] lg:text-[88px] cooper-light leading-[1.05] mb-8 text-white"
          >
            Let's build your <br className="hidden md:block" /> sanctuary.
          </motion.h2>
          
          {/* Subtext */}
          <motion.p 
            variants={fadeUp} 
            className="text-lg md:text-xl font-light text-[var(--color-background)]/80 leading-relaxed max-w-2xl mb-16"
          >
            Partner with BrightLiv to create an intentional, timeless space that perfectly reflects the way you live.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={fadeUp} 
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Primary Solid Button */}
            <Link to="/contact">
              {/* Note: Kept an explicit rgba shadow here tailored to the off-white background color for a glowing effect */}
              <button className="h-14 px-10 bg-[var(--color-background)] text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,249,242,0.15)] flex items-center gap-3 group">
                Book a Consultation
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>

            {/* Secondary Ghost Button */}
            <Link to="/portfolio">
              <button className="h-14 px-10 border border-[var(--color-background)]/30 text-[var(--color-background)] font-bold uppercase tracking-widest text-sm rounded-full transition-all duration-300 hover:bg-[var(--color-background)] hover:text-[var(--color-primary)]">
                View Portfolio
              </button>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};