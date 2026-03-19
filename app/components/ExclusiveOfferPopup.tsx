'use client';

import { useState, useEffect } from 'react';
import { X, Star } from 'lucide-react';
import { Casino } from '../data/casinos';
import { logos } from './CasinoLogos';
import Image from 'next/image';

interface ExclusiveOfferPopupProps {
  casino: Casino;
  isOnline: boolean;
  gclidValue?: string;
  countryCode?: string;
}

export default function ExclusiveOfferPopup({ casino, isOnline, gclidValue = '' }: ExclusiveOfferPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const casinoUrl = gclidValue ? `${casino.url}&gclid=${gclidValue}` : casino?.url;

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('exclusiveOfferShown');
    if (alreadyShown || !isOnline) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem('exclusiveOfferShown', 'true');
    }, 15000);

    return () => clearTimeout(timer);
  }, [isOnline]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('exclusiveOfferShown', 'true');
  };

  const renderStars = () => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
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
          className="h-full w-full object-contain"
        />
      );
    }
    return logos[casino.logo as keyof typeof logos];
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative max-w-md w-full overflow-hidden rounded-2xl border border-blue-500/40 bg-[#111b2e] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/70 transition-colors hover:bg-black/90"
          aria-label="Fechar popup"
        >
          <X className="h-5 w-5 text-white" />
        </button>

        <div className="relative -mt-2 mb-4">
          <div className="relative mx-4 rounded-sm bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 px-8 py-3 text-center font-bold text-white">
            <span className="relative z-10 text-sm font-extrabold uppercase tracking-wide sm:text-base">
              OFERTA EXCLUSIVA
            </span>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="mb-4 flex justify-center">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-sm">
              <div className="flex h-20 w-48 items-center justify-center">
                {renderLogo()}
              </div>
            </div>
          </div>

          <div className="mb-4 space-y-1 text-center">
            {casino.bonus.includes('+') && (
              <p className="inline-block whitespace-normal break-words rounded-md border border-blue-500/30 bg-blue-500/15 px-3 py-1 text-center text-lg font-extrabold text-white sm:text-xl">
                {casino.bonus}
              </p>
            )}
          </div>

          <div className="mb-3 flex justify-center">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
              Bónus Generosos &amp; Levantamentos Rápidos
            </span>
          </div>

          <div className="mb-6 flex items-center justify-center gap-2">
            {renderStars()}
          </div>

          <a
            href={casinoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="block w-full rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 px-6 py-3 text-center text-lg font-extrabold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            VER DETALHES
          </a>
        </div>
      </div>
    </div>
  );
}
