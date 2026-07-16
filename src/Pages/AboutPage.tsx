import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const SITE_URL = 'https://www.brightliv.com'; // ← replace with your real domain
const OG_IMAGE = `${SITE_URL}/og-about.jpg`;   // ← 1200x630 image, distinct from homepage OG image

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Brightliv Interiors',
  url: `${SITE_URL}/about`,
  description:
    'Brightliv Interiors is a full-service interior architecture firm based in Hyderabad with 11 years of experience, 200+ spaces designed across 15 cities.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Brightliv Interiors',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    foundingDate: '2015',
    description:
      'Brightliv Interiors combines practical functionality with enduring aesthetics, delivering residential, commercial, and hospitality design projects.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    founder: [
      {
        '@type': 'Person',
        name: 'Bhargav',
        jobTitle: 'Founder & Principal Director',
      },
      {
        '@type': 'Person',
        name: 'Hasini',
        jobTitle: 'Founder',
      },
    ],
    employee: [
      { '@type': 'Person', name: 'Sarah Jenkins', jobTitle: 'Director of Operations' },
      { '@type': 'Person', name: 'David Chen', jobTitle: 'Lead Architect' },
      { '@type': 'Person', name: 'Amara Singh', jobTitle: 'Senior Interior Designer' },
      { '@type': 'Person', name: 'Michael Brooks', jobTitle: 'Head of Procurement' },
      { '@type': 'Person', name: 'Jessica Taylor', jobTitle: 'Project Manager' },
    ],
  },
};

// Framer Motion Variants for a soft card reveal
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

export const About: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About Us | Brightliv Interiors — 11 Years of Design Excellence</title>
        <meta
          name="description"
          content="Meet the team behind Brightliv Interiors. 11 years of experience, 200+ spaces designed across 15 cities, led by Founder & Principal Director Bhargav and Hasini."
        />
        <meta
          name="keywords"
          content="about Brightliv Interiors, interior design firm Hyderabad, Bhargav Hasini founder, interior architecture team, design studio Hyderabad"
        />
        <meta name="author" content="Brightliv Interiors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/about`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta property="og:site_name" content="Brightliv Interiors" />
        <meta
          property="og:title"
          content="About Us | Brightliv Interiors — 11 Years of Design Excellence"
        />
        <meta
          property="og:description"
          content="Designing life, beautifully structured. Discover our story, our founders, and the team behind 200+ spaces designed across 15 cities."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${SITE_URL}/about`} />
        <meta
          name="twitter:title"
          content="About Us | Brightliv Interiors — 11 Years of Design Excellence"
        />
        <meta
          name="twitter:description"
          content="Designing life, beautifully structured. Discover our story, our founders, and the team behind 200+ spaces designed across 15 cities."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Theme */}
        <meta name="theme-color" content="#FAF9F6" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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
                src="/about-img.webp"
                alt="Brightliv Signature Space"
                className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
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

        
        
        {/* 7. CTA CARD */}
        <section className="w-full py-32 px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
  <motion.div
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, margin: "-50px" }} 
    variants={cardVariant}
    className="relative w-full text-[var(--color-background)] rounded-[40px] p-12 md:p-20 text-center shadow-2xl overflow-hidden group"
  >
    {/* ── Background Image & Overlays ── */}
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <img 
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
        alt="Interior Sanctuary" 
        className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
      />
      {/* Brand-tinted overlay for readability using your primary color */}
      <div className="absolute inset-0 bg-[var(--color-primary)]/80 mix-blend-multiply" />
      {/* Secondary dark overlay to ensure contrast */}
      <div className="absolute inset-0 bg-black/20" />
    </div>

    {/* ── Content ── */}
    <div className="relative z-10 flex flex-col items-center">
      <p className="text-[40px] md:text-[56px] text-white cooper-light mb-6 drop-shadow-lg">
        Let's build your sanctuary.
      </p>
      <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-[var(--color-background)]/90 drop-shadow-md">
        Whether it's a single room refresh or a complete architectural overhaul, our team is ready to bring your vision to life.
      </p>
      <button className="px-10 py-5 bg-[var(--color-background)] text-[var(--color-primary)] rounded-full text-lg font-bold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        Inquire Now
      </button>
    </div>
  </motion.div>
</section>

      </main>
    </>
  );
};