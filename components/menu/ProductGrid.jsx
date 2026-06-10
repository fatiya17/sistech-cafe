"use client";

import { useRef } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "./ProductCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const mockProducts = [
  {
    id: 1,
    title: "Kopi Susu Gula Aren",
    price: 25000,
    bgColorClass: "bg-[#F3E9DC]",
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
    id: 3,
    title: "Taro Latte",
    price: 25000,
    bgColorClass: "bg-yellow-light",
    isHit: false,
    image: "/assets/Taro Latte.png",
    imageScale: "scale-110",
  },
  {
    id: 4,
    title: "Pisang Keju (Pisuke)",
    price: 18000,
    bgColorClass: "bg-[#F3E9DC]",
    isHit: true,
    image: "/assets/Pisang Keju (Pisuke).png",
    imageScale: "scale-100",
  },
  {
    id: 5,
    title: "Red Velvet Cake",
    price: 35000,
    bgColorClass: "bg-primary-light",
    isHit: false,
    image: "/assets/Red Velvet Cake.png",
  },
  {
    id: 6,
    title: "Nasi Goreng Spesial",
    price: 30000,
    bgColorClass: "bg-[#F3E9DC]",
    isHit: true,
    image: "/assets/Nasi Goreng Spesial.png",
  },
  {
    id: 7,
    title: "Cireng Bumbu Rujak",
    price: 15000,
    bgColorClass: "bg-primary-light",
    isHit: false,
    image: "/assets/Cireng Bumbu Rujak.png",
  },
  {
    id: 8,
    title: "Mie Goreng Jawa",
    price: 28000,
    bgColorClass: "bg-yellow-light",
    isHit: false,
    image: "/assets/Mie Goreng Jawa.png",
  },
  {
    id: 9,
    title: "Croffle Classic",
    price: 22000,
    bgColorClass: "bg-[#F3E9DC]",
    isHit: true,
    image: "/assets/Croffle Classic.png",
  },
  {
    id: 10,
    title: "Piscok Lumer",
    price: 15000,
    bgColorClass: "bg-primary-light",
    isHit: false,
    image: "/assets/pisang lumer.png",
  },
  {
    id: 11,
    title: "Kentang Goreng",
    price: 18000,
    bgColorClass: "bg-yellow-light",
    isHit: false,
    image: "/assets/Kentang Goreng.png",
  },
  {
    id: 12,
    title: "Americano",
    price: 20000,
    bgColorClass: "bg-[#F3E9DC]",
    isHit: false,
    image: "/assets/Americano.png",
  }
];

export function ProductGrid() {
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
    <div ref={containerRef} className="flex-1 flex flex-col gap-6">
      {/* Search Bar */}
      <form onSubmit={(e) => e.preventDefault()} className="flex gap-4">
        <div className="relative flex-1">
          <input
            type="search"
            placeholder="Search menu..."
            className="w-full h-12 pl-6 pr-4 rounded-md border-2 border-border bg-surface text-text-body focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <button type="submit" className="hidden md:block h-12 px-8 rounded-md bg-primary text-white font-medium hover:opacity-90 transition-colors">
          Search
        </button>
      </form>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            imageScale={product.imageScale}
            bgColorClass={product.bgColorClass}
            isHit={product.isHit}
            onMouseEnter={onCardEnter}
            onMouseLeave={onCardLeave}
          />
        ))}
      </div>
    </div>
  );
}
