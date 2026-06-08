"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Coffee, Heart, Users, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const values = [
  {
    title: "Artisanal Quality",
    description: "Hanya menggunakan biji kopi pilihan terbaik yang disangrai dengan presisi.",
    icon: Coffee,
    bg: "bg-[#F3E9DC] text-[#574933]",
    iconBg: "bg-[#EBC5DA]"
  },
  {
    title: "Made with Love",
    description: "Setiap hidangan disajikan dengan sentuhan personal dan penuh kehangatan.",
    icon: Heart,
    bg: "bg-primary-light text-secondary",
    iconBg: "bg-surface"
  },
  {
    title: "Community First",
    description: "Mendukung petani lokal dan menciptakan ruang aman bagi semua orang.",
    icon: Users,
    bg: "bg-secondary text-white",
    iconBg: "bg-primary-light"
  },
  {
    title: "Always Innovating",
    description: "Mengeksplorasi rasa baru untuk memberikan kejutan manis di tiap musim.",
    icon: Sparkles,
    bg: "bg-[#EBC5DA] text-secondary",
    iconBg: "bg-[#F3E9DC]"
  }
];

export default function AboutValues() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".value-wrapper", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-text-primary font-medium mb-12 text-center">
          our core values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="value-wrapper">
              <div 
                className={`group h-full relative flex flex-col justify-center p-10 rounded-2xl border-2 border-dashed border-[#675E50] overflow-hidden ${val.bg} hover:-translate-y-2 hover:shadow-xl transition-all duration-500 cursor-pointer`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${val.iconBg} group-hover:scale-110 transition-transform duration-500`}>
                  <val.icon className={`w-6 h-6 ${val.bg.includes('secondary') ? 'text-secondary' : 'text-[#574933]'} group-hover:rotate-12 transition-transform duration-500`} />
                </div>
              <h3 className="font-heading text-2xl font-bold mb-3">{val.title}</h3>
                <p className={`font-medium leading-relaxed opacity-90`}>
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
