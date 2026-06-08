"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutStory() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".story-element", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start story-element">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
            Our Roots
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-text-primary font-medium mb-6 leading-tight">
            Menumbuhkan rasa <br/> lewat secangkir <br/> inspirasi.
          </h2>
          <p className="text-text-body text-base md:text-md leading-relaxed font-medium mb-6">
            Berawal dari garasi kecil yang disulap menjadi ruang meracik mimpi, Sistech Cafe lahir dari tangan-tangan perempuan yang bersemangat mengombinasikan cita rasa lokal dengan kualitas kopi premium.
          </p>
          <p className="text-text-body text-base md:text-md leading-relaxed font-medium">
            Kami bukan sekadar kedai kopi. Kami adalah ruang di mana ide bertukar, pertemanan terjalin, dan momen kecil dirayakan bersama manisnya kue dan pahitnya kopi yang pas.
          </p>
        </div>

        {/* Right: Asymmetrical Images */}
        <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center story-element">
          {/* Main big image */}
          <div className="absolute right-0 top-0 w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-lg z-10 hover:z-30 transition-all duration-[1s] hover:-translate-y-4 hover:rotate-2 cursor-pointer group">
            <Image 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop"
              alt="Making Coffee"
              fill
              className="object-cover transition-transform duration-[1s] group-hover:scale-110"
            />
          </div>
          {/* Small overlapping image */}
          <div className="absolute left-0 bottom-0 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F3E9DC] z-20 hover:z-30 transition-all duration-[1s] hover:-translate-y-4 hover:-rotate-3 cursor-pointer group">
            <Image 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1934&auto=format&fit=crop"
              alt="Coffee beans"
              fill
              className="object-cover transition-transform duration-[1s] group-hover:scale-110"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
