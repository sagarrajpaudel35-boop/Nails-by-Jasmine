import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { MapPin, Instagram, Phone, Clock, Heart, ArrowRight } from 'lucide-react';
import { TinyStar } from './DecorativeAccents';
import { ScrollReveal, MotionButton } from './AnimatedUi';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#F4ECE1] text-[#3D332A] border-t border-[#E8DDD0] pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Background ambient accent */}
      <div className="absolute top-0 right-10 -translate-y-1/2 opacity-25 pointer-events-none">
        <TinyStar size={120} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14 pb-12 border-b border-[#E2D5C4]">
            
            {/* Col 1: Brand & Philosophy */}
            <div className="md:col-span-1 space-y-3">
              <h3 className="font-serif text-2xl font-medium tracking-tight text-[#2C2420]">
                Nails by Jasmine
              </h3>
              <p className="text-sm text-[#6B5D55] leading-relaxed">
                A private boutique home nail studio dedicated to handcrafted artistry, serene self-care, and personalized sets in Pokhara.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#827166] pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#C49B37] shrink-0" />
                <span>Prithivi Chowk, Pokhara, Nepal</span>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="font-serif text-lg font-medium text-[#2C2420] mb-4">
                Explore Studio
              </h4>
              <ul className="space-y-2.5 text-sm text-[#64564D]">
                {(['home', 'services', 'gallery', 'about', 'booking', 'contact'] as PageId[]).map((page) => (
                  <li key={page}>
                    <motion.button
                      whileHover={{ x: 4, color: '#2C2420' }}
                      transition={{ duration: 0.15 }}
                      onClick={() => {
                        onNavigate(page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="transition-colors capitalize cursor-pointer flex items-center gap-1.5 text-[#64564D]"
                    >
                      <span className="text-[#C49B37]">·</span>
                      <span>{page}</span>
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Studio Hours & Booking Channels */}
            <div>
              <h4 className="font-serif text-lg font-medium text-[#2C2420] mb-4">
                Hours & Booking
              </h4>
              <div className="space-y-3 text-sm text-[#64564D]">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#C49B37] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2C2420]">By Appointment Only</p>
                    <p className="text-xs text-[#7A6B62]">Mon – Sat: 10:00 AM – 6:30 PM</p>
                    <p className="text-xs text-[#7A6B62]">Sunday: Closed / Special Booking</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#E7DCCE] space-y-1.5 text-xs text-[#7A6B62]">
                  <p>Appointments arranged through:</p>
                  <div className="flex items-center gap-2 text-[#3D332A] font-medium">
                    <Instagram className="w-3.5 h-3.5 text-[#B6566E]" />
                    <span>Instagram DM</span>
                    <span>·</span>
                    <Phone className="w-3.5 h-3.5 text-[#5C8561]" />
                    <span>Phone Call</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 4: Boutique Commitment */}
            <div>
              <h4 className="font-serif text-lg font-medium text-[#2C2420] mb-4">
                Private Studio Etiquette
              </h4>
              <p className="text-sm text-[#6B5D55] leading-relaxed mb-4">
                To preserve an intimate, calm sanctuary, Jasmine sees one client at a time with meticulous hygiene and custom design consultations.
              </p>
              <MotionButton
                variant="secondary"
                onClick={() => {
                  onNavigate('booking');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                icon={<ArrowRight className="w-3 h-3 text-[#9E7D2D]" />}
                iconPosition="right"
                className="px-4 py-2 text-xs uppercase tracking-wider font-semibold"
              >
                Reserve a Slot
              </MotionButton>
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#807066]">
          <p>© {new Date().getFullYear()} Nails by Jasmine. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Handcrafted in Pokhara</span>
            <Heart className="w-3 h-3 text-[#B6566E] fill-current inline mx-0.5" />
            <span>Nepal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
