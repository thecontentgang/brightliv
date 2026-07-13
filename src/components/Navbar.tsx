import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { InquiryModal } from '../components/InquiryModal';

// Create a motion-enabled Link component to keep your hover animations
const MotionLink = motion(Link);

export const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // 1. Handle Pill Morphing
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // 2. Handle Hide/Show on Scroll Direction
    if (latest > lastScrollY.current && latest > 150) {
      setIsVisible(false);
      setIsMobileMenuOpen(false); // Auto-close mobile menu on scroll down
    } else if (latest < lastScrollY.current) {
      setIsVisible(true);
    }
    
    lastScrollY.current = latest;
  });

  return (
    <>
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -150, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-500 ${
        isScrolled ? 'pt-4 md:pt-6' : 'pt-0'
      }`}
    >
      
      {/* Main Navbar Pill */}
      <div 
        className={`flex items-center justify-between transition-all duration-700 ease-in-out overflow-hidden relative z-50 ${
          isScrolled 
            ? 'w-[95%] md:w-[98%] max-w-[1280px] bg-[var(--color-background)]/95 backdrop-blur-lg rounded-[27px] px-5 md:px-[32px] py-3 md:py-[20px] shadow-xl border border-[var(--color-primary)]/5 text-[var(--color-primary)]' 
            : 'w-full max-w-full bg-[var(--color-background)] md:bg-transparent rounded-none px-6 md:px-12 py-4 md:py-6 text-[var(--color-primary)] shadow-sm md:shadow-none'
        }`}
      >
        
        {/* --- LEFT SIDE --- */}
        <div className="hidden md:flex flex-1 items-center justify-center lg:space-x-10 md:space-x-6 text-[16px] font-semibold tracking-wide">
          <MotionLink to="/services" whileHover={{ y: -2 }} className="transition-colors hover:text-[var(--color-heading)] whitespace-nowrap">
            Services
          </MotionLink>
          <MotionLink to="/projects" whileHover={{ y: -2 }} className="transition-colors hover:text-[var(--color-heading)] whitespace-nowrap">
            Projects
          </MotionLink>
        </div>
        <div className="flex md:hidden flex-1"></div>

        {/* --- CENTER SIDE (Logo) --- */}
        <div className="flex-shrink-0 flex justify-center">
          <MotionLink to="/" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="block focus:outline-none">
            <img 
              // DYNAMIC LOGO SWAP: Icon when scrolled, Full logo when at the top
              src={isScrolled ? "/Brightliv-icon.png" : "/Brightliv-logo.png"} 
              alt={isScrolled ? "Brightliv Icon" : "Brightliv Logo"} 
              className="h-7 md:h-12 lg:h-16 w-auto object-contain transition-all duration-300" 
            />
          </MotionLink>
        </div>

        {/* --- RIGHT SIDE --- */}
        <div className="hidden md:flex flex-1 items-center justify-center lg:space-x-10 md:space-x-6 text-[16px] font-semibold tracking-wide">
          <MotionLink to="/about" whileHover={{ y: -2 }} className="transition-colors hover:text-[var(--color-heading)] whitespace-nowrap">
            About BrightLiv
          </MotionLink>
          <MotionLink to="/contact" whileHover={{ y: -2 }} className="transition-colors hover:text-[var(--color-heading)] whitespace-nowrap">
            Contact
          </MotionLink>
          <MotionLink 
            to="/contact" 
            whileHover={{ scale: 1.03, backgroundColor: 'var(--color-primary-dark)' }}
            onClick={() => setIsModalOpen(true)}
            whileTap={{ scale: 0.97 }}
            className="bg-[var(--color-primary)] text-[var(--color-background)] px-5 lg:px-6 py-2 md:py-2.5 rounded-[18px] shadow-md whitespace-nowrap transition-colors"
          >
            Reach now
          </MotionLink>
        </div>

        {/* Mobile Hamburger / Close Icon */}
        <div className="flex md:hidden flex-1 justify-end items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--color-primary)] focus:outline-none p-2 -mr-2"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              // X (Close) Icon
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full w-[95%] bg-[var(--color-background)] shadow-xl rounded-[24px] border border-[var(--color-primary)]/10 overflow-hidden z-40 flex flex-col p-4"
          >
            <div className="flex flex-col space-y-4 text-center text-[var(--color-primary)] font-semibold text-[16px] tracking-wide py-4">
              <Link 
                to="/services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[var(--color-heading)] transition-colors block py-2"
              >
                Services
              </Link>
              <Link 
                to="/projects" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[var(--color-heading)] transition-colors block py-2"
              >
                Projects
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[var(--color-heading)] transition-colors block py-2"
              >
                About BrightLiv
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[var(--color-heading)] transition-colors block py-2"
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-[var(--color-primary)]/10">
                <Link 
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block bg-[var(--color-primary)] text-[var(--color-background)] px-8 py-3 rounded-[18px] shadow-md whitespace-nowrap transition-colors hover:bg-[var(--color-primary-dark)]"
                >
                  Reach now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  
    <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};