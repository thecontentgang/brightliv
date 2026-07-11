import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[140vh] bg-[var(--color-background)] flex items-start justify-center pt-32 sm:pt-32 md:pt-32 lg:pt-32 overflow-hidden">
      
      {/* Text Container */}
      <div className="relative z-10 w-full max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16 text-center select-none pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            ease: [0.22, 1, 0.36, 1], 
            duration: 1.4, 
            delay: 0.6 
          }}
          className="text-[var(--color-primary)] text-[40px] md:text-[60px] font-light tracking-wide leading-tight md:leading-[1.15] cooper-light"
        >
          Live luxuriously with <br/> brightliv interiors.
        </motion.h1>
      </div>

      {/* Transparent PNG Image spanning FULL width */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          ease: [0.22, 1, 0.36, 1], 
          duration: 1.4, 
          delay: 0.8 
        }}
        className="absolute bottom-0 left-0 w-full flex justify-center z-0 pointer-events-none"
      >
        <img 
          src="/hero.png" 
          alt="BrightLiv Luxury Interior" 
          /* 
            w-full: Forces the image to touch both the left and right edges.
            h-auto: Scales the height perfectly in proportion to the width without cutting.
            object-bottom: Keeps the image glued to the floor.
            (Removed all max-h restrictions so it can freely fill the width)
          */
          className="w-full h-auto object-bottom"
        />
      </motion.div>

    </section>
  );
};