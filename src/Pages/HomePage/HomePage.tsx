import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from './HeroSection';
import { About } from './AboutSection';
import { ServicesSection } from './ServicesSection';
// import { PortfolioSection } from './PortfolioSection';
import { WhyChooseUs } from './WhyChooseUs';
import { TestimonialSection } from './TestimonialSection';
import { CTASection } from './CTASection';
import { FeaturedProjectSection } from './ProjectsSection';
import { ElegantInfrastructure } from './HandleThings';


const SITE_URL = 'https://www.brightliv.com'; // ← replace with your real domain
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;   // ← 1200x630 social preview image

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'BrightLiv Interiors',
  image: OG_IMAGE,
  url: SITE_URL,
  description:
    'BrightLiv Interiors designs luxury villas, modern architecture, interior spaces, and commercial projects that inspire and elevate everyday living.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  areaServed: 'Hyderabad, Telangana, India',
  priceRange: '$$',
  sameAs: [
    'https://www.instagram.com/brightliv', // ← update or remove unused
    'https://www.facebook.com/brightliv',
    'https://www.linkedin.com/company/brightliv',
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Luxury Villa Design' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior Design' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Architecture' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Spaces' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Interior Solutions' } },
  ],
};

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>BrightLiv Interiors | Luxury Villas, Architecture & Interior Design</title>
        <meta
          name="description"
          content="BrightLiv Interiors crafts luxury villas, modern architecture, interior design, and commercial spaces that inspire and elevate everyday living. Based in Hyderabad."
        />
        <meta
          name="keywords"
          content="interior design Hyderabad, luxury villa architects, commercial interior design, custom home solutions, architecture firm Hyderabad, BrightLiv Interiors"
        />
        <meta name="author" content="BrightLiv Interiors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="BrightLiv Interiors" />
        <meta
          property="og:title"
          content="BrightLiv Interiors | Luxury Villas, Architecture & Interior Design"
        />
        <meta
          property="og:description"
          content="Spaces that inspire and elevate everyday living — luxury villas, interiors, architecture, commercial spaces, and custom solutions."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SITE_URL} />
        <meta
          name="twitter:title"
          content="BrightLiv Interiors | Luxury Villas, Architecture & Interior Design"
        />
        <meta
          name="twitter:description"
          content="Spaces that inspire and elevate everyday living — luxury villas, interiors, architecture, commercial spaces, and custom solutions."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Theme / Mobile */}
        <meta name="theme-color" content="#FAF9F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="w-full min-h-screen bg-[#FAF9F6] text-[#704f62] overflow-hidden font-sans">
        <Hero />
        <About />
        <ElegantInfrastructure />
        <ServicesSection />
        <FeaturedProjectSection />
        <WhyChooseUs />
        <TestimonialSection />
        <CTASection />
      </main>
    </>
  );
};

export default Home;