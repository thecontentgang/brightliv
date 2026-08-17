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
    'https://www.instagram.com/brightliv',
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

// Added FAQ Schema for Google Search Rich Snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a home interior designer in Hyderabad do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Home Interior Designer in Hyderabad plans and develops residential spaces around layout, furniture, storage, lighting, materials, finishes, and everyday use. Depending on the project scope, the service can also include custom millwork, technical coordination, procurement, and execution.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does home interior design cost in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost of home interior design in Hyderabad depends on property size, existing condition, materials, custom furniture, electrical and technical requirements, finishes, and execution scope. A reliable estimate requires project-specific information rather than a generic number.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in turnkey home interior design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Turnkey home interior design can include design development, space planning, material selection, custom furniture, technical coordination, procurement, installation and finishing, depending on the agreed scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a home interior project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The timeline depends on property size, scope, design complexity, custom furniture, material availability, approvals, and site conditions. A compact apartment with a defined scope may move faster than a large villa with extensive custom work.',
      },
    },
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
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="w-full min-h-screen bg-[#FAF9F6] text-[#704f62] overflow-hidden font-sans">
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
        
        {/* Render the SEO Content Block at the very bottom */}
        <HomePageSEOContent />
      </main>
    </>
  );
};

export default Home;

// --- SEPARATE COMPONENT FOR THE MASSIVE TEXT BLOCK ---
// This keeps your main Home component clean.
// It uses subtle typography styling so it looks professional to humans, but Google can easily crawl it.

const HomePageSEOContent: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF9F6] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-[#4a3b45] text-sm md:text-base leading-relaxed space-y-8">
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#704f62]">Home Interior Design in Hyderabad</h2>
          <p>
            A well-designed home should feel effortless after the work is finished. Doors should open without awkward clashes, electrical points should appear where they are actually needed, air-conditioning lines should remain neatly integrated, and storage should work without taking over the room. Home Interior Design in Hyderabad therefore needs more than attractive finishes. It needs planning, detailing, and disciplined execution.
          </p>
          <p>
            BrightLiv creates modern residential interiors around that principle. Clean forms, thoughtful materials, and refined details shape the visible experience, while the less visible work—electrical planning, AC copper piping, safety systems, lighting coordination, and functional storage—receives the same attention. The result is a home designed not only to photograph well, but to work comfortably every day.
          </p>
          <p>
            With 11+ years of experience and 200+ completed projects, BrightLiv brings an interior-architecture approach to residential spaces across Hyderabad. Every home has different proportions, routines, requirements, and priorities, so the design process starts with understanding the space before deciding how it should look.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#704f62]">Interior Designers in Hyderabad for Thoughtful Homes</h3>
            <p>
              Searching for interior designers in Hyderabad usually starts with images. That makes sense; interiors are visual. But a portfolio cannot reveal everything that matters after handover. The quality of a home is also determined by the planning behind the walls, the accuracy of dimensions, the coordination of services, and the way individual details come together. BrightLiv approaches interior design in Hyderabad through both visual and functional thinking.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#704f62]">Design That Looks Beautiful Because It Works</h3>
            <p>
              The most satisfying interiors rarely depend on decoration alone. They work because hundreds of small decisions have been made correctly. The kitchen has enough working clearance, wardrobes use the available wall efficiently, lighting supports different activities, switches are accessible, and furniture sits naturally within the room rather than forcing movement around it.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#704f62]">Home Interior Design Services Built Around Real Living</h3>
            <p>
              BrightLiv provides Home Interior Design Services Hyderabad homeowners can approach as a complete design requirement rather than a collection of disconnected rooms. Living areas, kitchens, bedrooms, passages, vanities and other spaces can be developed as part of one coherent residential environment.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#704f62]">From 2BHK Apartments to Large Hyderabad Villas</h3>
            <p>
              A 2BHK home interior design Hyderabad project needs a different planning approach from a large independent house. Compact apartments have to make every useful area count, while larger properties provide more room but introduce their own challenges around proportion, zoning and visual continuity. Villa projects allow greater architectural expression, but larger rooms can easily become visually disconnected.
            </p>
          </div>
        </div>

        <div className="space-y-4 border-t border-gray-200 pt-8">
          <h3 className="text-xl font-medium text-[#704f62]">Technical Details That Stay Beautifully Hidden</h3>
          <p>
            A finished interior often hides the work that determines whether the space remains safe and convenient. Electrical routes, AC copper piping, fire systems, alarms and other services have to be considered before ceilings, walls and finishes are closed. Treating these elements as last-minute installations can create unnecessary visual compromises. BrightLiv gives these hidden works deliberate attention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-6">
          <div className="space-y-3">
            <h4 className="font-medium">Materials & Finishes</h4>
            <p className="text-sm">
              Materials create much of the tactile character of a home. Stone, timber, laminates, paint, wallpaper, fabrics, metals and custom millwork can each change how a room feels. BrightLiv works with surface finishes as part of the wider interior composition.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Modern & Minimal</h4>
            <p className="text-sm">
              Modern home interior design in Hyderabad is often associated with neutral colours, clean lines and uncluttered rooms. BrightLiv's minimalist approach focuses on clean visual language without sacrificing warmth.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Complete Coordination</h4>
            <p className="text-sm">
              Residential Interior Design Hyderabad requires coordination across rooms because one decision can affect another. The kitchen may influence electrical loads and service locations, while wardrobes affect bedroom circulation.
            </p>
          </div>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-xl font-medium text-[#704f62]">Why BrightLiv for Home Interior Design in Hyderabad</h3>
          <p>
            BrightLiv brings together modern interior architecture, functional planning, and attention to hidden technical details. The studio's work is not based on adding more decoration to every room. Instead, the design focuses on creating clarity, proportion, comfort and a consistent visual language. With a reported 99% client satisfaction and 100% timely delivery, we support our emphasis on dependable project execution.
          </p>
        </div>

        {/* FAQs Section formatted with Semantic DL/DT/DD tags for SEO */}
        <div className="mt-12 bg-white/50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-[#704f62] mb-6">Frequently Asked Questions</h2>
          <dl className="space-y-6">
            <div>
              <dt className="font-medium text-[#704f62]">1. What does a home interior designer in Hyderabad do?</dt>
              <dd className="mt-2 text-sm text-gray-600">A Home Interior Designer in Hyderabad plans and develops residential spaces around layout, furniture, storage, lighting, materials, finishes, and everyday use. Depending on the project scope, the service can also include custom millwork, technical coordination, procurement, and execution.</dd>
            </div>
            <div>
              <dt className="font-medium text-[#704f62]">2. How much does home interior design cost in Hyderabad?</dt>
              <dd className="mt-2 text-sm text-gray-600">The cost depends on property size, existing condition, materials, custom furniture, electrical and technical requirements, finishes, and execution scope. A reliable estimate requires project-specific information rather than a generic number.</dd>
            </div>
            <div>
              <dt className="font-medium text-[#704f62]">3. What is included in turnkey home interior design?</dt>
              <dd className="mt-2 text-sm text-gray-600">Turnkey home interior design can include design development, space planning, material selection, custom furniture, technical coordination, procurement, installation and finishing, depending on the agreed scope.</dd>
            </div>
            <div>
              <dt className="font-medium text-[#704f62]">4. How long does a home interior project take?</dt>
              <dd className="mt-2 text-sm text-gray-600">The timeline depends on property size, scope, design complexity, custom furniture, material availability, approvals, and site conditions. Proper planning before execution helps reduce avoidable delays.</dd>
            </div>
            <div>
              <dt className="font-medium text-[#704f62]">5. Why are hidden technical details important in interiors?</dt>
              <dd className="mt-2 text-sm text-gray-600">Hidden technical work affects safety, comfort, and long-term usability even though it may never appear in photographs. Electrical points, AC copper piping, fire systems, alarms, and gas monitoring need appropriate planning before surfaces are closed.</dd>
            </div>
            <div>
              <dt className="font-medium text-[#704f62]">6. How should the best interior designers in Hyderabad be selected?</dt>
              <dd className="mt-2 text-sm text-gray-600">The best interior designers should be assessed through relevant project experience, portfolio quality, design approach, technical understanding, material knowledge, execution capability, and communication.</dd>
            </div>
          </dl>
        </div>

      </div>
    </section>
  );
};