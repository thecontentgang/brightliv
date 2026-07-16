import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: EASE } 
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
    <section className="relative w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] mx-auto my-12 md:my-16 py-20 md:py-28 overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl group">
      
      {/* ── Background Image & Overlays ── */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxurious Interior" 
          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
        />
        {/* Brand-tinted overlay for readability and aesthetics */}
        <div className="absolute inset-0 bg-[#6B5361]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* ── Content ── */}
      <div className="max-w-[900px] mx-auto px-6 sm:px-8 md:px-12 relative z-10 text-center">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          
          {/* Tagline */}
          <motion.span 
            variants={fadeUp} 
            className="text-xs tracking-[0.3em] uppercase font-bold text-[#FF7043] mb-6 block drop-shadow-md"
          >
            Start Your Project
          </motion.span>
          
          {/* Compact Headline */}
          <motion.p 
            variants={fadeUp} 
            className="text-[36px] sm:text-[48px] md:text-[64px] cooper-light leading-[1.1] mb-6 text-white drop-shadow-lg"
          >
            Let's build your <br className="hidden sm:block" /> sanctuary.
          </motion.p>
          
          {/* Subtext */}
          <motion.p 
            variants={fadeUp} 
            className="text-base md:text-lg font-light text-white/90 leading-relaxed max-w-xl mb-10 drop-shadow-md"
          >
            Partner with BrightLiv to create an intentional, timeless space that perfectly reflects the way you live.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={fadeUp} 
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            {/* Primary Solid Button */}
            <Link to="/contact">
              <button className="h-12 md:h-14 px-8 md:px-10 bg-white text-[var(--color-primary)] font-bold uppercase tracking-widest text-xs md:text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)] flex items-center gap-3 group/btn">
                Book a Consultation
                <svg 
                  className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
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
              <button className="h-12 md:h-14 px-8 md:px-10 border border-white/50 text-white font-bold uppercase tracking-widest text-xs md:text-sm rounded-full transition-all duration-300 hover:bg-white hover:text-[var(--color-primary)] backdrop-blur-sm">
                View Portfolio
              </button>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};