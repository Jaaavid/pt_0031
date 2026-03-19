'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Privacidade', href: '/privacy' },
    { name: 'Termos', href: '/terms' },
    { name: 'Contacto', href: '/#contacto' },
    { name: 'Responsabilidade', href: '/#responsabilidade' },
    { name: 'Cookies', href: '/#cookies' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-blue-500/15 bg-[#0b1222]/90 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="transition-opacity hover:opacity-80">
            <Logo className="rounded-full border border-blue-500/20 bg-black/15 px-3 py-2" />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e2e8f0] transition-colors hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
              Jogue com responsabilidade
            </span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-xl border border-blue-500/20 bg-[#111b2e]/80 p-2 text-[#e2e8f0] hover:text-blue-400"
              aria-label="Alternar menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="mt-2 border-t border-blue-500/10 pb-4 pt-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-blue-500/10 bg-[#111b2e]/50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#e2e8f0] transition-colors hover:text-blue-400"
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
