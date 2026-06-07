"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const promos = [
  {
    title: "Weekend Special: Buy 1 Get 1 Signature Coffee",
    tag: "promo",
    date: "jun 15, 2026",
    imageBg: "bg-gradient-to-br from-pink-200 to-orange-200",
  },
  {
    title: "New Pastry Arrival: Almond Croissant",
    tag: "new menu",
    date: "jun 10, 2026",
    imageBg: "bg-gradient-to-br from-yellow-200 to-green-200",
  },
  {
    title: "Student Discount: 20% Off Every Tuesday",
    tag: "discount",
    date: "ongoing",
    imageBg: "bg-gradient-to-br from-blue-200 to-purple-200",
  },
  {
    title: "Members Only: Free Refill on Sundays",
    tag: "loyalty",
    date: "every sunday",
    imageBg: "bg-gradient-to-br from-green-200 to-teal-200",
  },
];

export default function HomePromo() {
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    gsap.from(".promo-header", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    });

    gsap.from(".promo-card", {
      scrollTrigger: {
        trigger: ".promo-grid",
        start: "top 85%",
      },
      x: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  const onCardEnter = contextSafe((e) => {
    const card = e.currentTarget;
    const imagePlaceholder = card.querySelector(".promo-image");
    
    gsap.to(card, { y: -8, boxShadow: "0 12px 24px rgba(87,73,51,0.15)", duration: 0.3, ease: "power2.out" });
    gsap.to(imagePlaceholder, { scale: 1.05, duration: 0.4, ease: "power2.out" });
  });

  const onCardLeave = contextSafe((e) => {
    const card = e.currentTarget;
    const imagePlaceholder = card.querySelector(".promo-image");
    
    gsap.to(card, { y: 0, boxShadow: "0 1px 2px rgba(0,0,0,0.05)", duration: 0.3, ease: "power2.out" });
    gsap.to(imagePlaceholder, { scale: 1, duration: 0.4, ease: "power2.out" });
  });

  return (
    <section ref={containerRef} className="w-full pb-12 md:pb-16 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        <div className="promo-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="font-heading font-medium text-3xl md:text-4xl text-text-primary">
            latest promos
          </h2>
          <Link 
            href="/promo" 
            className="flex items-center gap-2 text-text-primary hover:text-primary transition-colors font-medium group"
          >
            view all promos <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="promo-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promos.map((promo, index) => (
            <div 
              key={index}
              onMouseEnter={onCardEnter}
              onMouseLeave={onCardLeave}
              className="promo-card cursor-pointer flex flex-col rounded-md p-6 md:p-8 border border-[#675E50] border-dashed bg-[#FFEBF7] group"
            >
              <h3 className="font-heading font-medium text-lg leading-tight text-text-primary mb-8 group-hover:text-primary transition-colors">
                {promo.title}
              </h3>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-[#FDF0B9] text-[#574933] text-[10px] font-semibold rounded-[6px] uppercase tracking-wider">
                  {promo.tag}
                </span>
                <span className="text-xs font-medium text-text-muted">
                  {promo.date}
                </span>
              </div>
              
              {/* Image Placeholder */}
              <div className="w-full h-48 md:h-30 rounded-md mt-auto overflow-hidden relative">
                <div className={`promo-image w-full h-full ${promo.imageBg}`}></div>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
