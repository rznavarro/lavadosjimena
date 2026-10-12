export interface ServiceItem {
  id: string;
  name: string;
  category: 'hogar' | 'lavanderia';
  description: string;
  image: string;
  alt: string;
  isPopular?: boolean;
}

export const BUSINESS_INFO = {
  name: 'Lavados Jimena',
  legalName: 'Lavados Jimena LTDA',
  foundedYear: 2016,
  address: 'Carlos Dittborn 890, Ñuñoa, Región Metropolitana',
  addressReference: 'Cerca del Estadio Nacional',
  coordinates: {
    lat: -33.465764,
    lng: -70.617921,
  },
  phone: '+56 9 6346 7293',
  phoneRaw: '+56963467293',
  whatsappNumber: '56963467293',
  coverage: 'Toda la Región Metropolitana, a domicilio',
  payments: 'Todos los métodos de pago',
  social: {
    instagram: 'https://www.instagram.com/lavadosjimena/',
    facebook: 'https://web.facebook.com/LavadosJimena/',
    facebookReviews: 'https://web.facebook.com/LavadosJimena/reviews',
    googleBusiness: 'https://g.co/kgs/RYxAM6c',
    googleMaps: 'https://www.google.com/maps/place/Lavados+Jimena+ltda/@-33.465764,-70.6204959,17z',
  },
  clients: [
    {
      name: 'Inmobiliaria Schumacher',
      logo: '/images/logo-schumacher.png',
      alt: 'Logo de Inmobiliaria Schumacher, cliente de Lavados Jimena',
    },
    {
      name: 'Houm Inmobiliaria',
      logo: '/images/logo-houm.svg',
      alt: 'Logo de Houm Inmobiliaria, cliente de Lavados Jimena',
    },
    {
      name: 'Enlasa',
      fullName: 'Enlasa Compañía de Energía',
      logo: '/images/logo-enlasa.png',
      alt: 'Logo de Enlasa Compañía de Energía, cliente de Lavados Jimena',
    },
  ],
};

export const SERVICES: ServiceItem[] = [
  // Servicios Hogar (a domicilio)
  {
    id: 'alfombras',
    name: 'Alfombras',
    category: 'hogar',
    description: 'Lavado profundo que elimina manchas y suciedad, y deja los espacios frescos y limpios.',
    image: '/images/alfombras.png',
    alt: 'Lavado profundo de alfombras a domicilio en Santiago – Lavados Jimena',
    isPopular: true,
  },
  {
    id: 'sofas',
    name: 'Sofás',
    category: 'hogar',
    description: 'Limpieza profunda que elimina manchas y olores para dejarlos como nuevos.',
    image: '/images/sofas.png',
    alt: 'Limpieza profunda de sofás y tapicería a domicilio – Lavados Jimena',
    isPopular: true,
  },
  {
    id: 'colchones',
    name: 'Colchones',
    category: 'hogar',
    description: 'Eliminación de ácaros, manchas y malos olores; quedan frescos y desinfectados.',
    image: '/images/colchones.png',
    alt: 'Sanitización y lavado de colchones a domicilio – Lavados Jimena',
    isPopular: true,
  },
  {
    id: 'sitiales',
    name: 'Sitiales',
    category: 'hogar',
    description: 'Limpieza a fondo que remueve manchas y polvo para restaurar su apariencia y frescura.',
    image: '/images/sitiales.png',
    alt: 'Limpieza a fondo de sitiales y poltronas a domicilio – Lavados Jimena',
  },
  {
    id: 'respaldos',
    name: 'Respaldos de cama',
    category: 'hogar',
    description: 'Limpieza especializada que elimina manchas y polvo.',
    image: '/images/respaldo.png',
    alt: 'Limpieza especializada de respaldos de cama tapizados – Lavados Jimena',
  },
  {
    id: 'cocinas',
    name: 'Cocinas',
    category: 'hogar',
    description: 'Limpieza profunda que elimina grasa y suciedad.',
    image: '/images/cocinas.png',
    alt: 'Limpieza profunda y desengrase de cocinas a domicilio – Lavados Jimena',
  },
  {
    id: 'banos',
    name: 'Baños',
    category: 'hogar',
    description: 'Limpieza completa que elimina suciedad y bacterias para un ambiente higiénico.',
    image: '/images/banos.png',
    alt: 'Limpieza completa y sanitización de baños – Lavados Jimena',
  },
  {
    id: 'mudanza',
    name: 'Limpieza pre y post mudanza',
    category: 'hogar',
    description: 'Limpieza completa antes y después de la mudanza para que el espacio quede listo para usar.',
    image: '/images/compartir-bg.png',
    alt: 'Limpieza integral pre y post mudanza a domicilio – Lavados Jimena',
  },

  // Servicios Lavandería
  {
    id: 'mascotas',
    name: 'Artículos de mascotas',
    category: 'lavanderia',
    description: 'Lavado especializado que elimina pelos, manchas y olores; quedan frescos y desinfectados.',
    image: '/images/mascotas.png',
    alt: 'Lavado especializado de camas y accesorios de mascotas – Lavados Jimena',
  },
  {
    id: 'abrigos',
    name: 'Abrigos y prendas de invierno',
    category: 'lavanderia',
    description: 'Limpieza delicada que elimina manchas y olores y preserva la calidad de la prenda.',
    image: '/images/abrigos.png',
    alt: 'Limpieza y cuidado delicado de abrigos y prendas de invierno – Lavados Jimena',
  },
  {
    id: 'cortinas',
    name: 'Cortinas y blackouts',
    category: 'lavanderia',
    description: 'Lavado especializado que elimina polvo y manchas.',
    image: '/images/cortinas.png',
    alt: 'Lavado especializado de cortinas tradicionales y cortinas blackout – Lavados Jimena',
  },
  {
    id: 'ropa-cama',
    name: 'Ropa de cama y textiles',
    category: 'lavanderia',
    description: 'Eliminación de manchas, polvo y ácaros.',
    image: '/images/ropa-cama.png',
    alt: 'Lavado profundo de sábanas, plumones y ropa de cama – Lavados Jimena',
  },
  {
    id: 'cobertores',
    name: 'Cobertores',
    category: 'lavanderia',
    description: 'Lavado profundo y delicado que deja buen aroma y aviva el color.',
    image: '/images/cobertores.png',
    alt: 'Lavado delicado de cobertores con fragancia fresca – Lavados Jimena',
  },
];

export const PREFILLED_MESSAGES = {
  generic: 'Hola, vengo de la web de Lavados Jimena y quiero cotizar un servicio.',
  service: (serviceName: string) => `Hola, vengo de la web de Lavados Jimena y quiero cotizar: ${serviceName}.`,
  mudanza: 'Hola, vengo de la web de Lavados Jimena y quiero cotizar una limpieza pre/post mudanza.',
  empresa: 'Hola, vengo de la web de Lavados Jimena. Represento a una empresa y quiero cotizar sus servicios.',
  cotizador: (services: string[], comuna?: string) => {
    if (services.length === 0) {
      return PREFILLED_MESSAGES.generic;
    }
    const servicesText = services.join(', ');
    const comunaClean = comuna?.trim();
    if (comunaClean) {
      return `Hola, vengo de la web de Lavados Jimena y quiero cotizar: ${servicesText}. Comuna: ${comunaClean}.`;
    }
    return `Hola, vengo de la web de Lavados Jimena y quiero cotizar: ${servicesText}.`;
  },
};

export function getWhatsAppUrl(messageText: string): string {
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
}

export function trackWhatsAppClick(origin: string) {
  try {
    if (typeof window !== 'undefined') {
      // Vercel Analytics event tracking
      const win = window as unknown as {
        va?: (event: string, name: string, data?: Record<string, unknown>) => void;
      };
      if (typeof win.va === 'function') {
        win.va('event', 'whatsapp_click', { origen: origin });
      }
    }
  } catch {
    // Fail-safe
  }
}
