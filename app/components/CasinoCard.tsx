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
      track('Casino Click', {
        casino: casino.name
      });
    }
  };
  const handleCardClick = () => {
    handleCasinoClick();
    window.open(casino.url, '_blank', 'noopener,noreferrer');
  };
  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
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

  const badgeText =
    badge === 'gold'
      ? 'High Roller Pick'
      : badge === 'silver'
        ? 'Instant Withdrawal'
        : badge === 'bronze'
          ? 'Fast Payouts'
          : 'Trusted Pick';

  return (
    <article
      className="cursor-pointer rounded-[32px] border border-white/10 bg-[#050505] p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(0,0,0,0.52)] sm:p-5"
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      <div className="rounded-[28px] border border-white/10 bg-gray-900 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-4">
        <div className="mb-4 flex items-start gap-3 sm:gap-4">
          {typeof rank === 'number' && (
            <div className="flex h-[68px] w-[68px] shrink-0 flex-col items-center justify-center rounded-[20px] border border-[#85752a] bg-[#0c261f] text-[#f0d56d] shadow-[inset_0_0_0_1px_rgba(240,213,109,0.12)]">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.28em]">
                Rank
              </span>
              <span className="mt-1 text-[26px] font-black leading-none">
                #{rank}
              </span>
            </div>
          )}

          <div className="min-w-0 flex-1 pt-1">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[#d66d6a] sm:text-xs">
              Featured Casino
            </div>
            {/*<div className="mt-1 truncate text-[30px] font-black leading-none tracking-[-0.03em] text-white sm:text-[34px]">*/}
            {/*  {casino.name}*/}
            {/*</div>*/}
          </div>

          <div className="shrink-0 rounded-[20px] border border-white/10 bg-[#141414] px-4 py-3 text-center shadow-[0_4px_14px_rgba(0,0,0,0.22)]">
            <div className="text-[42px] font-black leading-none tracking-[-0.06em] text-white">
              {casino.rating.toFixed(1)}
            </div>
            <div className="mt-2 text-sm leading-none tracking-[0.28em] text-[#b22f2f]">
              ★★★★★
            </div>
          </div>
        </div>

        <div className="mb-4 overflow-hidden rounded-[26px] border border-[#264434] bg-black p-4 shadow-[inset_0_0_0_1px_rgba(177,148,52,0.15)] sm:p-5">
          {isOnline && badge && (
            <div className="mb-4 flex justify-end">
              <span className="inline-flex rounded-full border border-[#85752a] bg-[#2b3928] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#f0d56d] sm:text-xs">
                {badgeText}
              </span>
            </div>
          )}

          <div className="flex min-h-[190px] items-center justify-center rounded-[22px] border border-white/5 bg-gray-900 px-4 py-6 sm:min-h-[210px]">
            <div className="h-40 w-full max-w-[240px] [&>img]:h-full [&>img]:w-full [&>img]:object-contain [&>svg]:h-full [&>svg]:w-full">
              {renderLogo()}
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-[#131313] px-5 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[#d66d6a] sm:text-xs">
            Welcome Deal
          </div>
          <div className="mt-3 text-[28px] font-black uppercase leading-[1.25] tracking-[-0.03em] text-white sm:text-[30px]">
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
          className="mt-5 flex w-full items-center justify-center rounded-[24px] border border-[#c43f3c] bg-[linear-gradient(180deg,#c92829_0%,#a41016_100%)] px-4 py-4 text-center text-[28px] font-black uppercase tracking-[0.11em] text-white shadow-[0_12px_28px_rgba(155,18,24,0.24)] transition-transform duration-200 hover:scale-[1.01] sm:text-[30px]"
        >
          {isOnline ? 'Play Now' : 'Play Now'}
        </a>

        <div className="mt-4 text-center text-sm font-medium text-white/65">
          T&amp;Cs apply.
        </div>
      </div>
    </article>
  );
}

