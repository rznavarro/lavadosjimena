import { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO, PREFILLED_MESSAGES, getWhatsAppUrl, trackWhatsAppClick } from '../data/config';

export function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasPulsed, setHasPulsed] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after passing hero section (~450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle pulse once at 8 seconds of session time
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasPulsed) {
        setIsPulsing(true);
        setHasPulsed(true);
        setTimeout(() => setIsPulsing(false), 1200);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [hasPulsed]);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Acciones rápidas de contacto"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-[#D6E7E8] px-3 py-2 shadow-[0_-4px_20px_rgba(15,42,51,0.08)] pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="grid grid-cols-2 gap-2.5 h-[56px] items-center">
        {/* Button 1: WhatsApp (50%) */}
        <a
          href={getWhatsAppUrl(PREFILLED_MESSAGES.generic)}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="sticky"
          onClick={() => trackWhatsAppClick('sticky')}
          className={`h-full flex items-center justify-center gap-2 bg-[#0E7C86] active:bg-[#0a5e66] text-white font-bold text-[15px] rounded-xl shadow-xs transition-transform active:scale-95 ${
            isPulsing ? 'scale-105 ring-4 ring-[#6CCDD5]/50' : ''
          }`}
        >
          <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366] shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Button 2: Call (50%) */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="h-full flex items-center justify-center gap-2 border-2 border-[#0F2A33] active:bg-[#0F2A33] active:text-white text-[#0F2A33] bg-white font-bold text-[15px] rounded-xl transition-all active:scale-95"
        >
          <Phone className="w-4 h-4 text-[#0E7C86] shrink-0" />
          <span>Llamar</span>
        </a>
      </div>
    </aside>
  );
}
