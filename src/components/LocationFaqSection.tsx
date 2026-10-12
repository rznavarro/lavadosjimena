import { useState } from 'react';
import { MapPin, Phone, ExternalLink, ChevronDown, Map, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/config';

export function LocationFaqSection() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First open by default

  const faqs = [
    {
      q: '¿Van a domicilio?',
      a: 'Sí, a toda la Región Metropolitana.',
    },
    {
      q: '¿Dónde están ubicados?',
      a: 'En Carlos Dittborn 890, Ñuñoa, cerca del Estadio Nacional.',
    },
    {
      q: '¿Qué medios de pago aceptan?',
      a: 'Aceptamos todos los métodos de pago.',
    },
    {
      q: '¿Atienden empresas?',
      a: 'Sí, hemos trabajado con inmobiliarias y empresas de energía.',
    },
    {
      q: '¿Cómo cotizo?',
      a: 'Escríbenos por WhatsApp al +56 9 6346 7293 contándonos qué necesitas limpiar.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="ubicacion" className="py-16 sm:py-24 bg-[#F4FAFA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0E7C86] mb-2 block">
            Ubicación y Cobertura
          </span>
          <h2 className="font-heading font-extrabold text-[#0F2A33] text-3xl sm:text-4xl lg:text-[40px] tracking-[-0.02em]">
            Estamos en Ñuñoa y vamos a toda la Región Metropolitana
          </h2>
        </div>

        {/* Top Grid: Location Info + Lazy-Loaded Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Info card (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#D6E7E8] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0E7C86]/10 flex items-center justify-center text-[#0E7C86] mb-6">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="font-heading font-bold text-[#0F2A33] text-2xl mb-4">
                Taller y Base Central
              </h3>

              <div className="space-y-4 text-base text-[#0F2A33]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0E7C86] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F2A33]">Dirección:</strong>
                    <span>{BUSINESS_INFO.address}</span>
                    <span className="block text-sm text-[#0F2A33]/70 font-medium">
                      ({BUSINESS_INFO.addressReference})
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0E7C86] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F2A33]">Teléfono y WhatsApp:</strong>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-[#0E7C86] hover:underline font-semibold"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#0E7C86] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F2A33]">Cobertura:</strong>
                    <span>{BUSINESS_INFO.coverage}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D6E7E8]">
              <a
                href={BUSINESS_INFO.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#0F2A33] hover:bg-[#0F2A33] hover:text-white text-[#0F2A33] font-bold py-3.5 px-6 rounded-full transition-all text-sm sm:text-base focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5]"
              >
                <span>Cómo llegar en Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Lazy Map (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#D6E7E8] rounded-2xl overflow-hidden min-h-[340px] sm:min-h-[400px] flex items-center justify-center relative shadow-xs">
            {mapLoaded ? (
              <iframe
                title="Mapa de ubicación Lavados Jimena LTDA en Carlos Dittborn 890, Ñuñoa"
                src="https://maps.google.com/maps?q=-33.465764,-70.617921&hl=es&z=15&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0 min-h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="p-8 text-center flex flex-col items-center justify-center max-w-md">
                <div className="w-16 h-16 rounded-full bg-[#6CCDD5]/25 flex items-center justify-center text-[#0E7C86] mb-4">
                  <Map className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-[#0F2A33] text-xl mb-2">
                  Carlos Dittborn 890, Ñuñoa
                </h4>
                <p className="text-sm text-[#0F2A33]/70 mb-6">
                  Cerca del Estadio Nacional. Presiona el botón para interactuar con el mapa.
                </p>
                <button
                  type="button"
                  onClick={() => setMapLoaded(true)}
                  className="inline-flex items-center gap-2 bg-[#0E7C86] hover:bg-[#0a5e66] text-white font-semibold px-6 py-3 rounded-full text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5]"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Ver mapa interactivo</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto pt-6">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0F2A33] text-center mb-8">
            Preguntas Frecuentes
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white border border-[#D6E7E8] rounded-xl overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-[#0F2A33] hover:text-[#0E7C86] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0E7C86] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-[#0F2A33]/85 text-base border-t border-[#D6E7E8]/50 animate-in fade-in duration-150">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
