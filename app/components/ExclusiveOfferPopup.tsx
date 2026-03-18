'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Casino } from '../data/casinos';
import { Star } from 'lucide-react';
import { logos } from './CasinoLogos';
import Image from 'next/image';

interface ExclusiveOfferPopupProps {
  casino: Casino;
  isOnline: boolean;
  gclidValue?: string;
  countryCode?: string;
}

export default function ExclusiveOfferPopup({ casino, isOnline, gclidValue = '', countryCode }: ExclusiveOfferPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const casinoUrl = gclidValue ? `${casino.url}&gclid=${gclidValue}` : casino.url;

  useEffect(() => {
    // Check if popup was already shown in this session
    const alreadyShown = sessionStorage.getItem('exclusiveOfferShown');
    if (alreadyShown) {
      return;
    }

    if (!isOnline) {
      // Not eligible, don't show popup
      return;
    }

    // Show popup after 7 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem('exclusiveOfferShown', 'true');
    }, 12000);

    return () => {
      clearTimeout(timer);
    };
  }, [isOnline]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('exclusiveOfferShown', 'true');
  };

  const handleOverlayClick = () => {
    handleClose();
  };

  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const renderStars = (rating: number) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );

  const renderLogo = () => {
    if (typeof casino.logo === 'string' && casino.logo.startsWith('/')) {
      return (
        <Image
          src={casino.logo}
          alt={`${casino.name} Casino`}
          width={200}
          height={80}
          className="w-full h-full object-contain"
        />
      );
    }
    return logos[casino.logo as keyof typeof logos];
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div
        className="relative bg-[#151b2e] rounded-2xl shadow-2xl border border-red-600/70 max-w-md w-full overflow-hidden"
        onClick={handleContentClick}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 flex items-center justify-center transition-colors border border-white/10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="relative mb-4 -mt-2">
          <div className="relative bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white font-bold text-center py-3 px-8 mx-4 rounded-sm">
            <div className="absolute left-0 top-0 w-0 h-0 border-t-[12px] border-t-red-600 border-b-[12px] border-b-red-600 border-r-[20px] border-r-transparent transform translate-x-[-20px]"></div>
            <div className="absolute right-0 top-0 w-0 h-0 border-t-[12px] border-t-red-600 border-b-[12px] border-b-red-600 border-l-[20px] border-l-transparent transform translate-x-[20px]"></div>
            <span className="relative z-10 text-sm sm:text-base uppercase tracking-wide font-extrabold">
              EXCLUSIVE OFFER
            </span>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-white/10 rounded-2xl p-4 border border-white/10 shadow-sm">
              <div className="w-48 h-20 flex items-center justify-center">
                {renderLogo()}
              </div>
            </div>
          </div>

          <div className="text-center mb-4 space-y-1">
            {/* <p className="text-white font-extrabold text-xl sm:text-2xl leading-tight">
              {casino.bonus.split('+')[0]}
            </p> */}
          {casino.bonus.includes('+') && (
            <p className="text-white font-extrabold text-lg sm:text-xl bg-red-600/20 border border-red-600/40 px-2 py-0.5 rounded-md inline-block whitespace-normal break-words text-center">
              {casino.bonus}
            </p>
          )}
          </div>

          <div className="mb-3 flex justify-center">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
              Big Bonuses &amp; Instant Payouts
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            {renderStars(casino.rating)}
          </div>

          <a
            href={casinoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="block w-full bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white font-extrabold py-3 px-6 rounded-xl text-center text-lg uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            CLAIM NOW
          </a>
        </div>
      </div>
    </div>
  );
}
