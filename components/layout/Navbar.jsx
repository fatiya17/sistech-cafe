"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import NavSpeechBubble from "./NavSpeechBubble";
import { Menu, X, Moon, Sun } from "lucide-react";

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

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-colors duration-300 ${
          scrolled ? "bg-primary/65 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-14 md:h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
              <Image src="/assets/flower-polos-2.png" alt="Mascot Sistech Cafe" fill sizes="64px" className="object-contain" />
            </div>
            <span className={`font-heading font-medium text-xl md:text-xl ${scrolled ? "text-white" : "text-text-primary dark:text-white"}`}>
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
                    className={`text-sm font-medium transition-colors ${
                      scrolled ? "text-white hover:text-primary" : "text-text-primary dark:text-white hover:text-primary"
                    } ${isActive ? "text-primary dark:text-primary" : ""}`}
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
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                scrolled ? "text-white hover:bg-white/10" : "text-text-primary dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
              }`}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                scrolled ? "text-white" : "text-text-primary dark:text-white"
              }`}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-md ${
                scrolled ? "text-white" : "text-text-primary dark:text-white"
              }`}
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
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-secondary z-50 p-6 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-heading font-bold text-xl text-white">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/80 hover:text-white"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-medium p-3 rounded-md transition-colors ${
                        isActive ? "bg-primary text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
