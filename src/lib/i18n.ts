export const locales = ["en", "es", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Espanol",
  zh: "中文",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function withBaseUrl(pathname: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return new URL(pathname, siteUrl).toString();
}