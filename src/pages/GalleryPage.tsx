import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, GalleryCategory, GalleryItem } from '../types';
import { GALLERY_DATA } from '../data/galleryData';
import { Eye, Sparkles, Filter, ArrowRight } from 'lucide-react';
import { NailCurveAccent } from '../components/DecorativeAccents';
import { ScrollReveal, MotionButton, StaggerContainer, StaggerItem } from '../components/AnimatedUi';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');

  const categories: GalleryCategory[] = [
    'All',
    'Gel',
    'Acrylic',
    'Extensions',
    'Nail Art',
    'Custom Sets',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-12 sm:space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      
      {/* Editorial Header */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <ScrollReveal variant="blur-in">
          <div className="flex items-center justify-center">
            <NailCurveAccent />
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fade-down" delay={0.1}>
          <p className="text-xs uppercase tracking-widest text-[#9A8150] font-medium">
            Portfolio & Studio Archive
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.2}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2420] font-normal tracking-tight text-balance">
            The Nail Gallery
          </h1>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.3}>
          <p className="text-base text-[#615248] leading-relaxed text-balance">
            Explore curated handcrafted sets, minimalist micro art, sculpted extensions, and customized aesthetic looks created in our Pokhara studio.
          </p>
        </ScrollReveal>
      </section>

      {/* Category Filter Bar with Animated Pill Buttons */}
      <section className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-[#8A796F] mb-1">
          <Filter className="w-3.5 h-3.5 text-[#C49B37]" />
          <span>Filter by Style</span>
        </div>

        {/* Segmented Filter Control */}
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#F1E9DE] rounded-full border border-[#E3D7C7] max-w-full">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-[#2C2420]'
                    : 'text-[#6C5D54] hover:text-[#2C2420]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryBadge"
                    className="absolute inset-0 bg-[#FAF7F2] rounded-full shadow-2xs border border-[#DECDBB] -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {cat}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Masonry / Grid Display with Scroll Stagger */}
      <section>
        <StaggerContainer
          key={activeCategory}
          staggerChildren={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredItems.map((item, index) => {
            // Varied aspect feeling
            const isTall = index % 4 === 1;

            return (
              <StaggerItem
                key={item.id}
                className={isTall ? 'sm:row-span-2' : ''}
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(66,51,41,0.1)' }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onOpenLightbox(item)}
                  className={`group relative rounded-2xl overflow-hidden bg-[#ECE4D8] border border-[#DECDBB] shadow-[0_4px_16px_rgba(66,51,41,0.04)] cursor-pointer flex flex-col justify-end ${
                    isTall ? 'aspect-[3/4]' : 'aspect-square'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-600 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Soft Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/80 via-[#2C2420]/20 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-widest font-semibold text-[#F8EABA] bg-[#2C2420]/40 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
                        {item.category}
                      </span>
                      <span className="p-2 rounded-full bg-[#FAF7F2]/90 text-[#2C2420] shadow-sm transform translate-y-1 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform text-white space-y-1.5">
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-[#F3E6C7]">
                        {item.styleTags.map((tag) => (
                          <span key={tag}>#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#F6EFE5] rounded-2xl border border-[#E9DFD2]">
            <p className="font-serif text-2xl text-[#2C2420]">No designs in this category yet</p>
            <p className="text-xs text-[#7A6B62] mt-1">Check back soon as new boutique looks are added.</p>
          </div>
        )}
      </section>

      {/* Inquiry Banner with Scroll Reveal */}
      <ScrollReveal variant="zoom-in">
        <section className="bg-[#FAF7F2] rounded-3xl border border-[#E5DACB] p-8 sm:p-12 text-center space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#9A8150] font-medium">
            Have an Instagram or Pinterest reference?
          </p>
          <h2 className="font-serif text-3xl text-[#2C2420] font-normal">
            Bring Your Vision to Life
          </h2>
          <p className="text-sm text-[#6B5A51] max-w-xl mx-auto leading-relaxed">
            Every client is welcome to bring screenshots, moodboards, or photos of jewelry and outfits. Jasmine customizes every set to match your vision.
          </p>
          <div className="pt-2">
            <MotionButton
              variant="primary"
              onClick={() => onNavigate('booking')}
              icon={<Sparkles className="w-3.5 h-3.5 text-[#9E7D2D]" />}
              className="px-7 py-3 text-xs uppercase tracking-wider font-semibold"
            >
              Book With Reference Photo
            </MotionButton>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
};
