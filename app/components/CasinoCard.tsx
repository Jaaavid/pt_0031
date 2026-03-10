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

  const paymentMethods = ["Apple Pay",
    "Google Pay", "PayPal",
    "Visa Debit",
    "Mastercard Debit",
    "Skrill",
    "Neteller",
    "Paysafecard",
    "Bank Transfer"];

  const badgeText =
    badge === 'gold'
      ? 'High Roller Pick'
      : badge === 'silver'
        ? 'Instant Withdrawal'
        : badge === 'bronze'
          ? 'Fast Cashouts'
          : 'Trusted Choice';

  return (
    <article
      className="group relative overflow-hidden rounded-[28px] border border-[#d4af37]/70 bg-[linear-gradient(180deg,#fffaf0_0%,#f4ead4_100%)] p-5 text-[#241711] shadow-[0_20px_60px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.42)] cursor-pointer"
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.24),_transparent_28%),linear-gradient(135deg,rgba(143,29,29,0.08),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-[10px] rounded-[22px] border border-[#d4af37]/35" />
      <div className="pointer-events-none absolute right-5 top-5 text-[70px] leading-none text-[#8f1d1d]/10">
        {rank === 1 ? 'A' : rank === 2 ? 'K' : rank === 3 ? 'Q' : 'J'}
      </div>
      {/*<div className="pointer-events-none absolute bottom-3 left-4 text-3xl text-[#1b1b1b]/12">*/}
      {/*  {rank === 2 ? '♣' : rank === 3 ? '♠' : '♥'}*/}
      {/*</div>*/}

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {typeof rank === 'number' && (
            <div className="flex h-12 w-12 flex-col items-center justify-center rounded-2xl border border-[#d4af37]/70 bg-[#0f261c] text-[#f6edd8] shadow-[inset_0_0_0_1px_rgba(212,175,55,0.18)]">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">Rank</span>
              <span className="text-lg font-black leading-none">#{rank}</span>
            </div>
          )}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#8f1d1d]">Featured Casino</p>
            <h3 className="text-lg font-black text-[#1d120f]">{casino.name}</h3>
          </div>
        </div>
        <div className="rounded-2xl border border-[#8f1d1d]/15 bg-[#fff8ea]/80 px-3 py-2 text-right shadow-sm">
          <div className="text-3xl font-black leading-none text-[#1d120f]">
            {casino.rating.toFixed(1)}
          </div>
          <div className="text-sm tracking-[0.2em] text-[#8f1d1d]">★★★★★</div>
        </div>
      </div>

      <div className="relative z-10 mb-4 mt-5 flex items-start justify-between gap-4 rounded-[24px] border border-[#d4af37]/25 bg-[linear-gradient(135deg,rgba(15,38,28,0.98),rgba(8,22,16,0.95))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="flex h-28 w-40 items-start justify-start sm:h-32 sm:w-48 [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-white [&>svg]:text-white">
          {renderLogo()}
        </div>
        <div className="flex flex-col items-end justify-between gap-4">
          {badge && (
            <span className="rounded-full border border-[#d4af37]/50 bg-[#d4af37]/12 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#d4af37]">
              {badgeText}
            </span>
          )}
          {/*<div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#f6edd8]/85">*/}
          {/*  UK Ready*/}
          {/*</div>*/}
        </div>
      </div>

      <div className="relative z-10 mb-4 rounded-[22px] border border-[#8f1d1d]/15 bg-white/70 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
        <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.35em] text-[#8f1d1d]">Welcome Deal</div>
        <div className="text-base font-extrabold tracking-tight text-[#1d120f] sm:text-lg">
          {casino.bonus}
        </div>
      </div>

      {/*<div className="relative z-10 mb-4 flex flex-wrap items-center gap-2">*/}
      {/*  {["Secure", "Fast payout", "Card-friendly"].map((feature) => (*/}
      {/*    <span*/}
      {/*      key={feature}*/}
      {/*      className="rounded-full border border-[#d4af37]/30 bg-[#0f261c] px-3 py-1 text-[11px] font-semibold text-[#f6edd8]"*/}
      {/*    >*/}
      {/*      {feature}*/}
      {/*    </span>*/}
      {/*  ))}*/}
      {/*</div>*/}

      {isOnline && (
        <div className="relative z-10 mb-4 flex justify-center">
          <div className="flex max-w-full gap-2 overflow-x-auto no-scrollbar">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="whitespace-nowrap rounded-full border border-[#d4af37]/25 bg-[#0f261c] px-3 py-1.5 text-[11px] font-medium text-[#f6edd8]/80"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      )}

      <a
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => {
          event.stopPropagation();
          handleCasinoClick();
        }}
        className="relative z-10 flex w-full items-center justify-center gap-2 rounded-[18px] border border-[#d4af37]/70 bg-[linear-gradient(180deg,#9f2424_0%,#781313_100%)] px-4 py-3 text-base font-extrabold uppercase tracking-[0.22em] text-[#fff7eb] shadow-[0_14px_30px_rgba(120,19,19,0.28)]"
      >
        {isOnline ? 'Get Bonus' : 'Play Now'}
      </a>
      <div className="relative z-10 mt-2 text-center text-[11px] text-[#5c4636]">
        T&amp;Cs apply.
      </div>
    </article>
  );
}

