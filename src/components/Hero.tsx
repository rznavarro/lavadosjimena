import { useEffect, useState, useRef } from 'react';
import { MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, PREFILLED_MESSAGES, getWhatsAppUrl, trackWhatsAppClick } from '../data/config';
import { WaveDivider } from './WaveDivider';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Detect slow connection
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
      if (conn?.saveData || conn?.effectiveType === '2g' || conn?.effectiveType === 'slow-2g') {
        setIsSlowConnection(true);
      }
    }

    const handleScroll = () => {
      // Only track first 400px for desktop parallax
      if (window.innerWidth >= 1024) {
        setScrollY(Math.min(window.scrollY, 400));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations for desktop
  const progress = Math.min(scrollY / 400, 1);
  const videoScale = 1 - progress * 0.06; // from 1 to 0.94
  const videoRadius = 24 + progress * 8; // from 24px to 32px

  const h1Words = ['Lavado', 'de', 'alfombras,', 'sofás', 'y', 'colchones', 'a', 'domicilio', 'en', 'Santiago'];

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 bg-[#F4FAFA] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0E7C86] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0E7C86] inline-block animate-pulse" />
              <span>Empresa familiar · Desde 2016</span>
            </div>

            {/* H1 with water wipe reveal */}
            <h1 className="font-heading font-extrabold text-[#0F2A33] text-[2.35rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.08] tracking-[-0.02em] mb-5">
              {h1Words.map((word, idx) => (
                <span
                  key={idx}
                  className="inline-block mr-[0.26em] water-reveal"
                  style={{
                    animationDelay: `${idx * 70}ms`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Bajada */}
            <p className="text-[#0F2A33]/85 text-base sm:text-lg lg:text-[18px] leading-relaxed mb-6 max-w-xl">
              Limpiamos y sanitizamos tu hogar con los productos adecuados para cada superficie. Vamos a toda la Región Metropolitana.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-5">
              <a
                href={getWhatsAppUrl(PREFILLED_MESSAGES.generic)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero"
                onClick={() => trackWhatsAppClick('hero')}
                className="inline-flex items-center justify-center gap-3 bg-[#0E7C86] hover:bg-[#0a5e66] active:scale-[0.98] text-white font-bold text-base sm:text-lg min-h-[54px] px-7 rounded-full shadow-[0_10px_25px_-5px_rgba(14,124,134,0.35)] hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5]"
              >
                <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
                <span>Cotizar por WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 border-2 border-[#0F2A33] hover:bg-[#0F2A33] hover:text-white text-[#0F2A33] font-semibold text-base min-h-[54px] px-6 rounded-full transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5]"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar al +56 9 6346 7293</span>
              </a>
            </div>

            {/* Micro trust line */}
            <div className="flex items-center gap-2 text-xs sm:text-[13.5px] text-[#0F2A33]/75 pt-1">
              <CheckCircle2 className="w-4 h-4 text-[#0E7C86] shrink-0" />
              <span>Todos los medios de pago · Atendemos hogares y empresas</span>
            </div>
          </div>

          {/* Right Column: Real Work Video (7 cols on lg) */}
          <div className="lg:col-span-7 mt-2 lg:mt-0">
            <div
              className="relative w-full max-h-[56vh] sm:max-h-[500px] lg:max-h-[560px] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10] overflow-hidden shadow-[0_20px_60px_-20px_rgba(15,42,51,0.25)] border border-[#D6E7E8] bg-[#0F2A33]"
              style={{
                borderRadius: `${videoRadius}px`,
                transform: `scale(${videoScale})`,
                transition: 'transform 0.1s ease-out, border-radius 0.1s ease-out',
              }}
            >
              {isSlowConnection ? (
                <img
                  src="/videos/espejo-poster.webp"
                  alt="Limpieza de espejo de baño a domicilio – Lavados Jimena"
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/videos/espejo-poster.webp"
                  className="w-full h-full object-cover"
                  title="Demostración de limpieza profesional de espejo a domicilio por Lavados Jimena"
                >
                  <source src="/videos/espejo.webm" type="video/webm" />
                  <source src="/videos/espejo.mp4" type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
              )}

              {/* Discreet badge inside video corner */}
              <div className="absolute bottom-4 left-4 bg-[#0F2A33]/75 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 pointer-events-none">
                <Sparkles className="w-3.5 h-3.5 text-[#6CCDD5]" />
                <span>Trabajo real a domicilio</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Divider at bottom of hero */}
      <WaveDivider className="mt-8 sm:mt-12" />
    </section>
  );
}
