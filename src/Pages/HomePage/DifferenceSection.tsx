import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Dummy Data ---
const differenceData = [
  {
    id: 1,
    title: "Master BedRoom",
    before: "/before-after/mbr-before.png",
    after: "/before-after/mbr-after.png",
  },
  {
    id: 2,
    title: "Kids BedRoom",
    before: "/before-after/kbr-before.png",
    after: "/before-after/kbr-after.png",
  },
  {
    id: 3,
    title: "Kitchen",
    before: "/before-after/kitchen-before.png",
    after: "/before-after/kitchen-after.png",
  },
  {
    id: 4,
    title: "Master BedRoom TV",
    before: "/before-after/tv-before.png",
    after: "/before-after/tv-after.png",
  },
  {
    id: 5,
    title: "Living Room TV",
    before: "/before-after/tv-before.png",
    after: "/before-after/tv-after.png",
  },
  {
    id: 6,
    title: "Vanity",
    before: "/before-after/vanity-before.png",
    after: "/before-after/vanity-after.png",
  },
];

// --- Individual Card Component ---
const BeforeAfterCard: React.FC<{ data: typeof differenceData[0] }> = ({ data }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLDivElement>(null);
  const sliderLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          // Starts wiping when the top of the card is at 75% of the screen (coming up)
          start: "top 75%", 
          // Finishes wiping when the bottom of the card is at 45% of the screen (passing center)
          end: "bottom 45%", 
          scrub: 1, // 1 second smooth catch-up smoothing
        }
      });

      // Animate the After image clip-path (wipes from right to left)
      tl.fromTo(afterImageRef.current, 
        { clipPath: "inset(0% 100% 0% 0%)" }, 
        { clipPath: "inset(0% 0% 0% 0%)", ease: "none" }, 
        0
      );

      // Move the slider line in sync
      tl.fromTo(sliderLineRef.current,
        { left: "0%" },
        { left: "100%", ease: "none" },
        0
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div 
        ref={cardRef}
        className="relative w-full aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg group bg-gray-200"
      >
        {/* 1. BEFORE IMAGE */}
        <div className="absolute inset-0 w-full h-full">
          <img src={data.before} alt="Before" className="w-full h-full object-cover grayscale-[20%]" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white z-10">
            <span className="text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase drop-shadow-md">Before</span>
          </div>
        </div>

        {/* 2. AFTER IMAGE */}
        <div ref={afterImageRef} className="absolute inset-0 w-full h-full z-10">
          <img src={data.after} alt="After" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-white text-right">
            <span className="text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase drop-shadow-md">After</span>
          </div>
        </div>

        {/* 3. SLIDER LINE */}
        <div ref={sliderLineRef} className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 -ml-[2px] flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[var(--color-primary)]">
            <svg className="w-3 h-3 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-3 3m0 0l3 3m-3-3h14m0 0l-3-3m3 3l-3 3" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Label under the image */}
      <h3 className="text-lg md:text-xl cooper-light text-[var(--color-heading)] text-center">
        {data.title}
      </h3>
    </div>
  );
};

// --- Main Section Component ---
export const DifferenceSection: React.FC = () => {
  return (
    <section className="w-full bg-[var(--color-background)] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-xs tracking-[0.25em] uppercase font-bold text-[var(--color-accent)] mb-4">
            The Bright Arena Difference
          </span>
          <h2 className="text-[36px] md:text-[56px] cooper-light leading-[1.1] text-[var(--color-heading)] max-w-3xl">
            Beyond surface aesthetics. <br className="hidden md:block" />
            <span className="italic text-[var(--color-primary)]">True transformation.</span>
          </h2>
          <p className="mt-6 text-sm md:text-base font-light text-[var(--color-body)] max-w-xl opacity-80">
            Scroll down to see the before and after transformations of our recent projects.
          </p>
        </div>

        {/* ── Grid of 12 Before/After Images ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {differenceData.map((data) => (
            <BeforeAfterCard key={data.id} data={data} />
          ))}
        </div>

      </div>
    </section>
  );
};