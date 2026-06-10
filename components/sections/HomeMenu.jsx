"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProductCard } from "@/components/menu/ProductCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const featuredItems = [
  {
    id: 1,
    title: "Kopi Susu Gula Aren",
    price: 25000,
    bgColorClass: "bg-background",
    isHit: true,
    image: "/assets/kopi gula aren.png",
    imageScale: "scale-110",
  },
  {
    id: 2,
    title: "Matcha Latte",
    price: 28000,
    bgColorClass: "bg-primary-light",
    isHit: true,
    image: "/assets/matcha latte.png",
    imageScale: "scale-110",
  },
  {
    id: 9,
    title: "Croffle Classic",
    price: 22000,
    bgColorClass: "bg-background",
    isHit: true,
    image: "/assets/Croffle Classic.png",
  },
];

export default function HomeMenu() {
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    // Scroll animation for cards
    gsap.from(".menu-wrapper", {
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
      <div className="container-site">
        <h2 className="menu-wrapper font-heading font-medium text-3xl md:text-4xl text-text-primary text-center mb-20">
          featured menu
        </h2>
        
        {/* Adjusted the gap to gap-3 md:gap-4 so the cards have more room inside max-w-container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 gap-y-10">
          {featuredItems.map((product) => (
            <div key={product.id} className="menu-wrapper w-full h-full">
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.image}
                imageScale={product.imageScale}
                bgColorClass={product.bgColorClass}
                isHit={product.isHit}
                onMouseEnter={onCardEnter}
                onMouseLeave={onCardLeave}
              />
            </div>
          ))}

          {/* Dark CTA Card */}
          <div className="menu-wrapper w-full h-full">
            <div 
              onMouseEnter={onCardEnter}
              onMouseLeave={onCardLeave}
              className="menu-card relative w-full aspect-auto min-h-[180px] sm:min-h-0 sm:aspect-[4/5] rounded-md p-5 flex flex-col justify-between bg-secondary border border-secondary"
            >
              <div className="flex -space-x-2 mb-auto pointer-events-none">
                <div className="w-4 h-4 rounded-full bg-primary-light"></div>
                <div className="w-4 h-4 rounded-full bg-pastel-yellow"></div>
                <div className="w-4 h-4 rounded-full bg-pastel-blue"></div>
              </div>
              
              <h3 className="font-heading font-semibold text-lg xl:text-xl leading-tight text-white mb-6 pointer-events-none">
                craving for more?
              </h3>
              
              <Link href="/menu" className="mt-auto w-full">
                <Button variant="primary" className="bg-primary-light text-secondary hover:bg-primary hover:text-white rounded-md px-3 xl:px-6 h-12 text-sm xl:text-base w-full pointer-events-auto border-none">
                  view full menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
