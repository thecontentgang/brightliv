import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    image: '/hero/villa.png',
    title: 'Luxury Villas',
    subtitle: 'Timeless Elegance',
    icon: <Home size={16} />,
    height: 'h-[220px] sm:h-[280px] md:h-[320px]',
    cornerStyle: 'rounded-tr-[40px] md:rounded-tr-[80px]',
    rotate: 'md:-rotate-2',
  },
  {
    id: 'interior',
    image: '/hero/interior-design.png',
    title: 'Interior Design',
    subtitle: 'Where Comfort Meets Style',
    icon: <Sofa size={16} />,
    height: 'h-[240px] sm:h-[320px] md:h-[380px]',
    cornerStyle: 'rounded-t-[30px] md:rounded-t-[40px]',
    rotate: 'md:-rotate-1',
  },
  {
    id: 'architecture',
    image: '/hero/architecture.png',
    title: 'Architecture',
    subtitle: 'Innovative & Functional',
    icon: <Building2 size={16} />,
    height: 'h-[260px] sm:h-[360px] md:h-[440px]',
    cornerStyle: 'rounded-t-[35px] md:rounded-t-[50px]',
    rotate: 'rotate-0',
  },
  {
    id: 'commercial',
    image: '/hero/commercial.png',
    title: 'Commercial Spaces',
    subtitle: 'Built for Business',
    icon: <Briefcase size={16} />,
    height: 'h-[240px] sm:h-[320px] md:h-[380px]',
    cornerStyle: 'rounded-t-[30px] md:rounded-t-[40px]',
    rotate: 'md:rotate-1',
  },
  {
    id: 'custom',
    image: '/hero/custom.png',
    title: 'Custom Solutions',
    subtitle: 'Tailored to You',
    icon: <Box size={16} />,
    height: 'h-[220px] sm:h-[280px] md:h-[320px]',
    cornerStyle: 'rounded-tl-[40px] md:rounded-tl-[80px]',
    rotate: 'md:rotate-2',
  },
];

// Tablet shows only 3 cards, with explicit fan-style heights (short - tall - short)
const tabletCards = [
  { ...cards[0], tabletHeight: 'h-[260px]' },   // Villas — shorter
  { ...cards[1], tabletHeight: 'h-[340px]' },   // Interior — tallest
  { ...cards[2], tabletHeight: 'h-[300px]' },   // Architecture — mid
];

export const Hero: React.FC = () => {
  const [active, setActive] = React.useState(0);
  

  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-0 md:min-h-screen flex flex-col items-center overflow-hidden bg-[var(--color-background,#0a0a0a)]">

      {/* ============ MOBILE-ONLY HERO (<640px) — full viewport height, dvh-safe ============ */}
      <div
        className="flex sm:hidden flex-col w-full min-h-[100dvh] pt-24 pb-4"
        style={{
          paddingTop: 'max(6rem, env(safe-area-inset-top))',
          paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
        }}
      >

        {/* Heading + CTAs — pinned near top */}
        <div className="px-5 text-center select-none shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2, delay: 0.3 }}
            className="text-[var(--color-primary,#F9F7F3)] text-[27px] font-light tracking-wide leading-snug cooper-light"
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
              className="bg-[var(--color-primary)] text-[var(--color-background)] px-5 py-2.5 rounded-[18px] shadow-md text-[13px] font-medium whitespace-nowrap active:scale-95 transition-transform"
            >
              Explore Projects
            </Link>
            <Link
              to="/services"
              className="bg-[var(--color-secondary)] text-[var(--color-primary)] border border-[var(--color-primary)]/10 px-5 py-2.5 rounded-[18px] shadow-sm text-[13px] font-medium whitespace-nowrap active:scale-95 transition-transform"
            >
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Showcase image — grows to fill remaining vertical space, auto-transitions every 2s */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, delay: 0.75 }}
          className="relative mt-6 mx-5 flex-1 min-h-0 overflow-hidden rounded-[24px]"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={cards[active].id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="absolute bottom-4 left-5 right-5 flex items-center gap-3"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-[var(--color-accent,#C4623A)] shrink-0">
                {cards[active].icon}
              </div>
              <div className="min-w-0">
                <p className="text-white text-[15px] font-medium truncate">
                  {cards[active].title}
                </p>
                <p className="text-white/60 text-xs truncate">
                  {cards[active].subtitle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>

      {/* ============ TABLET-ONLY HERO (640px–768px) — exactly 3 cards, fan heights ============ */}
      <div className="hidden sm:flex md:hidden flex-col items-center w-full pt-40 pb-14">

        <div className="relative z-10 w-full max-w-7xl px-8 text-center select-none">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.4, delay: 0.4 }}
            className="text-[var(--color-primary,#F9F7F3)] text-[38px] font-light tracking-wide leading-snug cooper-light"
          >
            Spaces that inspire and elevate everyday living.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2, delay: 0.7 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.03, backgroundColor: 'var(--color-primary-dark)', borderRadius: '28px' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/portfolio"
                className="bg-[var(--color-primary)] text-[var(--color-background)] px-8 py-3 rounded-[18px] shadow-md transition-colors flex items-center gap-2 text-base whitespace-nowrap"
              >
                Explore Projects
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03, backgroundColor: 'var(--color-secondary-dark)', borderRadius: '28px' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/services"
                className="bg-[var(--color-secondary)] text-[var(--color-primary)] border border-[var(--color-primary)]/10 px-8 py-3 rounded-[18px] shadow-sm transition-colors text-base whitespace-nowrap"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mt-12">
          <div className="flex items-end gap-4 justify-center px-8">
            {tabletCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.1, delay: 0.5 + i * 0.12 }}
                className={`
                  group relative flex-1 min-w-0
                  ${card.tabletHeight} ${card.cornerStyle}
                  overflow-hidden shadow-2xl
                  transition-transform duration-500
                  hover:scale-[1.03] hover:z-20
                `}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-[var(--color-accent,#C4623A)] shrink-0">
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-[15px] font-medium truncate">{card.title}</p>
                    <p className="text-white/60 text-xs truncate">{card.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {tabletCards.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === 0 ? 'w-6 bg-[var(--color-accent,#C4623A)]' : 'w-1.5 bg-white/25'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ============ DESKTOP HERO (768px+) — original 5-card fan, unchanged ============ */}
      <div className="hidden md:flex flex-col items-center w-full pt-44 pb-20">

        <div className="relative z-10 w-full max-w-7xl px-12 lg:px-16 text-center select-none">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.4, delay: 0.4 }}
            className="text-[var(--color-primary,#F9F7F3)] text-[52px] font-light tracking-wide leading-[1.15] cooper-light"
          >
            Spaces that inspire and <br /> elevate everyday living.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2, delay: 0.7 }}
            className="mt-8 flex items-center justify-center gap-4 pointer-events-auto"
          >
            <motion.div
              whileHover={{ scale: 1.03, backgroundColor: 'var(--color-primary-dark)', borderRadius: '28px' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/portfolio"
                className="bg-[var(--color-primary)] text-[var(--color-background)] px-8 py-3 rounded-[18px] shadow-md transition-colors flex items-center gap-2 text-base whitespace-nowrap"
              >
                Explore Projects
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03, backgroundColor: 'var(--color-secondary-dark)', borderRadius: '28px' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/services"
                className="bg-[var(--color-secondary)] text-[var(--color-primary)] border border-[var(--color-primary)]/10 px-8 py-3 rounded-[18px] shadow-sm transition-colors text-base whitespace-nowrap"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mt-20">
          <div className="flex items-end gap-4 justify-center px-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.1, delay: 0.5 + i * 0.12 }}
                className={`
                  group relative flex-1 min-w-0
                  ${card.height} ${card.cornerStyle} ${card.rotate}
                  overflow-hidden shadow-2xl
                  transition-transform duration-500
                  hover:rotate-0 hover:scale-[1.03] hover:z-20
                `}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-[var(--color-accent,#C4623A)] shrink-0">
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-[15px] font-medium truncate">{card.title}</p>
                    <p className="text-white/60 text-xs truncate">{card.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {cards.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === 0 ? 'w-6 bg-[var(--color-accent,#C4623A)]' : 'w-1.5 bg-white/25'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};