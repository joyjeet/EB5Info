import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { costPageContent } from "@/lib/cost-page-content";
import { isLocale, withBaseUrl } from "@/lib/i18n";
import { buildOrganizationSchema, buildWebPageSchema } from "@/lib/schema";
import { statusArticleContent, statusArticleSlug } from "@/lib/status-article-content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = statusArticleContent[locale];

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    alternates: {
      canonical: `/${locale}/${statusArticleSlug}`,
    },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: withBaseUrl(`/${locale}/${statusArticleSlug}`),
      type: "article",
    },
  };
}

export default async function ExistingStatusArticlePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = statusArticleContent[locale];
  const costPage = costPageContent[locale];
  const organizationStructuredData = buildOrganizationSchema();
  const webPageStructuredData = buildWebPageSchema(`/${locale}/${statusArticleSlug}`, page.seo.title, page.seo.description);
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.seo.description,
    inLanguage: locale,
    mainEntityOfPage: withBaseUrl(`/${locale}/${statusArticleSlug}`),
    publisher: {
      "@type": "Organization",
      name: "EB5 Info",
      url: withBaseUrl("/"),
    },
  };
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
        item: withBaseUrl(`/${locale}/${statusArticleSlug}`),
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <section className="content-section standalone-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={`/${locale}`}>EB5 Info</Link>
          <span>/</span>
          <span aria-current="page">{page.title}</span>
        </nav>
        <div className="section-heading narrow-heading">
          <p className="section-kicker">{page.kicker}</p>
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

      {page.sections.map((section) => (
        <section className="content-section" key={section.title}>
          <div className="section-heading narrow-heading">
            <h2>{section.title}</h2>
          </div>
          <div className="faq-list">
            {section.body.map((paragraph) => (
              <article className="faq-card" key={paragraph}>
                <p>{paragraph}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="content-section">
        <div className="section-heading">
          <h2>{page.cardsTitle}</h2>
        </div>
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
        <div className="section-heading narrow-heading">
          <p>{page.disclaimer}</p>
        </div>
        <div className="section-actions">
          <Link className="secondary-button" href={`/${locale}/eb-5-cost-in-usa`}>
            {costPage.title}
          </Link>
        </div>
      </section>
    </main>
  );
}