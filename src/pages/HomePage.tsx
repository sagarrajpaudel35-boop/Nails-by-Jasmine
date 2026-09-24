import React from 'react';
import { motion } from 'motion/react';
import { PageId, GalleryItem } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { GALLERY_DATA } from '../data/galleryData';
import {
  MapPin,
  ArrowRight,
  Sparkles,
  Heart,
  Home,
  CheckCircle2,
  Instagram,
  Eye,
} from 'lucide-react';
import { TinyStar, MicroFlower, NailCurveAccent, SoftOrganicBlob } from '../components/DecorativeAccents';
import { ScrollReveal, StaggerContainer, StaggerItem, MotionButton, FloatAccent } from '../components/AnimatedUi';
import { handleImageError } from '../utils/imageUtils';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (item: GalleryItem) => void;
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenLightbox,
  onSelectServiceForBooking,
}) => {
  const featuredServices = SERVICES_DATA.slice(0, 6);
  const featuredGallery = GALLERY_DATA.slice(0, 6);

  return (
    <div className="space-y-24 sm:space-y-32 overflow-hidden">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-6 sm:pt-12 pb-8 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft atmospheric background glow */}
        <SoftOrganicBlob className="-top-20 -left-20 w-80 h-80" />
        <SoftOrganicBlob className="top-40 -right-20 w-96 h-96" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
            
            {/* Location & Studio Trust Marker */}
            <ScrollReveal variant="fade-down" delay={0.1}>
              <div className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#8C7A70] font-medium bg-[#F3ECE1] px-3.5 py-1.5 rounded-full border border-[#E4D7C7]">
                <MapPin className="w-3.5 h-3.5 text-[#C49B37]" />
                <span>Prithivi Chowk, Pokhara</span>
                <span className="text-[#C4B4A5]">·</span>
                <span className="text-[#68574E]">Private Studio</span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal variant="fade-up" delay={0.2}>
              <div className="relative">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#2C2420] leading-[1.12] text-balance">
                  Beautiful Nails, <br />
                  <span className="italic font-light text-[#57463E]">Made Just for You.</span>
                </h1>
                {/* Very subtle floating star accent */}
                <div className="absolute -top-3 right-12 hidden sm:block">
                  <FloatAccent duration={3.5} yOffset={6}>
                    <TinyStar size={18} />
                  </FloatAccent>
                </div>
              </div>
            </ScrollReveal>

            {/* Supporting Copy */}
            <ScrollReveal variant="fade-up" delay={0.3}>
              <p className="text-base sm:text-lg text-[#615248] font-normal leading-relaxed max-w-xl text-balance">
                Handcrafted nail services from a cozy private studio in Pokhara. 
                Designed for those who cherish personalized care, neat precision, and a relaxing, unhurried experience.
              </p>
            </ScrollReveal>

            {/* Call to Actions with MotionButtons */}
            <ScrollReveal variant="fade-up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <MotionButton
                  variant="primary"
                  onClick={() => onNavigate('booking')}
                  icon={<Sparkles className="w-3.5 h-3.5 text-[#9E7D2D]" />}
                  className="px-7 py-3.5 text-xs uppercase tracking-widest font-semibold"
                >
                  Book an Appointment
                </MotionButton>

                <MotionButton
                  variant="secondary"
                  onClick={() => onNavigate('services')}
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#8A786E]" />}
                  iconPosition="right"
                  className="px-6 py-3.5 text-xs uppercase tracking-widest font-semibold"
                >
                  Explore Our Services
                </MotionButton>
              </div>
            </ScrollReveal>

            {/* Quiet features banner */}
            <ScrollReveal variant="fade-up" delay={0.5}>
              <div className="pt-4 border-t border-[#EDE3D4] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#7A6B62]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DEC37C]" />
                  1-on-1 Dedicated Time
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DEC37C]" />
                  Hospital-Grade Sanitation
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DEC37C]" />
                  Instagram-Worthy Finish
                </span>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Hero Visual Container with Organic Curves */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal variant="zoom-in" duration={0.8} delay={0.25}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative delicate outline frame */}
                <div className="absolute inset-0 rounded-[2.8rem] border border-[#DECDBB] translate-x-3 translate-y-3 -z-10" />

                {/* Main Photo Box */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-[#EFE8DD] shadow-[0_12px_36px_rgba(74,59,48,0.08)] border border-[#E5DACD] group">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    src="/images/hero_nail_studio.jpg"
                    alt="Elegant almond nail art created at Nails by Jasmine studio"
                    className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover transition-transform"
                    onError={(e) => handleImageError(e, 'hero')}
                    referrerPolicy="no-referrer"
                  />

                  {/* Soft natural gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/50 via-transparent to-transparent pointer-events-none" />

                  {/* Subtle caption overlay badge inside the photo */}
                  <div className="absolute bottom-5 left-5 right-5 text-white/95 backdrop-blur-md bg-[#2C2420]/35 rounded-2xl p-3.5 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-serif italic text-white/90">Curated Everyday Gloss</p>
                        <p className="text-[11px] font-sans text-white/80">Butter Glazed Gel Overlay · Pokhara</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onNavigate('gallery')}
                        className="text-[11px] uppercase tracking-wider text-[#F8EABA] hover:underline cursor-pointer flex items-center gap-1 font-medium"
                      >
                        <span>Inspo</span>
                        <ArrowRight className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Micro floral & star accents floating gently */}
                <FloatAccent duration={4.5} yOffset={7} className="absolute -bottom-4 -left-4 p-2.5 bg-[#FAF7F2] rounded-full border border-[#DECDBB] shadow-sm">
                  <MicroFlower size={20} />
                </FloatAccent>
                <FloatAccent duration={3.8} yOffset={5} className="absolute -top-3 -right-3 p-2 bg-[#FAF7F2] rounded-full border border-[#DECDBB] shadow-sm">
                  <TinyStar size={16} />
                </FloatAccent>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ===================== HOME INTRODUCTION ===================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <ScrollReveal variant="blur-in" delay={0.1}>
          <div className="flex items-center justify-center">
            <NailCurveAccent />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.2}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C2420] text-balance leading-snug">
            Your Canvas, Our Artwork.
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.3}>
          <p className="text-base sm:text-lg text-[#615248] leading-relaxed max-w-2xl mx-auto font-normal text-balance">
            Nails by Jasmine is a home-based nail studio situated in Prithivi Chowk, Pokhara, created with a simple purpose: to treat every hand as a unique canvas and craft personalized, lasting nail art where you never feel rushed. Every set is tailored to your hands, your aesthetic, and your lifestyle.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.4}>
          <div className="pt-2">
            <MotionButton
              variant="ghost"
              onClick={() => onNavigate('about')}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
              className="px-5 py-2.5 text-sm font-semibold text-[#2C2420]"
            >
              Meet Jasmine
            </MotionButton>
          </div>
        </ScrollReveal>
      </section>

      {/* ===================== SERVICES PREVIEW ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E9DFD2] pb-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#9A8150] font-medium mb-1.5">
                Curated Treatments
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-normal">
                Services Made for You
              </h2>
            </div>
            <MotionButton
              variant="secondary"
              onClick={() => onNavigate('services')}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
              className="px-4 py-2 text-xs uppercase tracking-wider font-semibold"
            >
              View All Services
            </MotionButton>
          </div>
        </ScrollReveal>

        {/* Minimalist Cards Grid with Scroll Stagger */}
        <StaggerContainer staggerChildren={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredServices.map((service) => (
            <StaggerItem key={service.id}>
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(66,51,41,0.09)' }}
                transition={{ duration: 0.3 }}
                className="h-full bg-[#FFFDFB] rounded-2xl p-6 sm:p-7 border border-[#EDE2D4] hover:border-[#DFCDB7] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-[#F1E9DE]">
                    <img
                      src={service.image}
                      alt={service.name}
                      onError={(e) => handleImageError(e, 'gel')}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#8C7A70] mb-2">
                    <span className="uppercase tracking-wider font-medium text-[#A67E24]">
                      {service.category}
                    </span>
                    <span>{service.duration}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-[#2C2420] mb-2">
                    {service.name}
                  </h3>

                  <p className="text-sm text-[#615248] leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2E8DB] flex items-center justify-between">
                  <span className="text-xs italic text-[#7E6E64]">
                    {service.priceNote}
                  </span>

                  <MotionButton
                    variant="ghost"
                    onClick={() => onSelectServiceForBooking(service.id)}
                    icon={<ArrowRight className="w-3 h-3" />}
                    iconPosition="right"
                    className="px-3 py-1.5 text-xs uppercase tracking-wider font-semibold text-[#2C2420]"
                  >
                    Book
                  </MotionButton>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal variant="fade-up">
          <div className="text-center pt-2">
            <MotionButton
              variant="secondary"
              onClick={() => onNavigate('services')}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
              className="px-6 py-3 text-xs uppercase tracking-wider font-semibold"
            >
              View All 7 Services & Care Guide
            </MotionButton>
          </div>
        </ScrollReveal>
      </section>

      {/* ===================== FEATURED GALLERY ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E9DFD2] pb-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#9A8150] font-medium mb-1.5">
                Portfolio & Aesthetic
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-normal">
                Your Next Nail Inspo
              </h2>
            </div>
            <MotionButton
              variant="secondary"
              onClick={() => onNavigate('gallery')}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
              className="px-4 py-2 text-xs uppercase tracking-wider font-semibold"
            >
              View Full Gallery
            </MotionButton>
          </div>
        </ScrollReveal>

        {/* Masonry / Bento Grid Preview with Scroll Stagger */}
        <StaggerContainer staggerChildren={0.09} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGallery.map((item, index) => (
            <StaggerItem
              key={item.id}
              className={index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                onClick={() => onOpenLightbox(item)}
                className={`group relative rounded-2xl overflow-hidden bg-[#ECE4D8] border border-[#DECDBB] cursor-pointer ${
                  index === 0 ? 'aspect-[16/9]' : 'aspect-square'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => handleImageError(e, 'art')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Soft Hover Overlay */}
                <div className="absolute inset-0 bg-[#2C2420]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <span className="p-2.5 rounded-full bg-[#FAF7F2]/90 text-[#2C2420] shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform text-white">
                    <span className="text-[11px] uppercase tracking-widest text-[#F8EABA] font-medium">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-1 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal variant="fade-up">
          <div className="text-center pt-2">
            <MotionButton
              variant="primary"
              onClick={() => onNavigate('gallery')}
              icon={<ArrowRight className="w-3.5 h-3.5 text-[#8C6D27]" />}
              iconPosition="right"
              className="px-6 py-3 text-xs uppercase tracking-wider font-semibold"
            >
              Explore All Nail Looks & Filters
            </MotionButton>
          </div>
        </ScrollReveal>
      </section>

      {/* ===================== WHY NAILS BY JASMINE ===================== */}
      <section className="bg-[#F6EFE5] py-16 sm:py-20 border-y border-[#E9DFD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#9A8150] font-medium">
                The Boutique Difference
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-normal">
                Why Nails by Jasmine
              </h2>
              <p className="text-sm sm:text-base text-[#68574E]">
                Crafted for those who prefer personal connection and gentle artistry over noisy, rushed salon lines.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* 1. Personalized */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full bg-[#FAF7F2] p-7 rounded-2xl border border-[#E9DFD2] space-y-3 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F8EABA] flex items-center justify-center text-[#2C2420]">
                  <Sparkles className="w-5 h-5 text-[#9A7D2C]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2C2420]">
                  Personalized
                </h3>
                <p className="text-xs sm:text-sm text-[#68584E] leading-relaxed">
                  Every set is created around your style, hand shape, and natural nail health with custom consultation.
                </p>
              </motion.div>
            </StaggerItem>

            {/* 2. Private Studio */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full bg-[#FAF7F2] p-7 rounded-2xl border border-[#E9DFD2] space-y-3 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F8EABA] flex items-center justify-center text-[#2C2420]">
                  <Home className="w-5 h-5 text-[#9A7D2C]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2C2420]">
                  Private Studio
                </h3>
                <p className="text-xs sm:text-sm text-[#68584E] leading-relaxed">
                  Enjoy your nail appointment in a cozy, comfortable home-based setting with peace, herbal tea, and no crowds.
                </p>
              </motion.div>
            </StaggerItem>

            {/* 3. Attention to Detail */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full bg-[#FAF7F2] p-7 rounded-2xl border border-[#E9DFD2] space-y-3 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F8EABA] flex items-center justify-center text-[#2C2420]">
                  <CheckCircle2 className="w-5 h-5 text-[#9A7D2C]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2C2420]">
                  Attention to Detail
                </h3>
                <p className="text-xs sm:text-sm text-[#68584E] leading-relaxed">
                  Careful cuticle work, seamless apex sculpting, clean edges, and long-lasting finishing coats.
                </p>
              </motion.div>
            </StaggerItem>

            {/* 4. Made With Love */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full bg-[#FAF7F2] p-7 rounded-2xl border border-[#E9DFD2] space-y-3 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F8EABA] flex items-center justify-center text-[#2C2420]">
                  <Heart className="w-5 h-5 text-[#9A7D2C]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2C2420]">
                  Made With Love
                </h3>
                <p className="text-xs sm:text-sm text-[#68584E] leading-relaxed">
                  A personal nail experience rather than a rushed salon visit, where you are welcomed like an old friend.
                </p>
              </motion.div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* ===================== BOOKING CTA ===================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="zoom-in" duration={0.7}>
          <div className="relative rounded-[2.5rem] bg-[#F7F0E4] border border-[#E5DACB] p-8 sm:p-12 lg:p-16 text-center space-y-6 overflow-hidden shadow-sm">
            
            <FloatAccent duration={5} yOffset={8} className="absolute top-4 left-6 opacity-30">
              <TinyStar size={24} />
            </FloatAccent>
            <FloatAccent duration={4.5} yOffset={7} className="absolute bottom-6 right-8 opacity-30">
              <MicroFlower size={26} />
            </FloatAccent>

            <p className="text-xs uppercase tracking-widest text-[#9A8150] font-medium">
              Pokhara Home Studio
            </p>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#2C2420] font-normal leading-tight text-balance">
              Ready for Your Next Set?
            </h2>

            <p className="text-base sm:text-lg text-[#66554B] max-w-xl mx-auto font-normal text-balance">
              Let's create something beautiful for your nails. Appointments can currently be arranged directly through Instagram DM or phone call.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <MotionButton
                variant="primary"
                onClick={() => onNavigate('booking')}
                icon={<Sparkles className="w-3.5 h-3.5 text-[#9E7D2D]" />}
                className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-wider font-semibold"
              >
                Book Your Appointment
              </MotionButton>

              <MotionButton
                variant="secondary"
                onClick={() => onNavigate('booking')}
                icon={<Instagram className="w-3.5 h-3.5 text-[#B6566E]" />}
                className="w-full sm:w-auto px-7 py-3.5 text-xs uppercase tracking-wider font-semibold"
              >
                Message on Instagram
              </MotionButton>
            </div>

            <p className="text-xs text-[#8C7A70] pt-2">
              Located in Prithivi Chowk, Pokhara · Detailed location coordinates shared upon booking confirmation
            </p>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};

