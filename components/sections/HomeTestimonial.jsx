"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HomeTestimonial() {
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      scaleX: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  const onCardEnter = contextSafe((e) => {
    gsap.to(e.currentTarget, { scale: 1.01, boxShadow: "0 10px 20px rgba(87,73,51,0.08)", duration: 0.3, ease: "power2.out" });
  });

  const onCardLeave = contextSafe((e) => {
    gsap.to(e.currentTarget, { scale: 1, boxShadow: "0 1px 2px rgba(0,0,0,0.05)", duration: 0.3, ease: "power2.out" });
  });

  return (
    <section ref={containerRef} className="w-full px-6 md:px-12 bg-transparent mb-12">
      <div className="max-w-[1000px] mx-auto overflow-hidden p-2">
        <div 
          className="testimonial-card w-full bg-surface rounded-md p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-8 border border-border border-dashed"
          onMouseEnter={onCardEnter}
          onMouseLeave={onCardLeave}
        >
          {/* Left: Rating */}
          <div className="flex items-center gap-4">
            <span className="font-heading font-semibold text-3xl md:text-4xl text-text-primary">
              4.9<span className="text-lg md:text-xl text-text-muted font-medium">/5</span>
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex text-orange-500 text-base">
                ★★★★★
              </div>
              <span className="text-[12px] font-medium text-text-muted">trusted by coffee lovers</span>
            </div>
          </div>
          
          {/* Right: Testimonial Snippet */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-14 relative bg-primary-light rounded-md overflow-hidden shrink-0">
               {/* Placeholder for image, using mascot image for now */}
               <Image 
                src="/mascot/mascot-fullbody1.png" 
                alt="Happy customer" 
                fill 
                className="object-cover opacity-80 mix-blend-multiply"
              />
            </div>
            <p className="text-xs md:text-sm font-medium text-text-primary leading-tight max-w-[200px]">
              1000+ cups served with love to our community.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
