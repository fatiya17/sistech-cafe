"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaXTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const containerRef = useRef(null);
  const btnRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    // Footer entry scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
      }
    });

    tl.from(".footer-item", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  const onBtnEnter = contextSafe(() => {
    gsap.to(btnRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  });

  const onBtnLeave = contextSafe(() => {
    gsap.to(btnRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
  });

  return (
    <footer ref={containerRef} className="w-full bg-secondary pt-10 md:pt-10 pb-6 md:pb-10 mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 mb-6 md:mb-8">
          
          {/* Left Column (40%) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <h2 className="footer-item font-heading text-3xl md:text-5xl leading-[1.1] text-white mb-8 tracking-tight">
              it's time<br />
              to experience<br />
              our coffee
            </h2>
            <div 
              className="footer-item inline-block"
              ref={btnRef}
              onMouseEnter={onBtnEnter}
              onMouseLeave={onBtnLeave}
            >
              <Button variant="primary" className="bg-primary-light text-secondary hover:bg-primary hover:text-white rounded-md px-8 h-12 md:h-14 text-base border-none">
                book a visit
              </Button>
            </div>
          </div>

          {/* Middle Column (35%) */}
          <div className="footer-item md:col-span-4 flex flex-col gap-8 text-white/90 font-medium text-sm md:pt-4">
            <div className="flex flex-col gap-1">
              <a href="mailto:hello@sistechcafe.com" className="hover:text-primary transition-colors">hello@sistechcafe.com</a>
              <a href="tel:+1234567890" className="hover:text-primary transition-colors">+123-456-7890</a>
            </div>
            
            <div className="flex flex-col gap-1">
              <p>123 coffee avenue,</p>
              <p>seattle, wa 98101</p>
            </div>
          </div>

          {/* Right Column (25%) */}
          <div className="footer-item md:col-span-3 flex flex-col gap-4 text-white md:pt-4">
            <h3 className="font-medium text-sm mb-2">join our coffee circle</h3>
            
            <div className="relative w-full mb-6 group">
              <input 
                type="email" 
                placeholder="enter email address" 
                className="w-full bg-white/10 border-none rounded-md px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all peer"
                suppressHydrationWarning
              />
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/20 hover:text-white transition-colors peer-focus:text-white group-hover:text-white/60"
                aria-label="Submit email"
                suppressHydrationWarning
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="p-2 -ml-2 rounded-full hover:bg-white/10 hover:text-primary hover:-translate-y-1 transition-all" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 hover:text-primary hover:-translate-y-1 transition-all" aria-label="X (Twitter)">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 hover:text-primary hover:-translate-y-1 transition-all" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 hover:text-primary hover:-translate-y-1 transition-all" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-item flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/20 border-dashed gap-4 text-center md:text-left">
          <p className="text-white/60 text-[12px] font-medium">
            © 2026 sistech cafe. all rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/60 text-[12px] font-medium">
            <span>designed for</span>
            <span className="text-white font-semibold hover:text-primary transition-colors cursor-pointer">sistech cafe</span>
            <span>, powered by</span>
            <span className="text-primary font-semibold transition-colors cursor-pointer">love</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
