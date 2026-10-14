// Shared, language-independent company data (from docs/company-info.md).
export const company = {
  name: 'Evolution Vertical',
  descriptor: 'Trabajos Verticales',
  phone: '614 347 313',
  phoneIntl: '+34614347313', // for tel: and wa.me
  email: 'evolutiontejerina.oficial@gmail.com',
  whatsappNumber: '34614347313', // wa.me/<number>
};

export const locales = ['es', 'va', 'en'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  va: 'Valencià',
  en: 'English',
};

// Service icon keys map to inline SVG in the Services component.
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
] as const;
