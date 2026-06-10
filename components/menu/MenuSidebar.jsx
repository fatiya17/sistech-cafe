"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Drinks",
    open: true,
    items: [
      "Coffee",
      "Non-Coffee",
      "Tea",
      "Mocktail",
      "Frappe",
      "Juice"
    ],
  },
  {
    name: "Main Course",
    open: false,
    items: ["Rice", "Noodles", "Pasta", "Western"],
  },
  {
    name: "Snacks",
    open: false,
    items: ["Traditional", "Fries", "Toast", "Platter"],
  },
  {
    name: "Desserts",
    open: false,
    items: ["Cake", "Croffle", "Waffle", "Ice Cream", "Pudding"],
  }
];

const brands = [
  "House Blend",
  "Single Origin",
  "Local",
  "Imported",
];

const origins = [
  "Indonesia",
  "Ethiopia",
  "Colombia",
  "Brazil"
];

const tastes = [
  "Sweet",
  "Savory",
  "Spicy",
  "Bitter",
  "Fruity",
  "Creamy",
  "Umami"
];

export function MenuSidebar() {
  const [activeCategory, setActiveCategory] = useState("Sweet");
  const [activeSubCategory, setActiveSubCategory] = useState("");
  
  // Filter Dropdown States
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isOriginOpen, setIsOriginOpen] = useState(true);
  const [isTasteOpen, setIsTasteOpen] = useState(true);

  // Selected Filter States
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedTaste, setSelectedTaste] = useState("");
  const [minPrice, setMinPrice] = useState("10000");
  const [maxPrice, setMaxPrice] = useState("50000");

  const handleReset = () => {
    setSelectedBrand("");
    setSelectedOrigin("");
    setSelectedTaste("");
    setActiveSubCategory("");
    setMinPrice("10000");
    setMaxPrice("50000");
  };

  return (
    <aside className="w-full flex-shrink-0 flex flex-col gap-8">
      {/* Categories Section */}
      <div>
        <h3 className="text-xl font-heading font-bold text-foreground mb-4 h-12 flex items-center">
          Categories
        </h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col gap-1">
              <button
                onClick={() => setActiveCategory(activeCategory === cat.name ? "" : cat.name)}
                className={`flex items-center justify-between w-full px-4 py-2 rounded-md border transition-colors ${
                  activeCategory === cat.name
                    ? "bg-primary-light border-primary text-secondary font-semibold"
                    : "bg-surface border-border hover:border-primary/50 text-text-body"
                }`}
              >
                <span className="font-medium text-sm">{cat.name}</span>
                {activeCategory === cat.name ? (
                  <ChevronUp className="w-4 h-4 text-primary" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-text-muted" />
                )}
              </button>
              
              {/* Dropdown Items */}
              {activeCategory === cat.name && (
                <div className="flex flex-col gap-2 pl-6 pr-4 py-2">
                  {cat.items.map((item) => (
                    <button
                      key={item}
                      onClick={() => setActiveSubCategory(item)}
                      className={`text-left text-sm transition-colors py-0.5 ${
                        activeSubCategory === item ? "text-primary font-semibold" : "text-text-body hover:text-primary"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Filters Section */}
      <div>
        <h3 className="text-xl font-heading font-bold text-foreground mb-4">
          Filters
        </h3>
        <div className="flex flex-col gap-6 bg-surface p-5 rounded-3xl border border-border">
          {/* Price */}
          <div>
            <p className="text-sm font-medium text-foreground mb-3">Price (Rp)</p>
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full min-w-0 flex-1 px-3 py-1.5 border border-border rounded-md text-center text-sm text-text-body focus:outline-none focus:border-primary"
                placeholder="Min"
              />
              <span className="text-border-strong">-</span>
              <input 
                type="number" 
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full min-w-0 flex-1 px-3 py-1.5 border border-border rounded-md text-center text-sm text-text-body focus:outline-none focus:border-primary"
                placeholder="Max"
              />
            </div>
          </div>

          <hr className="border-border" />

          {/* Brands */}
          <div>
            <button 
              className="flex items-center justify-between w-full mb-3"
              onClick={() => setIsBrandOpen(!isBrandOpen)}
            >
              <p className="text-sm font-medium text-foreground">Brand</p>
              {isBrandOpen ? <ChevronUp className="w-4 h-4 text-text-muted" /> : <ChevronDown className="w-4 h-4 text-text-muted" />}
            </button>
            {isBrandOpen && (
              <div className="flex flex-col gap-2">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="brand" 
                      value={brand}
                      checked={selectedBrand === brand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="hidden" 
                    />
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      selectedBrand === brand ? "border-primary bg-primary" : "border-border group-hover:border-primary"
                    }`}>
                      {selectedBrand === brand && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                    </div>
                    <span className={`text-sm ${selectedBrand === brand ? "text-primary font-medium" : "text-text-body"}`}>
                      {brand}
                    </span>
                  </label>
                ))}
                <button className="text-left text-xs text-text-muted hover:text-primary mt-1">More</button>
              </div>
            )}
          </div>

          <hr className="border-border" />

          {/* Origins */}
          <div>
            <button 
              className="flex items-center justify-between w-full mb-3"
              onClick={() => setIsOriginOpen(!isOriginOpen)}
            >
              <p className="text-sm font-medium text-foreground">Origin</p>
              {isOriginOpen ? <ChevronUp className="w-4 h-4 text-text-muted" /> : <ChevronDown className="w-4 h-4 text-text-muted" />}
            </button>
            {isOriginOpen && (
              <div className="flex flex-col gap-2">
                {origins.map((origin) => (
                  <label key={origin} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="origin" 
                      value={origin}
                      checked={selectedOrigin === origin}
                      onChange={(e) => setSelectedOrigin(e.target.value)}
                      className="hidden" 
                    />
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      selectedOrigin === origin ? "border-primary bg-primary" : "border-border group-hover:border-primary"
                    }`}>
                      {selectedOrigin === origin && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                    </div>
                    <span className={`text-sm ${selectedOrigin === origin ? "text-primary font-medium" : "text-text-body"}`}>
                      {origin}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <hr className="border-border" />

          {/* Tastes */}
          <div>
            <button 
              className="flex items-center justify-between w-full mb-3"
              onClick={() => setIsTasteOpen(!isTasteOpen)}
            >
              <p className="text-sm font-medium text-foreground">Taste</p>
              {isTasteOpen ? <ChevronUp className="w-4 h-4 text-text-muted" /> : <ChevronDown className="w-4 h-4 text-text-muted" />}
            </button>
            {isTasteOpen && (
              <div className="flex flex-col gap-2">
                {tastes.map((taste) => (
                  <label key={taste} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="taste" 
                      value={taste}
                      checked={selectedTaste === taste}
                      onChange={(e) => setSelectedTaste(e.target.value)}
                      className="hidden" 
                    />
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      selectedTaste === taste ? "border-primary bg-primary" : "border-border group-hover:border-primary"
                    }`}>
                      {selectedTaste === taste && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                    </div>
                    <span className={`text-sm ${selectedTaste === taste ? "text-primary font-medium" : "text-text-body"}`}>
                      {taste}
                    </span>
                  </label>
                ))}
                <button className="text-left text-xs text-text-muted hover:text-primary mt-1">More</button>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col lg:flex-row gap-2 mt-2">
            <Button 
              variant="outline" 
              onClick={handleReset}
              className="w-full lg:flex-1 rounded-md border-none text-text-body hover:text-primary hover:border-transparent text-sm"
            >
              Reset
            </Button>
            <Button className="w-full lg:flex-1 rounded-md bg-primary-light text-secondary hover:bg-primary hover:text-white border-none h-10 text-sm">
              Apply
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
