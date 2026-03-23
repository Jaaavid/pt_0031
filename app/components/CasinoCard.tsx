'use client';

import { Casino } from '../data/casinos';
import { logos } from './CasinoLogos';
import Image from 'next/image';
import { track } from '@vercel/analytics';

interface CasinoCardProps {
  casino: Casino;
  rank?: number;
  badge?: 'gold' | 'silver' | 'bronze' | 'fourth';
  isOnline?: boolean;
}

export default function CasinoCard({ casino, rank, badge, isOnline = false }: CasinoCardProps) {
  const handleCasinoClick = () => {
    if (casino.isMobile) {
      track('Casino Click', { casino: casino.name });
    }
  };

  const renderLogo = () => {
    if (typeof casino.logo === 'string' && casino.logo.startsWith('/')) {
      return (
        <Image
          src={casino.logo}
          alt={`${casino.name} Casino`}
          width={260}
          height={180}
          className="h-full w-full object-contain"
        />
      );
    }
    return logos[casino.logo as keyof typeof logos];
  };

  return (
    <article className="mx-auto w-full max-w-lg rounded-3xl border border-white/[0.08] bg-[#141418] p-3 text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/15 hover:shadow-[0_24px_70px_rgba(0,0,0,0.7)] sm:p-4">
      {casino.badge && (
        <div className="px-2 pt-1">
          <span className="inline-flex rounded-full bg-emerald-500/12 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-emerald-400">
            {casino.badge}
          </span>
        </div>
      )}

      <div className="px-2 pb-2 pt-4">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex min-h-[80px] flex-1 items-center">
            <div className="h-16 w-44 sm:h-20 sm:w-52 [&>img]:h-full [&>img]:w-full [&>img]:object-contain [&>svg]:h-full [&>svg]:w-full">
              {renderLogo()}
            </div>
          </div>

          <div className="shrink-0 text-right">
            <div className="text-[36px] font-black leading-none tracking-[-0.05em] text-white sm:text-[42px]">
              {casino.rating.toFixed(1)}
            </div>
            <div className="mt-1.5 text-sm leading-none tracking-[0.12em] text-amber-400 sm:text-base">
              ★★★★★
            </div>
            <div className="mt-1 text-xs text-white/40">
              {casino.votes.toLocaleString('pt-PT')} votos
            </div>
          </div>
        </div>

        <div className="mb-5 rounded-2xl border border-emerald-500/15 bg-[#0e0e12] px-4 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] sm:px-5">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-emerald-300 sm:text-xs">
            Bónus de Boas-Vindas
          </div>
          <div className="mt-3 text-[20px] font-black uppercase leading-[1.35] tracking-[-0.02em] text-white sm:text-[24px]">
            {casino.bonus}
          </div>
        </div>

        <a
          href={casino.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => {
            event.stopPropagation();
            handleCasinoClick();
          }}
          className="flex w-full items-center justify-center rounded-2xl border border-emerald-600 bg-[linear-gradient(180deg,#10b981_0%,#059669_100%)] px-4 py-3.5 text-center text-[20px] font-black text-white shadow-[0_12px_28px_rgba(5,150,105,0.25)] transition-transform duration-200 hover:scale-[1.01] sm:text-[22px]"
        >
          Ver detalhes
          <span className="ml-2 text-[0.9em] leading-none">→</span>
        </a>

        <div className="mt-3 text-center text-xs font-medium text-white/40 sm:text-sm">
          Aplicam-se T&amp;C. 18+. Jogue com responsabilidade.
        </div>
      </div>
    </article>
  );
}
