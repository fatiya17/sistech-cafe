import React from 'react';
import PromoHero from '@/components/promo/PromoHero';
import PromoFeatured from '@/components/promo/PromoFeatured';
import PromoList from '@/components/promo/PromoList';

export const metadata = {
  title: 'Promos & Offers - Sistech Cafe',
  description: 'Nikmati penawaran spesial dan secangkir kebahagiaan dengan harga yang lebih manis.',
};

export default function PromoPage() {
  return (
    <div className="min-h-screen gradient-hero  pt-24 pb-20 overflow-hidden">
      <div className="container-site w-full px-4 md:px-8 relative">
        <PromoHero />
        <PromoFeatured />
        <PromoList />
      </div>
    </div>
  );
}
