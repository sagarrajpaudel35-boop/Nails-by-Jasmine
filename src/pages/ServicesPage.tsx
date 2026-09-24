import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import {
  Sparkles,
  Clock,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Droplets,
} from 'lucide-react';
import { NailCurveAccent } from '../components/DecorativeAccents';
import { ScrollReveal, MotionButton, StaggerContainer, StaggerItem } from '../components/AnimatedUi';
import { handleImageError } from '../utils/imageUtils';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceForBooking,
}) => {
  return (
    <div className="space-y-20 sm:space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      
      {/* Editorial Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <ScrollReveal variant="blur-in">
          <div className="flex items-center justify-center">
            <NailCurveAccent />
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fade-down" delay={0.1}>
          <p className="text-xs uppercase tracking-widest text-[#9A8150] font-medium">
            Tailored Treatments · Pokhara Studio
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.2}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2420] font-normal tracking-tight text-balance">
            Bespoke Services & Artistry
          </h1>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.3}>
          <p className="text-base sm:text-lg text-[#615248] leading-relaxed text-balance">
            Every appointment is tailored specifically to your natural nail health, desired shape, and lifestyle. Take a look at our current studio offerings below.
          </p>
        </ScrollReveal>
      </section>

      {/* Editorial Services List with Scroll Animations */}
      <section className="space-y-12">
        <div className="grid grid-cols-1 gap-12 sm:gap-16">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <ScrollReveal
                key={service.id}
                variant={isReversed ? 'fade-left' : 'fade-right'}
                distance={40}
                duration={0.7}
              >
                <div className="bg-[#FFFDFB] rounded-[2rem] border border-[#EBE1D3] p-6 sm:p-10 lg:p-12 shadow-[0_4px_20px_rgba(70,55,44,0.03)] hover:shadow-[0_10px_35px_rgba(70,55,44,0.07)] transition-shadow">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      isReversed ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Photo area */}
                    <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                      <div className="relative rounded-2xl overflow-hidden bg-[#EFE8DD] border border-[#E2D5C4] group">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                          src={service.image}
                          alt={service.name}
                          onError={(e) => handleImageError(e, 'gel')}
                          className="w-full aspect-[4/3] object-cover transition-transform"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 right-3 bg-[#FAF7F2]/90 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-medium text-[#4D3F37] border border-[#E0D3C2]">
                          {service.category}
                        </div>
                      </div>
                    </div>

                    {/* Editorial Details */}
                    <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                      <div>
                        <div className="flex items-center gap-3 text-xs text-[#8A796F] mb-1">
                          <span className="font-serif italic text-base text-[#9A7D2C]">
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#C49B37]" />
                            {service.duration}
                          </span>
                        </div>

                        <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-medium mb-1">
                          {service.name}
                        </h2>
                        <p className="text-sm font-serif italic text-[#876F4B]">
                          {service.tagline}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-[#5D4E45] leading-relaxed">
                        {service.description}
                      </p>

                      {/* Service Key Highlights (clean unboxed list) */}
                      <div className="space-y-1.5 pt-1">
                        <p className="text-xs uppercase tracking-wider text-[#8A786E] font-medium">
                          What's Included
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#52443C]">
                          {service.highlights.map((h) => (
                            <li key={h} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#DEC37C] shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Price and Book Action */}
                      <div className="pt-4 border-t border-[#F0E6D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[#938278] block">
                            Investment
                          </span>
                          <span className="font-serif text-xl sm:text-2xl text-[#2C2420] font-medium">
                            {service.priceNote}
                          </span>
                          <span className="text-[11px] text-[#938278] block">
                            *Confirmed during pre-appointment consultation
                          </span>
                        </div>

                        <MotionButton
                          variant="primary"
                          onClick={() => onSelectServiceForBooking(service.id)}
                          icon={<Sparkles className="w-3.5 h-3.5 text-[#9E7D2D]" />}
                          className="px-6 py-3 text-xs uppercase tracking-wider font-semibold whitespace-nowrap"
                        >
                          Book This Service
                        </MotionButton>
                      </div>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Aftercare & Studio Prep Guide */}
      <ScrollReveal variant="fade-up">
        <section className="bg-[#F5ECE0] rounded-[2.5rem] border border-[#E5DACB] p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#9A8150] font-medium">
              Long-Lasting Results
            </p>
            <h2 className="font-serif text-3xl text-[#2C2420] font-normal">
              Gentle Prep & Aftercare Tips
            </h2>
            <p className="text-xs sm:text-sm text-[#6C5B51]">
              To ensure your nails stay healthy, chip-free, and radiant for weeks.
            </p>
          </div>

          <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="h-full bg-[#FAF7F2] p-6 rounded-2xl border border-[#E9DFD2] space-y-2 shadow-2xs hover:shadow-xs transition-shadow">
                <Droplets className="w-5 h-5 text-[#9A7D2C]" />
                <h3 className="font-serif text-lg font-medium text-[#2C2420]">
                  Daily Cuticle Nourishment
                </h3>
                <p className="text-xs text-[#68584E] leading-relaxed">
                  Apply nourishing oil nightly to hydrate your cuticles and maintain gel flexibility without premature lifting.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="h-full bg-[#FAF7F2] p-6 rounded-2xl border border-[#E9DFD2] space-y-2 shadow-2xs hover:shadow-xs transition-shadow">
                <ShieldCheck className="w-5 h-5 text-[#9A7D2C]" />
                <h3 className="font-serif text-lg font-medium text-[#2C2420]">
                  Jewels, Not Tools
                </h3>
                <p className="text-xs text-[#68584E] leading-relaxed">
                  Avoid using the free edge of your nails to pry tape, cans, or heavy boxes to preserve structural apex strength.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="h-full bg-[#FAF7F2] p-6 rounded-2xl border border-[#E9DFD2] space-y-2 shadow-2xs hover:shadow-xs transition-shadow">
                <HeartHandshake className="w-5 h-5 text-[#9A7D2C]" />
                <h3 className="font-serif text-lg font-medium text-[#2C2420]">
                  Gentle Professional Removal
                </h3>
                <p className="text-xs text-[#68584E] leading-relaxed">
                  Never peel or force off gel or acrylic. Jasmine provides gentle, non-damaging soak-off removals.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>
      </ScrollReveal>

      {/* Quick Booking Anchor */}
      <ScrollReveal variant="zoom-in">
        <section className="text-center space-y-4 pt-4">
          <p className="text-xs uppercase tracking-wider text-[#8A786E]">
            Have a unique style or wedding reference?
          </p>
          <MotionButton
            variant="primary"
            onClick={() => onNavigate('booking')}
            icon={<ArrowRight className="w-3.5 h-3.5 text-[#8C6D27]" />}
            iconPosition="right"
            className="px-8 py-3.5 text-xs uppercase tracking-wider font-semibold"
          >
            Request Custom Consultation & Appointment
          </MotionButton>
        </section>
      </ScrollReveal>

    </div>
  );
};

