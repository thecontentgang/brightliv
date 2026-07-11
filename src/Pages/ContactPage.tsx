import React from 'react';
import { motion } from 'framer-motion';

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
                  <p className="text-lg font-light">+1 (555) 123-4567</p>
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
                      className="w-full bg-transparent border-b border-[#704f62]/30 py-3 text-lg font-light focus:outline-none focus:border-[#704f62] transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-col w-full relative">
                    <label htmlFor="lastName" className="text-xs tracking-widest uppercase opacity-70 font-bold mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
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
                      className="w-full bg-transparent border-b border-[#704f62]/30 py-3 text-lg font-light focus:outline-none focus:border-[#704f62] transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="flex flex-col w-full relative">
                    <label htmlFor="phone" className="text-xs tracking-widest uppercase opacity-70 font-bold mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
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
  );
};