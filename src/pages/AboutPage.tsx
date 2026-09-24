import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import {
  MapPin,
  Sparkles,
  Heart,
  Coffee,
  ShieldCheck,
  Smile,
  ArrowRight,
  Camera,
} from 'lucide-react';
import { TinyStar, MicroFlower, NailCurveAccent, SoftOrganicBlob } from '../components/DecorativeAccents';
import { ScrollReveal, MotionButton, FloatAccent, StaggerContainer, StaggerItem } from '../components/AnimatedUi';
import { handleImageError } from '../utils/imageUtils';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem('jasmine_custom_portrait') || null;
    } catch {
      return null;
    }
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if Jasmine original photo is saved on the server for all visitors
    fetch('/api/portrait-status')
      .then((res) => res.json())
      .then((data) => {
        if (data.exists && data.url) {
          setCustomPhoto((prev) => prev || `${data.url}?v=${Date.now()}`);
        }
      })
      .catch(() => {});
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl) {
          setCustomPhoto(dataUrl);
          try {
            localStorage.setItem('jasmine_custom_portrait', dataUrl);
          } catch {}

          fetch('/api/upload-portrait', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageBase64: dataUrl }),
          }).catch(() => {});
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = async (event) => {
          const dataUrl = event.target?.result as string;
          if (dataUrl) {
            setCustomPhoto(dataUrl);
            try {
              localStorage.setItem('jasmine_custom_portrait', dataUrl);
            } catch {}
            fetch('/api/upload-portrait', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ imageBase64: dataUrl }),
            }).catch(() => {});
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const activePhotoSrc =
    customPhoto ||
    '/jasmine_photo.jpg';

  return (
    <div className="space-y-20 sm:space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      
      {/* Editorial Meet Jasmine Hero */}
      <section className="relative">
        <SoftOrganicBlob className="-top-16 -left-16 w-72 h-72" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Jasmine Portrait Area */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal variant="fade-right" duration={0.8}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Offset soft border */}
                <div className="absolute inset-0 rounded-[2.8rem] border border-[#DECDBB] translate-x-3 translate-y-3 -z-10" />

                {/* Main Portrait Box */}
                <div
                  className="relative rounded-[2.5rem] overflow-hidden bg-[#FAF7F2] shadow-[0_12px_36px_rgba(74,59,48,0.08)] border border-[#E5DACD] group"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                    src={activePhotoSrc}
                    alt="Jasmine, founder and nail artist at Nails by Jasmine in Pokhara"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.dataset.retried) {
                        img.dataset.retried = '1';
                        img.src = '/images/jasmine_birthday_photo_1790226189599.jpg';
                      }
                    }}
                    className="w-full aspect-[3/4] object-cover transition-transform"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle photo swap trigger on hover */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF7F2]/80 hover:bg-white text-[#7A6B62] hover:text-[#2C2420] shadow-sm border border-[#E0D3C2]/80 transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                    title="Update photo"
                  >
                    <Camera className="w-3.5 h-3.5" />
                  </motion.button>

                  <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-md rounded-2xl p-4 border border-[#E0D3C2] z-10 shadow-xs">
                    <p className="font-serif text-lg font-medium text-[#2C2420]">
                      Jasmine
                    </p>
                    <p className="text-xs text-[#7A6B62]">
                      Studio Founder & Nail Artist · Pokhara
                    </p>
                  </div>
                </div>

                {/* Hidden file input for seamless updates */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {/* Subtle floating decorative accents */}
                <FloatAccent duration={4.2} yOffset={6} className="absolute -bottom-3 -right-3 p-2.5 bg-[#FAF7F2] rounded-full border border-[#DECDBB] shadow-sm">
                  <MicroFlower size={18} />
                </FloatAccent>
                <FloatAccent duration={3.6} yOffset={5} className="absolute -top-3 -left-3 p-2 bg-[#FAF7F2] rounded-full border border-[#DECDBB] shadow-sm">
                  <TinyStar size={16} />
                </FloatAccent>
              </div>
            </ScrollReveal>
          </div>

          {/* Copy Area */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fade-down" delay={0.1}>
              <div className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#8C7A70] font-medium bg-[#F3ECE1] px-3.5 py-1.5 rounded-full border border-[#E4D7C7]">
                <MapPin className="w-3.5 h-3.5 text-[#C49B37]" />
                <span>Based in Prithivi Chowk, Pokhara</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2420] font-normal leading-tight text-balance">
                Meet Jasmine
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.3}>
              <div className="space-y-4 text-base sm:text-lg text-[#5E4F46] leading-relaxed font-normal">
                <p>
                  Welcome to my private studio! Nails by Jasmine was created out of a deep love for detail, calm spaces, and making everyday self-care feel truly special.
                </p>
                <p>
                  Unlike commercial salon spaces where appointments can feel fast-paced and crowded, I opened this home-based studio in Prithivi Chowk, Pokhara to provide a gentle, unhurried space. Here, you get one-on-one attention, thoughtful design guidance, and a relaxing moment to unwind with warm tea while we craft nails you'll love showing off.
                </p>
                <p>
                  Whether you're looking for clean, natural builder gel overlays, handcrafted micro art, or sculpted extensions for a festive milestone, I work closely with your natural nails to ensure lasting beauty and healthy nail plates.
                </p>
              </div>
            </ScrollReveal>

            {/* Studio Standards & Artistry Focus */}
            <ScrollReveal variant="fade-up" delay={0.4}>
              <div className="pt-4 border-t border-[#EDE3D4] space-y-2">
                <p className="text-xs uppercase tracking-wider text-[#9A8150] font-medium">
                  Studio Standards & Artistry Focus
                </p>
                <div className="p-4 bg-[#F8F2E8] rounded-xl border border-[#E7DCCE] text-xs text-[#6B5D55] space-y-1.5">
                  <p className="font-medium text-[#2C2420]">
                    Dedicated Nail Artist & Natural Nail Specialist
                  </p>
                  <p>
                    • Specialization: Natural nail reinforcement, Russian dry cuticle technique, and bespoke hand-painted detailing.
                  </p>
                  <p>
                    • Sanitation Standard: Multi-step autoclave sanitation and fresh sanitized instruments for every client.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Primary Action Button */}
            <ScrollReveal variant="fade-up" delay={0.5}>
              <div className="pt-2">
                <MotionButton
                  variant="primary"
                  onClick={() => onNavigate('booking')}
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#8C6D27]" />}
                  iconPosition="right"
                  className="px-8 py-3.5 text-xs uppercase tracking-wider font-semibold"
                >
                  Book With Jasmine
                </MotionButton>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* The Studio Experience Section with Scroll Stagger */}
      <section className="bg-[#FAF7F2] rounded-[2.5rem] border border-[#E5DACB] p-8 sm:p-12 lg:p-16 space-y-10">
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div className="flex items-center justify-center">
              <NailCurveAccent />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-normal">
              The Cozy Studio Experience
            </h2>
            <p className="text-sm sm:text-base text-[#68584E]">
              Everything is prepared ahead of your arrival so your time in the chair feels like a breath of fresh air.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerItem>
            <motion.div whileHover={{ y: -4 }} className="space-y-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-[#F8EABA] flex items-center justify-center text-[#2C2420] mx-auto sm:mx-0">
                <Coffee className="w-5 h-5 text-[#9A7D2C]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2C2420]">
                Serene Sanctuary
              </h3>
              <p className="text-xs sm:text-sm text-[#66564D] leading-relaxed">
                Enjoy soft lo-fi acoustic playlists, fragrant herbal tea, and a quiet, peaceful home environment free from loud salon chatter.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div whileHover={{ y: -4 }} className="space-y-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-[#F8EABA] flex items-center justify-center text-[#2C2420] mx-auto sm:mx-0">
                <ShieldCheck className="w-5 h-5 text-[#9A7D2C]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2C2420]">
                Pristine Sanitation
              </h3>
              <p className="text-xs sm:text-sm text-[#66564D] leading-relaxed">
                Every metal tool is sterilized with medical disinfectant, files and buffers are sanitized or single-use, and work surfaces are wiped down before each guest.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div whileHover={{ y: -4 }} className="space-y-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-[#F8EABA] flex items-center justify-center text-[#2C2420] mx-auto sm:mx-0">
                <Smile className="w-5 h-5 text-[#9A7D2C]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2C2420]">
                Collaborative Artistry
              </h3>
              <p className="text-xs sm:text-sm text-[#66564D] leading-relaxed">
                No pressure. We discuss shapes, lengths, and shade swatches together, testing colors directly on your hands before finalizing.
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* Studio atmosphere photo */}
        <ScrollReveal variant="zoom-in" duration={0.8}>
          <div className="rounded-2xl overflow-hidden bg-[#EFE8DD] border border-[#DECDBB] aspect-[21/9] sm:aspect-[3/1] max-h-72">
            <img
              src="/images/studio_detail_corner.jpg"
              alt="Cozy sunlit workstation in Jasmine's Pokhara studio"
              onError={(e) => handleImageError(e, 'studio')}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Bottom CTA */}
      <ScrollReveal variant="fade-up">
        <section className="text-center space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#9A8150] font-medium">
            Ready to Visit?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-normal">
            Let's Chat About Your Dream Set
          </h2>
          <div className="pt-2">
            <MotionButton
              variant="primary"
              onClick={() => onNavigate('booking')}
              icon={<ArrowRight className="w-3.5 h-3.5 text-[#8C6D27]" />}
              iconPosition="right"
              className="px-8 py-3.5 text-xs uppercase tracking-wider font-semibold"
            >
              Book With Jasmine
            </MotionButton>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
};

