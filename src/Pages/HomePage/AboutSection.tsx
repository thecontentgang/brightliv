import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation for the left text content
const textFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

// Animations for the 3 fanned-out architectural cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 100, rotate: 0 },
  // Card 1: Bottom/Back (Tilted furthest right)
  visible1: { 
    opacity: 1, 
    x: 60, 
    y: 40, 
    rotate: 15,
    transition: { duration: 1, ease: "easeOut" } 
  },
  // Card 2: Middle
  visible2: { 
    opacity: 1, 
    x: 20, 
    y: 10, 
    rotate: 5,
    transition: { duration: 1, ease: "easeOut", delay: 0.1 } 
  },
  // Card 3: Top/Front (Tilted slightly left)
  visible3: { 
    opacity: 1, 
    x: -30, 
    y: -20, 
    rotate: -6,
    transition: { duration: 1, ease: "easeOut", delay: 0.2 } 
  }
};

export const About: React.FC = () => {
  return (
    <section className="w-full bg-white text-[var(--color-body)] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Side: Typography & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-start z-20">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={textFadeUp}
          >
            {/* Pill Badge */}
            <div className="inline-block border border-[var(--color-heading)]/20 rounded-full px-6 py-2 mb-8 bg-transparent">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--color-heading)]/80">
                About Brightliv
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-[40px] md:text-[52px] cooper-light leading-[1.1] mb-6 text-[var(--color-heading)]">
              Crafting modern spaces <br className="hidden md:block" /> for mindful living
            </h2>
            
            {/* Paragraph tailored for a minimal/modern aesthetic */}
            <p className="text-lg md:text-xl font-light text-[var(--color-body)] leading-relaxed mb-10 max-w-md">
              We specialize in minimalist, clean, and modern interior architecture that transforms everyday environments into personal sanctuaries.
            </p>
            
            {/* Solid CTA Button */}
            <Link to="/about">
              <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-[var(--color-background)] font-medium px-8 py-3.5 rounded-xl transition-colors duration-300">
                Discover Our Story
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Fanned Overlapping Project Cards */}
        <div className="w-full lg:w-1/2 h-[500px] md:h-[600px] relative flex justify-center items-center group perspective-[1000px]">
          
          {/* Card 1 (Back / Right) */}
          <motion.div 
            initial="hidden"
            whileInView="visible1"
            whileHover={{ x: 90, y: 60, rotate: 22, scale: 1.05 }}
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="absolute w-[280px] md:w-[340px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl z-10 cursor-pointer bg-[var(--color-secondary-dark)]"
          >
            <div className="w-full h-full relative">
              <img src="/api/placeholder/600/800?text=Bespoke+Millwork" alt="Bespoke Millwork" className="w-full h-full object-cover" />
              {/* Elegant dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="text-white cooper-light text-2xl leading-tight">Bespoke<br/>Millwork</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 (Middle) */}
          <motion.div 
            initial="hidden"
            whileInView="visible2"
            whileHover={{ x: 40, y: 20, rotate: 8, scale: 1.05 }}
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="absolute w-[280px] md:w-[340px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl z-20 cursor-pointer bg-[var(--color-border)]"
          >
             <div className="w-full h-full relative">
              <img src="/api/placeholder/600/800?text=Surface+Finishes" alt="Surface Finishes" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="text-white cooper-light text-2xl leading-tight">Surface<br/>Finishes</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 (Front / Left) */}
          <motion.div 
            initial="hidden"
            whileInView="visible3"
            whileHover={{ x: -40, y: -30, rotate: -10, scale: 1.05 }}
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="absolute w-[280px] md:w-[340px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl z-30 cursor-pointer bg-[var(--color-secondary)]"
          >
            <div className="w-full h-full relative">
              <img src="/api/placeholder/600/800?text=Living+Sanctuaries" alt="Living Sanctuaries" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="text-white cooper-light text-3xl leading-tight">Living<br/>Sanctuaries</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};