import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- PROJECT DATA ---
const projects = [
  {
    id: 1,
    title: "The Heritage Townhouse",
    description: "A comprehensive historical restoration on the Upper East Side, blending 19th-century architectural preservation with contemporary, minimalist interior formatting.",
    images: [
      "/api/placeholder/800/600?text=Townhouse+Entry",
      "/api/placeholder/800/600?text=Townhouse+Living",
      "/api/placeholder/800/600?text=Townhouse+Staircase",
      "/api/placeholder/800/600?text=Townhouse+Kitchen",
    ]
  },
  {
    id: 2,
    title: "Coastal Retreat",
    description: "A ground-up residential construction designed to integrate seamlessly with its natural surroundings, featuring locally sourced timber and expansive glass facades.",
    images: [
      "/api/placeholder/800/600?text=Coastal+Exterior",
      "/api/placeholder/800/600?text=Coastal+Lounge",
      "/api/placeholder/800/600?text=Coastal+Bedroom",
      "/api/placeholder/800/600?text=Coastal+Terrace",
    ]
  },
  {
    id: 3,
    title: "The Glass Pavilion",
    description: "A precise modernization of a mid-century architectural structure. Our team prioritized thermal efficiency and acoustic privacy without compromising original sightlines.",
    images: [
      "/api/placeholder/800/600?text=Pavilion+View",
      "/api/placeholder/800/600?text=Pavilion+Dining",
      "/api/placeholder/800/600?text=Pavilion+Study",
      "/api/placeholder/800/600?text=Pavilion+Bath",
    ]
  },
  {
    id: 4,
    title: "Avenue Penthouse",
    description: "An urban luxury reconfiguration focused on maximizing entertaining capacity. Highlights include bespoke Italian cabinetry and extensive custom plaster finishing.",
    images: [
      "/api/placeholder/800/600?text=Penthouse+Foyer",
      "/api/placeholder/800/600?text=Penthouse+Bar",
      "/api/placeholder/800/600?text=Penthouse+Suite",
      "/api/placeholder/800/600?text=Penthouse+Gallery",
    ]
  }
];

// Framer Motion Variants
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

// --- AUTO SCROLLING GALLERY COMPONENT ---
const AutoScrollGallery: React.FC<{ 
  images: string[]; 
  title: string; 
  onImageClick: (img: string) => void 
}> = ({ images, title, onImageClick }) => {
  // We duplicate the array to create a seamless infinite loop
  const extendedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden -mx-6 px-6 md:mx-0 md:px-0">
      
      {/* Optional: Soft gradient edges to make the scrolling fade in/out beautifully on desktop */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none hidden md:block"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none hidden md:block"></div>

      {/* The scrolling track */}
      <motion.div 
        className="flex gap-4 md:gap-6 w-max pb-6"
        // Animates from 0 to exactly halfway (since we doubled the array, this creates a perfect loop)
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 25 // Increase this number to make it scroll slower, decrease to make it faster
        }}
      >
        {extendedImages.map((img, index) => (
          <div 
            key={index}
            onClick={() => onImageClick(img)}
            className="shrink-0 w-[85vw] sm:w-[60vw] md:w-[400px] lg:w-[500px] aspect-[4/3] rounded-2xl overflow-hidden cursor-zoom-in relative group bg-gray-200"
          >
            <img 
              src={img} 
              alt={`${title} - view`}
              className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover Overlay Icon */}
            <div className="absolute inset-0 bg-[#704f62]/0 group-hover:bg-[#704f62]/20 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-[#FAF9F6] text-[#704f62] p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  // State to handle the lightbox/gallery view
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#704f62] overflow-hidden font-sans pb-32">
      
      {/* 1. HEADER SECTION (Centered) */}
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
          <p className="text-lg font-light opacity-80 mt-4 leading-relaxed">
            An archive of our defining residential and commercial projects. Each case study represents our commitment to structural integrity, functional planning, and timeless aesthetic execution.
          </p>
        </motion.div>
      </section>

      {/* 2. PROJECT CARDS FEED */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="flex flex-col gap-16 md:gap-24"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={cardVariant}
              className="w-full bg-[#FAF9F6] border border-[#704f62]/20 rounded-[2rem] p-6 md:p-10 lg:p-12 shadow-sm flex flex-col gap-8"
            >
              
              {/* Card Header: Title & Description */}
              <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 lg:items-end border-b border-[#704f62]/10 pb-8">
                <div className="w-full lg:w-1/2 flex flex-col gap-2">
                  <span className="text-xs tracking-widest uppercase opacity-50 font-bold mb-2">Project 0{project.id}</span>
                  <h2 className="text-[36px] md:text-[48px] cooper-light leading-tight">
                    {project.title}
                  </h2>
                </div>
                <div className="w-full lg:w-1/2">
                  <p className="text-lg font-light opacity-80 leading-relaxed max-w-xl lg:ml-auto">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Body: Auto Scrolling Gallery Component */}
              <AutoScrollGallery 
                images={project.images} 
                title={project.title}
                onImageClick={setSelectedImage} 
              />

            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. FULLSCREEN GALLERY MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#704f62]/95 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-[#FAF9F6] bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Expanded Image */}
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
};