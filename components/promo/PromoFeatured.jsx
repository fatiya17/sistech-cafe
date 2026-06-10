"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PromoFeatured() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".promo-feat-elem", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full relative z-10 mb-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 relative">
        
        {/* Left: Huge typography overlapping the image */}
        <div className="promo-feat-elem w-full md:w-1/2 z-20 md:-mr-20 relative">
          <div className="bg-[#FAF8F5]/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border-2 border-dashed border-[#675E50]/30 shadow-xl">
            <span className="inline-block px-4 py-1 bg-yellow-light text-secondary rounded-[6px] border border-[#675E50]/30 text-sm tracking-widest uppercase mb-6">
              Deal of the Month
            </span>
            <h2 className="font-heading text-5xl md:text-7xl font-medium text-text-primary leading-[0.9] mb-4 lowercase">
              buy 1<br/>get 1
            </h2>
            <h3 className="font-heading text-2xl text-secondary mb-6 lowercase">signature latte</h3>
            <p className="text-text-secondary text-md mb-8 max-w-md leading-relaxed">
              Bawa temanmu dan nikmati promo Buy 1 Get 1 untuk semua varian Signature Latte kami. Hanya berlaku setiap hari Senin sepanjang bulan ini!
            </p>
            <Button variant="secondary" className="h-14 px-8 rounded-md shadow-md hover:-translate-y-1 transition-all lowercase text-base border-none">
              claim offer
            </Button>
          </div>
        </div>

        {/* Right: Custom shape image */}
        <div className="promo-feat-elem w-full md:w-[60%] h-[400px] md:h-[600px] relative z-10">
          <div className="absolute inset-0 rounded-[18px] overflow-hidden border-4 border-white shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-700">
            <Image 
              src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=2000&auto=format&fit=crop"
              alt="Promo Coffee"
              fill
              className="object-cover hover:scale-105 transition-transform duration-[2s]"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
