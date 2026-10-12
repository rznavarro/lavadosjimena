import { BUSINESS_INFO } from '../data/config';

export function TrustBanner() {
  const { clients } = BUSINESS_INFO;
  // Duplicate clients 4 times to ensure a seamless looping marquee track
  const marqueeItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <section
      aria-label="Clientes empresa destacados"
      className="bg-white border-y border-[#D6E7E8] py-7 sm:py-8 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <p className="text-center text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0F2A33]/70 mb-5">
          Empresas que han confiado en nosotros
        </p>

        {/* Marquee Track Container */}
        <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex items-center gap-12 sm:gap-20">
            {marqueeItems.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center shrink-0 h-14 sm:h-16 px-4 group transition-all"
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="h-9 sm:h-12 w-auto max-w-[160px] object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
