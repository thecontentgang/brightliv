import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

// Scroll Entrance Animation
const sectionFadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

// Slider Transition Animations
const slideVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 50 : -50,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 50 : -50,
        opacity: 0,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    })
};


const testimonials = [
    {
        id: 1,
        name: "Arjun & Priya Reddy",
        role: "Homeowners, Jubilee Hills",
        quote: '"BrightLiv transformed our bare villa into a warm, inviting sanctuary. Their attention to custom millwork and natural lighting completely changed how our family interacts with the space daily."',
        image: "/api/placeholder/500/600?text=Arjun+%26+Priya",
        linkText: "View Villa Project",
    },
    {
        id: 2,
        name: "Sneha Rao",
        role: "Resident, Financial District",
        quote: '"I wanted a minimalist, clutter-free aesthetic for my high-rise apartment. The team executed it flawlessly, balancing clean lines with luxurious surface finishes. Coming home feels like stepping into a retreat."',
        image: "/api/placeholder/500/600?text=Sneha",
        linkText: "View Apartment Project",
    },
    {
        id: 3,
        name: "Vikram Desai",
        role: "Homeowner, Banjara Hills",
        quote: '"Renovating a decades-old property seemed daunting, but their seamless execution made it entirely stress-free. They respected the original architecture while infusing it with a stunning, modern breath of life."',
        image: "/api/placeholder/500/600?text=Vikram",
        linkText: "Read Renovation Story",
    }
];

export const TestimonialSection: React.FC = () => {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0);

    const activeIndex = Math.abs(page % testimonials.length);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setPage(page + newDirection);
    };

    const setSpecificPage = (index: number) => {
        setDirection(index > activeIndex ? 1 : -1);
        setPage(index);
    };

    return (
        <section className="w-full bg-[var(--color-background)] py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1100px] mx-auto px-6 sm:px-8">

                {/* Section Headline */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionFadeUp}
                    className="flex flex-col items-center text-center mb-16 md:mb-20"
                >
                    <span className="text-xs tracking-[0.3em] uppercase font-bold text-[var(--color-primary)] mb-6">
                        Client Stories
                    </span>
                    <h2 className="text-[40px] md:text-[56px] cooper-light leading-[1.1] text-[var(--color-heading)]">
                        Hear from our Clients.
                    </h2>
                </motion.div>

                {/* Main Card Container */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionFadeUp}
                    className="relative w-full rounded-[2rem] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border-light)] shadow-md flex flex-col md:flex-row min-h-[550px] md:min-h-[480px]"
                >

                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0 flex flex-col md:flex-row w-full h-full"
                        >

                            {/* Left Side: Portrait Image */}
                            <div className="w-full md:w-[40%] h-[280px] md:h-full bg-[var(--color-secondary-dark)] shrink-0">
                                <img
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full md:w-[60%] p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full gap-10 md:gap-12">

                                {/* The Quote */}
                                <h3 className="text-2xl md:text-[28px] leading-relaxed text-[var(--color-heading)] nunito">
                                    {testimonials[activeIndex].quote}
                                </h3>

                                {/* Author Info */}
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                    <div className="flex flex-col">
                                        <span className="text-[var(--color-heading)] font-bold text-lg">
                                            {testimonials[activeIndex].name}
                                        </span>
                                        <span className="text-[var(--color-body)] text-sm mt-1">
                                            {testimonials[activeIndex].role}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>

                </motion.div>

                {/* Navigation Controls (Arrows & Dots) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={sectionFadeUp}
                    className="flex items-center justify-center gap-6 mt-10"
                >

                    {/* Previous Button */}
                    <button
                        onClick={() => paginate(-1)}
                        className="p-2 text-[var(--color-muted)] hover:text-[var(--color-primary-dark)] transition-colors focus:outline-none"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex items-center gap-2.5">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSpecificPage(idx)}
                                className={`transition-all duration-500 ease-out rounded-full ${activeIndex === idx
                                        ? 'w-8 h-2.5 bg-[var(--color-primary)]'
                                        : 'w-2.5 h-2.5 bg-[var(--color-border)] hover:bg-[var(--color-primary-light)]'
                                    }`}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => paginate(1)}
                        className="p-2 text-[var(--color-muted)] hover:text-[var(--color-primary-dark)] transition-colors focus:outline-none"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </motion.div>

            </div>
        </section>
    );
};