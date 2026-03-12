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
      ? 'Bonuses & Instant Withdrawal'
      : badge === 'silver'
        ? 'Popular & Fast Payouts'
        : badge === 'bronze'
          ? 'Fast Payouts'
          : 'Trusted';

  const badgeClass =
    badge === 'gold'
      ? 'bg-[#f4c542] text-[#1a1a1a]'
      : badge === 'silver'
        ? 'bg-[#d9dde8] text-[#1a1a1a]'
        : badge === 'bronze'
          ? 'bg-[#c77b45] text-white'
          : 'bg-white/12 text-white';

  return (
    <article
      className="cursor-pointer rounded-[28px] border border-white/10 bg-[#111933] p-5 text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      {(badge || typeof rank === 'number') && (
        <div className="mb-4 flex items-center justify-between gap-2">
          {badge ? (
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide ${badgeClass}`}>
              {badgeText}
            </span>
          ) : (
            <span />
          )}
          {typeof rank === 'number' && (
            <span className="text-xs font-bold uppercase tracking-wide text-white/55">
              #{rank}
            </span>
          )}
        </div>
      )}

      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex min-h-[88px] flex-1 items-center justify-start">
          <div className="h-16 w-36 sm:h-20 sm:w-44 [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-white [&>svg]:text-white">
            {renderLogo()}
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black leading-none text-white sm:text-4xl">
            {casino.rating.toFixed(1)}
          </div>
          <div className="mt-1 text-base leading-none text-[#ff5a69] sm:text-lg">★★★★★</div>
        </div>
      </div>

      <div className="mb-5 rounded-2xl bg-white/6 px-4 py-5 text-center">
        <div className="text-lg font-extrabold uppercase leading-[1.45] text-white sm:text-xl">
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
        className="flex w-full items-center justify-center rounded-2xl bg-[#f4000f] px-4 py-4 text-xl font-black uppercase text-white"
      >
        {isOnline ? 'Play Now' : 'Play Now'}
      </a>

      <div className="mt-3 text-center text-sm text-white/50">
        T&amp;Cs apply.
      </div>
    </article>
  );
}

