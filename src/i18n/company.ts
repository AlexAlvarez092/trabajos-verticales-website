// Shared, language-independent company data (from docs/company-info.md).
export const company = {
  name: 'Evolution Vertical',
  descriptor: 'Trabajos Verticales',
  phone: '614 347 313',
  phoneIntl: '+34614347313', // for tel: and wa.me
  email: 'evolutiontejerina.oficial@gmail.com',
  instagram: 'https://www.instagram.com/trabajos.verticales.evolution/',
  whatsappNumber: '34614347313', // wa.me/<number>
};

export const locales = ['es', 'va', 'en'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  va: 'Valencià',
  en: 'English',
};

// Keys also identify service photo filenames and inline icons.
export const serviceKeys = [
  'facades',
  'painting',
  'waterproofing',
  'concrete',
  'damp',
  'ac',
  'courtyards',
  'roofs',
  'masonry',
  'antibird',
  'cleaning',
  'downpipes',
  'sealing',
  'maintenance',
] as const;

export type ServiceKey = (typeof serviceKeys)[number];
