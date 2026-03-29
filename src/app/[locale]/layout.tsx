import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { defaultLocale, isLocale, locales, withBaseUrl } from "@/lib/i18n";
import { siteContent } from "@/lib/site-content";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = siteContent[locale];

  return {
    title: copy.seo.title,
    description: copy.seo.description,
    keywords: copy.seo.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
        zh: "/zh",
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      title: copy.seo.title,
      description: copy.seo.description,
      url: withBaseUrl(`/${locale}`),
      siteName: "EB5 Info",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.seo.title,
      description: copy.seo.description,
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <>{children}</>;
}