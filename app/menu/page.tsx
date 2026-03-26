"use client"
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BurgerCard from "@/components/ui/BurgerCard";
import GoldDivider from "@/components/ui/GoldDivider";
import { menuData } from "@/lib/data";

const categories = ["All", "Burgers", "Sides", "Drinks", "Desserts"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = activeCategory === "All" 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-crimson min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-7xl text-warm-white mb-6">Our Menu</h1>
            <GoldDivider />
          </div>
        </AnimatedSection>

        {/* Sticky category tabs */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="sticky top-24 z-40 bg-crimson/95 backdrop-blur-md py-4 mb-12 border-b border-crimson-light/20 flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-display text-lg md:text-xl tracking-wider uppercase transition-all duration-300 px-4 py-2 ${
                  activeCategory === category 
                    ? "text-gold border-b-2 border-gold" 
                    : "text-warm-gray hover:text-warm-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item, index) => (
            <AnimatedSection key={item.id} direction="up" delay={index * 0.1}>
              <BurgerCard {...item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
