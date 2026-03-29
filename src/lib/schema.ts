import { withBaseUrl } from "@/lib/i18n";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EB5 Info",
    url: withBaseUrl("/"),
    description: "Educational EB-5 visa information for investors reviewing the process in the United States.",
  };
}

export function buildWebPageSchema(pathname: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: withBaseUrl(pathname),
    isPartOf: {
      "@type": "WebSite",
      name: "EB5 Info",
      url: withBaseUrl("/"),
    },
  };
}