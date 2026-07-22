import React, { useState, useEffect } from 'react';
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

// Data for the rotating cards
const cardsData = [
  {
    id: 'c1',
    title: "Living",
    subtitle: "Sanctuaries",
    img: "/card-1.png"
  },
  {
    id: 'c2',
    title: "Surface",
    subtitle: "Finishes",
    img: "/card-2.png"
  },
  {
    id: 'c3',
    title: "Bespoke",
    subtitle: "Millwork",
    img: "/card-3.png"
  }
];

export const About: React.FC = () => {
  // Tracks which card is in which position (0 = Front, 1 = Middle, 2 = Back)
  const [positions, setPositions] = useState([0, 1, 2]);
  
  // Pause the animation when the user hovers over the cards
  const [isHovered, setIsHovered] = useState(false);

  // Auto-swap logic every 2 seconds
  useEffect(() => {
    if (isHovered) return; // Stop interval on hover
    
    const interval = setInterval(() => {
      // Rotates the array: Front goes to Back, Middle goes to Front, Back goes to Middle
      setPositions((prev) => [prev[2], prev[0], prev[1]]);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Define the exact styling and transform for each position
  const positionStyles = [
    // Position 0: Front (Left)
    { opacity: 1, x: -30, y: -20, rotate: -6, scale: 1, zIndex: 30 },
    // Position 1: Middle
    { opacity: 1, x: 20, y: 10, rotate: 5, scale: 0.95, zIndex: 20 },
    // Position 2: Back (Right)
    { opacity: 0.9, x: 60, y: 40, rotate: 15, scale: 0.9, zIndex: 10 },
  ];

  return (
    <section className="w-full bg-white text-[var(--color-body)] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* ── Left Side: Typography & CTA ── */}
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
            
            {/* Paragraph */}
            <p className="text-lg md:text-xl font-light text-[var(--color-body)] leading-relaxed mb-10 max-w-md">
              We specialize in minimalist, clean, and modern interior architecture that transforms everyday environments into personal sanctuaries.
            </p>
            
            {/* Solid CTA Button */}
            <Link to="/about">
              <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-medium px-8 py-3.5 rounded-xl transition-colors duration-300">
                Discover Our Story
              </button>
            </Link>
          </motion.div>
        </div>

        {/* ── Right Side: Auto-Swapping Fanned Cards ── */}
        <div 
          className="w-full lg:w-1/2 h-[500px] md:h-[600px] relative flex justify-center items-center group perspective-[1000px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {cardsData.map((card, index) => {
            // Get current target position for this specific card
            const currentPos = positions[index];
            
            return (
              <motion.div 
                key={card.id}
                // Animate smoothly to its new position every time state changes
                animate={positionStyles[currentPos]}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                // Hover effect applies ONLY when the card is in the front position
                whileHover={currentPos === 0 ? { scale: 1.05, rotate: -3 } : {}}
                className="absolute w-[280px] md:w-[340px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer"
              >
                <div className="w-full h-full relative">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  
                  {/* Elegant dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />
                  
                  <div className="absolute bottom-8 left-8">
                    <span className="text-white cooper-light text-2xl md:text-3xl leading-tight block">
                      {card.title}<br/>{card.subtitle}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};