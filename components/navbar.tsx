"use client";

import { BookOpen, Menu, Search, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Explore", href: "#explore" },
  { label: "Collections", href: "#collections" },
  { label: "Catalog", href: "#catalog" },
  { label: "Visit", href: "#visit" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar shell" aria-label="Main navigation">
        <a className="brand" href="#" aria-label="Verdant Library home">
          <span className="brand-mark">
            <BookOpen size={22} strokeWidth={1.8} />
          </span>
          <span>
            <strong>Verdant</strong>
            <small>Public Library</small>
          </span>
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="icon-button desktop-search" href="#catalog" aria-label="Search catalog">
            <Search size={20} />
          </a>
          <a className="button button-small button-dark" href="#membership">
            Get a library card
          </a>
          <button
            className="icon-button mobile-menu-button"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-nav shell">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
