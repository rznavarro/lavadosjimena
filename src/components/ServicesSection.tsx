import { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SERVICES, PREFILLED_MESSAGES, getWhatsAppUrl, trackWhatsAppClick } from '../data/config';

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'hogar' | 'lavanderia'>('hogar');

  const filteredServices = SERVICES.filter((s) => s.category === activeTab);

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-[#F4FAFA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-heading font-extrabold text-[#0F2A33] text-3xl sm:text-4xl lg:text-[40px] tracking-[-0.02em] mb-3">
            ¿Qué necesitas dejar como nuevo?
          </h2>
          <p className="text-[#0F2A33]/80 text-base sm:text-lg">
            Elige tu servicio y escríbenos directo por WhatsApp.
          </p>

          {/* Interactive Category Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-[#D6E7E8]/60 rounded-full border border-[#D6E7E8]">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'hogar'}
              onClick={() => setActiveTab('hogar')}
              className={`px-6 sm:px-8 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5] ${
                activeTab === 'hogar'
                  ? 'bg-white text-[#0F2A33] shadow-sm'
                  : 'text-[#0F2A33]/70 hover:text-[#0F2A33]'
              }`}
            >
              Hogar (a domicilio)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'lavanderia'}
              onClick={() => setActiveTab('lavanderia')}
              className={`px-6 sm:px-8 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5] ${
                activeTab === 'lavanderia'
                  ? 'bg-white text-[#0F2A33] shadow-sm'
                  : 'text-[#0F2A33]/70 hover:text-[#0F2A33]'
              }`}
            >
              Lavandería
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredServices.map((service) => {
            const isLaundry = service.category === 'lavanderia';
            const ctaSlug = `servicio-${service.id}`;

            return (
              <div
                key={service.id}
                className="group relative bg-white border border-[#D6E7E8] rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#6CCDD5] flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-4"
              >
                {/* Media Container: Mobile 72px thumbnail, Desktop full top header */}
                <div
                  className={`shrink-0 w-[72px] h-[72px] sm:w-full sm:h-44 rounded-xl overflow-hidden flex items-center justify-center ${
                    isLaundry ? 'bg-[#6CCDD5]/25 p-2 sm:p-4' : 'bg-[#F4FAFA]'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    className={`w-full h-full ${
                      isLaundry ? 'object-contain' : 'object-cover'
                    } group-hover:scale-105 transition-transform duration-300`}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between w-full min-w-0">
                  <div>
                    <h3 className="font-heading font-bold text-[#0F2A33] text-lg sm:text-xl mb-1 sm:mb-2 truncate sm:whitespace-normal">
                      {service.name}
                    </h3>
                    <p className="text-[#0F2A33]/80 text-[13.5px] sm:text-sm leading-snug line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Service WhatsApp CTA */}
                  <div className="pt-1">
                    <a
                      href={getWhatsAppUrl(PREFILLED_MESSAGES.service(service.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cta={ctaSlug}
                      onClick={() => trackWhatsAppClick(ctaSlug)}
                      className="inline-flex items-center gap-1.5 text-[#0E7C86] font-bold text-sm sm:text-[15px] group-hover:text-[#09575e] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6CCDD5] rounded-md"
                    >
                      <span>Cotizar</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Banner */}
        <div className="mt-12 text-center p-6 sm:p-8 bg-white border border-[#D6E7E8] rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#0F2A33] font-medium text-base sm:text-lg text-center sm:text-left">
            ¿No ves lo que buscas? Escríbenos y te ayudamos.
          </p>
          <a
            href={getWhatsAppUrl(PREFILLED_MESSAGES.generic)}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="servicio-ayuda"
            onClick={() => trackWhatsAppClick('servicio-ayuda')}
            className="inline-flex items-center justify-center gap-2 bg-[#0E7C86] hover:bg-[#0a5e66] text-white font-semibold text-sm sm:text-base px-6 py-2.5 rounded-full shrink-0 shadow-xs transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5]"
          >
            <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
