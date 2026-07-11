import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const servicesList = [
        "False Ceiling",
        "Modular Woodwork",
        "Painting & Wallpapers",
        "Flooring & Tiles",
        "Luxury Furniture & Sofas",
        "Full Home Renovation",
        "B2B / Builder Services",
        "Other"
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* 1. BLURRED BACKDROP */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-[#1a1217]/60 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
                        onClick={onClose}
                    >
                        {/* 2. THE MODAL CARD (Removed overflow-hidden from here) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-lg bg-[#704f62] border border-[#FAF9F6]/20 rounded-[2rem] p-8 md:p-12 relative shadow-2xl"
                        >

                            {/* 3. ISOLATED DECORATIVE BACKGROUND 
                                (We moved overflow-hidden here so it only clips the blur, not the dropdown) */}
                            <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                                <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#FAF9F6]/5 rounded-full blur-2xl"></div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-[#FAF9F6]/50 hover:text-[#FAF9F6] hover:rotate-90 transition-all duration-300 p-2 z-20"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>

                            {/* Modal Header */}
                            <div className="mb-8 relative z-10">
                                <p className="text-xs tracking-[0.2em] uppercase opacity-70 mb-2 font-bold text-[#FAF9F6]">
                                    Consultation
                                </p>
                                <h2 className="text-[32px] md:text-[40px] cooper-light text-[#FAF9F6] leading-tight">
                                    Request a callback.
                                </h2>
                            </div>

                            {/* Modal Form */}
                            <form
                                className="flex flex-col gap-6 relative z-10"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    console.log("Form Submitted");
                                    onClose();
                                }}
                            >

                                {/* Name Input */}
                                <div className="flex flex-col w-full relative z-10">
                                    <label htmlFor="modal-name" className="text-[10px] tracking-widest uppercase opacity-70 font-bold mb-1 text-[#FAF9F6]">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="modal-name"
                                        required
                                        className="w-full bg-transparent border-b border-[#FAF9F6]/30 py-2 text-base md:text-lg font-light text-[#FAF9F6] focus:outline-none focus:border-[#FAF9F6] transition-colors placeholder:text-[#FAF9F6]/40"
                                        placeholder="You Full Name"
                                    />
                                </div>

                                {/* Number Input */}
                                <div className="flex flex-col w-full relative z-10">
                                    <label htmlFor="modal-phone" className="text-[10px] tracking-widest uppercase opacity-70 font-bold mb-1 text-[#FAF9F6]">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="modal-phone"
                                        required
                                        className="w-full bg-transparent border-b border-[#FAF9F6]/30 py-2 text-base md:text-lg font-light text-[#FAF9F6] focus:outline-none focus:border-[#FAF9F6] transition-colors placeholder:text-[#FAF9F6]/40"
                                        placeholder="Your Mobile Number"
                                    />
                                </div>

                                {/* Custom Service Dropdown 
                                    (Added dynamic z-index here. When open, it jumps to z-50 so it sits above the submit button) */}
                                <div className={`flex flex-col w-full relative transition-all duration-300 ${isDropdownOpen ? 'z-50' : 'z-10'}`}>
                                    <label className="text-[10px] tracking-widest uppercase opacity-70 font-bold mb-1 text-[#FAF9F6]">
                                        Primary Service of Interest
                                    </label>

                                    <input type="hidden" name="service" value={selectedService} required />

                                    {/* Dropdown Trigger */}
                                    <div
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="w-full bg-transparent border-b border-[#FAF9F6]/30 py-2 text-base md:text-lg font-light text-[#FAF9F6] flex justify-between items-center cursor-pointer hover:border-[#FAF9F6] transition-colors"
                                    >
                                        <span className={selectedService ? "opacity-100" : "opacity-40"}>
                                            {selectedService || "Select a service..."}
                                        </span>

                                        <motion.svg
                                            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-5 h-5 text-[#FAF9F6]/50"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path>
                                        </motion.svg>
                                    </div>

                                    {/* Custom Dropdown Menu */}
                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                // Added absolute positioning that breaks out of the container
                                                className="absolute top-full left-0 w-full mt-2 bg-[#FAF9F6] border border-[#704f62]/20 rounded-2xl shadow-xl overflow-hidden max-h-[240px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#704f62]/20 [&::-webkit-scrollbar-thumb]:rounded-full"
                                            >
                                                <div className="flex flex-col py-2">
                                                    {servicesList.map((service, idx) => (
                                                        <div
                                                            key={idx}
                                                            onClick={() => {
                                                                setSelectedService(service);
                                                                setIsDropdownOpen(false);
                                                            }}
                                                            className={`px-4 py-3 text-base font-light cursor-pointer transition-colors duration-200 ${selectedService === service
                                                                    ? 'bg-[#704f62]/10 text-[#704f62] font-normal'
                                                                    : 'text-[#704f62]/80 hover:bg-[#704f62]/5 hover:text-[#704f62]'
                                                                }`}
                                                        >
                                                            {service}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Submit Button */}
                                <div className="mt-4 relative z-0">
                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-[#FAF9F6] text-[#704f62] border border-transparent rounded-full text-sm uppercase tracking-[0.15em] font-bold hover:scale-[1.02] hover:bg-transparent hover:text-[#FAF9F6] hover:border-[#FAF9F6] transition-all duration-300 shadow-lg flex justify-center items-center gap-2 group"
                                    >
                                        Submit Request
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </button>
                                    <p className="text-center text-[10px] font-light opacity-50 mt-4 text-[#FAF9F6]">
                                        Our team will contact you within 24 hours.
                                    </p>
                                </div>

                            </form>

                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};