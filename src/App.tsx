/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, GalleryItem } from './types';
import { GALLERY_DATA } from './data/galleryData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { ScrollProgressBar } from './components/AnimatedUi';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>();
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'services', 'gallery', 'about', 'booking', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForBooking = (serviceId: string) => {
    setSelectedServiceForBooking(serviceId);
    navigateToPage('booking');
  };

  const handleBookFromLightbox = (item: GalleryItem) => {
    setLightboxItem(null);
    navigateToPage('booking');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2420] selection:bg-[#F3E7C4] selection:text-[#2C2420]">
      {/* Scroll-based Progress Indicator */}
      <ScrollProgressBar />

      {/* Top Global Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateToPage} />

      {/* Main Content View with Smooth Page Transitions */}
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={navigateToPage}
                onOpenLightbox={(item) => setLightboxItem(item)}
                onSelectServiceForBooking={handleSelectServiceForBooking}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={navigateToPage}
                onSelectServiceForBooking={handleSelectServiceForBooking}
              />
            )}

            {currentPage === 'gallery' && (
              <GalleryPage
                onNavigate={navigateToPage}
                onOpenLightbox={(item) => setLightboxItem(item)}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage onNavigate={navigateToPage} />
            )}

            {currentPage === 'booking' && (
              <BookingPage
                onNavigate={navigateToPage}
                preselectedServiceId={selectedServiceForBooking}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage onNavigate={navigateToPage} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Lightbox Modal */}
      <Lightbox
        item={lightboxItem}
        items={GALLERY_DATA}
        onClose={() => setLightboxItem(null)}
        onNavigateToItem={(nextItem) => setLightboxItem(nextItem)}
        onBookThisLook={handleBookFromLightbox}
      />

      {/* Global Boutique Footer */}
      <Footer onNavigate={navigateToPage} />
    </div>
  );
}
