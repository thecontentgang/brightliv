import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Sofa, Building2, Briefcase, Box } from 'lucide-react';

interface GalleryCard {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const cards: GalleryCard[] = [
  {
    id: 'villas',
    image: '/hero/villa.png',
    title: 'Luxury Villas',
    subtitle: 'Timeless Elegance',
    icon: <Home size={16} />,
  },
  {
    id: 'interior',
    image: '/hero/interior-design.png',
    title: 'Interior Design',
    subtitle: 'Where Comfort Meets Style',
    icon: <Sofa size={16} />,
  },
  {
    id: 'architecture',
    image: '/hero/architecture.png',
    title: 'Architecture',
    subtitle: 'Innovative & Functional',
    icon: <Building2 size={16} />,
  },
  {
    id: 'commercial',
    image: '/hero/commercial.png',
    title: 'Commercial Spaces',
    subtitle: 'Built for Business',
    icon: <Briefcase size={16} />,
  },
  {
    id: 'custom',
    image: '/hero/custom.png',
    title: 'Custom Solutions',
    subtitle: 'Tailored to You',
    icon: <Box size={16} />,
  },
];

export const Hero: React.FC = () => {
  const [active, setActive] = useState(0);

  // Mobile auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center overflow-hidden bg-[#F9F7F3]">
      
      {/* SVG Definitions for different screen curves */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          {/* Shallower curve for mobile to save vertical space */}
          <clipPath id="heroArcClipMobile" clipPathUnits="objectBoundingBox">
            <path d="M0,0 C0.25,0.15 0.75,0.15 1,0 L1,1 L0,1 Z" />
          </clipPath>
          {/* Deep swooping hammock curve for desktop */}
          <clipPath id="heroArcClipDesktop" clipPathUnits="objectBoundingBox">
            <path d="M0,0 C0.25,0.4 0.75,0.4 1,0 L1,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ============ MOBILE-ONLY HERO (<640px) ============ */}
      <div
        className="flex sm:hidden flex-col w-full h-[100dvh] pt-24"
        style={{
          paddingTop: 'max(6rem, env(safe-area-inset-top))',
        }}
      >
        <div className="relative z-20 px-5 text-center select-none shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2, delay: 0.3 }}
            className="text-[#3b3534] text-[27px] font-light tracking-wide leading-snug cooper-light"
          >
            Spaces that inspire and elevate everyday living.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, delay: 0.55 }}
            className="mt-5 flex items-center justify-center gap-2.5"
          >
            <Link
              to="/portfolio"
              className="bg-[#6B5361] text-white px-5 py-2.5 rounded-full shadow-md text-[13px] font-medium whitespace-nowrap active:scale-95 transition-transform"
            >
              Explore Projects
            </Link>
            <Link
              to="/services"
              className="bg-[#F3EBE0] text-[#6B5361] border border-[#6B5361]/10 px-5 py-2.5 rounded-full shadow-sm text-[13px] font-medium whitespace-nowrap active:scale-95 transition-transform"
            >
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Negative top margin pulls the curve up. Uses Mobile clip path. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, delay: 0.75 }}
          className="relative mt-2 w-full flex-1 min-h-[50vh] shadow-2xl z-10"
          style={{ clipPath: 'url(#heroArcClipMobile)' }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={cards[active].id}
              src={cards[active].image}
              alt={cards[active].title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={cards[active].id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="absolute bottom-8 left-5 right-5 flex items-center gap-3"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white shrink-0">
                {cards[active].icon}
              </div>
              <div className="min-w-0">
                <p className="text-white text-[15px] font-medium truncate">
                  {cards[active].title}
                </p>
                <p className="text-white/70 text-xs truncate">
                  {cards[active].subtitle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ============ TABLET & DESKTOP HERO (640px+) ============ */}
      <div className="hidden sm:flex flex-col items-center justify-between w-full min-h-screen pt-32 md:pt-40">
        
        <div className="relative z-20 w-full max-w-7xl px-6 lg:px-12 text-center select-none pb-4">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.4, delay: 0.4 }}
            className="text-[#3b3534] text-[38px] md:text-[56px] font-light tracking-wide md:leading-[1.15] cooper-light"
          >
            Spaces that inspire and <br className="hidden md:block" /> elevate everyday living.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2, delay: 0.7 }}
            className="mt-10 flex items-center justify-center gap-5 pointer-events-auto"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/portfolio"
                className="bg-[#6B5361] text-white px-8 py-3.5 rounded-full shadow-md hover:bg-[#5a4551] transition-colors flex items-center gap-2 text-[15px] font-medium whitespace-nowrap"
              >
                Explore Projects
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/services"
                className="bg-[#F3EBE0] text-[#6B5361] border border-[#6B5361]/10 px-8 py-3.5 rounded-full shadow-sm hover:bg-[#ebe1d4] transition-colors text-[15px] font-medium whitespace-nowrap"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Gallery Container - Uses Desktop clip path and adds flex gap-2 for spacing */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.1, delay: 0.5 }}
          className="relative z-10 w-full flex-1 flex flex-col -mt-12 lg:-mt-24"
        >
          <div
            className="relative flex gap-2 flex-1 w-full min-h-[55vh] lg:min-h-[70vh] shadow-2xl bg-[#F9F7F3]"
            style={{ clipPath: 'url(#heroArcClipDesktop)' }}
          >
            {cards.map((card, i) => (
              <div
                key={card.id}
                className={`group relative flex-1 min-w-0 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[1.5] ${
                  i > 2 ? 'hidden md:block' : 'block'
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-8 left-8 right-8 flex flex-col lg:flex-row lg:items-center gap-3 md:translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white shrink-0">
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-[16px] font-medium truncate">{card.title}</p>
                    <p className="text-white/70 text-[13px] truncate">{card.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};