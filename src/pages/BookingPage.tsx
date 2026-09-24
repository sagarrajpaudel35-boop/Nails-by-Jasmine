import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageId, BookingFormData } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import {
  Instagram,
  Phone,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle,
  Copy,
  Info,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { NailCurveAccent } from '../components/DecorativeAccents';
import { ScrollReveal, MotionButton, StaggerContainer, StaggerItem } from '../components/AnimatedUi';
import { CONTACT_INFO } from '../data/contactInfo';

interface BookingPageProps {
  onNavigate: (page: PageId) => void;
  preselectedServiceId?: string;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  onNavigate,
  preselectedServiceId,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    instagram: '',
    serviceId: preselectedServiceId || 'gel-nails',
    date: '',
    timeSlot: '11:00 AM',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedNotice, setCopiedNotice] = useState(false);

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '1:00 PM',
    '2:30 PM',
    '4:00 PM',
    '5:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }
    const whatsappUrl = `https://wa.me/9779704533086?text=${encodeURIComponent(inquirySummaryText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedService = SERVICES_DATA.find((s) => s.id === formData.serviceId);

  const inquirySummaryText = `Hi Jasmine! I'd like to book an appointment with Nails by Jasmine.
Name: ${formData.name || '[Your Name]'}
Phone: ${formData.phone || '[Your Phone]'}
Service: ${selectedService?.name || 'Nail Service'}
Preferred Date: ${formData.date || '[Preferred Date]'}
Preferred Time: ${formData.timeSlot}
Instagram: ${formData.instagram ? `@${formData.instagram.replace('@', '')}` : '[Not provided]'}
Note: ${formData.message || 'Looking forward to my appointment!'}`;

  const copyInquiryText = () => {
    navigator.clipboard.writeText(inquirySummaryText);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 4000);
  };

  return (
    <div className="space-y-16 sm:space-y-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      
      {/* Editorial Header */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <ScrollReveal variant="blur-in">
          <div className="flex items-center justify-center">
            <NailCurveAccent />
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fade-down" delay={0.1}>
          <p className="text-xs uppercase tracking-widest text-[#9A8150] font-medium">
            Reserve Your Slot · Prithivi Chowk, Pokhara
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.2}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2420] font-normal tracking-tight text-balance">
            Book Your Appointment
          </h1>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.3}>
          <p className="text-base sm:text-lg text-[#615248] leading-relaxed text-balance">
            Appointments and inquiries are handled directly through WhatsApp. Fill out your details below to send an instant request, or message Jasmine directly.
          </p>
        </ScrollReveal>
      </section>

      {/* Two Direct Action Cards */}
      <section>
        <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* WhatsApp Primary Card */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(70,55,44,0.08)' }}
              transition={{ duration: 0.3 }}
              className="h-full bg-[#FFFDFB] rounded-[2rem] border border-[#D5E6D8] p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(70,55,44,0.03)] hover:border-[#B7D8BD] transition-colors group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF7EE] flex items-center justify-center text-[#25D366] border border-[#CCE0C4]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#1E8A42] font-semibold mb-1">
                    Instant Booking & Inquiries
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2420] font-medium">
                    WhatsApp Booking
                  </h2>
                </div>
                <p className="text-sm text-[#68574E] leading-relaxed">
                  Send reference photos, ask questions about nail lengths, and get instant booking confirmation directly on WhatsApp.
                </p>
                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EBE1D3] text-xs text-[#806E64] space-y-1">
                  <div>
                    <span className="font-semibold text-[#2C2420]">Phone / WhatsApp:</span>{' '}
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

              <div className="pt-6 mt-6 border-t border-[#F2E8DC] flex flex-col sm:flex-row gap-3">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-full transition-all shadow-xs cursor-pointer active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={CONTACT_INFO.telUrl}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#2C2420] bg-[#FAF7F2] hover:bg-white border border-[#D9CDBC] rounded-full transition-all shadow-xs cursor-pointer active:scale-98"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4B7351]" />
                  <span>Call</span>
                </a>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Instagram Portfolio Card */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(70,55,44,0.08)' }}
              transition={{ duration: 0.3 }}
              className="h-full bg-[#FFFDFB] rounded-[2rem] border border-[#E9DFD2] p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(70,55,44,0.03)] hover:border-[#DBC8B2] transition-colors group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FBF0F2] flex items-center justify-center text-[#B6566E] border border-[#F2D7DD]">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#B6566E] font-semibold mb-1">
                    Design Portfolio
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2420] font-medium">
                    Instagram
                  </h2>
                </div>
                <p className="text-sm text-[#68574E] leading-relaxed">
                  Browse Jasmine's latest handcrafted sets, fresh designs, and stories for style inspiration before your visit.
                </p>
                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EBE1D3] text-xs text-[#806E64]">
                  <span className="font-semibold text-[#2C2420]">Handle:</span>{' '}
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

              <div className="pt-6 mt-6 border-t border-[#F2E8DC]">
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#2C2420] bg-[#FAF7F2] hover:bg-white border border-[#D9CDBC] rounded-full transition-all shadow-xs cursor-pointer active:scale-98"
                >
                  <Instagram className="w-4 h-4 text-[#B6566E]" />
                  <span>View Profile ({CONTACT_INFO.instagramDisplay})</span>
                </a>
              </div>
            </motion.div>
          </StaggerItem>

        </StaggerContainer>
      </section>

      {/* Booking Request Form & Confirmation */}
      <ScrollReveal variant="fade-up">
        <section id="booking-inquiry" className="scroll-mt-24">
          {submitted ? (
            <div className="bg-[#FFFDFB] rounded-[2.5rem] border border-[#DFCDB7] p-8 sm:p-12 text-center space-y-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#25D366] flex items-center justify-center mx-auto border border-[#CCE0C4]">
                <MessageCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-[#1E8A42] font-semibold">
                  Inquiry Prepared for WhatsApp
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-medium">
                  Thank You, {formData.name}!
                </h2>
                <p className="text-sm text-[#6B5A51] max-w-lg mx-auto leading-relaxed">
                  Your appointment request has been prepared for WhatsApp with Jasmine at <strong>{CONTACT_INFO.phoneDisplay}</strong>. Tap below if WhatsApp didn't open automatically.
                </p>
              </div>

              {/* Formatted WhatsApp message block */}
              <div className="max-w-md mx-auto text-left bg-[#FAF7F2] p-5 rounded-2xl border border-[#E8DEC7] space-y-3">
                <div className="flex items-center justify-between text-xs text-[#7A6B62]">
                  <span className="font-medium text-[#2C2420]">Your WhatsApp Message:</span>
                  <button
                    onClick={copyInquiryText}
                    className="flex items-center gap-1 text-xs text-[#9E7D2D] hover:underline font-semibold cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedNotice ? 'Copied!' : 'Copy Text'}</span>
                  </button>
                </div>
                <pre className="text-xs font-sans text-[#52443C] whitespace-pre-wrap bg-white p-3 rounded-lg border border-[#EDE2D4]">
                  {inquirySummaryText}
                </pre>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="max-w-lg mx-auto space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/9779704533086?text=${encodeURIComponent(inquirySummaryText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs cursor-pointer active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>

                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF7F2] hover:bg-white text-[#2C2420] border border-[#D9CDBC] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                  >
                    <Instagram className="w-4 h-4 text-[#B6566E]" />
                    <span>Instagram: {CONTACT_INFO.instagramDisplay}</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-wider font-semibold text-[#66554A] hover:text-[#2C2420] underline cursor-pointer"
                >
                  Submit another inquiry
                </button>
                <MotionButton
                  variant="primary"
                  onClick={() => onNavigate('gallery')}
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#8C6D27]" />}
                  iconPosition="right"
                  className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold"
                >
                  Browse Gallery Meanwhile
                </MotionButton>
              </div>
            </div>
          ) : (
            <div className="bg-[#FFFDFB] rounded-[2.5rem] border border-[#E9DFD2] p-8 sm:p-12 lg:p-14 shadow-[0_4px_24px_rgba(70,55,44,0.03)] space-y-8">
              <div className="border-b border-[#F0E6D8] pb-6 space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#9A8150] font-medium">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Direct WhatsApp Inquiry</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] font-normal">
                  Check Studio Availability
                </h2>
                <p className="text-xs sm:text-sm text-[#6C5B51]">
                  Fill out your appointment details below. Clicking send will open WhatsApp with your message pre-filled to Jasmine.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider font-medium text-[#52443C]">
                      Your Name <span className="text-[#C4766A]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Samikshya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm text-[#2C2420] placeholder-[#A49489] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#C49B37] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-medium text-[#52443C]">
                      Phone Number <span className="text-[#C4766A]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="e.g. 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm text-[#2C2420] placeholder-[#A49489] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#C49B37] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Instagram Handle & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="instagram" className="block text-xs uppercase tracking-wider font-medium text-[#52443C]">
                      Instagram Username <span className="text-[#8A796F] text-[11px] normal-case">(optional, for sharing inspo)</span>
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      placeholder="@yourusername"
                      value={formData.instagram}
                      onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm text-[#2C2420] placeholder-[#A49489] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#C49B37] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="block text-xs uppercase tracking-wider font-medium text-[#52443C]">
                      Preferred Service <span className="text-[#C4766A]">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#C49B37] transition-all"
                    >
                      {SERVICES_DATA.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} ({service.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Preferred Date & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="date" className="block text-xs uppercase tracking-wider font-medium text-[#52443C]">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#C49B37] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="time" className="block text-xs uppercase tracking-wider font-medium text-[#52443C]">
                      Preferred Time Slot
                    </label>
                    <select
                      id="time"
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#C49B37] transition-all"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Additional Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-medium text-[#52443C]">
                    Additional Notes or Design Ideas <span className="text-[#8A796F] text-[11px] normal-case">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="e.g. I have short natural nails and would like soft butter yellow micro french tips. Also need previous gel removal."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm text-[#2C2420] placeholder-[#A49489] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#C49B37] resize-none transition-all"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <MotionButton
                    type="submit"
                    variant="primary"
                    icon={<MessageCircle className="w-4 h-4 text-[#25D366]" />}
                    className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-wider font-semibold"
                  >
                    Send Inquiry via WhatsApp
                  </MotionButton>
                </div>

              </form>
            </div>
          )}
        </section>
      </ScrollReveal>

      {/* Appointment Policies & Etiquette */}
      <ScrollReveal variant="fade-up">
        <section className="bg-[#F6EFE5] rounded-3xl border border-[#E9DFD2] p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#9A7D2C]" />
            <h3 className="font-serif text-2xl text-[#2C2420] font-medium">
              Studio Etiquette & Policies
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-[#68584E] leading-relaxed">
            <div className="space-y-1">
              <p className="font-semibold text-[#2C2420]">Private Studio Location</p>
              <p>
                To maintain client privacy and security, exact street and apartment directions in Prithivi Chowk are shared upon booking confirmation.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-[#2C2420]">Cancellations & Rescheduling</p>
              <p>
                Please provide at least 24 hours' notice if you need to reschedule so the time slot can be made available to other clients.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-[#2C2420]">Prior Set Removal</p>
              <p>
                If you currently have acrylics or gel polish from another salon that needs removal, please mention it so extra time is scheduled.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
};
