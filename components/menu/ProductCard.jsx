"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

export function ProductCard({
  title,
  price,
  image,
  imageScale = "scale-100",
  bgColorClass = "bg-[#F3E9DC]",
  isHit = false,
  btnColorClass = "bg-secondary-light text-surface hover:bg-primary hover:text-white", 
  priceColorClass = "bg-transparent text-secondary border border-secondary",
  onMouseEnter,
  onMouseLeave,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex flex-col gap-3 group cursor-pointer w-full h-full">
      {/* Top Colored Box */}
      <div
        className={`menu-card relative w-full h-full rounded-md p-4 flex flex-col justify-between overflow-hidden border border-[#675E50] border-dashed ${bgColorClass}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Top Badges / Icons */}
        <div className="flex justify-between items-start z-10">
          {isHit ? (
            <div className="px-3 py-1 bg-yellow-light text-secondary text-[10px] font-semibold rounded-[6px] uppercase rotate-[-6deg] shadow-sm">
              Hit
            </div>
          ) : (
            <div></div> // Spacer
          )}
          <button 
            className={`transition-colors ${isFavorite ? "text-primary" : "text-text-body hover:text-primary"}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Product Image */}
        <div className="w-full aspect-square relative flex items-center justify-center py-2 z-0 flex-shrink-0">
          {/* Using a placeholder div if no image, otherwise Image */}
          {image ? (
            <div className={`relative w-full h-full transition-transform ${imageScale}`}>
              <Image src={image} alt={title} fill className="object-contain" />
            </div>
          ) : (
            <div className="w-24 h-24 bg-secondary/10 rounded-full blur-xl" /> // Fallback placeholder
          )}
        </div>

          {/* Title & Bottom Bar Container */}
        <div className="flex flex-col gap-3 z-10 relative mt-auto">
          {/* Product Title */}
          <h4 className="text-sm font-medium text-foreground leading-snug px-1 line-clamp-2">
            {title}
          </h4>

          {/* Bottom Bar: Cart Button & Price */}
          <div className="flex flex-col gap-2 mt-2">
            <button
              className={`w-full px-3 py-2.5 rounded-md text-xs sm:text-[13px] font-medium transition-colors text-center ${btnColorClass}`}
            >
              Add to cart
            </button>
            <div
              className={`w-full px-2.5 py-2.5 rounded-md text-xs sm:text-[13px] font-bold shadow-sm text-center ${priceColorClass}`}
            >
              Rp. {price.toLocaleString('id-ID')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
