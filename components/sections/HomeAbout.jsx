"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HomeAbout() {
  const containerRef = useRef(null);
  const btnRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    gsap.from(".bento-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  const onBtnEnter = contextSafe(() => {
    gsap.to(btnRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out", y: -2 });
  });
  
  const onBtnLeave = contextSafe(() => {
    gsap.to(btnRef.current, { scale: 1, duration: 0.3, ease: "power2.out", y: 0 });
  });

  return (
    <section ref={containerRef} className="w-full py-12 md:py-20 px-6 md:px-12 overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Main Text Block - Spans 2 columns */}
          <div className="bento-item md:col-span-2 bg-yellow-light dark:bg-white/5 rounded-md p-8 md:p-12 flex flex-col justify-center">
            <h2 className="font-heading text-3xl md:text-4xl text-black dark:text-white font-medium mb-6">
              our story
            </h2>
            <p className="text-black/80 dark:text-white/80 text-base md:text-md leading-relaxed mb-8">
              Berawal dari kecintaan pada kopi dan komunitas, Sistech Cafe didirikan oleh perempuan-perempuan inspiratif. Kami menghadirkan ruang yang hangat, di mana setiap cangkir kopi diseduh dengan kasih sayang dan dedikasi penuh.
            </p>
            <div>
              <div 
                ref={btnRef} 
                onMouseEnter={onBtnEnter} 
                onMouseLeave={onBtnLeave}
                className="inline-block"
              >
                <Link href="/about">
                  <Button className="rounded-md bg-primary text-white hover:bg-primary-dark px-8 h-12 text-md transition-all shadow-md hover:shadow-lg">
                    read more about us
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Tall Image Block - Spans 1 column, 2 rows */}
          <div className="bento-item md:col-span-1 md:row-span-2 relative rounded-md overflow-hidden min-h-[350px] md:min-h-full group">
            <Image 
              src="/assets/aesthetic_coffee.png" 
              alt="Sistech Signature Coffee" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="font-heading text-3xl font-bold mb-2">100% Arabica</p>
              <p className="text-base opacity-90 leading-snug">Sourced directly from local farmers to your cup.</p>
            </div>
          </div>

          {/* Small Box 1 - Est 2024 */}
          <div className="bento-item bg-primary-muted dark:bg-primary/20 rounded-md p-8 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-40 h-40 opacity-30 group-hover:rotate-180 transition-transform duration-1000 ease-in-out">
              <Image width="100" height="100" src="/assets/flower-polos-3.png" alt="Flower pattern" className="object-contain" />
            </div>
            <div className="absolute -left-8 -bottom-8 w-32 h-32 opacity-20 group-hover:-rotate-90 transition-transform duration-1000 ease-in-out">
              <Image width="150" height="150" src="/assets/flower-polos-1.png" alt="Flower pattern" className="object-contain" />
            </div>
            <h3 className="font-heading text-3xl md:text-4xl text-black dark:text-white font-bold text-center z-10">Est. 2026</h3>
            <p className="text-black/70 dark:text-white/70 text-center mt-2 z-10 font-medium">A space for everyone</p>
          </div>

          {/* Small Box 2 - Quote */}
          <div className="bento-item bg-primary text-black rounded-md p-8 flex flex-col justify-between shadow-lg">
            <p className="text-yellow-light dark:text-white/80 font-medium text-base md:text-md leading-snug">
              &quot;Lebih dari sekadar kafe, ini adalah rumah keduamu.&quot;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image width="46" height="46" src="/assets/flower-polos-1.png" alt="Sistech Team" />
              </div>
              <span className="text-white/89 font-medium text-base">Sistech Team</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
