"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutHero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".hero-text", {
      y: 60,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power3.out",
    });

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
      yPercent: 20,
      scale: 1.05,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-[60vh] flex flex-col items-center pt-24 pb-12 px-4 overflow-hidden bg-transparent">
      <div className="max-w-[1000px] mx-auto w-full relative z-10 flex flex-col items-center text-center">
        <h1 className="hero-text font-heading text-[3.5rem] md:text-[6rem] leading-[0.9] text-text-primary tracking-tight mb-4">
          more than<br />just coffee
        </h1>
        <p className="hero-text text-text-body text-base md:text-md leading-relaxed font-medium max-w-[600px] mb-12">
          Kami percaya bahwa setiap cangkir kopi memiliki cerita, dan setiap cerita layak untuk dibagikan dalam kehangatan.
        </p>
      </div>
      
      <div className="hero-text relative w-full max-w-[1200px] h-[400px] md:h-[600px] mx-auto rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
        <Image
          ref={imageRef}
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
          alt="Sistech Cafe Interior"
          fill
          className="object-cover origin-bottom transition-transform duration-[1.5s] group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-[1.5s] group-hover:bg-black/0" />
      </div>
    </section>
  );
}
