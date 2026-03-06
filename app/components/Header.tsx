'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Casinos', href: '/#casinos' },
    { name: 'Guide', href: '/#guide' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#d4af37]/20 bg-[#08150f]/88 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo className="rounded-full border border-[#d4af37]/25 bg-black/15 px-3 py-2" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#f6edd8] hover:text-[#f1d987] transition-colors font-semibold tracking-[0.2em] text-xs uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden rounded-xl border border-[#d4af37]/25 bg-[#0f261c]/80 p-2 text-[#f6edd8] hover:text-[#f1d987]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mt-2 border-t border-[#d4af37]/15 pb-4 pt-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-[#d4af37]/15 bg-[#0f261c]/50 px-4 py-3 text-[#f6edd8] hover:text-[#f1d987] transition-colors font-semibold uppercase tracking-[0.18em] text-xs"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
