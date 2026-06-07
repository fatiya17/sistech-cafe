"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HomeAbout() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    gsap.from(".about-content", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });

    let split;
    if (textRef.current) {
      split = new SplitType(textRef.current, {
        types: 'lines, words, chars',
        tagName: 'span'
      });

      gsap.from(split.lines, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 0.3,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0.1,
      });
    }

    return () => {
      if (split) split.revert();
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-16 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="w-full md:w-1/2 about-content">
          <div className="relative w-full aspect-square md:w-100 overflow-hidden">
             <Image 
               src="/mascot/mascot-offering coffee-2.png" 
               alt="Sistech Cafe Story" 
               fill 
               className="object-contain"
             />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col items-start about-content">
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary font-medium mb-6">
            our story
          </h2>
          <p ref={textRef} className="text-text-body text-base md:text-md leading-relaxed mb-8 font-medium">
            Berawal dari kecintaan pada kopi dan komunitas, Sistech Cafe didirikan oleh perempuan-perempuan inspiratif. Kami menghadirkan ruang yang hangat, di mana setiap cangkir kopi diseduh dengan kasih sayang dan dedikasi.
          </p>
          <Link href="/about">
            <Button variant="outline" className="rounded-md border-border-strong text-text-primary hover:bg-primary-light hover:text-surface hover:border-transparent px-8 h-12 text-sm  transition-all">
              read more about us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
