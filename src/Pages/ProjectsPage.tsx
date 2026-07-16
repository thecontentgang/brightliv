import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { CTASection } from './HomePage/CTASection';

const SITE_URL = 'https://www.brightliv.com';
// const OG_IMAGE = `${SITE_URL}/og-portfolio.jpg`;

// --- PROJECT DATA ---
const projects = [
  {
    id: 1,
    title: "ASBL Residence",
    description:
      "A premium 3BHK residence thoughtfully designed with modern aesthetics, bespoke interiors, and functional living spaces. Every detail reflects a seamless blend of luxury, comfort, and timeless craftsmanship.",
    images: [
      "/ASBL/fifteen.jpeg",
      "/ASBL/fourteen.jpeg",
      "/ASBL/nine.jpeg",
      "/ASBL/six.jpeg",
      "/ASBL/seven.jpeg",
      "/ASBL/one.jpeg",
      "/ASBL/three.jpeg",
      "/ASBL/five.jpeg",
    ]
  },
];

// --- Framer Motion Variants ---
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// Lightbox state shape: which project's images we're browsing + current index
interface LightboxState {
  images: string[];
  title: string;
  index: number;
}

// --- AUTO SCROLLING GALLERY COMPONENT ---
const AutoScrollGallery: React.FC<{ 
  images: string[]; 
  title: string; 
  onImageClick: (images: string[], title: string, index: number) => void 
}> = ({ images, title, onImageClick }) => {
  const extendedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden -mx-6 px-6 md:mx-0 md:px-0">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none hidden md:block"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none hidden md:block"></div>

      <motion.div 
        className="flex gap-4 md:gap-6 w-max pb-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        {extendedImages.map((img, index) => {
          const realIndex = index % images.length;
          const altText = `${title} — view ${realIndex + 1}`;
          return (
            <div 
              key={index}
              onClick={() => onImageClick(images, title, realIndex)}
              className="shrink-0 w-[85vw] sm:w-[60vw] md:w-[400px] lg:w-[500px] aspect-[4/3] rounded-2xl overflow-hidden cursor-zoom-in relative group bg-gray-200"
            >
              <img 
                src={img} 
                alt={altText}
                loading="lazy"
                className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#704f62]/0 group-hover:bg-[#704f62]/20 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-[#FAF9F6] text-[#704f62] p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightbox((prev) => {
      if (!prev) return prev;
      const nextIndex = (prev.index - 1 + prev.images.length) % prev.images.length;
      return { ...prev, index: nextIndex };
    });
  }, []);

  const goNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightbox((prev) => {
      if (!prev) return prev;
      const nextIndex = (prev.index + 1) % prev.images.length;
      return { ...prev, index: nextIndex };
    });
  }, []);

  // Keyboard navigation while the lightbox is open
  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, goPrev, goNext, closeLightbox]);

  return (
    <>
      <Helmet>
        <title>Portfolio | Brightliv Interiors — Selected Projects</title>
        <meta name="description" content="Explore Brightliv Interiors' portfolio." />
        <link rel="canonical" href={`${SITE_URL}/portfolio`} />
      </Helmet>

      <main className="w-full min-h-screen bg-[#FAF9F6] text-[#704f62] overflow-hidden font-sans pb-24">
        
        {/* HEADER SECTION */}
        <section className="w-full pt-32 md:pt-48 pb-16 px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto"
          >
            <p className="text-sm tracking-[0.2em] uppercase opacity-70 flex items-center justify-center gap-4 w-full">
              <span className="w-8 md:w-12 h-[1px] bg-[#704f62]"></span>
              Selected Works
              <span className="w-8 md:w-12 h-[1px] bg-[#704f62]"></span>
            </p>
            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] leading-[1.05] cooper-light">
              Our Portfolio.
            </h1>
          </motion.div>
        </section>

        {/* PROJECT CARDS FEED */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-16 md:gap-24">
            {projects.map((project) => (
              <motion.div key={project.id} variants={cardVariant} className="w-full bg-[#FAF9F6] border border-[#704f62]/20 rounded-[2rem] p-6 md:p-10 lg:p-12 shadow-sm flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 lg:items-end border-b border-[#704f62]/10 pb-8">
                  <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    <span className="text-xs tracking-widest uppercase opacity-50 font-bold mb-2">Project 0{project.id}</span>
                    <h2 className="text-[36px] md:text-[48px] cooper-light leading-tight">{project.title}</h2>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <p className="text-lg font-light opacity-80 leading-relaxed max-w-xl lg:ml-auto">{project.description}</p>
                  </div>
                </div>
                <AutoScrollGallery 
                  images={project.images} 
                  title={project.title} 
                  onImageClick={(images, title, index) => setLightbox({ images, title, index })} 
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA SECTION */}
        <CTASection />

        {/* FULLSCREEN LIGHTBOX MODAL */}
        <AnimatePresence>
          {lightbox && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#704f62]/95 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
              onClick={closeLightbox}
            >
              {/* Close button */}
              <button 
                className="absolute top-6 right-6 md:top-10 md:right-10 z-10 text-[#FAF9F6] bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors" 
                onClick={closeLightbox}
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              {/* Prev arrow */}
              <button
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 text-[#FAF9F6] bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full transition-colors"
                onClick={goPrev}
                aria-label="Previous image"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next arrow */}
              <button
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 text-[#FAF9F6] bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full transition-colors"
                onClick={goNext}
                aria-label="Next image"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image with crossfade between slides */}
              <AnimatePresence mode="wait">
                <motion.img 
                  key={lightbox.index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  src={lightbox.images[lightbox.index]}
                  alt={`${lightbox.title} — view ${lightbox.index + 1}`}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>

              {/* Index indicator */}
              <div 
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-[#FAF9F6] text-sm tracking-wider bg-white/10 px-4 py-1.5 rounded-full"
                onClick={(e) => e.stopPropagation()}
              >
                {lightbox.index + 1} / {lightbox.images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};