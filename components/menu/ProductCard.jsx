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
    <div className="flex flex-col gap-3 group cursor-pointer w-full">
      {/* Top Colored Box */}
      <div
        className={`menu-card relative w-full aspect-[4/5] rounded-md p-4 flex flex-col justify-between overflow-hidden border border-[#675E50] border-dashed ${bgColorClass}`}
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
        <div className="flex-1 relative flex items-center justify-center min-h-0 py-4 z-0">
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
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-2">
            <button
              className={`whitespace-nowrap w-full lg:w-auto flex-1 px-3 py-2 rounded-md text-xs sm:text-[13px] font-medium transition-colors text-center ${btnColorClass}`}
            >
              Add to cart
            </button>
            <div
              className={`whitespace-nowrap px-2.5 py-2 rounded-md text-xs sm:text-[13px] font-bold shadow-sm ${priceColorClass}`}
            >
              Rp. {price.toLocaleString('id-ID')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
