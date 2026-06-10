"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

export default function ContactHero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-elem", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full relative z-10 mb-10 flex flex-col items-center text-center">
      <h1 className="hero-elem font-heading text-[3.5rem] md:text-[6rem] leading-[0.9] text-text-primary tracking-tight mb-4 lowercase">
        get in touch
      </h1>
      
      <p className="hero-elem text-text-body text-base md:text-md leading-relaxed font-medium max-w-[600px] mb-12">
        Punya pertanyaan soal biji kopi, mau ajak kolaborasi, atau sekadar pengen nyapa? Jangan sungkan. Kami siap seduh obrolan hangat bareng kamu.
      </p>
    </div>
  );
}
