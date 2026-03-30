"use client";

import Link from "next/link";
import { useId, useRef } from "react";

import { headerUiCopy, type HeaderNavItem } from "@/lib/header-copy";
import { localeLabels, type Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  navItems: HeaderNavItem[];
  localeHrefMap: Record<Locale, string>;
  brandHref?: string;
};

export function SiteHeader({ locale, navItems, localeHrefMap, brandHref = `/${locale}` }: SiteHeaderProps) {
  const panelId = useId();
  const toggleId = useId();
  const toggleRef = useRef<HTMLInputElement>(null);
  const copy = headerUiCopy[locale];
  const closeMenu = () => {
    if (toggleRef.current) {
      toggleRef.current.checked = false;
    }
  };

  return (
    <header className="site-header">
      <Link className="brand" href={brandHref} onClick={closeMenu}>
        EB5 Info
      </Link>
      <input
        ref={toggleRef}
        className="menu-toggle-input"
        id={toggleId}
        type="checkbox"
        aria-controls={panelId}
        aria-label={copy.menu}
      />
      <label className="menu-toggle" htmlFor={toggleId}>
        {copy.menu}
      </label>
      <div className="site-header-panel" id={panelId}>
        <div className="site-header-panel-inner">
          <nav className="top-nav" aria-label={copy.primaryNav}>
            {navItems.map((item) => {
              if (item.href.startsWith("#")) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={item.isCurrent ? "page" : undefined}
                    onClick={closeMenu}
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
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="locale-switcher" aria-label={copy.languageSelector}>
            {Object.entries(localeHrefMap).map(([entry, href]) => (
              <Link key={entry} href={href} aria-current={entry === locale ? "page" : undefined} onClick={closeMenu}>
                {localeLabels[entry as Locale]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}