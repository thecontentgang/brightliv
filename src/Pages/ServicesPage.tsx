import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const SITE_URL = 'https://www.brightliv.com'; // ← replace with your real domain
const OG_IMAGE = `${SITE_URL}/og-services.jpg`; // ← 1200x630 image, distinct from other pages

// --- CATEGORIZED SERVICES DATA (Now with Images) ---
const serviceCategories = [
  {
    title: "Core Architecture & Millwork",
    description: "The foundational elements that define the structure and flow of your space.",
    services: [
      { name: "False Ceiling", desc: "Enhance your interiors with premium false ceiling designs that add depth, elegance, and a luxurious touch.", image: "/Service-Images/false-ceiling.webp" },
      { name: "Modular Woodwork", desc: "Experience bespoke modular interiors that combine style and functionality with premium home appliances.", image: "/Service-Images/wood-work.webp" },
      { name: "Wall Cladding", desc: "Give your walls a modern and durable upgrade with stone and wooden cladding, crafted for timeless appeal.", image: "/Service-Images/wall-cladding.webp" },
      { name: "Aluminium Partitions", desc: "Create smart, modern divisions in your space with durable aluminium partitions, a blend of utility and design.", image: "/Service-Images/aluminium-partitions.webp" },
      { name: "Premium Doors", desc: "From wooden to glass, we provide luxury door solutions designed to enhance both aesthetics and security.", image: "/Service-Images/premium-doors.webp" },
      { name: "Stone & Steel Works", desc: "Add structure and style to your interiors with custom stone and steel works crafted for long-term beauty.", image: "/Service-Images/stone-steel-works.webp" },
    ]
  },
  {
    title: "Surfaces & Finishes",
    description: "Textures and tones that create the atmospheric baseline of your home.",
    services: [
      { name: "Painting", desc: "Give your walls a luxurious, flawless finish with high-quality painting services designed to elevate your space.", image: "/Service-Images/painting.webp" },
      { name: "Wallpapers", desc: "Transform your walls with elegant wallpapers that add warmth, personality, and a touch of luxury to your interiors.", image: "/Service-Images/wallpapers.webp" },
      { name: "Wooden Flooring", desc: "Step onto comfort with high-quality wooden flooring, designed for a premium look and lasting durability.", image: "/Service-Images/wooden-flooring.webp" },
      { name: "Ceramic Tiles", desc: "Explore a wide range of luxury ceramic tiles, perfect for elegant walls, floors, and bathrooms.", image: "/Service-Images/ceramic-tiles.png" },
      { name: "Granite Works", desc: "Bring natural beauty to your interiors with premium granite finishes, ideal for kitchens and countertops.", image: "/Service-Images/granite-works.webp" },
    ]
  },
  {
    title: "Furnishings & Textiles",
    description: "Curated layers of comfort, art, and custom upholstery.",
    services: [
      { name: "Luxury Sofas", desc: "Discover custom-made luxury sofas, handcrafted for superior comfort and timeless elegance.", image: "/Service-Images/luxury-sofas.webp" },
      { name: "Bespoke Beds", desc: "Sleep in style with premium design, utilizing high-grade plywood and imported luxury fabrics.", image: "/Service-Images/beds.webp" },
      { name: "Home Furniture", desc: "From dining to decor, our premium home furniture collection adds sophistication to every corner.", image: "/Service-Images/home-furniture.webp" },
      { name: "Long Curtains", desc: "Add grandeur to your rooms with beautifully stitched, luxury long curtains that elevate every window space.", image: "/Service-Images/curtains.webp" },
      { name: "Window Blinds", desc: "Enhance privacy and aesthetics with premium blinds tailored to suit both modern and classic interiors.", image: "/Service-Images/window-blinds.webp" },
      { name: "Outdoor Furniture", desc: "Make the outdoors as luxurious as your indoors with durable, stylish outdoor furniture crafted to impress.", image: "/Service-Images/outdoor-furniture.webp" },
      { name: "Designer Swings (Zula)", desc: "Add charm and comfort to your balconies or living areas with beautifully crafted designer swings.", image: "/Service-Images/zula.webp" },
    ]
  },
  {
    title: "Specialized Installations",
    description: "Advanced integrations for modern luxury, recreation, and peace of mind.",
    services: [
      { name: "Home Theaters", desc: "Experience cinematic luxury at home with our custom home theater setups that blend design with technology.", image: "/Service-Images/home-theatre.webp" },
      { name: "Home Lifts", desc: "We install premium home lifts that combine convenience with modern aesthetics for luxury living.", image: "/Service-Images/home-lifts.webp" },
      { name: "Swimming Pools", desc: "Redefine recreation with luxury swimming pools, designed for relaxation and built with precision.", image: "/Service-Images/swimming-pool.webp" },
      { name: "Invisible Grills", desc: "Ensure safety without compromising style through invisible balcony grills with a clean, premium finish.", image: "/Service-Images/invisible-grill.webp" },
      { name: "Pest Control", desc: "Protect your interiors with professional pest control services ensuring a hygienic and comfortable home.", image: "/Service-Images/pest-control.webp" },
    ]
  }
];

// Flatten all services into a single ItemList for structured data (order preserved)
// const allServicesFlat = serviceCategories.flatMap((cat) => cat.services);

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Interior Design and Architecture Services',
  provider: {
    '@type': 'Organization',
    name: 'Brightliv Interiors',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
  },
  areaServed: 'Hyderabad, Telangana, India',
  description:
    'Comprehensive interior design and architecture services covering core millwork, surfaces and finishes, furnishings and textiles, and specialized installations.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Brightliv Interiors Service Catalog',
    itemListElement: serviceCategories.map((category) => ({
      '@type': 'OfferCatalog',
      name: category.title,
      itemListElement: category.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.desc,
        },
      })),
    })),
  },
};

// Breadcrumb structured data
const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
  ],
};

// Framer Motion Variants
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Our Services | Brightliv Interiors — Design, Build & Furnish</title>
        <meta
          name="description"
          content="Explore Brightliv Interiors' full service suite: false ceilings, modular woodwork, wall cladding, flooring, luxury furniture, home theaters, pools, and more. 23 specialized services across 4 categories."
        />
        <meta
          name="keywords"
          content="interior design services Hyderabad, false ceiling design, modular woodwork, wall cladding, luxury furniture, home theater installation, swimming pool design, B2B interior solutions"
        />
        <meta name="author" content="Brightliv Interiors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/services`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/services`} />
        <meta property="og:site_name" content="Brightliv Interiors" />
        <meta
          property="og:title"
          content="Our Services | Brightliv Interiors — Design, Build & Furnish"
        />
        <meta
          property="og:description"
          content="From structural modifications to the final layer of textiles — comprehensive interior design and architecture services executed flawlessly."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${SITE_URL}/services`} />
        <meta
          name="twitter:title"
          content="Our Services | Brightliv Interiors — Design, Build & Furnish"
        />
        <meta
          name="twitter:description"
          content="From structural modifications to the final layer of textiles — comprehensive interior design and architecture services executed flawlessly."
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

      <main className="w-full min-h-screen bg-[#FAF9F6] text-[#704f62] overflow-hidden font-sans pb-32">

        {/* 1. HEADER SECTION */}
        <section className="w-full pt-32 md:pt-48 pb-16 px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4 max-w-4xl mx-auto"
          >
            <p className="text-sm tracking-[0.2em] uppercase opacity-70 flex items-center justify-center gap-4 w-full">
              <span className="w-8 md:w-12 h-[1px] bg-[#704f62]"></span>
              Our Expertise
              <span className="w-8 md:w-12 h-[1px] bg-[#704f62]"></span>
            </p>
            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] leading-[1.05] cooper-light">
              Comprehensive <br /> Design Services.
            </h1>
            <p className="text-lg font-light opacity-80 mt-4 leading-relaxed max-w-2xl mx-auto">
              From structural modifications to the final layer of textiles, our comprehensive service suite ensures every detail of your vision is executed flawlessly.
            </p>
          </motion.div>
        </section>

        {/* 2. CATEGORIZED SERVICES FEED */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-24 md:gap-32">
            {serviceCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
                className="flex flex-col gap-10"
              >

                {/* Category Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#704f62]/20 pb-6">
                  <div className="flex flex-col gap-2 w-full md:w-2/3">
                    <span className="text-xs tracking-widest uppercase opacity-50 font-bold">Phase 0{catIndex + 1}</span>
                    <h2 className="text-[32px] md:text-[48px] cooper-light leading-tight">
                      {category.title}
                    </h2>
                  </div>
                  <div className="w-full md:w-1/3 text-left md:text-right">
                    <p className="text-base font-light opacity-80">{category.description}</p>
                  </div>
                </div>

                {/* Service Cards Grid (Updated with Images) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {category.services.map((service, index) => (
                    <motion.div
                      key={index} variants={cardVariant}
                      className="border border-[#704f62]/20 rounded-[2rem] bg-[#FAF9F6] hover:shadow-xl transition-all duration-500 group flex flex-col overflow-hidden"
                    >
                      {/* Image Container with Zoom Effect */}
                      <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
                        <img
                          src={service.image}
                          alt={`${service.name} — Brightliv Interiors`}
                          loading="lazy"
                          className="w-full h-full object-cover  opacity-100 mix-blend-multiply group-hover:scale-110 transition-all duration-700 ease-in-out"
                        />
                      </div>

                      {/* Text & Interaction Container */}
                      <div className="p-8 flex flex-col flex-grow justify-between bg-[#FAF9F6] group-hover:bg-[#704f62] group-hover:text-[#FAF9F6] transition-colors duration-500">
                        <div>
                          <h3 className="text-[24px] cooper-light mb-3">{service.name}</h3>
                          <p className="font-light opacity-80 text-sm leading-relaxed">
                            {service.desc}
                          </p>
                        </div>

                       {/* Minimalist 'Expanding Line' Interaction */}
                      <div className="mt-8 flex items-center gap-4 cursor-pointer overflow-hidden">
                        {/* Expanding Line */}
                        <div className="w-8 h-[1px] bg-[#704f62]/40 group-hover:w-16 group-hover:bg-[#FAF9F6] transition-all duration-500 ease-in-out"></div>

                        {/* Text */}
                        <span className="text-xs tracking-[0.2em] uppercase font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                          Book Now
                        </span>

                        {/* Sliding Arrow (Fades in and slides right) */}
                        <svg
                          className="w-4 h-4 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </div>
                      </div>

                    </motion.div>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. B2B / ENTERPRISE BANNER (Unchanged) */}
        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto mt-32">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariant}
            className="w-full bg-[#704f62] text-[#FAF9F6] rounded-[2.5rem] p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row justify-between items-center gap-12 shadow-xl relative overflow-hidden"
          >
            {/* Decorative Background Element */}
            <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#FAF9F6]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="w-full lg:w-2/3 flex flex-col gap-6 relative z-10 text-center lg:text-left">
              <p className="text-sm tracking-[0.2em] uppercase opacity-70">Enterprise & Developer Solutions</p>
              <h2 className="text-[36px] md:text-[56px] cooper-light leading-[1.1]">
                B2B Services for High Rise Apartments & Villas
              </h2>
              <p className="text-lg font-light opacity-90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We offer end-to-end interior solutions for builders, commercial developers, and luxury villa properties. Partner with BrightLiv to ensure timely delivery, scaleable execution, and consistent quality across your high-volume projects.
              </p>
            </div>

            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end relative z-10">
              <button className="px-8 py-5 bg-[#FAF9F6] text-[#704f62] rounded-full text-lg font-medium tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-3">
                Partner With Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </motion.div>
        </section>

      </main>
    </>
  );
};