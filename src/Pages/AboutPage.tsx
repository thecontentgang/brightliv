import React from 'react';
import { motion } from 'framer-motion';

// Framer Motion Variants for a soft card reveal
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

export const About: React.FC = () => {
  return (
    <main className="w-full bg-[var(--color-background)] text-[var(--color-primary)] overflow-hidden font-sans">
      
      {/* 1. HERO & INTRO CARD */}
      <section className="w-full pt-32 md:pt-48 pb-20 px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="flex flex-col gap-16"
        >
          {/* Top Row: Typography & Info Card */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-16">
            
            {/* Left Side - Typography */}
            <motion.div variants={cardVariant} className="w-full lg:w-3/5">
              <p className="text-sm tracking-[0.2em] uppercase mb-6 opacity-70 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[var(--color-primary)]"></span>
                The Studio
              </p>
              <h1 className="text-[52px] md:text-[72px] lg:text-[84px] leading-[1.05] cooper-light">
                Designing life, <br /> beautifully <span className="italic opacity-80">structured.</span>
              </h1>
            </motion.div>

            {/* Right Side - Info Card */}
            <motion.div variants={cardVariant} className="w-full lg:w-2/5">
              <div className="p-8 md:p-10 border border-[var(--color-primary)]/20 rounded-[2rem] bg-[var(--color-background)] hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group">
                {/* Subtle gradient glow effect on hover */}
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-[var(--color-primary)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-primary)]/10 transition-colors duration-500"></div>
                
                <p className="text-lg md:text-xl font-light opacity-90 leading-relaxed relative z-10 text-[var(--color-body)]">
                  Brightliv is a full-service interior architecture firm. We believe in the power of clean lines, thoughtful textures, and spaces that reflect the people who inhabit them. 
                </p>
                
                {/* Decorative Scroll Down Indicator */}
                <div className="mt-8 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full border border-[var(--color-primary)]/30 flex items-center justify-center text-[var(--color-primary)]">
                    <svg className="w-5 h-5 animate-bounce mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </div>
                  <span className="text-xs uppercase tracking-[0.15em] font-medium opacity-70 text-[var(--color-primary)]">Explore</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Hero Image Card */}
          <motion.div 
            variants={cardVariant} 
            className="w-full h-[40vh] md:h-[55vh] rounded-[2.5rem] overflow-hidden border border-[var(--color-primary)]/10 relative group"
          >
            <img 
              src="/api/placeholder/1200/600" 
              alt="Brightliv Signature Space" 
              className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
            />
            {/* Soft color overlay to blend perfectly with the background */}
            <div className="absolute inset-0 bg-[var(--color-primary)]/5 mix-blend-overlay pointer-events-none"></div>
          </motion.div>
          
        </motion.div>
      </section>

      {/* 2. OUR STORY CARD */}
      <section className="w-full py-12 px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
          variants={cardVariant}
          className="w-full p-8 md:p-12 lg:p-16 border border-[var(--color-primary)]/20 rounded-[2rem] bg-[var(--color-background)] shadow-sm flex flex-col md:flex-row gap-10 lg:gap-16"
        >
          {/* Section Title */}
          <div className="w-full md:w-1/3">
            <h2 className="text-[36px] md:text-[48px] cooper-light leading-tight mb-4 text-[var(--color-heading)]">
              Our Story
            </h2>
            <div className="w-16 h-[1px] bg-[var(--color-primary)]/40"></div>
          </div>

          {/* Formal Text Content */}
          <div className="w-full md:w-2/3 space-y-6 text-lg font-light opacity-90 leading-relaxed text-[var(--color-body)]">
            <p>
              Brightliv Interiors was established with a clear objective: to provide exceptional interior design services that combine practical functionality with enduring aesthetics. Over the past eleven years, our firm has steadily grown from a local consultancy into a highly recognized design practice.
            </p>
            <p>
              Our approach is grounded in professional rigor and careful planning. We understand that a successful project requires not only creative vision but also strict project management, budget adherence, and clear communication with our clients. 
            </p>
            <p>
              Today, our portfolio includes residential, commercial, and hospitality projects across multiple regions. We remain committed to our founding principles of quality craftsmanship, ethical sourcing of materials, and delivering highly functional spaces tailored to our clients' exact specifications.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. FOUNDER & LEADERSHIP CARD */}
      {/* 3. FOUNDER & LEADERSHIP CARD */}
      <section className="w-full py-12 px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
          variants={cardVariant}
          className="w-full p-8 md:p-12 border border-[var(--color-primary)]/20 rounded-[2rem] bg-[var(--color-background)] shadow-sm flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Founder Image */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
            <div className="w-full max-w-sm aspect-[4/5] rounded-[1.5rem] overflow-hidden border border-[var(--color-primary)]/20 shadow-md">
              <img 
                src="/founders.png" 
                alt="Bhargav - Founder" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Founder Biography */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center">
            <p className="text-sm tracking-[0.15em] uppercase mb-2 opacity-70 font-medium text-[var(--color-primary)]">
              Founder & Principal Director
            </p>
            <h2 className="text-[32px] md:text-[40px] cooper-light mb-6 text-[var(--color-heading)]">
              Bhargav & Hasini
            </h2>
            
            <div className="space-y-6 text-lg font-light opacity-90 leading-relaxed text-[var(--color-body)]">
              <p>
                Bhargav founded Brightliv Interiors following a distinguished career collaborating with several of Hyderabad's most esteemed architectural practices. He holds an advanced degree in Interior Architecture and is an active member of premier professional design councils.
              </p>
              <p>
                As the Principal Director, he oversees the strategic and creative trajectory of the studio. Known for his rigorous, client-centric methodology, Bhargav ensures that the Hyderabad-based team adheres to the highest standards of excellence, delivering spaces that are both structurally profound and flawlessly executed.
              </p>
              <p>
                He remains directly involved in high-level client consultations and maintains a hands-on approach to quality assurance across all ongoing developments. His unwavering commitment to architectural integrity and operational reliability forms the bedrock of the firm's growing legacy in the region.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. STATS CARDS (Highlighting 11 Years) */}
      <section className="w-full py-16 px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { num: '11', label: 'Years of Experience', highlight: true },
            { num: '200+', label: 'Spaces Designed', highlight: false },
            { num: '15', label: 'Global Cities', highlight: false },
            { num: '1', label: 'Unified Vision', highlight: false },
          ].map((stat, i) => (
            <motion.div 
              key={i} variants={cardVariant} 
              className={`p-8 rounded-3xl flex flex-col justify-center items-center text-center border transition-all duration-300 ${
                stat.highlight 
                  ? 'bg-[var(--color-primary)] text-[var(--color-background)] border-[var(--color-primary)] scale-105 shadow-xl z-10' 
                  : 'border-[var(--color-primary)]/20 bg-[var(--color-background)] text-[var(--color-primary)]'
              }`}
            >
              <span className="text-[48px] md:text-[56px] cooper-light">{stat.num}</span>
              <span className={`text-sm tracking-widest uppercase mt-2 ${stat.highlight ? 'opacity-90' : 'opacity-60'}`}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. INFORMATION / METHODOLOGY CARDS */}
      <section className="w-full py-24 px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariant}
          className="mb-12"
        >
          <h2 className="text-[36px] md:text-[48px] cooper-light text-[var(--color-heading)]">Our Approach</h2>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Info Card 1 */}
          <motion.div variants={cardVariant} className="p-10 border border-[var(--color-primary)]/20 bg-[var(--color-card)] rounded-3xl flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300">
            <span className="text-2xl cooper-light border-b border-[var(--color-primary)]/20 pb-4 text-[var(--color-primary)]">01. Discovery</span>
            <p className="font-light opacity-80 leading-relaxed text-lg text-[var(--color-body)]">
              Over the past 11 years, we've learned that great design starts with listening. We dive deep into how you live, what you love, and what frustrates you about your current space. We map out your daily routines to ensure our design serves your lifestyle perfectly.
            </p>
          </motion.div>

          {/* Info Card 2 */}
          <motion.div variants={cardVariant} className="p-10 border border-[var(--color-primary)]/20 bg-[var(--color-card)] rounded-3xl flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300">
            <span className="text-2xl cooper-light border-b border-[var(--color-primary)]/20 pb-4 text-[var(--color-primary)]">02. Conceptualization</span>
            <p className="font-light opacity-80 leading-relaxed text-lg text-[var(--color-body)]">
              We translate your needs into a visual narrative. This stage involves material sampling, spatial planning, and creating 3D renderings that allow you to step inside your future home before a single wall is painted.
            </p>
          </motion.div>

          {/* Info Card 3 */}
          <motion.div variants={cardVariant} className="p-10 border border-[var(--color-primary)]/20 bg-[var(--color-card)] rounded-3xl flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300">
            <span className="text-2xl cooper-light border-b border-[var(--color-primary)]/20 pb-4 text-[var(--color-primary)]">03. Realization</span>
            <p className="font-light opacity-80 leading-relaxed text-lg text-[var(--color-body)]">
              Our dedicated procurement and project management teams take over. From custom furniture fabrication to coordinating with master craftsmen, we ensure every detail is executed flawlessly, delivering a space that exceeds expectations.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 6. TEAM CARDS (5 Employees) */}
      <section className="w-full py-24 bg-[var(--color-primary)]/5 border-y border-[var(--color-primary)]/10">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariant}
            className="mb-16 text-center"
          >
            <h2 className="text-[36px] md:text-[48px] cooper-light text-[var(--color-heading)]">Our Core Team</h2>
            <p className="mt-4 text-lg font-light opacity-70 text-[var(--color-body)]">Dedicated professionals ensuring project excellence.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { 
                name: 'Sarah Jenkins', 
                role: 'Director of Operations', 
                desc: 'Sarah oversees project timelines, budget allocations, and day-to-day studio management to ensure efficient project delivery.' 
              },
              { 
                name: 'David Chen', 
                role: 'Lead Architect', 
                desc: 'David manages structural planning and spatial configurations, ensuring all designs comply with building codes and engineering standards.' 
              },
              { 
                name: 'Amara Singh', 
                role: 'Senior Interior Designer', 
                desc: 'Amara develops comprehensive design concepts and material specifications tailored specifically to client requirements.' 
              },
              { 
                name: 'Michael Brooks', 
                role: 'Head of Procurement', 
                desc: 'Michael directs the sourcing and purchasing of furniture, fixtures, and materials while negotiating vendor contracts.' 
              },
              { 
                name: 'Jessica Taylor', 
                role: 'Project Manager', 
                desc: 'Jessica acts as the primary point of contact for clients and contractors, coordinating all site activities during construction.' 
              },
            ].map((employee, i) => (
              <motion.div 
                key={i} variants={cardVariant} 
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-6 bg-[var(--color-background)] border border-[var(--color-primary)]/20 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 shadow-sm"
              >
                {/* Employee Image Placeholder */}
                <div className="w-32 h-32 rounded-full bg-[var(--color-border-light)] overflow-hidden mb-6 border-4 border-[var(--color-background)] shadow-sm">
                  <img 
                    src={`/api/placeholder/200/200?text=${employee.name.split(' ')[0]}`} 
                    alt={employee.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-[24px] cooper-light mb-1 text-[var(--color-heading)]">{employee.name}</h3>
                <span className="text-xs font-bold tracking-widest uppercase opacity-60 mb-4 text-[var(--color-primary)]">{employee.role}</span>
                <p className="text-sm font-light opacity-80 leading-relaxed px-2 text-[var(--color-body)]">
                  {employee.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. CTA CARD */}
      <section className="w-full py-32 px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariant}
          className="w-full bg-[var(--color-primary)] text-[var(--color-background)] rounded-[40px] p-12 md:p-20 text-center shadow-2xl"
        >
          <h2 className="text-[40px] md:text-[56px] cooper-light mb-6">
            Let's build your sanctuary.
          </h2>
          <p className="text-lg md:text-xl font-light opacity-80 max-w-2xl mx-auto mb-10 text-[var(--color-background)]/80">
            Whether it's a single room refresh or a complete architectural overhaul, our team is ready to bring your vision to life.
          </p>
          <button className="px-10 py-5 bg-[var(--color-background)] text-[var(--color-primary)] rounded-full text-lg font-medium tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg">
            Inquire Now
          </button>
        </motion.div>
      </section>

    </main>
  );
};