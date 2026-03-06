'use client';

import { useMemo } from 'react';
import { Casino } from '../data/casinos';
import CasinoCard from './CasinoCard';
import Header from './Header';
import Footer from './Footer';

interface MobileCasinoModalProps {
  mobileCasinos: Casino[];
  isOnline: boolean;
  gclidValue?: string;
}

export default function MobileCasinoModal({ mobileCasinos, isOnline, gclidValue = '' }: MobileCasinoModalProps) {
  const isOpen = isOnline && mobileCasinos.length > 0;

  // Update casino URLs with actual gclid value
  const updatedCasinos = useMemo(() => {
    if (!gclidValue) return mobileCasinos;
    
    return mobileCasinos.map(casino => ({
      ...casino,
      url: casino.url + `&gclid=${gclidValue}`
    }));
  }, [mobileCasinos, gclidValue]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#07140f]/92 backdrop-blur-md">
      <div className="w-full min-h-screen bg-transparent">
        <Header />

        <div className="border-b border-[#d4af37]/15 bg-black/15 px-4 py-3 backdrop-blur sm:px-6">
          <div className="container mx-auto">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4af37]">Mobile Table</p>
            <h1 className="mb-1 text-lg font-extrabold text-white sm:text-xl lg:text-2xl">
              {isOnline ? 'Best Casino Sites 2026' : '🎰 New Casino Sites 2026'}
            </h1>
            <h2 className="text-left font-extrabold text-[#f1d987] sm:text-xl lg:text-shadow-xs">
              {isOnline ? 'Explore top new casino and betting platforms with fast withdrawals and welcome bonuses.' : 'Check the best casinos in UK'}
            </h2>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-5 sm:py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 max-w-5xl mx-auto">
            {updatedCasinos.map((casino, index) => (
              <CasinoCard
                isOnline={isOnline}
                key={casino.id} 
                casino={casino}
                rank={index + 1}
                badge={index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : index === 3 ? 'fourth' : undefined}
              />
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-6xl rounded-[26px] border border-[#d4af37]/12 bg-white/[0.04] p-3 shadow-sm sm:mt-8 sm:p-4">
            <p className="text-center text-xs text-[#d9cfbc]/75 sm:text-sm">
              <strong>New customers only.</strong> 18+. T&Cs apply. BeGambleAware.org. Please play responsibly.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

