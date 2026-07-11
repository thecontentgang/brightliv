import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
  }
};

const serviceItems = [
  { 
    title: "Core Millwork", 
    desc: "Bespoke modular interiors that combine style and functionality. We design and craft custom cabinetry, shelving, and architectural woodwork tailored to your exact spatial requirements.",
    img: "/api/placeholder/800/600?text=Core+Millwork"
  },
  { 
    title: "Surface Finishes", 
    desc: "High-quality painting, stone cladding, and wallpaper applications. Our surface treatments define the mood of every room, bringing texture and depth to bare walls.",
    img: "/api/placeholder/800/600?text=Surface+Finishes"
  },
  { 
    title: "Luxury Textiles", 
    desc: "Custom upholstery, long curtains, and sophisticated window treatments. We source premium fabrics to soften acoustics and elevate the tactile experience of your home.",
    img: "/api/placeholder/800/600?text=Luxury+Textiles"
  },
  { 
    title: "Specialized Tech", 
    desc: "Cinematic home theaters, automated lifts, and precision smart home installations. We integrate modern convenience invisibly into timeless design.",
    img: "/api/placeholder/800/600?text=Specialized+Tech"
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-[var(--color-background)] text-[var(--color-primary)] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeUp} 
          className="mb-24 flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
            <span className="w-8 h-[1px] bg-[var(--color-primary)]"></span>
            <p className="text-xs tracking-[0.3em] uppercase font-light">What We Do</p>
            <span className="w-8 h-[1px] bg-[var(--color-primary)]"></span>
          </div>
          <h2 className="text-[48px] md:text-[64px] cooper-light leading-[1.05] mb-8">
            Our Expertise.
          </h2>
          <p className="text-lg opacity-80 font-light max-w-xl mx-auto">
            We provide end-to-end interior solutions, combining structural integrity with refined aesthetic sensibilities.
          </p>
        </motion.div>

        {/* Alternating Services List */}
        <div className="flex flex-col gap-24 md:gap-32">
          {serviceItems.map((item, index) => {
            // Determine if the current row should be reversed (even rows are normal, odd rows are reversed)
            const isReversed = index % 2 !== 0;

            return (
              <div 
                key={index}
                className={`flex flex-col items-center gap-10 md:gap-16 lg:gap-24 group ${
                  isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                
                {/* Image Container */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={imageReveal}
                  className="w-full md:w-1/2 lg:w-7/12"
                >
                  <div className="w-full aspect-[4/3] md:aspect-[16/10] rounded-[2rem] overflow-hidden bg-[var(--color-primary)]/5 relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"></div>
                  </div>
                </motion.div>

                {/* Text Content Container */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                  className={`w-full md:w-1/2 lg:w-5/12 flex flex-col justify-center ${
                    isReversed ? 'md:items-end md:text-right' : 'md:items-start md:text-left'
                  }`}
                >
                  <span className="text-sm tracking-[0.2em] opacity-40 font-bold mb-6 block">
                    0{index + 1}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl cooper-light mb-6">
                    {item.title}
                  </h3>
                  
                  <p className={`text-base md:text-lg font-light opacity-80 leading-relaxed mb-10 max-w-md ${
                    isReversed ? 'md:ml-auto' : ''
                  }`}>
                    {item.desc}
                  </p>
                  <Link 
  to={`/services/${item.title.toLowerCase().replace(' ', '-')}`}
  className="group inline-flex items-center justify-center gap-3 bg-[var(--color-primary)] text-[var(--color-background)] px-8 py-4 rounded-[14px] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:rounded-[22px]"
>
  <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold">
    Explore Details
  </span>
  
  <span className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
    <svg 
      className="w-4 h-4" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </span>
</Link>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};