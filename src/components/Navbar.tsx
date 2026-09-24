import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import { MotionButton } from './AnimatedUi';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'booking', label: 'Booking' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EFE7DC] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Zone 1: Wordmark */}
          <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick('home')}
            className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 rounded-sm cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#2C2420] group-hover:text-[#645043] transition-colors">
                Nails by Jasmine
              </span>
              <motion.span
                animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#DEC37C]"
              />
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#8C7A70] font-sans -mt-0.5 hidden sm:block">
              Private Studio · Pokhara
            </p>
          </motion.button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#5C4D44]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors hover:text-[#2C2420] cursor-pointer ${
                    isActive ? 'text-[#2C2420] font-semibold' : 'text-[#6B5D55]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#DEC37C] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA with MotionButton */}
            <div className="hidden sm:block">
              <MotionButton
                variant="primary"
                onClick={() => handleNavClick('booking')}
                icon={<Sparkles className="w-3.5 h-3.5 text-[#9E7D2D]" />}
                className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold whitespace-nowrap"
              >
                Book an Appointment
              </MotionButton>
            </div>

            {/* Mobile Book Button (Compact) */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('booking')}
              className="sm:hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#2C2420] bg-[#F8EABA] active:bg-[#F2DF9E] border border-[#DEC37C]/70 rounded-full shadow-2xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </motion.button>

            {/* Mobile Hamburger Toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#2C2420] hover:bg-[#EFE8DD] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#2C2420]/30 backdrop-blur-xs animate-fade-in" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute top-18 left-0 right-0 bg-[#FAF7F2] border-b border-[#E8DECة] p-6 shadow-xl space-y-4 max-h-[calc(100vh-4.5rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left px-4 py-3 rounded-xl text-base transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#F4EBDB] text-[#2C2420] font-semibold'
                        : 'text-[#5C4D44] hover:bg-[#F7F1E7]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#DEC37C]" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#EAE0D2]">
              <button
                onClick={() => handleNavClick('booking')}
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold tracking-wider text-[#2C2420] bg-[#F8EABA] hover:bg-[#F3DF9F] border border-[#DEC37C]/60 shadow-sm"
              >
                Book an Appointment
              </button>
              <p className="text-center text-xs text-[#8C7A70] mt-3">
                Prithivi Chowk, Pokhara · Private Studio
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
