'use client';

import { Casino } from '../data/casinos';
import { ArrowRight, Check } from 'lucide-react';
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

  const badgeClass = 'bg-red-500 text-white';

  return (
    <article
      className="relative overflow-hidden bg-[#151b2e] rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-red-600/70"
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      {isOnline && badge && (
        <span className={`absolute top-0 left-0 rounded-br-lg rounded-tl-2xl px-3 py-1.5 text-[11px] font-extrabold ${badgeClass}`}>
          {badge === 'gold' ? "Big Bonuses & Instant Withdrawal" : badge === 'silver' ? 'Most Popular & Fast Payout' : badge === 'bronze' ? 'Fast Payouts' :  'Trusted/Licensed'}
        </span>
      )}

      {/* {typeof rank === 'number' && (
        <span className="absolute top-0 right-0 bg-red-600 text-white font-extrabold text-sm sm:text-base px-3 py-1.5 rounded-bl-lg rounded-tr-2xl">
          #{rank}
        </span>
      )} */}

      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-40 h-28 sm:w-48 sm:h-32 flex items-start justify-start [&>svg]:text-white [&>svg]:fill-white [&>svg]:w-full [&>svg]:h-full">
          {renderLogo()}
        </div>
        <div className="text-right">
          <div className="text-white text-3xl sm:text-4xl font-extrabold leading-none">
            {casino.rating.toFixed(1)}
          </div>
          <div className="text-red-400 text-sm tracking-tight">★★★★★</div>
          {/* <div className="text-xs text-white/60">{casino.votes} reviews</div> */}
        </div>
      </div>

      {/*
        {isOnline && (
          <div className="mb-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3">
            <div className="text-sm text-emerald-300 font-semibold">
              {isOnline
                ? badge === 'gold'
                  ? '✨ Instant Withdrawal & Big Bonuses'
                  : badge === 'silver'
                  ? '✨ Most Popular'
                  : badge === 'bronze'
                  ? '✨ Big Bonuses'
                  : '✨ Fast payouts'
                : '✨ Fast payouts • Top games'}
            </div>
          </div>
        )}
      */}

       {/* {isOnline && */}
        {/* <div className="mb-4 flex items-center justify-between rounded-lg border border-red-600/30 bg-red-600/10 px-3 py-2"> */}
      {/* <span className="text-xs sm:text-sm font-semibold text-red-300">⚡ Limited-time bonus available</span> */}
      {/* <span className="text-xs sm:text-sm font-bold text-red-200">Ends soon</span> */}
    {/* </div>} */}

      <div className="text-center mb-4 rounded-xl bg-white/5 px-4 py-4">
        <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          {casino.bonus}
        </div>
      </div>

      {isOnline && (
        <div className="flex justify-center mb-4">
          <div className="flex max-w-full gap-2 overflow-x-auto no-scrollbar">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/80"
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
        className="block w-full bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white font-extrabold py-3.5 px-4 rounded-xl text-sm uppercase shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
      >
        {/*{isOnline ? 'Claim Bonus' : 'Play Now'}*/}
        Play Now
        <ArrowRight className="w-4 h-4" />
        {isOnline ? <span aria-hidden="true" className="text-xl">💰</span> : ''}
      </a>
    </article>
  );
}

