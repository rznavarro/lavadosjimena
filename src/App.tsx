import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { ServicesSection } from './components/ServicesSection';
import { MovingSection } from './components/MovingSection';
import { HowItWorks } from './components/HowItWorks';
import { BusinessSection } from './components/BusinessSection';
import { OurHistory } from './components/OurHistory';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationFaqSection } from './components/LocationFaqSection';
import { QuoteCalculatorSection } from './components/QuoteCalculatorSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { PrivacyPage } from './components/PrivacyPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');

  useEffect(() => {
    // Read initial pathname
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);

      const handlePopState = () => {
        setCurrentPath(window.location.pathname);
      };

      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, []);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (currentPath === '/privacidad') {
      document.title = 'Política de Privacidad | Lavados Jimena';
    } else {
      document.title = 'Lavado de alfombras, sofás y colchones a domicilio en Santiago | Lavados Jimena';
    }
  }, [currentPath]);

  const isPrivacy = currentPath === '/privacidad';

  return (
    <div className="min-h-screen flex flex-col bg-[#F4FAFA] text-[#0F2A33] font-sans antialiased selection:bg-[#6CCDD5]/30 selection:text-[#0F2A33]">
      <Header
        onNavigateHome={() => navigateTo('/')}
        isPrivacyPage={isPrivacy}
      />

      {isPrivacy ? (
        <PrivacyPage onBackToHome={() => navigateTo('/')} />
      ) : (
        <main className="flex-1">
          {/* 7.1 Hero */}
          <Hero />

          {/* 7.2 Franja de confianza */}
          <TrustBanner />

          {/* 7.3 Servicios */}
          <ServicesSection />

          {/* 7.4 Mudanzas */}
          <MovingSection />

          {/* 7.5 Cómo trabajamos */}
          <HowItWorks />

          {/* 7.6 Empresas */}
          <BusinessSection />

          {/* 7.7 Nuestra historia */}
          <OurHistory />

          {/* 7.8 Reseñas y redes */}
          <ReviewsSection />

          {/* 7.9 Ubicación y FAQ */}
          <LocationFaqSection />

          {/* 7.10 CTA final + cotizador rápido */}
          <QuoteCalculatorSection />
        </main>
      )}

      {/* 7.11 Footer */}
      <Footer
        onNavigateHome={() => navigateTo('/')}
        onNavigatePrivacy={() => navigateTo('/privacidad')}
        isPrivacyPage={isPrivacy}
      />

      {/* 9. Mobile sticky bar (≤767px) only on home */}
      {!isPrivacy && <MobileStickyBar />}
    </div>
  );
}
