import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactForm } from "@/components/contact-form";
import { costPageContent } from "@/lib/cost-page-content";
import { glossaryContent } from "@/lib/glossary-content";
import { isLocale, localeLabels, locales, withBaseUrl } from "@/lib/i18n";
import { intentPageContent } from "@/lib/intent-page-content";
import { buildOrganizationSchema, buildWebPageSchema } from "@/lib/schema";
import { siteContent } from "@/lib/site-content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = siteContent[locale];
  const glossary = glossaryContent[locale];
  const costPage = costPageContent[locale];
  const intentPages = intentPageContent[locale];
  const organizationStructuredData = buildOrganizationSchema();
  const webPageStructuredData = buildWebPageSchema(`/${locale}`, copy.seo.title, copy.seo.description);
  const costItemListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.costs.title,
    itemListElement: copy.costs.cards.map((card, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: card.title,
      description: card.body,
    })),
  };
  const glossaryItemListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: glossary.title,
    itemListElement: glossary.terms.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.term,
      description: item.definition,
    })),
  };
  const glossaryDefinedTermSetStructuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: glossary.title,
    description: glossary.intro,
    inLanguage: locale,
    url: withBaseUrl(`/${locale}#glossary`),
    hasDefinedTerm: glossary.terms.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.definition,
      inDefinedTermSet: withBaseUrl(`/${locale}#glossary`),
    })),
  };
  const relatedGuides = [
    {
      href: `/${locale}/eb-5-cost-in-usa`,
      title: costPage.title,
      description: costPage.intro,
    },
    {
      href: `/${locale}/eb-5-investment-amount`,
      title: intentPages.investmentAmount.title,
      description: intentPages.investmentAmount.intro,
    },
    {
      href: `/${locale}/can-i-get-eb-5-money-back`,
      title: intentPages.moneyBack.title,
      description: intentPages.moneyBack.intro,
    },
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EB5 Info",
    url: withBaseUrl(`/${locale}`),
    inLanguage: locale,
    description: copy.seo.description,
    about: {
      "@type": "Thing",
      name: "EB-5 Immigrant Investor Program",
    },
    potentialAction: {
      "@type": "ContactAction",
      target: withBaseUrl(`/${locale}#contact`),
      name: copy.contact.title,
    },
  };
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(costItemListStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryItemListStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryDefinedTermSetStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <section className="hero-section">
        <header className="site-header">
          <Link className="brand" href={`/${locale}`}>
            EB5 Info
          </Link>
          <nav className="top-nav" aria-label="Primary">
            <a href="#overview">{copy.nav.overview}</a>
            <a href="#investment">{copy.nav.investment}</a>
            <a href="#costs">{copy.nav.costs}</a>
            <a href="#comparison">{copy.nav.comparison}</a>
            <a href="#glossary">{copy.nav.glossary}</a>
            <a href="#process">{copy.nav.process}</a>
            <a href="#faq">{copy.nav.faq}</a>
            <a href="#contact">{copy.nav.contact}</a>
          </nav>
          <div className="locale-switcher" aria-label="Language selector">
            {locales.map((entry) => (
              <Link key={entry} href={`/${entry}`} aria-current={entry === locale ? "page" : undefined}>
                {localeLabels[entry]}
              </Link>
            ))}
          </div>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="review-badge">{copy.hero.reviewBadge}</p>
            <p className="section-kicker">{copy.hero.eyebrow}</p>
            <h1>{copy.hero.title}</h1>
            <p className="hero-description">{copy.hero.description}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                {copy.hero.primaryCta}
              </a>
              <a className="secondary-button" href="#process">
                {copy.hero.secondaryCta}
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <p className="card-label">EB-5</p>
            <h2>{copy.hero.cardTitle}</h2>
            <p>{copy.hero.cardBody}</p>
            <ul className="stat-list">
              {copy.stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="content-section" id="overview">
        <div className="section-heading">
          <p className="section-kicker">Overview</p>
          <h2>{copy.overview.title}</h2>
        </div>
        <div className="overview-grid">
          <p className="lead-copy">{copy.overview.body}</p>
          <ul className="bullet-panel">
            {copy.overview.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section" id="investment">
        <div className="section-heading">
          <p className="section-kicker">Investment</p>
          <h2>{copy.investment.title}</h2>
          <p>{copy.investment.intro}</p>
        </div>
        <div className="investment-grid">
          {copy.investment.cards.map((card) => (
            <article className="investment-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        <p className="source-note">{copy.investment.footnote}</p>
      </section>

      <section className="content-section" id="costs">
        <div className="section-heading">
          <p className="section-kicker">Costs</p>
          <h2>{copy.costs.title}</h2>
          <p>{copy.costs.intro}</p>
        </div>
        <div className="cost-grid">
          {copy.costs.cards.map((card) => (
            <article className="cost-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
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
        <div className="section-actions">
          <Link className="secondary-button" href={`/${locale}/eb-5-cost-in-usa`}>
            {costPage.mainPageCta}
          </Link>
        </div>
        <p className="source-note">{copy.costs.footnote}</p>
      </section>

      <section className="content-section" id="comparison">
        <div className="section-heading">
          <p className="section-kicker">Comparison</p>
          <h2>{copy.comparison.title}</h2>
          <p>{copy.comparison.intro}</p>
        </div>
        <div className="comparison-grid">
          {copy.comparison.cards.map((card) => (
            <article className="comparison-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="glossary">
        <div className="section-heading">
          <p className="section-kicker">Glossary</p>
          <h2>{glossary.title}</h2>
          <p>{glossary.intro}</p>
        </div>
        <div className="glossary-grid">
          {glossary.terms.map((item) => (
            <article className="glossary-card" key={item.term}>
              <h3>{item.term}</h3>
              <p>{item.definition}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="section-kicker">Guides</p>
          <h2>{costPage.relatedTitle}</h2>
          <p>{costPage.relatedIntro}</p>
        </div>
        <div className="related-grid related-grid-wide">
          {relatedGuides.map((guide) => (
            <Link className="related-card" key={guide.href} href={guide.href}>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section" id="process">
        <div className="section-heading">
          <p className="section-kicker">Process</p>
          <h2>{copy.process.title}</h2>
        </div>
        <div className="steps-grid">
          {copy.process.steps.map((step) => (
            <article className="step-card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section accent-section" id="faq">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2>{copy.faq.title}</h2>
        </div>
        <div className="faq-grid">
          <div className="faq-list">
            {copy.faq.items.map((item) => (
              <article className="faq-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
          <aside className="topics-panel">
            <h3>{copy.topics.title}</h3>
            <ul>
              {copy.topics.items.map((topic) => (
                <li key={topic.title}>
                  <strong>{topic.title}</strong>
                  <span>{topic.description}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="content-section" id="contact">
        <div className="section-heading narrow-heading">
          <p className="section-kicker">Contact</p>
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.intro}</p>
        </div>
        <div className="legal-strip">
          <p>{copy.contact.legalStrip}</p>
        </div>
        <div className="contact-grid">
          <ContactForm copy={copy.contact} locale={locale} />
          <aside className="compliance-panel">
            <h3>{copy.compliance.title}</h3>
            <ul>
              {copy.compliance.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="content-section accent-section" id="sources">
        <div className="section-heading">
          <p className="section-kicker">Sources</p>
          <h2>{copy.sources.title}</h2>
          <p>{copy.sources.intro}</p>
        </div>
        <div className="sources-grid">
          {copy.sources.links.map((source) => (
            <a className="source-card" key={source.url} href={source.url} target="_blank" rel="noreferrer">
              <h3>{source.label}</h3>
              <p>{source.description}</p>
            </a>
          ))}
        </div>
        <div className="sources-meta">
          <p>
            <strong>{copy.sources.reviewedLabel}:</strong> {copy.sources.reviewedDate}
          </p>
          <p>{copy.sources.priorityDisclaimer}</p>
        </div>
      </section>

      <footer className="site-footer">
        <p>{copy.footer.disclaimer}</p>
        <small>{copy.footer.copyright}</small>
      </footer>
    </main>
  );
}