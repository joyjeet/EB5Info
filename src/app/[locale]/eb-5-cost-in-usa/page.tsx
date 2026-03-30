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

type CostPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: CostPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = costPageContent[locale];

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    alternates: {
      canonical: `/${locale}/eb-5-cost-in-usa`,
    },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: withBaseUrl(`/${locale}/eb-5-cost-in-usa`),
      type: "article",
    },
  };
}

export default async function CostGuidePage({ params }: CostPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = siteContent[locale];
  const page = costPageContent[locale];
  const intentPages = intentPageContent[locale];
  const standaloneNavItems = buildStandaloneHeaderNav(locale, "costGuide");
  const localeHrefMap = Object.fromEntries(
    locales.map((entry) => [entry, `/${entry}/eb-5-cost-in-usa`]),
  ) as Record<(typeof locales)[number], string>;
  const organizationStructuredData = buildOrganizationSchema();
  const webPageStructuredData = buildWebPageSchema(
    `/${locale}/eb-5-cost-in-usa`,
    page.seo.title,
    page.seo.description,
  );
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "EB5 Info",
        item: withBaseUrl(`/${locale}`),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        item: withBaseUrl(`/${locale}/eb-5-cost-in-usa`),
      },
    ],
  };
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="page-shell standalone-page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <section className="hero-section">
        <SiteHeader locale={locale} navItems={standaloneNavItems} localeHrefMap={localeHrefMap} />
      </section>
      <section className="content-section standalone-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={`/${locale}`}>EB5 Info</Link>
          <span>/</span>
          <span aria-current="page">{page.title}</span>
        </nav>
        <div className="section-heading narrow-heading">
          <p className="section-kicker">EB-5 Cost</p>
          <h1 className="standalone-title">{page.title}</h1>
          <p>{page.intro}</p>
        </div>
        <div className="section-actions">
          <Link className="secondary-button" href={`/${locale}`}>
            {page.homeLink}
          </Link>
          <Link className="primary-button" href={`/${locale}#contact`}>
            {page.contactLink}
          </Link>
        </div>
      </section>

      <section className="content-section">
        <div className="cost-grid">
          {page.cards.map((card) => (
            <article className="cost-card" key={card.title}>
              <h2>{card.title}</h2>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>{copy.costs.title}</h2>
          <p>{copy.costs.intro}</p>
        </div>
        <div className="cost-table-wrap">
          <h3 className="subsection-title">{copy.costs.tableTitle}</h3>
          <div className="cost-table-scroll">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>{copy.costs.tableHeaders.category}</th>
                  <th>{copy.costs.tableHeaders.meaning}</th>
                  <th>{copy.costs.tableHeaders.possibleReturn}</th>
                </tr>
              </thead>
              <tbody>
                {copy.costs.tableRows.map((row) => (
                  <tr key={row.category}>
                    <td>{row.category}</td>
                    <td>{row.meaning}</td>
                    <td>{row.possibleReturn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="source-note">{copy.costs.footnote}</p>
      </section>

      <section className="content-section accent-section">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2>{page.faqTitle}</h2>
          <p>{page.faqIntro}</p>
        </div>
        <div className="faq-list">
          {page.faqs.map((item) => (
            <article className="faq-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>{page.relatedTitle}</h2>
          <p>{page.relatedIntro}</p>
        </div>
        <div className="related-grid">
          <Link className="related-card" href={`/${locale}/eb-5-investment-amount`}>
            <h3>{intentPages.investmentAmount.title}</h3>
            <p>{intentPages.investmentAmount.intro}</p>
          </Link>
          <Link className="related-card" href={`/${locale}/can-i-get-eb-5-money-back`}>
            <h3>{intentPages.moneyBack.title}</h3>
            <p>{intentPages.moneyBack.intro}</p>
          </Link>
        </div>
      </section>
    </main>
  );
}