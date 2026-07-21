import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

const SITE_URL = 'https://www.brightliv.com'; // ← replace with your real domain
const OG_IMAGE = `${SITE_URL}/og-contact.jpg`; // ← 1200x630 image, distinct from other pages

// Google Maps embed query — built from your office address
const MAPS_QUERY = encodeURIComponent(
  'Rohini Layout Rd, opp. Shilparamam, Near Cyber Towers, Surya Enclave, Hitech City, Hyderabad, Telangana 500081'
);
const MAPS_EMBED_SRC = `https://maps.google.com/maps?q=${MAPS_QUERY}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

// Structured Data: ContactPage + LocalBusiness
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Brightliv Interiors',
  url: `${SITE_URL}/contact`,
  description:
    'Get in touch with Brightliv Interiors for residential, commercial, and hospitality project inquiries.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Brightliv Interiors',
    email: 'brightlivinteriordesign@gmail.com',
    telephone: '+91-9666065006',
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        '3rd Floor, Rohini Layout Rd, opp. Shilparamam, Near Cyber Towers Signal, Surya Enclave, Hitech City',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500081',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '20:00',
    },
  },
};

// Breadcrumb structured data
const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
  ],
};

// Framer Motion Variants matching your design system
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// --- CUSTOM DROPDOWN ---
interface DropdownOption {
  value: string;
  label: string;
}

const dropdownOptions: DropdownOption[] = [
  { value: 'residential', label: 'Residential Project' },
  { value: 'commercial', label: 'Commercial Project' },
  { value: 'hospitality', label: 'Hospitality Project' },
  { value: 'general', label: 'General Question' },
];

const CustomDropdown: React.FC<{
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  name: string;
}> = ({ options, value, onChange, label, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = options.find((opt) => opt.value === value) ?? options[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col w-full relative" ref={containerRef}>
      <label className="text-xs tracking-widest uppercase opacity-70 font-bold mb-2">{label}</label>

      <input type="hidden" name={name} value={selected.value} />

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between bg-transparent border-b border-[#704f62]/30 py-3 text-lg font-light text-left focus:outline-none hover:border-[#704f62]/60 transition-colors"
      >
        <span>{selected.label}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="w-4 h-4 shrink-0 opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 mt-2 w-full bg-[#FAF9F6] border border-[#704f62]/20 rounded-2xl shadow-lg overflow-hidden z-20 py-2"
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                role="option"
                aria-selected={opt.value === value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`px-5 py-3 text-lg font-light cursor-pointer transition-colors ${
                  opt.value === value
                    ? 'bg-[#704f62]/10 text-[#704f62]'
                    : 'hover:bg-[#704f62]/5 opacity-80'
                }`}
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Contact: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('residential');

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact Us | Brightliv Interiors — Start Your Project</title>
        <meta
          name="description"
          content="Get in touch with Brightliv Interiors, Hyderabad, for residential, commercial, or hospitality project inquiries. Reach our studio by phone, email, or our contact form."
        />
        <meta
          name="keywords"
          content="contact Brightliv Interiors, interior design inquiry Hyderabad, request a quote, book consultation, interior architecture firm contact"
        />
        <meta name="author" content="Brightliv Interiors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/contact`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:site_name" content="Brightliv Interiors" />
        <meta property="og:title" content="Contact Us | Brightliv Interiors — Start Your Project" />
        <meta
          property="og:description"
          content="We welcome inquiries for residential, commercial, and hospitality projects. Reach our studio directly or submit an inquiry online."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${SITE_URL}/contact`} />
        <meta name="twitter:title" content="Contact Us | Brightliv Interiors — Start Your Project" />
        <meta
          name="twitter:description"
          content="We welcome inquiries for residential, commercial, and hospitality projects. Reach our studio directly or submit an inquiry online."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Theme */}
        <meta name="theme-color" content="#FAF9F6" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      </Helmet>

      <main className="w-full min-h-screen bg-[#FAF9F6] text-[#704f62] overflow-hidden font-sans pb-24">
        {/* 1. HEADER SECTION */}
        <section className="w-full pt-32 md:pt-48 pb-12 px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-6">
            <motion.p variants={cardVariant} className="text-sm tracking-[0.2em] uppercase opacity-70 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#704f62]"></span>
              Inquiries
            </motion.p>
            <motion.h1 variants={cardVariant} className="text-[48px] md:text-[72px] lg:text-[84px] leading-[1.05] cooper-light">
              Get in touch.
            </motion.h1>
            <motion.p variants={cardVariant} className="text-lg md:text-xl font-light opacity-90 leading-relaxed max-w-2xl">
              We welcome inquiries for residential, commercial, and hospitality projects. Please contact our studio
              using the form below, or reach out to our administrative team directly.
            </motion.p>
          </motion.div>
        </section>

        {/* 2. CONTACT CONTENT (Grid Layout) */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-10 lg:gap-16"
          >
            {/* Left Side: Information Cards */}
            <div className="w-full lg:w-2/5 flex flex-col gap-6">
              {/* Direct Contact Card */}
              <motion.div
                variants={cardVariant}
                className="p-8 md:p-10 border border-[#704f62]/20 rounded-[2rem] bg-[#FAF9F6] shadow-sm"
              >
                <h3 className="text-[28px] cooper-light mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-widest uppercase opacity-60 font-bold mb-1">General Inquiries</p>
                    <a
                      href="mailto:brightlivinteriordesign@gmail.com"
                      className="text-lg font-light hover:opacity-70 transition-opacity"
                    >
                      brightlivinteriordesign@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase opacity-60 font-bold mb-1">Phone</p>
                    <a href="tel:+919666065006" className="text-lg font-light hover:opacity-70 transition-opacity">
                      +91 96660 65006
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Location & Hours Card */}
              <motion.div
                variants={cardVariant}
                className="p-8 md:p-10 border border-[#704f62]/20 rounded-[2rem] bg-[#FAF9F6] shadow-sm"
              >
                <h3 className="text-[28px] cooper-light mb-6">Our Office</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-widest uppercase opacity-60 font-bold mb-1">Address</p>
                    <p className="text-lg font-light leading-relaxed">
                      3rd Floor, Apurupa Towers, pillar No: 1629
                      <br />
                      Road No 36, Jubilee Hills
                      <br />
                      Hyderabad, Telangana 500033
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase opacity-60 font-bold mb-1">Working Hours</p>
                    <p className="text-lg font-light leading-relaxed">Everyday — 10:00 AM to 8:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: The Contact Form */}
            <motion.div variants={cardVariant} className="w-full lg:w-3/5">
              <div className="p-8 md:p-12 border border-[#704f62]/20 rounded-[2.5rem] bg-[#FAF9F6] shadow-sm h-full">
                <h2 className="text-[32px] md:text-[40px] cooper-light mb-8">Submit an Inquiry</h2>

                <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                  {/* Name Row */}
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col w-full relative">
                      <label htmlFor="firstName" className="text-xs tracking-widest uppercase opacity-70 font-bold mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        className="w-full bg-transparent border-b border-[#704f62]/30 py-3 text-lg font-light focus:outline-none focus:border-[#704f62] transition-colors"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="flex flex-col w-full relative">
                      <label htmlFor="lastName" className="text-xs tracking-widest uppercase opacity-70 font-bold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        className="w-full bg-transparent border-b border-[#704f62]/30 py-3 text-lg font-light focus:outline-none focus:border-[#704f62] transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Row */}
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col w-full relative">
                      <label htmlFor="email" className="text-xs tracking-widest uppercase opacity-70 font-bold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        className="w-full bg-transparent border-b border-[#704f62]/30 py-3 text-lg font-light focus:outline-none focus:border-[#704f62] transition-colors"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div className="flex flex-col w-full relative">
                      <label htmlFor="phone" className="text-xs tracking-widest uppercase opacity-70 font-bold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        className="w-full bg-transparent border-b border-[#704f62]/30 py-3 text-lg font-light focus:outline-none focus:border-[#704f62] transition-colors"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type — Custom Dropdown */}
                  <CustomDropdown
                    label="Inquiry Type"
                    name="inquiryType"
                    options={dropdownOptions}
                    value={inquiryType}
                    onChange={setInquiryType}
                  />

                  

                  {/* Submit Button */}
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="px-10 py-4 bg-[#704f62] text-[#FAF9F6] rounded-full text-lg font-medium tracking-wide hover:scale-[1.02] transition-transform duration-300 shadow-lg w-full md:w-auto"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* 3. GOOGLE MAP — SEPARATE FULL-WIDTH CARD */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto mt-10 lg:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 md:p-10 border border-[#704f62]/20 rounded-[2rem] bg-[#FAF9F6] shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <h3 className="text-[28px] cooper-light">Find Us</h3>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="w-full aspect-[16/9] md:aspect-[21/8] rounded-2xl overflow-hidden border border-[#704f62]/20 relative">
              <iframe
                title="Brightliv Interiors — Office Location"
                src={MAPS_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(15%) contrast(0.95)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};