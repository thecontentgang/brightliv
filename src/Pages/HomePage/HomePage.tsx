import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../../components/SEO';
import { Hero } from './HeroSection';
import { About } from './AboutSection';
import { ServicesSection } from './ServicesSection';
// import { PortfolioSection } from './PortfolioSection';
import { WhyChooseUs } from './WhyChooseUs';
import { TestimonialSection } from './TestimonialSection';
import { CTASection } from './CTASection';
import { FeaturedProjectSection } from './ProjectsSection';
import { ElegantInfrastructure } from './HandleThings';
import { DifferenceSection } from './DifferenceSection';


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
      <SEO
        title="Best Interior Designers in Hyderabad | Bright Liv"
        description="Transform your home with Bright Liv, expert interior designers in Hyderabad. We create stylish, functional interiors for homes, villas, apartments, and offices."
        keywords="interior design Hyderabad, luxury villa architects, commercial interior design, custom home solutions, architecture firm Hyderabad, BrightLiv Interiors"
        canonical="/"
      />
      <Helmet>
        {/* Theme / Mobile */}
        <meta name="theme-color" content="#FAF9F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="w-full min-h-screen bg-[#FAF9F6] text-[#704f62] overflow-hidden font-sans">
        {/* SEO H1 */}
        <h1 className="sr-only">
          Transforming Spaces with Expert Interior Designers in Hyderabad
        </h1>

        <Hero />
        <About />
        <ElegantInfrastructure />
        <DifferenceSection />
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