// Utility for robust image loading and fail-safe fallbacks

export const DEFAULT_NAIL_FALLBACKS: Record<string, string> = {
  hero: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85',
  gel: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85',
  acrylic: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
  art: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=85',
  manicure: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85',
  custom: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85',
  studio: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
  portrait: '/jasmine_photo.jpg',
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackType: keyof typeof DEFAULT_NAIL_FALLBACKS = 'gel'
) => {
  const target = e.currentTarget;
  const fallback = DEFAULT_NAIL_FALLBACKS[fallbackType] || DEFAULT_NAIL_FALLBACKS.gel;
  if (target.src !== fallback) {
    target.src = fallback;
  }
};
