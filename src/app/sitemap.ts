import type { MetadataRoute } from "next";

import { locales, withBaseUrl } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: withBaseUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...locales.map((locale) => ({
      url: withBaseUrl(`/${locale}`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...locales.map((locale) => ({
      url: withBaseUrl(`/${locale}/eb-5-cost-in-usa`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...locales.map((locale) => ({
      url: withBaseUrl(`/${locale}/eb-5-investment-amount`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...locales.map((locale) => ({
      url: withBaseUrl(`/${locale}/can-i-get-eb-5-money-back`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...locales.map((locale) => ({
      url: withBaseUrl(`/${locale}/existing-nonimmigrant-status-eb-5-options`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
  ];
}