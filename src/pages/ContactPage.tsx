import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import {
  MapPin,
  Instagram,
  Phone,
  Clock,
  Sparkles,
  ChevronDown,
  Navigation,
  ExternalLink,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { NailCurveAccent } from '../components/DecorativeAccents';
import { ScrollReveal, MotionButton, StaggerContainer, StaggerItem } from '../components/AnimatedUi';
import { CONTACT_INFO } from '../data/contactInfo';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you accept walk-in clients?',
      a: 'Nails by Jasmine is an exclusive private home-based studio that operates strictly by appointment. This ensures a calm, dedicated experience with zero interruptions or waiting in lines.',
    },
    {
      q: 'How do I reach the studio in Prithivi Chowk?',
      a: 'The studio is conveniently located near the central Prithivi Chowk hub in Pokhara, easily accessible by public transit, taxi, or scooter. Exact landmark instructions and parking guidance are sent directly upon booking confirmation.',
    },
    {
      q: 'Can I bring nail art references or Pinterest photos?',
      a: 'Absolutely! We love personalized references. You can send photos via Instagram DM prior to your session, or bring your saved screenshots to your appointment.',
    },
    {
      q: 'How should I prepare my natural nails before my visit?',
      a: 'Please arrive with clean hands. If you require removal of existing gel or acrylic extensions from another salon, kindly let Jasmine know ahead of time so adequate time is blocked.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      
      {/* Editorial Header */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <ScrollReveal variant="blur-in">
          <div className="flex items-center justify-center">
            <NailCurveAccent />
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fade-down" delay={0.1}>
          <p className="text-xs uppercase tracking-widest text-[#9A8150] font-medium">
            Get in Touch · Pokhara, Nepal
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.2}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2420] font-normal tracking-tight text-balance">
            Contact the Studio
          </h1>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.3}>
          <p className="text-base text-[#615248] leading-relaxed text-balance">
            We would love to hear from you. Reach out via Instagram DM or phone call to check availability or ask questions about our custom sets.
          </p>
        </ScrollReveal>
      </section>

      {/* Contact Cards Row with Stagger Container */}
      <section>
        <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Studio Location */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(70,55,44,0.08)' }}
              transition={{ duration: 0.3 }}
              className="h-full bg-[#FFFDFB] rounded-[2rem] border border-[#E9DFD2] p-8 space-y-4 shadow-[0_4px_20px_rgba(70,55,44,0.03)] flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#F6EFE5] flex items-center justify-center text-[#9A7D2C] border border-[#E5DACB]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-[#2C2420] font-medium">
                  Studio Location
                </h3>
                <p className="text-sm font-semibold text-[#2C2420]">
                  Nails by Jasmine
                </p>
                <p className="text-xs text-[#68574E] leading-relaxed">
                  Prithivi Chowk, Pokhara, Nepal
                </p>
                <p className="text-[11px] text-[#8C7A70] italic pt-1">
                  *Private home studio address & landmarks provided after appointment confirmation.
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2E8DC]">
                <a
                  href="https://maps.google.com/?q=Prithivi+Chowk,+Pokhara,+Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#2C2420] hover:text-[#9A7D2C] transition-colors"
                >
                  <span>View Pokhara Area Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Card 2: Instagram Direct Message */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(70,55,44,0.08)' }}
              transition={{ duration: 0.3 }}
              className="h-full bg-[#FFFDFB] rounded-[2rem] border border-[#E9DFD2] p-8 space-y-4 shadow-[0_4px_20px_rgba(70,55,44,0.03)] flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#FBF0F2] flex items-center justify-center text-[#B6566E] border border-[#F2D7DD]">
                  <Instagram className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-[#2C2420] font-medium">
                  Instagram DM
                </h3>
                <p className="text-xs text-[#68574E] leading-relaxed">
                  For portfolio updates, stories, same-day cancellations, and quick booking messages.
                </p>
                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EBE1D3] text-xs text-[#806E64]">
                  <span className="font-medium text-[#2C2420]">Handle:</span>{' '}
                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[#B6566E] hover:underline font-semibold"
                  >
                    {CONTACT_INFO.instagramDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2E8DC]">
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#FAF7F2] hover:bg-white text-xs uppercase tracking-wider font-semibold text-[#2C2420] border border-[#DECDBB] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#B6566E]" />
                  <span>View Instagram ({CONTACT_INFO.instagramDisplay})</span>
                  <ExternalLink className="w-3 h-3 ml-1 text-[#8C7A70]" />
                </a>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Card 3: Phone Contact */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(70,55,44,0.08)' }}
              transition={{ duration: 0.3 }}
              className="h-full bg-[#FFFDFB] rounded-[2rem] border border-[#D5E6D8] p-8 space-y-4 shadow-[0_4px_20px_rgba(70,55,44,0.03)] flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#EBF7EE] flex items-center justify-center text-[#25D366] border border-[#CCE0C4]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-[#2C2420] font-medium">
                  WhatsApp & Phone
                </h3>
                <p className="text-xs text-[#68574E] leading-relaxed">
                  Available for direct bookings, inquiries, and consultations. Send your message directly on WhatsApp.
                </p>
                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EBE1D3] text-xs text-[#806E64] space-y-1">
                  <div>
                    <span className="font-medium text-[#2C2420]">Phone / WhatsApp:</span>{' '}
                    <a
                      href={CONTACT_INFO.telUrl}
                      className="font-mono text-[#2C2420] hover:text-[#1E8A42] font-semibold"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                  <div className="text-[11px] text-[#7A6B62]">
                    Mon – Sat: 10:00 AM – 6:30 PM
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2E8DC] flex flex-col sm:flex-row gap-2">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Send WhatsApp</span>
                </a>
                <a
                  href={CONTACT_INFO.telUrl}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#FAF7F2] hover:bg-white text-xs uppercase tracking-wider font-semibold text-[#2C2420] border border-[#D9CDBC] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#4B7351]" />
                  <span>Call</span>
                </a>
              </div>
            </motion.div>
          </StaggerItem>

        </StaggerContainer>
      </section>

      {/* Map Section with Scroll Reveal */}
      <ScrollReveal variant="fade-up">
        <section className="bg-[#FFFDFB] rounded-[2.5rem] border border-[#E9DFD2] overflow-hidden shadow-[0_4px_24px_rgba(70,55,44,0.04)]">
          <div className="p-6 sm:p-8 border-b border-[#F0E6D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#9A8150] font-medium mb-1">
                <Navigation className="w-3.5 h-3.5" />
                <span>Pokhara Studio Orientation</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2420]">
                Prithivi Chowk, Pokhara
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <MotionButton
                variant="primary"
                onClick={() => window.open('https://maps.google.com/?q=Prithivi+Chowk,+Pokhara', '_blank')}
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                iconPosition="right"
                className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold"
              >
                Open in Google Maps
              </MotionButton>
            </div>
          </div>

          {/* Elegant bespoke SVG map visual showing Prithivi Chowk, Pokhara context */}
          <div className="relative aspect-[16/8] sm:aspect-[21/9] min-h-[320px] bg-[#F4EFE6] flex items-center justify-center p-6 overflow-hidden">
            
            {/* Stylized streets and landmarks */}
            <svg
              className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
              viewBox="0 0 800 350"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Roads */}
              <path d="M-50 175H850" stroke="#E2D4C1" strokeWidth="18" />
              <path d="M400 -50V400" stroke="#E2D4C1" strokeWidth="18" />
              <path d="M120 -50L680 400" stroke="#E7DAC8" strokeWidth="10" />
              <path d="M680 -50L120 400" stroke="#E7DAC8" strokeWidth="8" strokeDasharray="6 6" />

              {/* Chowk Roundabout */}
              <circle cx="400" cy="175" r="48" fill="#F8F2E8" stroke="#DBC8B2" strokeWidth="3" />
              <circle cx="400" cy="175" r="28" fill="#EFE5D7" />

              {/* Seti River hint nearby */}
              <path
                d="M620 -50C600 50 630 150 670 250C700 320 690 380 720 420"
                stroke="#D2E3E8"
                strokeWidth="14"
                strokeLinecap="round"
              />
            </svg>

            {/* Center Marker Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative z-10 bg-[#FAF7F2]/95 backdrop-blur-md p-6 rounded-2xl border border-[#DECDBB] shadow-xl max-w-sm text-center space-y-2"
            >
              <div className="w-9 h-9 rounded-full bg-[#DEC37C] text-[#2C2420] flex items-center justify-center mx-auto shadow-sm">
                <Sparkles className="w-4 h-4 text-[#2C2420]" />
              </div>
              <p className="font-serif text-xl font-medium text-[#2C2420]">
                Nails by Jasmine
              </p>
              <p className="text-xs text-[#68574E] leading-relaxed">
                Private Studio · Prithivi Chowk, Pokhara
              </p>
              <div className="pt-2 text-[11px] text-[#8C7A70] border-t border-[#EDE1D1] italic">
                Central Pokhara location · Easy parking & taxi access
              </div>
            </motion.div>

            {/* Area labels */}
            <div className="absolute top-6 left-8 text-[11px] uppercase tracking-widest text-[#9C8C80] font-medium hidden sm:block">
              ← To Lakeside / Phewa Lake
            </div>
            <div className="absolute top-6 right-8 text-[11px] uppercase tracking-widest text-[#9C8C80] font-medium hidden sm:block">
              To Pokhara Airport / New Road →
            </div>
            <div className="absolute bottom-6 left-8 text-[11px] uppercase tracking-widest text-[#9C8C80] font-medium hidden sm:block">
              To Pokhara Tourist Bus Park ↓
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Frequently Asked Questions with Animated Collapsible Details */}
      <ScrollReveal variant="fade-up">
        <section className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#9A8150] font-medium">
              Helpful Information
            </p>
            <h2 className="font-serif text-3xl text-[#2C2420] font-normal">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="bg-[#FFFDFB] rounded-2xl border border-[#E9DFD2] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/50 transition-colors"
                  >
                    <span className="font-serif text-lg text-[#2C2420] font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8C7A70] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 text-xs sm:text-sm text-[#615248] leading-relaxed border-t border-[#F2E8DC] pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
};
