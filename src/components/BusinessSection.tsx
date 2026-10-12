import { MessageCircle, Building2 } from 'lucide-react';
import { BUSINESS_INFO, PREFILLED_MESSAGES, getWhatsAppUrl, trackWhatsAppClick } from '../data/config';

export function BusinessSection() {
  const { clients } = BUSINESS_INFO;

  return (
    <section id="empresas" className="py-16 sm:py-24 bg-[#F1E8DA] border-b border-[#D6E7E8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & CTA (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0E7C86] mb-3">
              <Building2 className="w-4 h-4" />
              <span>Servicio B2B e Inmobiliarias</span>
            </div>

            <h2 className="font-heading font-extrabold text-[#0F2A33] text-3xl sm:text-4xl lg:text-[40px] leading-tight tracking-[-0.02em] mb-4">
              También trabajamos con empresas
            </h2>

            <p className="text-[#0F2A33]/85 text-base sm:text-lg leading-relaxed mb-8">
              Hemos colaborado con empresas como Inmobiliaria Schumacher, Houm Inmobiliaria y Enlasa, adaptándonos a las necesidades de cada sector para mantener sus espacios en óptimas condiciones.
            </p>

            <div>
              <a
                href={getWhatsAppUrl(PREFILLED_MESSAGES.empresa)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="empresa"
                onClick={() => trackWhatsAppClick('empresa')}
                className="inline-flex items-center justify-center gap-3 bg-[#0E7C86] hover:bg-[#0a5e66] active:scale-[0.98] text-white font-bold text-base sm:text-lg min-h-[54px] px-8 rounded-full shadow-md hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5]"
              >
                <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
                <span>Cotizar para mi empresa</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3 Large Static White Cards for Clients (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="bg-white rounded-2xl p-6 sm:p-5 flex flex-col items-center justify-center text-center border border-[#D6E7E8] shadow-xs hover:shadow-md transition-shadow min-h-[140px]"
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="h-12 w-auto max-w-[140px] object-contain mb-3"
                  loading="lazy"
                />
                <span className="font-heading font-semibold text-xs sm:text-[13px] text-[#0F2A33]/80">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
