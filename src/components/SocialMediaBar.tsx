import React from 'react';
import { motion } from 'framer-motion';

export const SocialMediaBar: React.FC = () => {
  const socialLinks = [
    {
      name: 'Phone',
      url: 'tel:+919666065006', // Replace with your number
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919666065006',
      icon: (
        <svg 
          className="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourprofile', // Replace with your profile
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={1.5} strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/yourchannel', // Replace with your channel
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
          <polygon strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      )
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
      className="fixed z-50 
        /* Mobile Layout: Horizontal pill at the bottom */
        bottom-6 left-1/2 -translate-x-1/2 flex-row 
        /* Desktop Layout: Vertical pill floating on the right side */
        md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-6 md:left-auto md:translate-x-0 md:flex-col 
        flex items-center gap-2 bg-[var(--color-primary)]/90 backdrop-blur-md px-4 py-3 md:px-3 md:py-4 rounded-full shadow-lg border border-[var(--color-background)]/20"
    >
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="relative group p-2 text-[var(--color-background)] opacity-70 hover:opacity-100 hover:text-[var(--color-accent-light)] transition-all duration-300"
        >
          {/* Tooltip for Desktop */}
          <span className="absolute hidden md:block right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-[var(--color-primary)] text-[var(--color-background)] text-xs tracking-widest uppercase rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 whitespace-nowrap shadow-md">
            {link.name}
          </span>
          
          <motion.div 
            whileHover={{ scale: 1.15 }} 
            whileTap={{ scale: 0.9 }}
          >
            {link.icon}
          </motion.div>
        </a>
      ))}
    </motion.div>
  );
};