import { useState } from 'react';
import { MessageCircle, Phone, Check, Sparkles } from 'lucide-react';
import { SERVICES, BUSINESS_INFO, PREFILLED_MESSAGES, getWhatsAppUrl, trackWhatsAppClick } from '../data/config';

export function QuoteCalculatorSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [comuna, setComuna] = useState('');

  const hogarServices = SERVICES.filter((s) => s.category === 'hogar');
  const lavanderiaServices = SERVICES.filter((s) => s.category === 'lavanderia');

  const toggleService = (name: string) => {
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const generatedMessage = PREFILLED_MESSAGES.cotizador(selectedServices, comuna);

  return (
    <section id="cotizador" className="py-20 sm:py-28 bg-[#0F2A33] text-[#F4FAFA] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6CCDD5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0E7C86]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#6CCDD5] mb-3">
            <Sparkles className="w-4 h-4 text-[#6CCDD5]" />
            <span>Cotizador Rápido</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[46px] tracking-[-0.02em] text-white mb-4">
            ¿Lo dejamos como nuevo?
          </h2>

          <p className="text-[#F4FAFA]/80 text-base sm:text-lg">
            Selecciona los servicios que necesitas y tu comuna. Te responderemos al instante por WhatsApp.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="bg-[#163a45] border border-[#6CCDD5]/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          {/* Group 1: Hogar */}
          <div className="mb-8">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-[#6CCDD5] mb-4 flex items-center gap-2">
              <span>1. Servicios Hogar (a domicilio)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              {hogarServices.map((service) => {
                const isSelected = selectedServices.includes(service.name);
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.name)}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6CCDD5] ${
                      isSelected
                        ? 'bg-[#0E7C86] border-[#6CCDD5] text-white shadow-xs'
                        : 'bg-[#0F2A33]/70 border-[#6CCDD5]/20 text-[#F4FAFA]/90 hover:border-[#6CCDD5]/50'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                        isSelected
                          ? 'bg-[#6CCDD5] border-[#6CCDD5] text-[#0F2A33]'
                          : 'border-[#6CCDD5]/40 bg-[#0F2A33]'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="truncate">{service.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Group 2: Lavandería */}
          <div className="mb-8">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-[#6CCDD5] mb-4 flex items-center gap-2">
              <span>2. Servicios Lavandería</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {lavanderiaServices.map((service) => {
                const isSelected = selectedServices.includes(service.name);
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.name)}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6CCDD5] ${
                      isSelected
                        ? 'bg-[#0E7C86] border-[#6CCDD5] text-white shadow-xs'
                        : 'bg-[#0F2A33]/70 border-[#6CCDD5]/20 text-[#F4FAFA]/90 hover:border-[#6CCDD5]/50'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                        isSelected
                          ? 'bg-[#6CCDD5] border-[#6CCDD5] text-[#0F2A33]'
                          : 'border-[#6CCDD5]/40 bg-[#0F2A33]'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="truncate">{service.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional Comuna input */}
          <div className="mb-8">
            <label
              htmlFor="comuna-input"
              className="block font-heading font-bold text-sm sm:text-base text-white mb-2"
            >
              3. Tu comuna en Santiago (opcional):
            </label>
            <input
              id="comuna-input"
              type="text"
              value={comuna}
              onChange={(e) => setComuna(e.target.value)}
              placeholder="Ej: Providencia, Las Condes, Ñuñoa, Santiago Centro..."
              className="w-full bg-[#0F2A33] border border-[#6CCDD5]/30 rounded-xl px-4 py-3.5 text-white placeholder-[#F4FAFA]/40 focus:outline-none focus:border-[#6CCDD5] focus:ring-2 focus:ring-[#6CCDD5]/50 text-sm sm:text-base"
            />
          </div>

          {/* Preview of prefilled message */}
          <div className="bg-[#0F2A33]/90 rounded-xl p-4 border border-[#6CCDD5]/25 mb-8">
            <span className="text-[11px] uppercase tracking-wider text-[#6CCDD5] font-bold block mb-1">
              Mensaje que se enviará por WhatsApp:
            </span>
            <p className="text-xs sm:text-sm text-[#F4FAFA]/90 italic font-mono">
              "{generatedMessage}"
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(generatedMessage)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="cotizador"
              onClick={() => trackWhatsAppClick('cotizador')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0E7C86] hover:bg-[#1294a0] active:scale-[0.98] text-white font-bold text-lg min-h-[56px] px-10 rounded-full shadow-lg transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5]"
            >
              <MessageCircle className="w-6 h-6 fill-[#25D366] text-[#25D366]" />
              <span>Enviar por WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#6CCDD5]/50 hover:bg-[#6CCDD5]/10 text-white font-semibold text-base min-h-[56px] px-8 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6CCDD5]"
            >
              <Phone className="w-4 h-4 text-[#6CCDD5]" />
              <span>Prefiero llamar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
