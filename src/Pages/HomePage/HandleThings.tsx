import React from 'react';
import { motion, type Variants } from 'framer-motion';

export const ElegantInfrastructure: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const infrastructureElements = [
    {
      title: "Fire Sprinklers",
      desc: "Color-matched and flush with your ceilings, looking like a planned feature rather than an eyesore.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v4m0 0a4 4 0 100 8 4 4 0 000-8zm-4.95 1.05l-2.83-2.83m15.56 0l-2.83 2.83" />
        </svg>
      ),
    },
    {
      title: "Smoke Detectors",
      desc: "Smart, low-profile sensors that blend smoothly right into the architecture of your room.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14a4 4 0 100-8 4 4 0 000 8zM5.5 16a9 9 0 0113 0" />
        </svg>
      ),
    },
    {
      title: "Fire Alarms",
      desc: "Placed precisely for maximum safety without cluttering your beautiful walls.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
    {
      title: "Gas Monitor Modules",
      desc: "Neatly integrated into your kitchen layout for reliable safety that doesn't ruin the look.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: "AC Copper Piping",
      desc: "Routed properly and cleanly from day one, avoiding messy cover-ups later on.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 19V5m8 14V5M4 12c4-4 4 4 8 0s4 4 8 0" />
        </svg>
      ),
    },
    {
      title: "Electrical Points",
      desc: "High-quality sockets placed exactly where you need them, with zero messy wiring in sight.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[var(--color-background)] text-[var(--color-primary)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-20">
        
        {/* ── Top: Philosophy (Centered) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-3xl mx-auto flex flex-col gap-6 text-center items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-2 opacity-80">
            <span className="w-6 h-[1px] bg-[var(--color-primary)]"></span>
            <p className="text-xs tracking-[0.3em] uppercase font-bold">Flawless Details</p>
            <span className="w-6 h-[1px] bg-[var(--color-primary)]"></span>
          </div>
          <h2 className="text-[36px] md:text-[48px] cooper-light leading-[1.1]">
            Elegant, Inside and Out.
          </h2>
          <p className="text-lg font-light opacity-80 leading-relaxed text-black max-w-2xl">
            Many interior companies just hide their messy work behind false ceilings and thick paint. We don't. We believe every single detail—from safety alarms to AC piping—should be planned clearly and integrated elegantly into your home's design.
          </p>
        </motion.div>

        {/* ── Bottom: Grid of Elements ── */}
       <motion.div 
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  // grid-cols-2 forces a 2-column grid on mobile (creating a 2x3 layout for 6 items)
  className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
>
  {infrastructureElements.map((item, index) => (
    <motion.div 
      key={index} 
      variants={itemVariants}
      // Changed background to solid primary, text to background color, and centered everything
      className="group relative flex flex-col items-center text-center gap-3 sm:gap-4 p-5 sm:p-8 rounded-2xl bg-[var(--color-primary)] text-[var(--color-background)] transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)] overflow-hidden"
    >
      {/* Top Accent Hover Line (Now using the background color for contrast) */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-[var(--color-background)] transition-all duration-500 ease-out group-hover:w-full"></div>

      {/* Number */}
      <span className="text-[10px] sm:text-xs font-mono tracking-widest opacity-50 group-hover:opacity-100 transition-opacity duration-300">
        0{index + 1}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[var(--color-background)]/10 border border-[var(--color-background)]/20 flex items-center justify-center text-[var(--color-background)] transition-all duration-500 group-hover:bg-[var(--color-background)] group-hover:text-[var(--color-primary)] group-hover:scale-105 shadow-sm">
        {/* Added scale down on mobile for the SVG to fit nicely */}
        <div className="scale-75 sm:scale-100">
          {item.icon}
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center">
        <p className="text-sm sm:text-xl font-medium tracking-wide mb-1 sm:mb-3 text-white">
          {item.title}
        </p>
        <p className="text-[11px] sm:text-sm font-light opacity-80 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
};

export default ElegantInfrastructure;