"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const galleryData = [
  {
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1934&auto=format&fit=crop",
    alt: "Cafe space",
    text: "Cozy corners to spark your ideas.",
    classes: "col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    alt: "Cafe details",
    text: "Aesthetic spaces, warm light.",
    classes: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop",
    alt: "Coffee brewing",
    text: "Brewed with precision.",
    classes: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
    alt: "Cafe aesthetic",
    text: "Where good coffee meets great friends.",
    classes: "col-span-2 row-span-1"
  }
];

export default function AboutGallery() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".gallery-wrapper", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      scale: 0.9,
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-20 px-4 md:px-8 bg-transparent">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-text-primary font-medium mb-10 text-center">
          our spaces
        </h2>
        
        {/* Creative Masonry-like Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
          {galleryData.map((item, idx) => (
            <div key={idx} className={`gallery-wrapper h-full ${item.classes}`}>
              <div className={`group relative h-full w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer`}>
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 bg-[#EBC5DA]/80 backdrop-blur-md border-t border-[#EBC5DA]/40">
                  <p className="text-[#574933] font-bold text-sm md:text-base">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
