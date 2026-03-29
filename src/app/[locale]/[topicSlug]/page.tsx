import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { costPageContent } from "@/lib/cost-page-content";
import { intentPageContent } from "@/lib/intent-page-content";
import { isLocale, locales, withBaseUrl } from "@/lib/i18n";
import { buildOrganizationSchema, buildWebPageSchema } from "@/lib/schema";
import { isTopicArticleSlug, topicArticleContent, topicArticleSlugs } from "@/lib/topic-article-content";

type PageProps = {
  params: Promise<{ locale: string; topicSlug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) => topicArticleSlugs.map((topicSlug) => ({ locale, topicSlug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, topicSlug } = await params;

  if (!isLocale(locale) || !isTopicArticleSlug(topicSlug)) {
    notFound();
  }

  const page = topicArticleContent[locale][topicSlug];

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    alternates: {
      canonical: `/${locale}/${topicSlug}`,
    },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: withBaseUrl(`/${locale}/${topicSlug}`),
      type: "article",
    },
  };
}

export default async function TopicArticlePage({ params }: PageProps) {
  const { locale, topicSlug } = await params;

  if (!isLocale(locale) || !isTopicArticleSlug(topicSlug)) {
    notFound();
  }

  const page = topicArticleContent[locale][topicSlug];
  const costPage = costPageContent[locale];
  const investmentPage = intentPageContent[locale].investmentAmount;
  const relatedTopicArticles = topicArticleSlugs
    .filter((slug) => slug !== topicSlug)
    .map((slug) => topicArticleContent[locale][slug]);
  const organizationStructuredData = buildOrganizationSchema();
  const webPageStructuredData = buildWebPageSchema(`/${locale}/${topicSlug}`, page.seo.title, page.seo.description);
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.seo.description,
    inLanguage: locale,
    mainEntityOfPage: withBaseUrl(`/${locale}/${topicSlug}`),
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
        item: withBaseUrl(`/${locale}/${topicSlug}`),
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
        <div className="section-heading">
          <h2>{page.relatedTitle}</h2>
          <p>{page.relatedIntro}</p>
        </div>
        <div className="related-grid related-grid-wide">
          {relatedTopicArticles.map((article) => (
            <Link className="related-card" href={`/${locale}/${article.slug}`} key={article.slug}>
              <h3>{article.title}</h3>
              <p>{article.intro}</p>
            </Link>
          ))}
          <Link className="related-card" href={`/${locale}/eb-5-cost-in-usa`}>
            <h3>{costPage.title}</h3>
            <p>{costPage.intro}</p>
          </Link>
          <Link className="related-card" href={`/${locale}/eb-5-investment-amount`}>
            <h3>{investmentPage.title}</h3>
            <p>{investmentPage.intro}</p>
          </Link>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading narrow-heading">
          <p>{page.disclaimer}</p>
        </div>
      </section>
    </main>
  );
}