"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const promos = [
  {
    id: 1,
    title: "morning brew",
    subtitle: "diskon 20% sebelum jam 10 pagi",
    desc: "Awali harimu dengan secangkir Americano atau Espresso pilihan kami. Harga khusus untuk kamu yang bangun lebih pagi.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
    code: "MORNING20"
  },
  {
    id: 2,
    title: "weekend   chill",
    subtitle: "gratis pastry untuk 2 minuman",
    desc: "Nikmati akhir pekan bersama orang tersayang. Dapatkan 1 pilihan pastry gratis (Croissant/Brownie) setiap pembelian 2 minuman apa saja.",
    image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1000&auto=format&fit=crop",
    code: "WEEKENDTREAT"
  }
];

export default function PromoList() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray('.promo-coupon').forEach((coupon, i) => {
      gsap.from(coupon, {
        scrollTrigger: {
          trigger: coupon,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.1
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-20">
      {promos.map((promo) => {
        return (
          <div 
            key={promo.id} 
            className="promo-coupon flex flex-row items-stretch bg-white/70 backdrop-blur-md hover:bg-white/90 transition-all duration-700 group relative"
            style={{
              WebkitMaskImage: 'radial-gradient(circle at 0 10px, transparent 6px, black 7px), radial-gradient(circle at 100% 10px, transparent 6px, black 7px)',
              WebkitMaskSize: '51% 20px',
              WebkitMaskPosition: '0 0, 100% 0',
              WebkitMaskRepeat: 'repeat-y',
              maskImage: 'radial-gradient(circle at 0 10px, transparent 6px, black 7px), radial-gradient(circle at 100% 10px, transparent 6px, black 7px)',
              maskSize: '51% 20px',
              maskPosition: '0 0, 100% 0',
              maskRepeat: 'repeat-y'
            }}
          >
            {/* Left Image Section (The Ticket Stub) */}
            <div className="w-[35%] relative overflow-hidden flex-shrink-0">
              <Image 
                src={promo.image}
                alt={promo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700"></div>
            </div>

            {/* Dashed Tear Line */}
            <div className="w-0 border-l-[3px] border-dashed border-[#675E50]/20 relative z-20"></div>

            {/* Right Content Section */}
            <div className="w-[65%] p-3 md:p-5 flex flex-col justify-center">
              <h2 className="font-heading text-xl md:text-3xl text-text-primary leading-[1] mb-1 whitespace-pre-line lowercase">
                {promo.title}
              </h2>
              <h3 className="font-heading text-secondary text-xs md:text-sm mb-2 lowercase">
                {promo.subtitle}
              </h3>
              <p className="text-text-secondary text-[10px] md:text-xs leading-relaxed mb-3 line-clamp-2 md:line-clamp-2">
                {promo.desc}
              </p>
              
              <div className="inline-flex flex-wrap items-center gap-1 md:gap-2 bg-[#FAF8F5] border border-dashed border-secondary/50 px-2 py-1 md:px-3 md:py-2 rounded-lg self-start group-hover:bg-secondary/5 transition-colors duration-500">
                <span className="text-[9px] md:text-[10px] font-bold text-text-muted uppercase tracking-widest hidden sm:inline">CODE:</span>
                <span className="font-heading text-sm md:text-base text-secondary tracking-widest">{promo.code}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
