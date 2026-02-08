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
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto">
      <div className="w-full min-h-screen bg-black">
        {/* Header - Menu bar at top */}
        <Header />



        {/* Hero Section */}
        <div className="bg-gray-800 border-b border-white/10 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur">
          <div className="container mx-auto ">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white mb-1">
              {isOnline ? 'Best EU Casino Sites 2026' : '🎰 New Casino Sites 2026'}
            </h1>
            <h2 className="text-left sm:text-xl lg:text-shadow-xs font-extrabold text-red-400 mb-1">
              {isOnline ? 'Explore top casino and betting platforms with fast payouts and welcome bonuses.' : 'Check the best casinos in UK'}

            </h2>
          </div>
        </div>


        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 max-w-6xl mx-auto">
            {updatedCasinos.map((casino, index) => (
              <CasinoCard
                isOnline={isOnline}
                key={casino.id} 
                casino={casino} 
                badge={index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : undefined}
              />
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-6 sm:mt-8 bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 max-w-6xl mx-auto shadow-sm">
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              <strong>New customers only.</strong> 18+. T&Cs apply. BeGambleAware.org. Please play responsibly.
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

