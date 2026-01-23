'use client';

import { Casino } from '../data/casinos';
import { Star, ArrowRight, Check } from 'lucide-react';
import { logos } from './CasinoLogos';
import Image from 'next/image';
import { track } from '@vercel/analytics';

interface CasinoCardProps {
  casino: Casino;
  badge?: 'gold' | 'silver' | 'bronze';
  gclid?: boolean;
}

export default function CasinoCard({ casino, badge, gclid }: CasinoCardProps) {
  // Track click on mobile casino brands
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

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-3 h-3 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
    );
  };

  // Render logo: either from logos object (SVG) or as Image (PNG)
  const renderLogo = () => {
    if (typeof casino.logo === 'string' && casino.logo.startsWith('/')) {
      // It's an image path
      return (
        <Image 
          src={casino.logo} 
          alt={`${casino.name} Casino`} 
          width={180} 
          height={80} 
          className="w-full h-full object-contain logo-pulse"
        />
      );
    }
    // It's a LogoKey, render from logos object
    return logos[casino.logo as keyof typeof logos];
  };

  // Default payment methods - can be made configurable later
  const paymentMethods = ['PayPal', 'Visa Debit', 'Mastercard Debit', 'Skrill', 'Neteller'];

  return (
    <div
      className="relative bg-[#31274F] rounded-3xl p-7 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      {/* Badge - Top Left */}
      {badge && (
        <div className={`absolute left-0 top-0 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide ring-1 ${
          badge === 'gold' 
            ? 'bg-orange-500 border-orange-300 text-white' 
            : badge === 'silver' 
            ? 'bg-purple-500 border-purple-300 text-white' 
            : 'bg-yellow-400 border-yellow-300 text-black'
        }`}>
          {badge === 'gold' ? "Most Popular" : badge === 'silver' ? 'Fast Withdrawal' : 'No Wagering'}
        </div>
      )}

      {/* Top Section: Logo and Rating */}
      <div className="flex items-start justify-between mb-6">
        {/* Logo - Left */}
        <div className="w-40 h-20 flex items-center justify-center">
          <div className="w-full h-full [&>svg]:text-[#C0A06D] [&>svg]:fill-[#C0A06D]">
            {renderLogo()}
          </div>
        </div>

      {/* Rating - Right */}
        <div className="flex flex-col items-end">
          <div className="bg-[#FF4500] rounded-lg px-4 py-2 shadow-md">
            <span className="text-white text-3xl font-bold mb-1 block text-center">
              {casino.rating.toFixed(1)}
            </span>
            <div className="flex justify-center">
              {renderStars(casino.rating)}
            </div>
          </div>
        </div>

      </div>

      {/* Bonus Offer - Centered */}
      <div className="text-center mb-6">
        <p className="text-white font-semibold text-base sm:text-lg uppercase leading-tight">
          {casino.bonus}
        </p>
      </div>

      {/* Payment Methods - Scrollable Row */}
      <div className="mt-3 flex justify-center mb-6">
        <div className="flex max-w-full gap-2 overflow-x-auto no-scrollbar px-1 py-1">
          {paymentMethods.map((method) => (
            <span
              key={method}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80"
            >
              {method}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Button - Full Width Bottom */}
      <a
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => {
          event.stopPropagation();
          handleCasinoClick();
        }}
        className="bg-[#FF4500] block w-full bg-gradient-to-r  text-white font-bold py-4 px-6 rounded-2xl text-center text-base sm:text-lg uppercase shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
      >
        {/*{gclid ? "Claim Bonus": "Play Now"}*/}
        Check Now
        <ArrowRight className="w-5 h-5" />
      </a>
      {gclid &&  <div className="mt-5 flex items-center justify-center gap-6 text-white/80 text-sm font-semibold">
        <span className="flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          Instant Deposits
        </span>
          <span className="flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          Secure & Licensed
        </span>
      </div>}
    </div>
  );
}
