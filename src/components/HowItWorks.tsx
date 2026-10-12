import { MessageSquareText, CalendarCheck2, Home } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: MessageSquareText,
      title: 'Escríbenos por WhatsApp',
      desc: 'Cuéntanos qué necesitas limpiar y en qué comuna estás.',
    },
    {
      num: '02',
      icon: CalendarCheck2,
      title: 'Coordinamos contigo',
      desc: 'Acordamos el servicio y el día de la visita.',
    },
    {
      num: '03',
      icon: Home,
      title: 'Llegamos a tu casa',
      desc: 'Limpiamos y sanitizamos con los productos adecuados para cada superficie.',
      hasVideo: true,
    },
  ];

  return (
    <section id="como-trabajamos" className="py-16 sm:py-24 bg-white border-y border-[#D6E7E8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0E7C86] mb-2 block">
            Paso a paso
          </span>
          <h2 className="font-heading font-extrabold text-[#0F2A33] text-3xl sm:text-4xl lg:text-[40px] tracking-[-0.02em]">
            Así de simple
          </h2>
        </div>

        {/* Steps container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={step.num}
                className="relative flex flex-col bg-[#F4FAFA] border border-[#D6E7E8] rounded-2xl p-6 sm:p-7 shadow-2xs hover:border-[#6CCDD5] transition-all"
              >
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#D6E7E8] flex items-center justify-center text-[#0E7C86] shadow-xs">
                    <Icon className="w-6 h-6 text-[#0E7C86]" />
                  </div>
                  <span className="font-heading font-extrabold text-2xl text-[#0E7C86]/35">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-[#0F2A33] text-xl mb-2">
                  {step.title}
                </h3>

                <p className="text-[#0F2A33]/80 text-sm sm:text-base leading-relaxed mb-4 flex-1">
                  {step.desc}
                </p>

                {/* Third step embedded video demo */}
                {step.hasVideo && (
                  <div className="mt-2 rounded-xl overflow-hidden aspect-[16/10] bg-[#0F2A33] border border-[#D6E7E8] shadow-xs">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="/videos/llavebano-poster.webp"
                      className="w-full h-full object-cover"
                      title="Demostración de sanitización profunda de grifería y baño a domicilio"
                    >
                      <source src="/videos/llavebano.mp4" type="video/mp4" />
                      Tu navegador no soporta video HTML5.
                    </video>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
