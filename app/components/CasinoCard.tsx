'use client';

import { Casino } from '../data/casinos';
import { ArrowRight, Check } from 'lucide-react';
import { logos } from './CasinoLogos';
import Image from 'next/image';
import { track } from '@vercel/analytics';

interface CasinoCardProps {
  casino: Casino;
  badge?: 'gold' | 'silver' | 'bronze' | 'fourth';
  isOnline?: boolean;
}

export default function CasinoCard({ casino, badge, isOnline = false }: CasinoCardProps) {
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
          width={140} 
          height={100} 
          className="object-contain"
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
    "Bank Transfer",];

  const badgeClass = badge === 'gold' 
    ? 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black' 
    : badge === 'silver' 
    ? 'bg-gradient-to-r from-gray-300 via-slate-400 to-gray-500 text-black' 
    : 'bg-gradient-to-r from-orange-600 via-amber-700 to-orange-800 text-white';

  return (
    <div
      className="relative bg-[#1a1625] rounded-2xl p-4 sm:p-5 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-teal-500/50"
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      {/* Badge - Top of Card */}
      {badge && (
        <span className={`absolute top-0 left-0 rounded-br-lg rounded-tl-2xl px-3 py-1.5 text-[11px] font-bold ${badgeClass}`}>
          {badge === 'gold' ? "Most Popular" : badge === 'silver' ? 'Big Bonuses' : badge === 'bronze' ? 'Fast Withdrawal' :  'Trusted / Licensed'}
        </span>
      )}

      {/* Logo and Rating Row */}
      <div className={`flex items-center justify-between mb-4 ${badge ? 'pt-6' : ''}`}>
        {/* Logo - Centered Left */}
        <div className="w-32 h-20 sm:w-36 sm:h-24 flex items-center justify-center [&>svg]:text-white [&>svg]:fill-white">
          {renderLogo()}
        </div>

        {/* Rating - Right */}
        <div className="flex flex-col items-center">
          <span className="text-white text-3xl sm:text-4xl font-extrabold">
            {casino.rating.toFixed(1)}
          </span>
          <div className="text-red-400 text-sm tracking-tight">★★★★★</div>
          <div className="text-xs text-red-300">{casino.votes} reviews</div>
        </div>
      </div>

      {/* Bonus Offer - Centered, Amber Color */}
      <div className="text-center mb-4">
        <p className="text font-bold text-sm sm:text-base uppercase leading-tight">
          {casino.bonus}
        </p>
      </div>

      {/* Payment Methods - Scrollable Row */}
      {isOnline && <div className="flex justify-center mb-4">
          <div className="flex max-w-full gap-2 overflow-x-auto no-scrollbar">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="whitespace-nowrap rounded-full border border-white/20 bg-[#2a2435] px-3 py-1.5 text-[11px] font-medium text-white/90"
              >
              {method}
            </span>
            ))}
          </div>
      </div>}

      {/* CTA Button */}
      <div className="relative">
        <a
          href={casino.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => {
            event.stopPropagation();
            handleCasinoClick();
          }}
          className="block w-full bg-gradient-to-r from-red-700 via-red-600 to-red-500 hover:from-red-600 hover:via-red-500 hover:to-red-400 text-white font-extrabold py-3 px-4 rounded-xl text-sm uppercase shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isOnline ? 'Claim Bonus' : 'Play Now'}
          {/*Play Now*/}
          <ArrowRight className="w-4 h-4" />
        </a>
        {/*{isOnline && (*/}
        {/*  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJNMCAwdjMwaDYwVjB6Ii8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImIiPjxwYXRoIGQ9Ik0zMCAxNWgzMHYxNXp2MTVIMHpIMHYtMTV6di0xNWgzMHoiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0iTTAgMHYzMGg2MFYweiIgZmlsbD0iIzAxMjE2OSIvPjxwYXRoIGQ9Ik0wIDBoNjB2MzBIMHoiIGZpbGw9IiMwMTIxNjkiLz48cGF0aCBkPSJNMCAwbDYwIDMwbTAtMzBMMCAzMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjYiLz48cGF0aCBkPSJNMCAwbDYwIDMwbTAtMzBMMCAzMCIgY2xpcC1wYXRoPSJ1cmwoI2IpIiBzdHJva2U9IiNDODEwMkUiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Ik0zMCAwdjMwTTAgMTVoNjAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxwYXRoIGQ9Ik0zMCAwdjMwTTAgMTVoNjAiIHN0cm9rZT0iI0M4MTAyRSIgc3Ryb2tlLXdpZHRoPSI2Ii8+PC9nPjwvc3ZnPg==')] bg-cover bg-center"></div>*/}
        {/*)}*/}
      </div>

      {/* {isOnline && (
        <div className="mt-3 flex items-center justify-center gap-4 text-gray-400 text-xs font-semibold">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            Instant Deposits
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            Secure & Licensed
          </span>
        </div>
      )} */}
    </div>
  );
}
