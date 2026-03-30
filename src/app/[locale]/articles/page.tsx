import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { costPageContent } from "@/lib/cost-page-content";
import { buildStandaloneHeaderNav } from "@/lib/header-copy";
import { intentPageContent } from "@/lib/intent-page-content";
import { isLocale, locales, withBaseUrl } from "@/lib/i18n";
import { buildOrganizationSchema, buildWebPageSchema } from "@/lib/schema";
import { siteContent } from "@/lib/site-content";
import { topicArticleContent, topicArticleSlugs } from "@/lib/topic-article-content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = siteContent[locale];

  return {
    title: `${copy.articleIndex.title} | EB5 Info`,
    description: copy.articleIndex.intro,
    alternates: {
      canonical: `/${locale}/articles`,
    },
    openGraph: {
      title: `${copy.articleIndex.title} | EB5 Info`,
      description: copy.articleIndex.intro,
      url: withBaseUrl(`/${locale}/articles`),
      type: "website",
    },
  };
}

export default async function ArticlesIndexPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = siteContent[locale];
  const topicArticles = topicArticleSlugs.map((slug) => topicArticleContent[locale][slug]);
  const investmentPage = intentPageContent[locale].investmentAmount;
  const moneyBackPage = intentPageContent[locale].moneyBack;
  const costPage = costPageContent[locale];
  const standaloneNavItems = buildStandaloneHeaderNav(locale, "articles");
  const localeHrefMap = Object.fromEntries(
    locales.map((entry) => [entry, `/${entry}/articles`]),
  ) as Record<(typeof locales)[number], string>;
  const organizationStructuredData = buildOrganizationSchema();
  const webPageStructuredData = buildWebPageSchema(`/${locale}/articles`, `${copy.articleIndex.title} | EB5 Info`, copy.articleIndex.intro);
  const itemListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.articleIndex.title,
    itemListElement: [
      ...topicArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: withBaseUrl(`/${locale}/${article.slug}`),
        description: article.intro,
      })),
      {
        "@type": "ListItem",
        position: topicArticles.length + 1,
        name: costPage.title,
        url: withBaseUrl(`/${locale}/eb-5-cost-in-usa`),
        description: costPage.intro,
      },
      {
        "@type": "ListItem",
        position: topicArticles.length + 2,
        name: investmentPage.title,
        url: withBaseUrl(`/${locale}/eb-5-investment-amount`),
        description: investmentPage.intro,
      },
      {
        "@type": "ListItem",
        position: topicArticles.length + 3,
        name: moneyBackPage.title,
        url: withBaseUrl(`/${locale}/can-i-get-eb-5-money-back`),
        description: moneyBackPage.intro,
      },
    ],
  };

  return (
    <main className="page-shell standalone-page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListStructuredData) }} />
      <section className="hero-section">
        <SiteHeader locale={locale} navItems={standaloneNavItems} localeHrefMap={localeHrefMap} />
      </section>

      <section className="content-section standalone-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={`/${locale}`}>EB5 Info</Link>
          <span>/</span>
          <span aria-current="page">{copy.articleIndex.title}</span>
        </nav>
        <div className="section-heading narrow-heading">
          <p className="section-kicker">Articles</p>
          <h1 className="standalone-title">{copy.articleIndex.title}</h1>
          <p>{copy.articleIndex.intro}</p>
        </div>
        <div className="section-actions">
          <Link className="secondary-button" href={`/${locale}`}>
            {copy.topics.title}
          </Link>
          <Link className="primary-button" href={`/${locale}#contact`}>
            {copy.contact.title}
          </Link>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>{copy.articleIndex.title}</h2>
        </div>
        <div className="related-grid related-grid-wide">
          {topicArticles.map((article) => (
            <Link className="related-card" href={`/${locale}/${article.slug}`} key={article.slug}>
              <h3>{article.title}</h3>
              <p>{article.intro}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section accent-section">
        <div className="section-heading">
          <p className="section-kicker">Guides</p>
          <h2>{costPage.relatedTitle}</h2>
          <p>{costPage.relatedIntro}</p>
        </div>
        <div className="related-grid related-grid-wide">
          <Link className="related-card" href={`/${locale}/eb-5-cost-in-usa`}>
            <h3>{costPage.title}</h3>
            <p>{costPage.intro}</p>
          </Link>
          <Link className="related-card" href={`/${locale}/eb-5-investment-amount`}>
            <h3>{investmentPage.title}</h3>
            <p>{investmentPage.intro}</p>
          </Link>
          <Link className="related-card" href={`/${locale}/can-i-get-eb-5-money-back`}>
            <h3>{moneyBackPage.title}</h3>
            <p>{moneyBackPage.intro}</p>
          </Link>
        </div>
      </section>
    </main>
  );
}