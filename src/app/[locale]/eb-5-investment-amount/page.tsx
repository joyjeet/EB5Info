import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { costPageContent } from "@/lib/cost-page-content";
import { intentPageContent } from "@/lib/intent-page-content";
import { isLocale, withBaseUrl } from "@/lib/i18n";
import { buildOrganizationSchema, buildWebPageSchema } from "@/lib/schema";

type IntentPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: IntentPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = intentPageContent[locale].investmentAmount;

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    alternates: {
      canonical: `/${locale}/eb-5-investment-amount`,
    },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: withBaseUrl(`/${locale}/eb-5-investment-amount`),
      type: "article",
    },
  };
}

export default async function InvestmentAmountPage({ params }: IntentPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = intentPageContent[locale].investmentAmount;
  const costPage = costPageContent[locale];
  const moneyBackPage = intentPageContent[locale].moneyBack;
  const organizationStructuredData = buildOrganizationSchema();
  const webPageStructuredData = buildWebPageSchema(
    `/${locale}/eb-5-investment-amount`,
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
        item: withBaseUrl(`/${locale}/eb-5-investment-amount`),
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
      <section className="content-section standalone-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={`/${locale}`}>EB5 Info</Link>
          <span>/</span>
          <span aria-current="page">{page.title}</span>
        </nav>
        <div className="section-heading narrow-heading">
          <p className="section-kicker">EB-5 Amount</p>
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
          <Link className="related-card" href={`/${locale}/eb-5-cost-in-usa`}>
            <h3>{costPage.title}</h3>
            <p>{costPage.intro}</p>
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