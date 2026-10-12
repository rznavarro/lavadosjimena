import { MapPin, Phone, Instagram, Facebook, Globe, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/config';

interface FooterProps {
  onNavigateHome?: () => void;
  onNavigatePrivacy?: () => void;
  isPrivacyPage?: boolean;
}

export function Footer({ onNavigateHome, onNavigatePrivacy, isPrivacyPage = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#D6E7E8] text-[#0F2A33] pt-16 pb-24 sm:pb-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#D6E7E8]">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <a
              href="/"
              onClick={(e) => {
                if (isPrivacyPage && onNavigateHome) {
                  e.preventDefault();
                  onNavigateHome();
                }
              }}
              className="inline-block mb-4 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5] rounded-lg"
            >
              <img
                src="/images/logo-jimena.png"
                alt="Lavados Jimena LTDA"
                className="h-12 w-auto object-contain"
                width="160"
                height="48"
              />
            </a>

            <p className="text-[#0F2A33]/80 text-sm sm:text-base leading-relaxed max-w-sm mb-6">
              Empresa familiar de limpieza a domicilio en Santiago, desde 2016. Cuidamos cada rincón de tu hogar con dedicación y compromiso.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F4FAFA] border border-[#D6E7E8] hover:border-[#0E7C86] hover:text-[#0E7C86] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6CCDD5]"
                aria-label="Instagram oficial de Lavados Jimena"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F4FAFA] border border-[#D6E7E8] hover:border-[#0E7C86] hover:text-[#0E7C86] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6CCDD5]"
                aria-label="Facebook oficial de Lavados Jimena"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href={BUSINESS_INFO.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F4FAFA] border border-[#D6E7E8] hover:border-[#0E7C86] hover:text-[#0E7C86] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6CCDD5]"
                aria-label="Ficha de Google de Lavados Jimena"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#0E7C86] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => {
                    if (isPrivacyPage && onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome();
                      setTimeout(() => {
                        document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="text-[#0F2A33]/80 hover:text-[#0E7C86] transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#mudanzas"
                  onClick={(e) => {
                    if (isPrivacyPage && onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome();
                      setTimeout(() => {
                        document.querySelector('#mudanzas')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="text-[#0F2A33]/80 hover:text-[#0E7C86] transition-colors"
                >
                  Mudanzas
                </a>
              </li>
              <li>
                <a
                  href="#como-trabajamos"
                  onClick={(e) => {
                    if (isPrivacyPage && onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome();
                      setTimeout(() => {
                        document.querySelector('#como-trabajamos')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="text-[#0F2A33]/80 hover:text-[#0E7C86] transition-colors"
                >
                  Cómo trabajamos
                </a>
              </li>
              <li>
                <a
                  href="#empresas"
                  onClick={(e) => {
                    if (isPrivacyPage && onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome();
                      setTimeout(() => {
                        document.querySelector('#empresas')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="text-[#0F2A33]/80 hover:text-[#0E7C86] transition-colors"
                >
                  Empresas
                </a>
              </li>
              <li>
                <a
                  href="#ubicacion"
                  onClick={(e) => {
                    if (isPrivacyPage && onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome();
                      setTimeout(() => {
                        document.querySelector('#ubicacion')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="text-[#0F2A33]/80 hover:text-[#0E7C86] transition-colors"
                >
                  Ubicación
                </a>
              </li>
              <li>
                <a
                  href="/privacidad"
                  onClick={(e) => {
                    if (onNavigatePrivacy) {
                      e.preventDefault();
                      onNavigatePrivacy();
                    }
                  }}
                  className="text-[#0F2A33]/80 hover:text-[#0E7C86] transition-colors underline"
                >
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Base (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#0E7C86] mb-4">
              Contacto y Cobertura
            </h4>

            <div className="space-y-3 text-sm sm:text-base text-[#0F2A33]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#0E7C86] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address} (cerca del Estadio Nacional)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-[#0E7C86] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="hover:text-[#0E7C86] font-semibold"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <p className="text-xs text-[#0F2A33]/60 pt-2">
                Atendemos en todas las comunas de la Región Metropolitana con servicio a domicilio.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#0F2A33]/70">
          <div>
            © {currentYear} {BUSINESS_INFO.legalName}. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/privacidad"
              onClick={(e) => {
                if (onNavigatePrivacy) {
                  e.preventDefault();
                  onNavigatePrivacy();
                }
              }}
              className="hover:text-[#0E7C86] transition-colors"
            >
              Privacidad
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#0E7C86] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6CCDD5] rounded-md px-1"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
