"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const menuItems = [
  {
    title: "signature coffee",
    tags: ["espresso", "latte", "cappuccino"],
    bgClass: "bg-[#F3E9DC]",
    iconColor: "bg-orange-200",
  },
  {
    title: "artisanal tea",
    tags: ["matcha", "earl grey", "chamomile"],
    bgClass: "bg-[#F3E9DC]",
    iconColor: "bg-green-200",
  },
  {
    title: "fresh pastries",
    tags: ["croissant", "muffin", "danish"],
    bgClass: "bg-[#F3E9DC]",
    iconColor: "bg-yellow-200",
  },
  {
    title: "heavy bites",
    tags: ["pasta", "sandwich", "toast"],
    bgClass: "bg-[#F3E9DC]",
    iconColor: "bg-red-200",
  },
  {
    title: "seasonal specials",
    tags: ["limited time", "summer blend"],
    bgClass: "bg-[#F3E9DC]",
    iconColor: "bg-blue-200",
  },
];

export default function HomeMenu() {
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    // Scroll animation for cards
    gsap.from(".menu-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  const onCardEnter = contextSafe((e) => {
    gsap.to(e.currentTarget, { 
      y: -8, 
      scale: 1.02, 
      duration: 0.3, 
      ease: "power2.out", 
      boxShadow: "0 12px 24px rgba(87,73,51,0.15)",
    });
  });

  const onCardLeave = contextSafe((e) => {
    gsap.to(e.currentTarget, { 
      y: 0, 
      scale: 1, 
      duration: 0.3, 
      ease: "power2.out", 
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    });
  });

  return (
    <section ref={containerRef} className="w-full py-12 md:py-16 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="menu-card font-heading font-medium text-3xl md:text-4xl text-text-primary text-center mb-20">
          featured menu
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              onMouseEnter={onCardEnter}
              onMouseLeave={onCardLeave}
              className="menu-card cursor-pointer relative flex flex-col h-[320px] rounded-md p-8 border border-[#675E50] border-dashed bg-transparent"
            >
              {/* Decorative "Icon" area */}
              <div className="flex -space-x-4 mb-auto pointer-events-none">
                <div className={`w-16 h-16 rounded-md ${item.iconColor} shadow-sm rotate-[-6deg]`}></div>
                <div className={`w-16 h-16 rounded-md bg-white shadow-sm rotate-[6deg]`}></div>
              </div>
              
              <h3 className="font-heading font-medium text-xl text-text-primary mb-6 pointer-events-none">
                {item.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mt-auto pointer-events-none">
                {item.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-[#FFF5D4] text-[#574933] text-[12px] font-semibold rounded-[6px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Dark CTA Card */}
          <div 
            onMouseEnter={onCardEnter}
            onMouseLeave={onCardLeave}
            className="menu-card relative flex flex-col h-[320px] rounded-md p-8 bg-secondary border border-secondary"
          >
            <div className="flex -space-x-2 mb-auto pointer-events-none">
              <div className="w-4 h-4 rounded-full bg-primary-light"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-300"></div>
              <div className="w-4 h-4 rounded-full bg-blue-300"></div>
            </div>
            
            <h3 className="font-heading font-semibold text-xl leading-tight text-white mb-8 pointer-events-none">
              craving for more?
            </h3>
            
            <Link href="/menu" className="mt-auto">
              <Button variant="primary" className="bg-primary-light text-secondary hover:bg-primary hover:text-white rounded-md px-6 h-12 text-base w-max pointer-events-auto border-none">
                view full menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
