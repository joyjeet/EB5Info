"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { headerUiCopy, type HeaderNavItem } from "@/lib/header-copy";
import { localeLabels, type Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  navItems: HeaderNavItem[];
  localeHrefMap: Record<Locale, string>;
  brandHref?: string;
};

export function SiteHeader({ locale, navItems, localeHrefMap, brandHref = `/${locale}` }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const copy = headerUiCopy[locale];

  return (
    <header className="site-header" data-open={isOpen ? "true" : "false"}>
      <Link className="brand" href={brandHref} onClick={() => setIsOpen(false)}>
        EB5 Info
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-controls={panelId}
        aria-label={isOpen ? copy.close : copy.menu}
        data-state={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? copy.close : copy.menu}
      </button>
      <div className={`site-header-panel${isOpen ? " is-open" : ""}`} id={panelId}>
        <div className="site-header-panel-inner">
          <nav className="top-nav" aria-label={copy.primaryNav}>
            {navItems.map((item) => {
              if (item.href.startsWith("#")) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={item.isCurrent ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={item.isCurrent ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="locale-switcher" aria-label={copy.languageSelector}>
            {Object.entries(localeHrefMap).map(([entry, href]) => (
              <Link key={entry} href={href} aria-current={entry === locale ? "page" : undefined} onClick={() => setIsOpen(false)}>
                {localeLabels[entry as Locale]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}