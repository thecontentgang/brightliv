import React, { useState, useEffect, useCallback } from 'react';
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

type LanguageType = 'original' | 'english' | 'telugu';

const testimonials = [
    {
        id: 1,
        name: "Rahul & Swathi",
        role: "Homeowners, Hyderabad",
        quote: {
            original: '"Tvam team chala baaga work chesaru. Starting nunchi ending varaku every detail ni care teesukunnaru. Final output exactly memu anukunna danikanna better ga vachindi. Family andariki chala nachindi."',
            english: '"The Tvam team did a fantastic job. They took care of every detail from start to finish. The final output came out even better than we expected. Our whole family loved it."',
            telugu: '"త్వం టీమ్ చాలా బాగా వర్క్ చేశారు. స్టార్టింగ్ నుంచి ఎండింగ్ వరకు ప్రతి డీటెయిల్ ని కేర్ తీసుకున్నారు. ఫైనల్ అవుట్పుట్ ఎగ్జాక్ట్లీ మేము అనుకున్న దానికన్నా బెటర్ గా వచ్చింది. ఫ్యామిలీ అందరికీ చాలా నచ్చింది."'
        },
        image: "/api/placeholder/500/600?text=Rahul+%26+Swathi",
        linkText: "View Home Project",
    },
    {
        id: 2,
        name: "Sandeep Kumar",
        role: "Homeowner, Gachibowli",
        quote: {
            original: '"Work quality super undi. Team time ki complete chesaru, materials kuda premium quality use chesaru. Process motham smooth ga jarigindi. Definitely recommend chestanu."',
            english: '"The work quality is superb. The team completed it on time, and they used premium quality materials too. The whole process went very smoothly. I would definitely recommend them."',
            telugu: '"వర్క్ క్వాలిటీ సూపర్ ఉంది. టీమ్ టైమ్ కి కంప్లీట్ చేశారు, మెటీరియల్స్ కూడా ప్రీమియం క్వాలిటీ యూస్ చేశారు. ప్రాసెస్ మొత్తం స్మూత్ గా జరిగింది. డెఫినెట్లీ రికమెండ్ చేస్తాను."'
        },
        image: "/api/placeholder/500/600?text=Sandeep",
        linkText: "View Interior Project",
    },
    {
        id: 3,
        name: "Keerthi Reddy",
        role: "Apartment Owner, Kondapur",
        quote: {
            original: '"Na apartment ki modern look kavali ani cheppa. Tvam exactly ade create chesaru. Design, lighting, storage anni perfect ga plan chesaru. Every visitor first interiors gurinche aduguthunnaru."',
            english: '"I told them I wanted a modern look for my apartment. Tvam created exactly that. Design, lighting, and storage were all planned perfectly. Every visitor asks about the interiors first."',
            telugu: '"నా అపార్ట్‌మెంట్‌కి మోడ్రన్ లుక్ కావాలి అని చెప్పా. త్వం ఎగ్జాక్ట్లీ అదే క్రియేట్ చేశారు. డిజైన్, లైటింగ్, స్టోరేజ్ అన్నీ పర్ఫెక్ట్ గా ప్లాన్ చేశారు. ప్రతి విజిటర్ ఫస్ట్ ఇంటీరియర్స్ గురించే అడుగుతున్నారు."'
        },
        image: "/api/placeholder/500/600?text=Keerthi",
        linkText: "View Apartment",
    },
];

export const TestimonialSection: React.FC = () => {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const [language, setLanguage] = useState<LanguageType>('original');

    const activeIndex = Math.abs(page % testimonials.length);

    // Wrapped in useCallback and using functional state update
    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setPage(prevPage => prevPage + newDirection);
    }, []);

    const setSpecificPage = (index: number) => {
        setDirection(index > activeIndex ? 1 : -1);
        setPage(index);
    };

    // Auto-play effect: changes testimonial every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 4000);

        // Clear interval on unmount or if the page manually changes (so it resets the timer)
        return () => clearInterval(timer);
    }, [page, paginate]); // paginate is now safely added to the dependency array

    return (
        <section className="w-full bg-[var(--color-background)] py-16 md:py-24 lg:py-32 overflow-hidden">
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">

                {/* Section Headline */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionFadeUp}
                    className="flex flex-col items-center text-center mb-12 md:mb-16"
                >
                    <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-[var(--color-primary)] mb-4 md:mb-6">
                        Client Stories
                    </span>
                    <h2 className="text-3xl sm:text-[40px] md:text-[56px] cooper-light leading-[1.1] text-[var(--color-heading)]">
                        Hear from our Clients.
                    </h2>
                </motion.div>

                {/* Main Card Container */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionFadeUp}
                    className="relative w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border-light)] shadow-md flex flex-col md:flex-row h-[650px] sm:h-[600px] md:h-[480px] lg:h-[450px]"
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
                            <div className="w-full md:w-[40%] h-[260px] md:h-full bg-[var(--color-secondary-dark)] shrink-0">
                                <img
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full md:w-[60%] h-[calc(100%-260px)] md:h-full p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col overflow-y-auto">
                                
                                {/* Language Translator Toggle */}
                                <div className="flex flex-wrap gap-2 mb-6 shrink-0">
                                    <button 
                                        onClick={() => setLanguage('original')}
                                        className={`px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold rounded-full transition-colors border ${language === 'original' ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'bg-transparent text-[var(--color-muted)] border-[var(--color-border)] hover:border-[var(--color-primary)]'}`}
                                    >
                                        Original
                                    </button>
                                    <button 
                                        onClick={() => setLanguage('english')}
                                        className={`px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold rounded-full transition-colors border ${language === 'english' ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'bg-transparent text-[var(--color-muted)] border-[var(--color-border)] hover:border-[var(--color-primary)]'}`}
                                    >
                                        English
                                    </button>
                                    <button 
                                        onClick={() => setLanguage('telugu')}
                                        className={`px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold rounded-full transition-colors border ${language === 'telugu' ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'bg-transparent text-[var(--color-muted)] border-[var(--color-border)] hover:border-[var(--color-primary)]'}`}
                                    >
                                        తెలుగు
                                    </button>
                                </div>

                                {/* The Quote - Reduced Font Size Here */}
                                <div className="flex-grow flex flex-col justify-center mb-8">
                                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[var(--color-heading)] nunito">
                                        {testimonials[activeIndex].quote[language]}
                                    </h3>
                                </div>

                                {/* Author Info */}
                                <div className="shrink-0 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-[var(--color-heading)] font-bold text-base md:text-lg">
                                            {testimonials[activeIndex].name}
                                        </span>
                                        <span className="text-[var(--color-body)] text-xs md:text-sm mt-0.5 md:mt-1">
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
                    className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10"
                >
                    {/* Previous Button */}
                    <button
                        onClick={() => paginate(-1)}
                        className="p-2 text-[var(--color-muted)] hover:text-[var(--color-primary-dark)] transition-colors focus:outline-none"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex items-center gap-2 md:gap-2.5">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSpecificPage(idx)}
                                className={`transition-all duration-500 ease-out rounded-full ${activeIndex === idx
                                        ? 'w-6 h-2 md:w-8 md:h-2.5 bg-[var(--color-primary)]'
                                        : 'w-2 h-2 md:w-2.5 md:h-2.5 bg-[var(--color-border)] hover:bg-[var(--color-primary-light)]'
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
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </motion.div>

            </div>
        </section>
    );
};