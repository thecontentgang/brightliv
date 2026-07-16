import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#704f62] text-[#FAF9F6] pt-16 pb-6 px-6 sm:px-8 md:px-12 lg:px-16 overflow-hidden flex flex-col font-sans">
      
      {/* TOP ROW: Description & Links */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-8 w-full max-w-[1600px] mx-auto text-center md:text-left">
        
        {/* Left: Description */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <p className="text-base md:text-lg font-light opacity-90 leading-relaxed">
            BrightLiv is the premier interior architecture firm built for those who seek timeless elegance and functional luxury.
          </p>
        </div>

        {/* Right: Link Columns */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end gap-12 md:gap-32">
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-sm font-medium tracking-wide mb-1">BrightLiv</h4>
            <a href="#" className="font-light opacity-70 hover:opacity-100 transition-opacity">Home</a>
            <a href="#" className="font-light opacity-70 hover:opacity-100 transition-opacity">Portfolio</a>
            <a href="#" className="font-light opacity-70 hover:opacity-100 transition-opacity">Services</a>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-sm font-medium tracking-wide mb-1">Company</h4>
            <a href="#" className="font-light opacity-70 hover:opacity-100 transition-opacity">About</a>
            <a href="#" className="font-light opacity-70 hover:opacity-100 transition-opacity">Contact</a>
            
          </div>
        </div>
      </div>

      {/* MIDDLE ROW: Socials & CTA */}
      {/* MIDDLE ROW: Socials & CTA */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mt-12 gap-12 w-full max-w-[1600px] mx-auto">
        
        {/* Left: Instagram Follow (Removed w-full so it stays a compact pill in the center) */}
        <a 
          href="https://www.instagram.com/brightliv_/" 
          className="flex items-center justify-center gap-3 bg-[#FAF9F6] text-[#704f62] px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 w-fit"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium text-sm">Follow us on Instagram</span>
        </a>

        {/* Right: CTA Box (Added items-center to the wrapper for mobile centering) */}
        <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto mt-4 md:mt-0">
          
          {/* Changed mobile rounding to rounded-3xl and adjusted padding so it stacks beautifully */}
          <div className="border border-[#FAF9F6]/30 rounded-3xl sm:rounded-full p-5 sm:p-2 sm:pl-6 flex flex-col sm:flex-row items-center gap-4 justify-between w-fit text-center sm:text-left">
            <span className="font-light text-base md:text-lg">Ready to transform your space?</span>
            <button className="bg-[#FAF9F6] text-[#704f62] px-6 py-2.5 rounded-full font-medium flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 w-fit text-sm">
              Book a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
          
          {/* Subtext under CTA */}
          <div className="flex justify-center gap-6 md:justify-between px-4 w-full">
            <span className="text-[9px] tracking-widest uppercase opacity-60 font-mono">CURATED ELEGANCE</span>
            <span className="text-[9px] tracking-widest uppercase opacity-60 font-mono">BUILT FROM DAY ONE</span>
          </div>
          
        </div>
      </div>

      {/* GIANT TYPOGRAPHY */}
      <div className="w-full flex justify-center mt-10 mb-6 select-none pointer-events-none">
 <h1 className="text-[20vw] leading-[0.75] tracking-tight cooper-light text-primary">
  BrightLiv
</h1>
</div>

      {/* BOTTOM ROW: Copyright & Legal */}
      <div className="w-full max-w-[1600px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-4  pt-6">
        <p className="text-xs opacity-60 font-light text-center md:text-left">
          © 2026 BrightLiv. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 md:gap-8">
          <a href="#" className="text-xs opacity-60 hover:opacity-100 transition-opacity font-light">Privacy Policy</a>
          <a href="#" className="text-xs opacity-60 hover:opacity-100 transition-opacity font-light">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
};