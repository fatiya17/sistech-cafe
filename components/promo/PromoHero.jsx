"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function PromoHero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".promo-hero-elem", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full relative z-10 mb-20 flex flex-col items-center text-center">
      <h1 className="promo-hero-elem font-heading text-[3.5rem] md:text-[6rem] leading-[0.8] text-text-primary tracking-tight mb-6 lowercase">
        sweet deals
      </h1>
      <p className="promo-hero-elem text-text-body text-base md:text-md leading-relaxed font-medium max-w-[600px]">
        Penawaran spesial yang sayang untuk dilewatkan. Nikmati secangkir kebahagiaan dengan harga yang lebih manis.
      </p>
    </div>
  );
}
