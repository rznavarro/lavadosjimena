import { ExternalLink, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/config';

export function ReviewsSection() {
  const { social } = BUSINESS_INFO;

  const reviewCards = [
    {
      title: 'Reseñas en Google',
      subtitle: 'Lee las opiniones verificadas de clientes en nuestra ficha oficial de Google Maps.',
      link: social.googleBusiness,
      label: 'Ver opiniones en Google',
      badge: 'Ficha de Google',
    },
    {
      title: 'Reseñas en Facebook',
      subtitle: 'Conoce los comentarios de nuestra comunidad en la página oficial de Facebook.',
      link: social.facebookReviews,
      label: 'Ver reseñas en Facebook',
      badge: 'Facebook Reviews',
    },
    {
      title: 'Mira nuestro trabajo en Instagram',
      subtitle: 'Fotos y videos de trabajos reales realizados día a día en toda la Región Metropolitana.',
      link: social.instagram,
      label: 'Ver @lavadosjimena',
      badge: 'Instagram Oficial',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#D6E7E8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0E7C86] mb-2">
            <Star className="w-4 h-4 fill-[#0E7C86] text-[#0E7C86]" />
            <span>Prueba Social Real</span>
          </div>
          <h2 className="font-heading font-extrabold text-[#0F2A33] text-3xl sm:text-4xl lg:text-[40px] tracking-[-0.02em]">
            Revisa lo que dicen nuestros clientes
          </h2>
        </div>

        {/* 3 Large Link Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewCards.map((card) => (
            <a
              key={card.title}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#F4FAFA] hover:bg-white border border-[#D6E7E8] hover:border-[#6CCDD5] rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5]"
            >
              <div>
                <span className="text-xs font-bold text-[#0E7C86] tracking-wider uppercase mb-3 block">
                  {card.badge}
                </span>
                <h3 className="font-heading font-bold text-[#0F2A33] text-2xl mb-3 group-hover:text-[#0E7C86] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#0F2A33]/80 text-sm sm:text-base leading-relaxed mb-6">
                  {card.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D6E7E8] flex items-center justify-between text-[#0E7C86] font-bold text-sm sm:text-base">
                <span>{card.label}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
