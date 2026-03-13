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
      className="cursor-pointer rounded-[28px] border border-white/10 bg-gray-900 p-2.5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(0,0,0,0.52)] sm:p-3"
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      {(badge || typeof rank === 'number') && (
        <div className="px-1.5 pt-1.5 sm:px-2">
          <span className="inline-flex rounded-[12px] bg-[#1a1a1a] px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/90">
            {badge ? badgeText : `Rank #${rank}`}
          </span>
        </div>
      )}

      <div className="px-1.5 pb-1.5 pt-3 sm:px-2 sm:pb-2">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex min-h-[64px] flex-1 items-center">
            <div className="h-12 w-28 sm:h-14 sm:w-32 [&>img]:h-full [&>img]:w-full [&>img]:object-contain [&>svg]:h-full [&>svg]:w-full">
              {renderLogo()}
            </div>
          </div>

          <div className="shrink-0 text-right">
            <div className="text-[32px] font-black leading-none tracking-[-0.05em] text-white sm:text-[38px]">
              {casino.rating.toFixed(1)}
            </div>
            <div className="mt-1.5 text-sm leading-none tracking-[0.12em] text-[#b22f2f] sm:text-base">
              ★★★★★
            </div>
          </div>
        </div>

        <div className="mb-4 text-center">
          <div className="text-[20px] font-black uppercase leading-[1.3] tracking-[-0.02em] text-white sm:text-[24px]">
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
          className="flex w-full items-center justify-center rounded-[18px] border border-[#c43f3c] bg-[linear-gradient(180deg,#c92829_0%,#a41016_100%)] px-4 py-3 text-center text-[20px] font-black text-white shadow-[0_12px_28px_rgba(155,18,24,0.24)] transition-transform duration-200 hover:scale-[1.01] sm:text-[22px]"
        >
          {isOnline ? 'Claim Now' : 'Play Now'}
          <span className="ml-2 text-[0.9em] leading-none">→</span>
        </a>

        <div className="mt-3 text-center text-xs font-medium text-white/65 sm:text-sm">
          T&amp;Cs apply.
        </div>
      </div>
    </article>
  );
}

