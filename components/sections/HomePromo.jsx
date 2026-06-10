"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PromoList from "@/components/promo/PromoList";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full pb-12 md:pb-16 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="container-site">
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
        
        <PromoList />
      </div>
    </section>
  );
}
