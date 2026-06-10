"use client";

import { useState } from "react";
import { MenuSidebar } from "@/components/menu/MenuSidebar";
import { ProductGrid } from "@/components/menu/ProductGrid";
import Link from "next/link";
import { Filter, X } from "lucide-react";

export default function MenuPage() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="min-h-screen gradient-hero dark:bg-none pt-10 pb-20">
      <div className="container-site w-full px-4 md:px-8 relative">
        
        {/* Breadcrumbs & Mobile Filter Button */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-text-muted flex gap-2">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text-body font-medium">Menu</span>
          </div>

          <button 
            className="lg:hidden flex items-center gap-2 text-sm font-medium bg-surface px-3 py-1.5 rounded-md border border-border text-text-body hover:text-primary transition-colors"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-heading font-medium text-text-primary mb-10">
          Menu
        </h1>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Mobile Overlay & Sidebar */}
          <div className={`
            fixed inset-0 z-50 lg:static lg:z-auto lg:block lg:w-72 lg:flex-shrink-0 lg:max-w-none
            ${isMobileFilterOpen ? 'block' : 'hidden'}
          `}>
            {/* Backdrop for mobile */}
            <div 
              className="absolute inset-0 bg-black/50 lg:hidden"
              onClick={() => setIsMobileFilterOpen(false)}
            />
            
            {/* Sidebar content */}
            <div className="absolute top-0 right-0 bottom-0 w-10/12 max-w-sm bg-surface lg:bg-transparent overflow-y-auto p-6 lg:p-0 lg:static lg:w-full shadow-2xl lg:shadow-none transition-transform">
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h2 className="font-heading font-bold text-xl text-foreground">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)} className="text-text-muted hover:text-primary">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <MenuSidebar />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1 w-full">
            <ProductGrid />
          </div>
        </div>
        
      </div>
    </div>
  );
}
