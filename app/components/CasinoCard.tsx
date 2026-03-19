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
    <article className="mx-auto w-full max-w-lg rounded-[28px] border border-white/10 bg-[#111b2e] p-3 text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.6)] sm:p-4">
      {casino.badge && (
        <div className="px-2 pt-1">
          <span className="inline-flex rounded-full bg-blue-500/15 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-400">
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
            <div className="mt-1 text-xs text-white/50">
              {casino.votes.toLocaleString('pt-PT')} votos
            </div>
          </div>
        </div>

        <div className="mb-5 rounded-[22px] border border-blue-500/25 bg-[#0d1526] px-4 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-5">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-blue-300 sm:text-xs">
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
          className="flex w-full items-center justify-center rounded-[18px] border border-blue-600 bg-[linear-gradient(180deg,#3b82f6_0%,#2563eb_100%)] px-4 py-3.5 text-center text-[20px] font-black text-white shadow-[0_12px_28px_rgba(37,99,235,0.3)] transition-transform duration-200 hover:scale-[1.01] sm:text-[22px]"
        >
          Ver detalhes
          <span className="ml-2 text-[0.9em] leading-none">→</span>
        </a>

        <div className="mt-3 text-center text-xs font-medium text-white/50 sm:text-sm">
          Aplicam-se T&amp;C. 18+. Jogue com responsabilidade.
        </div>
      </div>
    </article>
  );
}
