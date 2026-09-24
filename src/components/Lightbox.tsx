import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { handleImageError } from '../utils/imageUtils';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigateToItem: (item: GalleryItem) => void;
  onBookThisLook: (item: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onNavigateToItem,
  onBookThisLook,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigateToItem(items[currentIndex - 1]);
    } else {
      onNavigateToItem(items[items.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      onNavigateToItem(items[currentIndex + 1]);
    } else {
      onNavigateToItem(items[0]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1D1714]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[#DECDBB] flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] text-[#2C2420] border border-[#DECDBB] transition-colors focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="relative md:w-3/5 bg-[#F0E8DD] flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px]">
          <img
            src={item.image}
            alt={item.title}
            onError={(e) => handleImageError(e, 'art')}
            className="w-full h-full object-cover max-h-[70vh] transition-all"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FAF7F2]/85 hover:bg-[#FAF7F2] text-[#2C2420] shadow-sm transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FAF7F2]/85 hover:bg-[#FAF7F2] text-[#2C2420] shadow-sm transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Details Pane */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between text-xs text-[#8C7A70] mb-2">
              <span className="uppercase tracking-widest font-medium text-[#A67E24]">
                {item.category}
              </span>
              <span>
                {currentIndex + 1} of {items.length}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2C2420] leading-snug mb-3">
              {item.title}
            </h3>

            <p className="text-sm text-[#5C4D44] leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Clean unboxed tags with typographic separator */}
            <div className="pt-3 border-t border-[#EAE0D3]">
              <p className="text-xs uppercase tracking-wider text-[#8A786E] mb-2 font-medium">
                Design Accents
              </p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#52443C]">
                {item.styleTags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {idx < item.styleTags.length - 1 && (
                      <span className="text-[#C4B3A4]">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#EAE0D3] space-y-3">
            <button
              onClick={() => onBookThisLook(item)}
              className="w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#2C2420] bg-[#F8EABA] hover:bg-[#F3DF9F] border border-[#DEC37C]/60 flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#A88836]" />
              <span>Inquire About This Look</span>
            </button>
            <p className="text-center text-[11px] text-[#8C7A70]">
              Custom adaptations available during your private session.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
