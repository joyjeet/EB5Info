import type { Locale } from "@/lib/i18n";

export type HeaderNavItem = {
  href: string;
  label: string;
  isCurrent?: boolean;
};

export type StandaloneHeaderSection =
  | "home"
  | "articles"
  | "costGuide"
  | "investmentGuide"
  | "capitalReturn";

export const headerUiCopy: Record<
  Locale,
  {
    menu: string;
    close: string;
    primaryNav: string;
    languageSelector: string;
    home: string;
    articles: string;
    costGuide: string;
    investmentGuide: string;
    capitalReturn: string;
    contact: string;
  }
> = {
  en: {
    menu: "Menu",
    close: "Close",
    primaryNav: "Primary",
    languageSelector: "Language selector",
    home: "Home",
    articles: "Articles",
    costGuide: "Cost guide",
    investmentGuide: "Investment",
    capitalReturn: "Return of capital",
    contact: "Contact",
  },
  es: {
    menu: "Menu",
    close: "Cerrar",
    primaryNav: "Principal",
    languageSelector: "Selector de idioma",
    home: "Inicio",
    articles: "Articulos",
    costGuide: "Guia de costos",
    investmentGuide: "Inversion",
    capitalReturn: "Retorno del capital",
    contact: "Contacto",
  },
  zh: {
    menu: "菜单",
    close: "关闭",
    primaryNav: "主导航",
    languageSelector: "语言切换",
    home: "首页",
    articles: "文章",
    costGuide: "费用指南",
    investmentGuide: "投资金额",
    capitalReturn: "返还问题",
    contact: "联系",
  },
};

export function buildStandaloneHeaderNav(
  locale: Locale,
  currentSection?: StandaloneHeaderSection,
): HeaderNavItem[] {
  const copy = headerUiCopy[locale];

  return [
    { href: `/${locale}`, label: copy.home, isCurrent: currentSection === "home" },
    { href: `/${locale}/articles`, label: copy.articles, isCurrent: currentSection === "articles" },
    { href: `/${locale}/eb-5-cost-in-usa`, label: copy.costGuide, isCurrent: currentSection === "costGuide" },
    {
      href: `/${locale}/eb-5-investment-amount`,
      label: copy.investmentGuide,
      isCurrent: currentSection === "investmentGuide",
    },
    {
      href: `/${locale}/can-i-get-eb-5-money-back`,
      label: copy.capitalReturn,
      isCurrent: currentSection === "capitalReturn",
    },
    { href: `/${locale}#contact`, label: copy.contact },
  ];
}