import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Sofa, Building2, Briefcase, Box } from 'lucide-react';

interface GalleryCard {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  height: string;
  cornerStyle: string;
  rotate: string;
}

const cards: GalleryCard[] = [
  {
    id: 'villas',
    image: '/gallery/villa.jpg',
    title: 'Luxury Villas',
    subtitle: 'Timeless Elegance',
    icon: <Home size={16} />,
    height: 'h-[220px] sm:h-[280px] md:h-[320px]',
    cornerStyle: 'rounded-tr-[40px] md:rounded-tr-[80px]',
    rotate: 'md:-rotate-2',
  },
  {
    id: 'interior',
    image: '/gallery/interior.jpg',
    title: 'Interior Design',
    subtitle: 'Where Comfort Meets Style',
    icon: <Sofa size={16} />,
    height: 'h-[240px] sm:h-[320px] md:h-[380px]',
    cornerStyle: 'rounded-t-[30px] md:rounded-t-[40px]',
    rotate: 'md:-rotate-1',
  },
  {
    id: 'architecture',
    image: '/gallery/architecture.jpg',
    title: 'Architecture',
    subtitle: 'Innovative & Functional',
    icon: <Building2 size={16} />,
    height: 'h-[260px] sm:h-[360px] md:h-[440px]',
    cornerStyle: 'rounded-t-[35px] md:rounded-t-[50px]',
    rotate: 'rotate-0',
  },
  {
    id: 'commercial',
    image: '/gallery/commercial.jpg',
    title: 'Commercial Spaces',
    subtitle: 'Built for Business',
    icon: <Briefcase size={16} />,
    height: 'h-[240px] sm:h-[320px] md:h-[380px]',
    cornerStyle: 'rounded-t-[30px] md:rounded-t-[40px]',
    rotate: 'md:rotate-1',
  },
  {
    id: 'custom',
    image: '/gallery/custom.jpg',
    title: 'Custom Solutions',
    subtitle: 'Tailored to You',
    icon: <Box size={16} />,
    height: 'h-[220px] sm:h-[280px] md:h-[320px]',
    cornerStyle: 'rounded-tl-[40px] md:rounded-tl-[80px]',
    rotate: 'md:rotate-2',
  },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-0 md:min-h-screen flex flex-col items-center pt-36 sm:pt-40 md:pt-44 pb-10 sm:pb-14 md:pb-20 overflow-hidden bg-[var(--color-background,#0a0a0a)]">

      {/* Text Container */}
      <div className="relative z-10 w-full max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16 text-center select-none">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.4, delay: 0.4 }}
          className="text-[var(--color-primary,#F9F7F3)] text-[30px] sm:text-[38px] md:text-[52px] font-light tracking-wide leading-snug md:leading-[1.15] cooper-light"
        >
          Spaces that inspire and <br className="hidden md:block" /> elevate everyday living.
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2, delay: 0.7 }}
          className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4 pointer-events-auto"
        >
          {/* Primary Action */}
          <motion.div
            whileHover={{
              scale: 1.03,
              backgroundColor: 'var(--color-primary-dark)',
              borderRadius: '28px',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/portfolio"
              className="bg-[var(--color-primary)] text-[var(--color-background)] px-5 sm:px-8 py-2.5 sm:py-3 rounded-[18px] shadow-md transition-colors flex items-center gap-2 text-sm sm:text-base whitespace-nowrap"
            >
              Explore Projects
            </Link>
          </motion.div>

          {/* Secondary Action */}
          <motion.div
            whileHover={{
              scale: 1.03,
              backgroundColor: 'var(--color-secondary-dark)',
              borderRadius: '28px',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/services"
              className="bg-[var(--color-secondary)] text-[var(--color-primary)] border border-[var(--color-primary)]/10 px-5 sm:px-8 py-2.5 sm:py-3 rounded-[18px] shadow-sm transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Gallery — scroll-snap carousel on mobile/tablet, fan layout on desktop */}
      <div className="relative z-10 w-full max-w-7xl mt-10 sm:mt-12 md:mt-20">
        <div
          className="
            flex md:items-end
            gap-3 sm:gap-4 md:gap-4
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory md:snap-none
            px-5 sm:px-8 md:px-4
            pb-3 md:pb-0
            scrollbar-hide
            justify-start md:justify-center
          "
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 1.1,
                delay: 0.5 + i * 0.12,
              }}
              className={`
                group relative shrink-0
                w-[72%] xs:w-[65%] sm:w-[45%] md:w-auto md:flex-1 md:min-w-0
                ${card.height} ${card.cornerStyle} ${card.rotate}
                overflow-hidden shadow-2xl
                transition-transform duration-500
                md:hover:rotate-0 md:hover:scale-[1.03] hover:z-20
                snap-center md:snap-align-none
              `}
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center gap-2.5 sm:gap-3">
                <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 backdrop-blur-sm text-[var(--color-accent,#C4623A)] shrink-0">
                  {card.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-white text-xs sm:text-sm md:text-[15px] font-medium truncate">
                    {card.title}
                  </p>
                  <p className="text-white/60 text-[10px] sm:text-xs truncate">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot pagination (decorative) */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === 0
                  ? 'w-6 bg-[var(--color-accent,#C4623A)]'
                  : 'w-1.5 bg-white/25'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};