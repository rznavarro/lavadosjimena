import { useState } from 'react';
import { MessageCircle, CheckCircle2, Play } from 'lucide-react';
import { PREFILLED_MESSAGES, getWhatsAppUrl, trackWhatsAppClick } from '../data/config';
import { WaveDivider } from './WaveDivider';

export function MovingSection() {
  const [activeVideo, setActiveVideo] = useState<'lampara' | 'espejo'>('lampara');

  const checklistItems = [
    { title: 'Cocinas', desc: 'Desengrase y limpieza a fondo de muebles y mesones' },
    { title: 'Baños', desc: 'Desinfección profunda de cerámicas y artefactos' },
    { title: 'Superficies y pisos', desc: 'Eliminación completa de polvo y residuos' },
    { title: 'Textiles y tapices', desc: 'Lavado especializado de alfombras y cortinas' },
  ];

  return (
    <section id="mudanzas" className="relative py-16 sm:py-24 bg-[#F4FAFA]">
      <WaveDivider className="mb-10 sm:mb-14" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Copy & Checklist (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0E7C86] mb-2 block">
              Pre y post mudanza
            </span>

            <h2 className="font-heading font-extrabold text-[#0F2A33] text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-[-0.02em] mb-4">
              ¿Te mudas? Deja el hogar listo para estrenar.
            </h2>

            <p className="text-[#0F2A33]/85 text-base sm:text-lg leading-relaxed mb-6">
              Nos encargamos de la limpieza completa antes y después de tu mudanza para que tú te concentres en disfrutar tu nuevo hogar. Limpiamos cada rincón.
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {checklistItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-4 rounded-xl border border-[#D6E7E8] flex items-start gap-3 shadow-2xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0E7C86] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-[#0F2A33] text-base leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#0F2A33]/75 mt-0.5 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href={getWhatsAppUrl(PREFILLED_MESSAGES.mudanza)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="mudanza"
                onClick={() => trackWhatsAppClick('mudanza')}
                className="inline-flex items-center justify-center gap-3 bg-[#0E7C86] hover:bg-[#0a5e66] active:scale-[0.98] text-white font-bold text-base sm:text-lg min-h-[54px] px-8 rounded-full shadow-md hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5]"
              >
                <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
                <span>Cotizar limpieza de mudanza</span>
              </a>
            </div>
          </div>

          {/* Right Column: Real Videos (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Video Display */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(15,42,51,0.25)] border border-[#D6E7E8] bg-[#0F2A33]">
              <video
                key={activeVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={`/videos/${activeVideo}-poster.webp`}
                className="w-full h-full object-cover"
                title={`Demostración de limpieza de ${activeVideo === 'lampara' ? 'luminaria y detalles' : 'superficie de baño'}`}
              >
                <source src={`/videos/${activeVideo}.webm`} type="video/webm" />
                <source src={`/videos/${activeVideo}.mp4`} type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>

              <div className="absolute top-4 left-4 bg-[#0F2A33]/80 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full font-medium">
                {activeVideo === 'lampara' ? 'Luminarias y detalles' : 'Espejos y superficies'}
              </div>
            </div>

            {/* Video Selector Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setActiveVideo('lampara')}
                className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6CCDD5] ${
                  activeVideo === 'lampara'
                    ? 'bg-white border-[#0E7C86] shadow-sm'
                    : 'bg-white/60 border-[#D6E7E8] opacity-75 hover:opacity-100'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#0E7C86]/10 flex items-center justify-center shrink-0">
                  <Play className={`w-4 h-4 ${activeVideo === 'lampara' ? 'text-[#0E7C86] fill-[#0E7C86]' : 'text-[#0F2A33]'}`} />
                </div>
                <div className="min-w-0">
                  <div className="font-heading font-bold text-xs sm:text-sm text-[#0F2A33] truncate">
                    Video 1: Luminarias
                  </div>
                  <div className="text-[11px] text-[#0F2A33]/70 truncate">
                    Limpieza profunda de lámparas
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveVideo('espejo')}
                className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6CCDD5] ${
                  activeVideo === 'espejo'
                    ? 'bg-white border-[#0E7C86] shadow-sm'
                    : 'bg-white/60 border-[#D6E7E8] opacity-75 hover:opacity-100'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#0E7C86]/10 flex items-center justify-center shrink-0">
                  <Play className={`w-4 h-4 ${activeVideo === 'espejo' ? 'text-[#0E7C86] fill-[#0E7C86]' : 'text-[#0F2A33]'}`} />
                </div>
                <div className="min-w-0">
                  <div className="font-heading font-bold text-xs sm:text-sm text-[#0F2A33] truncate">
                    Video 2: Vidrios y Baños
                  </div>
                  <div className="text-[11px] text-[#0F2A33]/70 truncate">
                    Desinfección de espejos
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
