import { ArrowLeft } from 'lucide-react';

interface PrivacyPageProps {
  onBackToHome: () => void;
}

export function PrivacyPage({ onBackToHome }: PrivacyPageProps) {
  return (
    <main className="pt-28 pb-20 bg-[#F4FAFA] min-h-screen">
      <div className="max-w-[860px] mx-auto px-4 sm:px-6">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-[#0E7C86] font-bold text-sm sm:text-base hover:underline mb-8 p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6CCDD5] rounded-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </button>

        <article className="bg-white rounded-3xl border border-[#D6E7E8] p-8 sm:p-12 shadow-xs space-y-6">
          <h1 className="font-heading font-extrabold text-[#0F2A33] text-3xl sm:text-4xl">
            Política de Privacidad
          </h1>

          <p className="text-sm font-semibold text-[#0E7C86]">
            <strong>Última actualización:</strong> 16 de abril de 2026
          </p>

          <p className="text-[#0F2A33]/85 text-base sm:text-lg leading-relaxed">
            En <strong>Somos Lavados Jimena</strong>, valoramos la privacidad de nuestros clientes y nos comprometemos a proteger sus datos personales. Esta Política describe cómo recopilamos y usamos la información a través de <a href="https://lavadosjimena.cl/" className="text-[#0E7C86] underline">lavadosjimena.cl</a>.
          </p>

          <section className="space-y-3 pt-2">
            <h2 className="font-heading font-bold text-[#0F2A33] text-2xl">
              1. Información que Recopilamos
            </h2>
            <p className="text-[#0F2A33]/85 text-base leading-relaxed">
              Recopilamos información personal que usted nos proporciona voluntariamente para la prestación de nuestros servicios:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#0F2A33]/85 text-base">
              <li>Nombre y apellido.</li>
              <li>Número de teléfono / WhatsApp.</li>
              <li>Dirección física (para servicios a domicilio en la Región Metropolitana).</li>
            </ul>
          </section>

          <section className="space-y-3 pt-2">
            <h2 className="font-heading font-bold text-[#0F2A33] text-2xl">
              2. Uso de la Información
            </h2>
            <p className="text-[#0F2A33]/85 text-base leading-relaxed">
              Los datos se utilizan exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#0F2A33]/85 text-base">
              <li>Gestionar y agendar servicios de limpieza de alfombras, sillones y tapices.</li>
              <li>Responder consultas y proporcionar cotizaciones.</li>
              <li>Coordinar el retiro y entrega de pedidos.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-2">
            <h2 className="font-heading font-bold text-[#0F2A33] text-2xl">
              3. Seguridad
            </h2>
            <p className="text-[#0F2A33]/85 text-base leading-relaxed">
              Contamos con certificados SSL (HTTPS) para asegurar que la conexión con nuestro sitio sea cifrada. No compartimos ni vendemos sus datos a terceros con fines publicitarios.
            </p>
          </section>

          <section className="space-y-3 pt-2">
            <h2 className="font-heading font-bold text-[#0F2A33] text-2xl">
              4. Enlaces a Terceros
            </h2>
            <p className="text-[#0F2A33]/85 text-base leading-relaxed">
              Nuestro sitio utiliza enlaces a WhatsApp, Facebook e Instagram. Estos sitios tienen sus propias políticas de privacidad ajenas a nosotros.
            </p>
          </section>

          <section className="space-y-3 pt-2">
            <h2 className="font-heading font-bold text-[#0F2A33] text-2xl">
              5. Derechos del Usuario
            </h2>
            <p className="text-[#0F2A33]/85 text-base leading-relaxed">
              Usted puede solicitar la eliminación de sus datos en cualquier momento contactándonos a través de nuestro WhatsApp oficial.
            </p>
          </section>

          <div className="pt-6 border-t border-[#D6E7E8]">
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-[#0E7C86] font-bold text-base hover:underline"
            >
              ← Volver al inicio
            </button>
          </div>
        </article>
      </div>
    </main>
  );
}
