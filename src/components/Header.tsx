import { useState, useEffect } from 'react';
import { MessageCircle, Phone, Menu, X } from 'lucide-react';
import { BUSINESS_INFO, PREFILLED_MESSAGES, getWhatsAppUrl, trackWhatsAppClick } from '../data/config';

interface HeaderProps {
  onNavigateHome?: () => void;
  isPrivacyPage?: boolean;
}

export function Header({ onNavigateHome, isPrivacyPage = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide when scrolling down past 120px, show when scrolling up
      if (currentScrollY > 120 && currentScrollY > lastScrollY && !mobileMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Mudanzas', href: '#mudanzas' },
    { label: 'Cómo trabajamos', href: '#como-trabajamos' },
    { label: 'Empresas', href: '#empresas' },
    { label: 'Ubicación', href: '#ubicacion' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (isPrivacyPage && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (isPrivacyPage && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#F4FAFA]/95 backdrop-blur-md border-b border-[#D6E7E8] shadow-xs'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 sm:h-22 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5] rounded-lg p-1"
            aria-label="Lavados Jimena – Inicio"
          >
            <img
              src="/images/logo-jimena.png"
              alt="Lavados Jimena"
              className="h-12 sm:h-14 w-auto object-contain"
              width="180"
              height="56"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[#0F2A33] font-medium text-[16px]">
            {!isPrivacyPage &&
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-[#0E7C86] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0E7C86] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-[#0F2A33] hover:text-[#0E7C86] font-medium text-[16px] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5] rounded-full"
              title="Llamar a Lavados Jimena"
            >
              <Phone className="w-4 h-4 text-[#0E7C86]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl(PREFILLED_MESSAGES.generic)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="header"
              onClick={() => trackWhatsAppClick('header')}
              className="inline-flex items-center justify-center gap-2.5 bg-[#0E7C86] hover:bg-[#0a5e66] active:scale-[0.98] text-white font-semibold px-6 py-3 min-h-[50px] rounded-full shadow-sm hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5]"
            >
              <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburguer Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl(PREFILLED_MESSAGES.generic)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="header"
              onClick={() => trackWhatsAppClick('header')}
              aria-label="Cotizar por WhatsApp"
              className="sm:hidden p-2.5 rounded-full bg-[#0E7C86] text-white shadow-xs focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5]"
            >
              <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 text-[#0F2A33] hover:text-[#0E7C86] rounded-xl border border-[#D6E7E8] bg-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#6CCDD5]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-0 z-50 lg:hidden bg-[#F4FAFA] flex flex-col justify-between p-6 pt-24 animate-in fade-in duration-200"
        >
          {/* Close button top right */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Cerrar menú"
            className="absolute top-6 right-6 p-3 rounded-full bg-white border border-[#D6E7E8] text-[#0F2A33]"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col gap-6 pt-4">
            <div className="text-xs uppercase tracking-wider text-[#0E7C86] font-bold">
              Navegación
            </div>
            {!isPrivacyPage ? (
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-heading text-2xl font-bold text-[#0F2A33] hover:text-[#0E7C86] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : (
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (onNavigateHome) onNavigateHome();
                }}
                className="font-heading text-2xl font-bold text-[#0F2A33] hover:text-[#0E7C86]"
              >
                ← Volver al inicio
              </a>
            )}
          </div>

          {/* Bottom CTAs inside mobile menu */}
          <div className="flex flex-col gap-3 pt-6 border-t border-[#D6E7E8]">
            <a
              href={getWhatsAppUrl(PREFILLED_MESSAGES.generic)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="header"
              onClick={() => {
                setMobileMenuOpen(false);
                trackWhatsAppClick('header');
              }}
              className="w-full flex items-center justify-center gap-3 bg-[#0E7C86] active:bg-[#0a5e66] text-white font-semibold py-4 rounded-full text-lg shadow-sm"
            >
              <MessageCircle className="w-6 h-6 fill-[#25D366] text-[#25D366]" />
              <span>Cotizar por WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2.5 border-2 border-[#0F2A33] text-[#0F2A33] font-semibold py-3.5 rounded-full text-base bg-white"
            >
              <Phone className="w-5 h-5 text-[#0E7C86]" />
              <span>Llamar al {BUSINESS_INFO.phone}</span>
            </a>

            <p className="text-center text-xs text-[#0F2A33]/70 pt-2">
              Carlos Dittborn 890, Ñuñoa · Región Metropolitana
            </p>
          </div>
        </div>
      )}
    </>
  );
}
