export type PageId = 'home' | 'services' | 'gallery' | 'about' | 'booking' | 'contact';

export type GalleryCategory = 'All' | 'Gel' | 'Acrylic' | 'Extensions' | 'Nail Art' | 'Custom Sets';

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  duration: string;
  priceNote: string;
  image: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  description: string;
  image: string;
  styleTags: string[];
}

export interface BookingFormData {
  name: string;
  phone: string;
  instagram: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  message: string;
}
