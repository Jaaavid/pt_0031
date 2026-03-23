import Image from 'next/image';
import Logo from './Logo';

export default function Footer() {
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
    <footer id="contacto" className="border-t border-white/[0.05] bg-[#08080a] py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 flex justify-center sm:mb-10">
          <Logo className="rounded-full border border-emerald-500/10 bg-white/[0.025] px-4 py-2" />
        </div>

        <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-white/40 sm:text-base">
          Plataforma informativa independente focada na análise e comparação de casinos online
          autorizados em Portugal. O nosso objetivo é disponibilizar conteúdos claros, imparciais
          e educativos sobre operadores licenciados, promoções e características de cada plataforma.
        </p>

        <div id="responsabilidade" className="mb-8 rounded-2xl border border-amber-500/10 bg-amber-500/[0.03] p-5 sm:mb-10 sm:p-6">
          <h5 className="mb-3 text-center text-sm font-bold uppercase tracking-wider text-amber-400">
            Jogo Responsável
          </h5>
          <p className="mb-3 text-center text-xs leading-relaxed text-white/45 sm:text-sm">
            18+. Jogue de forma responsável. O jogo pode causar dependência.
            Se precisar de apoio ou aconselhamento, contacte:
          </p>
          <ul className="space-y-1.5 text-center text-xs text-white/45 sm:text-sm">
            <li>SICAD (Serviço de Intervenção nos Comportamentos Aditivos e nas Dependências)</li>
            <li>Linha Vida — 1414</li>
            <li>Jogadores Anónimos</li>
          </ul>
        </div>

        <nav className="mb-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mb-10 sm:gap-x-6">
          {navLinks.map((link, i) => (
            <span key={link.name} className="flex items-center gap-5 sm:gap-6">
              <a
                href={link.href}
                className="text-xs font-medium text-white/40 transition-colors hover:text-emerald-400 sm:text-sm"
              >
                {link.name}
              </a>
              {i < navLinks.length - 1 && (
                <span className="hidden text-white/10 sm:inline">|</span>
              )}
            </span>
          ))}
        </nav>

        <div className="mb-8 flex items-center justify-center gap-5 sm:mb-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.03] text-white/40 transition-colors hover:border-emerald-500/25 hover:text-emerald-400"
            aria-label="Facebook"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.03] text-white/40 transition-colors hover:border-emerald-500/25 hover:text-emerald-400"
            aria-label="Instagram"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.03] text-white/40 transition-colors hover:border-emerald-500/25 hover:text-emerald-400"
            aria-label="X (Twitter)"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>

        {/* Institutional Partners */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-6 sm:mb-10 sm:gap-10">
          <a
            href="https://www.srij.turismodeportugal.pt/pt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.025] px-5 py-3 transition-colors hover:border-emerald-500/20"
            aria-label="SRIJ - Serviço de Regulação e Inspeção de Jogos"
          >
            <Image src="/srij-logo.webp" alt="SRIJ" width={120} height={48} className="h-10 w-auto object-contain sm:h-12" />
          </a>
          <a
            href="https://www.icad.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.025] px-5 py-3 transition-colors hover:border-emerald-500/20"
            aria-label="ICAD - Instituto para os Comportamentos Aditivos e as Dependências"
          >
            <Image src="/icad-logo.webp" alt="ICAD" width={120} height={48} className="h-10 w-auto object-contain sm:h-12" />
          </a>
          <a
            href="https://jogoresponsavel.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.025] px-5 py-3 transition-colors hover:border-emerald-500/20"
            aria-label="Jogo Responsável"
          >
            <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto sm:h-12">
              <rect width="200" height="50" rx="6" fill="transparent"/>
              <text x="100" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="800" fill="#10b981">JOGO</text>
              <text x="100" y="40" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#ffffff" opacity="0.7">RESPONSÁVEL</text>
            </svg>
          </a>
        </div>

        <div className="border-t border-white/[0.04] pt-6 text-center">
          <p className="text-xs text-white/25 sm:text-sm">
            © 2026 GuiaCasinosPT. Plataforma independente dedicada à análise e comparação de casinos online licenciados em Portugal.
          </p>
          <p className="mt-2 text-[11px] text-white/18 sm:text-xs">
            18+ | Conteúdo exclusivo para adultos | Jogue com responsabilidade | Destinado apenas a residentes em Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
