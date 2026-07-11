import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const SITE_URL = 'https://www.brightliv.com'; // ← replace with your real domain
const OG_IMAGE = `${SITE_URL}/og-contact.jpg`; // ← 1200x630 image, distinct from other pages

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
    email: 'info@brightliv.com',
    telephone: '+1-555-123-4567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '124 Design Avenue, Suite 400',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10011',
      addressCountry: 'US',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact Us | Brightliv Interiors — Start Your Project</title>
        <meta
          name="description"
          content="Get in touch with Brightliv Interiors for residential, commercial, or hospitality project inquiries. Reach our studio by phone, email, or our contact form."
        />
        <meta
          name="keywords"
          content="contact Brightliv Interiors, interior design inquiry, request a quote, book consultation, interior architecture firm contact"
        />
        <meta name="author" content="Brightliv Interiors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/contact`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:site_name" content="Brightliv Interiors" />
        <meta
          property="og:title"
          content="Contact Us | Brightliv Interiors — Start Your Project"
        />
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
        <meta
          name="twitter:title"
          content="Contact Us | Brightliv Interiors — Start Your Project"
        />
        <meta
          name="twitter:description"
          content="We welcome inquiries for residential, commercial, and hospitality projects. Reach our studio directly or submit an inquiry online."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Theme */}
        <meta name="theme-color" content="#FAF9F6" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>

      <main className="w-full min-h-screen bg-[#FAF9F6] text-[#704f62] overflow-hidden font-sans pb-24">
        
        {/* 1. HEADER SECTION */}
        <section className="w-full pt-32 md:pt-48 pb-12 px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.p variants={cardVariant} className="text-sm tracking-[0.2em] uppercase opacity-70 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#704f62]"></span>
              Inquiries
            </motion.p>
            <motion.h1 variants={cardVariant} className="text-[48px] md:text-[72px] lg:text-[84px] leading-[1.05] cooper-light">
              Get in touch.
            </motion.h1>
            <motion.p variants={cardVariant} className="text-lg md:text-xl font-light opacity-90 leading-relaxed max-w-2xl">
              We welcome inquiries for residential, commercial, and hospitality projects. Please contact our studio using the form below, or reach out to our administrative team directly.
            </motion.p>
          </motion.div>
        </section>

        {/* 2. CONTACT CONTENT (Grid Layout) */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-10 lg:gap-16"
          >
            
            {/* Left Side: Information Cards */}
            <div className="w-full lg:w-2/5 flex flex-col gap-6">
              
              {/* Direct Contact Card */}
              <motion.div variants={cardVariant} className="p-8 md:p-10 border border-[#704f62]/20 rounded-[2rem] bg-[#FAF9F6] shadow-sm">
                <h3 className="text-[28px] cooper-light mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-widest uppercase opacity-60 font-bold mb-1">General Inquiries</p>
                    <a href="mailto:info@brightliv.com" className="text-lg font-light hover:opacity-70 transition-opacity">info@brightliv.com</a>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase opacity-60 font-bold mb-1">Press & Media</p>
                    <a href="mailto:press@brightliv.com" className="text-lg font-light hover:opacity-70 transition-opacity">press@brightliv.com</a>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase opacity-60 font-bold mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-lg font-light hover:opacity-70 transition-opacity">+1 (555) 123-4567</a>
                  </div>
                </div>
              </motion.div>

              {/* Location & Hours Card */}
              <motion.div variants={cardVariant} className="p-8 md:p-10 border border-[#704f62]/20 rounded-[2rem] bg-[#FAF9F6] shadow-sm">
                <h3 className="text-[28px] cooper-light mb-6">Headquarters</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-widest uppercase opacity-60 font-bold mb-1">Address</p>
                    <p className="text-lg font-light leading-relaxed">
                      124 Design Avenue, Suite 400<br />
                      New York, NY 10011<br />
                      United States
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase opacity-60 font-bold mb-1">Operating Hours</p>
                    <p className="text-lg font-light leading-relaxed">
                      Monday — Friday<br />
                      9:00 AM — 6:00 PM EST
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Side: The Contact Form */}
            <motion.div variants={cardVariant} className="w-full lg:w-3/5">
              <div className="p-8 md:p-12 border border-[#704f62]/20 rounded-[2.5rem] bg-[#FAF9F6] shadow-sm h-full">
                <h2 className="text-[32px] md:text-[40px] cooper-light mb-8">
                  Submit an Inquiry
                </h2>
                
                <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Name Row */}
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col w-full relative">
                      <label htmlFor="firstName" className="text-xs tracking-widest uppercase opacity-70 font-bold mb-2">First Name</label>
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
                      <label htmlFor="lastName" className="text-xs tracking-widest uppercase opacity-70 font-bold mb-2">Last Name</label>
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
                      <label htmlFor="email" className="text-xs tracking-widest uppercase opacity-70 font-bold mb-2">Email Address</label>
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
                      <label htmlFor="phone" className="text-xs tracking-widest uppercase opacity-70 font-bold mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        autoComplete="tel"
                        className="w-full bg-transparent border-b border-[#704f62]/30 py-3 text-lg font-light focus:outline-none focus:border-[#704f62] transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type Dropdown */}
                  <div className="flex flex-col w-full relative">
                    <label htmlFor="inquiryType" className="text-xs tracking-widest uppercase opacity-70 font-bold mb-2">Inquiry Type</label>
                    <select 
                      id="inquiryType"
                      name="inquiryType"
                      className="w-full bg-transparent border-b border-[#704f62]/30 py-3 text-lg font-light focus:outline-none focus:border-[#704f62] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="residential">Residential Project</option>
                      <option value="commercial">Commercial Project</option>
                      <option value="hospitality">Hospitality Project</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col w-full relative">
                    <label htmlFor="message" className="text-xs tracking-widest uppercase opacity-70 font-bold mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      className="w-full bg-transparent border-b border-[#704f62]/30 py-3 text-lg font-light focus:outline-none focus:border-[#704f62] transition-colors resize-none"
                      placeholder="Please provide details regarding your project scope, location, and timeline..."
                    ></textarea>
                  </div>

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

      </main>
    </>
  );
};