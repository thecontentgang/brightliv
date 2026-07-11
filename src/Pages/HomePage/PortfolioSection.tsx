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

const portfolioCards = [
  {
    title: "The Glasshouse",
    desc: "A stunning full renovation blending natural light with minimal, curated textures.",
    // Warm rich beige
    bgColor: "bg-[var(--color-secondary)]", 
    img: "/api/placeholder/600/500?text=Glasshouse"
  },
  {
    title: "Velvet & Stone",
    desc: "Sophisticated surface finishes defining the mood of this modern city sanctuary.",
    // Soft off-white surface
    bgColor: "bg-[var(--color-surface)]", 
    img: "/api/placeholder/600/500?text=Velvet+%26+Stone"
  },
  {
    title: "The Urban Loft",
    desc: "Custom interior architecture tailored perfectly to open-plan modern living.",
    // Light border color used as a very soft taupe/beige background
    bgColor: "bg-[var(--color-border-light)]", 
    img: "/api/placeholder/600/500?text=Urban+Loft"
  },
  {
    title: "Serene Sanctuary",
    desc: "Warm tones and bespoke millwork designed to create a quiet escape from the city.",
    // Deeper warm beige for contrast
    bgColor: "bg-[var(--color-secondary-dark)]", 
    img: "/api/placeholder/600/500?text=Serene+Sanctuary"
  }
];

export const PortfolioSection: React.FC = () => {
  return (
    <section className="w-full bg-[var(--color-background)] text-[var(--color-body)] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Centered Header Section */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeUp} 
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <span className="text-sm tracking-[0.2em] uppercase font-semibold text-[var(--color-primary)] mb-6">
            Selected Works
          </span>
          <h2 className="text-[40px] md:text-[56px] cooper-light leading-[1.1] text-[var(--color-heading)] max-w-3xl">
            Spaces designed to elevate <br className="hidden md:block" /> your everyday living
          </h2>
        </motion.div>

        {/* 2x2 Card Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {portfolioCards.map((card, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className={`relative flex flex-col items-center text-center rounded-[3rem] overflow-hidden h-[450px] md:h-[550px] lg:h-[600px] ${card.bgColor} group`}
            >
              
              {/* Text Content at the Top */}
              <div className="pt-12 px-8 md:px-12 lg:px-16 z-10 flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl cooper-light text-[var(--color-heading)] mb-4">
                  {card.title}
                </h3>
                <p className="text-base font-medium text-[var(--color-body)] leading-relaxed max-w-[300px]">
                  {card.desc}
                </p>
              </div>

              {/* Image anchored to the bottom */}
              <div className="mt-auto w-full pt-8 h-[55%] md:h-[60%]">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover rounded-t-[2rem] md:rounded-t-[3rem] transition-transform duration-700 ease-in-out group-hover:translate-y-4 shadow-xl"
                />
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};