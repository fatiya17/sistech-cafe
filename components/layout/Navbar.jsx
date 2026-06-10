"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import NavSpeechBubble from "./NavSpeechBubble";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { path: "/", label: "Home", title: "Halaman Utama", description: "Kembali ke awal" },
  { path: "/menu", label: "Menu", title: "Menu Kami", description: "Kopi · Non-Kopi · Makanan · Snacks" },
  { path: "/about", label: "About", title: "Tentang Kami", description: "Cerita di balik setiap cup" },
  { path: "/contact", label: "Contact", title: "Hubungi Kami", description: "Lokasi · Jam Buka · Form" },
  { path: "/promo", label: "Promo", title: "Promo Terkini", description: "Penawaran spesial minggu ini" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [theme, setTheme] = useState("light");

  const btnRef = useRef(null);
  const { contextSafe } = useGSAP();

  const onBtnEnter = contextSafe(() => {
    if(btnRef.current) gsap.to(btnRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  });

  const onBtnLeave = contextSafe(() => {
    if(btnRef.current) gsap.to(btnRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initial theme check
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-colors duration-300 ${
          scrolled ? "bg-background/65 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-14 md:h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
              <Image src="/assets/flower-polos-2.png" alt="Mascot Sistech Cafe" fill sizes="64px" className="object-contain" />
            </div>
            <span className="font-heading font-medium text-xl md:text-xl text-text-primary dark:text-white">
              sistech cafe
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <div
                  key={link.path}
                  className="relative flex items-center justify-center h-16"
                  onMouseEnter={() => setHoveredLink(link.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    href={link.path}
                    className={`text-sm font-medium transition-colors text-text-primary dark:text-white hover:text-primary ${isActive ? "text-primary dark:text-primary" : ""}`}
                  >
                    {link.label}
                  </Link>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-4 left-0 right-0 h-[2px] bg-primary rounded-full"
                    />
                  )}

                  {/* Hover Speech Bubble */}
                  <NavSpeechBubble
                    isVisible={hoveredLink === link.path}
                    title={link.title}
                    description={link.description}
                  />
                </div>
              );
            })}
            
            {/* Auth Buttons */}
            <div 
              className="flex items-center gap-3 ml-2"
              ref={btnRef}
              onMouseEnter={onBtnEnter}
              onMouseLeave={onBtnLeave}
            >
              <Link href="/register">
                <Button variant="secondary" className="px-5 py-2 rounded-md font-medium text-sm shadow-sm h-10 border-none">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-md text-text-primary dark:text-white"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 md:hidden"
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-md z-50 p-4 pb-6 md:hidden flex flex-col shadow-lg border-b border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading font-bold text-xl text-text-primary dark:text-white ml-2">sistech cafe</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-text-primary dark:text-white hover:opacity-70"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-medium p-3 rounded-md transition-colors ${
                        isActive ? "bg-primary text-white" : "text-text-primary dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="h-px w-full bg-border my-2" />
                
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium p-3 rounded-md transition-colors bg-primary text-white hover:bg-primary/90 text-center mt-1"
                >
                  Sign Up
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
