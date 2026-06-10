"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef(null);
  const btnRef = useRef(null);
  const mascotRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    const tl = gsap.timeline();
    
    // Staggered entry animation
    tl.from(".hero-item", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.1
    });
    
    // Scale animation for mascot and badge
    tl.from(".hero-scale", {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.5)",
      stagger: 0.2
    }, "-=0.6");
    
    // Scroll indicator animation
    gsap.to(".scroll-line", {
      yPercent: 300,
      repeat: -1,
      duration: 1.5,
      ease: "linear"
    });

  }, { scope: containerRef });

  const onBtnEnter = contextSafe(() => {
    gsap.to(btnRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out", y: -2 });
  });
  
  const onBtnLeave = contextSafe(() => {
    gsap.to(btnRef.current, { scale: 1, duration: 0.3, ease: "power2.out", y: 0 });
  });

  const onMascotEnter = contextSafe(() => {
    gsap.to(mascotRef.current, { rotate: 5, scale: 1.05, duration: 0.4, ease: "back.out(1.5)" });
  });

  const onMascotLeave = contextSafe(() => {
    gsap.to(mascotRef.current, { rotate: 0, scale: 1, duration: 0.4, ease: "power2.out" });
  });

  return (
    <section ref={containerRef} className="relative w-full min-h-[85vh] flex flex-col justify-center items-center py-12 px-4 overflow-hidden bg-transparent">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="flex flex-col w-full">
          {/* Row 1: "brewed [mascot] with" */}
          <div className="flex flex-wrap items-center justify-start gap-x-3 md:gap-x-6 gap-y-2 mb-2 md:mb-0">
            <h1 className="hero-item font-heading text-[3.5rem] md:text-[6rem] leading-[0.9] text-text-primary tracking-tight">
              brewed
            </h1>
            <div 
              className="hero-scale relative w-[6rem] h-[6rem] md:w-[7.5rem] md:h-[7.5rem] z-10 mx-1 md:mx-2 cursor-pointer flex items-center justify-center"
              ref={mascotRef}
              onMouseEnter={onMascotEnter}
              onMouseLeave={onMascotLeave}
            >
              {/* Mascot image inline */}
              <div className="w-full h-full relative">
                 <Image 
                   src="/mascot/coffee-1.png" 
                   alt="Sistech Coffee" 
                   fill 
                   className="object-contain w-full h-full" 
                   priority
                 />
              </div>
            </div>
            <h1 className="hero-item font-heading text-[3.5rem] md:text-[6rem] leading-[0.9] text-text-primary tracking-tight">
              with
            </h1>
          </div>

          {/* Row 2: Paragraph and "kasih &" */}
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between w-full mt-6 md:mt-2 mb-6 md:mb-2 relative">
            {/* Paragraph (Sub-headline) */}
            <div className="hero-item w-full md:w-[550px] mt-6 md:mt-0 md:pl-[15%]">
              <p className="text-text-black text-base md:text-md leading-relaxed font-medium">
                Menyajikan kopi artisanal dengan sentuhan kehangatan rumah. Tempat di mana setiap tegukan bercerita, memadukan cita rasa lokal dengan <i>modern comfort</i> untuk menemani harimu.
              </p>
            </div>
            
            {/* "kasih &" text */}
            <div className="hero-item flex flex-wrap items-center md:justify-end gap-x-3 w-full md:w-auto">
              <h1 className="font-heading text-[3.5rem] md:text-[6rem] leading-[0.9] text-text-primary tracking-tight">
                kasih &
              </h1>
            </div>
          </div>

          {/* Row 3: "passi[badge]n" and Button */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full mt-2 md:mt-4 gap-8 md:gap-4 relative">
            <div className="flex items-center gap-x-1 md:gap-x-2">
              <h1 className="hero-item font-heading text-[3.5rem] md:text-[6rem] leading-[0.9] text-text-primary tracking-tight">
                passi
              </h1>
              {/* Badge "o" replacing the letter */}
              <div className="hero-scale flex items-center justify-center mx-1 md:mx-2">
                <div className="flex flex-col items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-[333px] bg-surface border border-dashed border-border">
                  <span className="text-[9px] md:text-[11px] font-bold text-secondary leading-none mb-0.5 md:mb-1">since</span>
                  <span className="text-[11px] md:text-[13px] font-bold text-primary leading-none">2026</span>
                </div>
              </div>
              <h1 className="hero-item font-heading text-[3.5rem] md:text-[6rem] leading-[0.9] text-text-primary tracking-tight">
                n
              </h1>
            </div>

            {/* CTA Button */}
            <div className="hero-item w-full md:w-auto md:pr-[5%] pb-2 md:pb-4">
              <div 
                ref={btnRef} 
                onMouseEnter={onBtnEnter} 
                onMouseLeave={onBtnLeave}
                className="inline-block"
              >
                <Link href="/menu">
                  <Button variant="primary" size="lg" className="w-full md:w-auto text-base md:text-md h-14 px-8 rounded-md border-none">
                    explore menu
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="hero-item absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] md:text-xs font-bold text-text-muted uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-10 md:h-16 bg-border-strong overflow-hidden relative rounded-md">
          <div className="scroll-line w-full h-1/2 bg-secondary absolute top-[-50%] left-0" />
        </div>
      </div>
    </section>
  );
}
