import { HeartHandshake } from 'lucide-react';

export function OurHistory() {
  return (
    <section className="py-16 sm:py-24 bg-[#F4FAFA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-[#D6E7E8] p-8 sm:p-12 lg:p-14 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Text & Story (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0E7C86] mb-3">
                <HeartHandshake className="w-4 h-4" />
                <span>Nuestra Trayectoria</span>
              </div>

              <h2 className="font-heading font-extrabold text-[#0F2A33] text-3xl sm:text-4xl lg:text-[40px] leading-tight tracking-[-0.02em] mb-5">
                Una empresa familiar, desde 2016
              </h2>

              <p className="text-[#0F2A33]/85 text-base sm:text-lg leading-relaxed mb-6">
                Lavados Jimena nació en 2016 a partir de una necesidad económica familiar. Con esfuerzo, dedicación y compromiso con la calidad, lo que empezó como una solución se transformó en una empresa familiar sólida, dedicada al cuidado y limpieza de tus prendas, pisos y espacios.
              </p>

              {/* Big Quote */}
              <div className="relative pl-6 border-l-4 border-[#6CCDD5] py-2 mt-2">
                <blockquote className="font-heading font-bold text-xl sm:text-2xl text-[#0F2A33] italic leading-snug">
                  “Nos preocupamos de entregar un servicio integral y de calidad.”
                </blockquote>
                <p className="text-sm font-medium text-[#0E7C86] mt-2">
                  Familia Jimena · Carlos Dittborn 890, Ñuñoa
                </p>
              </div>
            </div>

            {/* Right Column: Company Image Frame (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-[#D6E7E8] bg-[#F4FAFA] shadow-md group">
                <img
                  src="/images/foto-empresa.png"
                  alt="Equipo y familia de Lavados Jimena LTDA"
                  className="w-full h-auto max-h-[380px] object-cover object-center group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="p-4 bg-white border-t border-[#D6E7E8] text-center">
                  <p className="text-xs sm:text-sm text-[#0F2A33]/70 font-medium">
                    Atendiendo hogares y empresas en toda la Región Metropolitana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
