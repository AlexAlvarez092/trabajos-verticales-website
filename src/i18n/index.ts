import { es } from './es';
import { va } from './va';
import { en } from './en';
import { locales, type Locale } from './company';

export const translations = { es, va, en };
export type Translation = typeof es;

export function getTranslations(locale: Locale): Translation {
  return translations[locale];
}

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

// Prefix an absolute, site-root path with the configured `base` (e.g. for GitHub Pages).
// `import.meta.env.BASE_URL` already has a trailing slash ("/" or "/repo/").
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

// Build the path for a given locale (home page of that language).
export function localeHome(locale: Locale): string {
  return withBase(`/${locale}/`);
}

export { locales, localeNames } from './company';
export type { Locale } from './company';
