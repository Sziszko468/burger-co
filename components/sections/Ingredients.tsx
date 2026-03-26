import { Beef, Wheat, Leaf, Utensils } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GoldDivider from "@/components/ui/GoldDivider";

const ingredients = [
  {
    icon: Beef,
    name: "100% Prime Beef",
    description: "Dry-aged for 30 days, grass-fed, and ground fresh every single morning."
  },
  {
    icon: Wheat,
    name: "Brioche Bun",
    description: "Baked in-house daily. The perfect pillowy vessel for our creations."
  },
  {
    icon: Utensils,
    name: "House Sauce",
    description: "A closely guarded secret recipe that perfectly balances umami and tang."
  },
  {
    icon: Leaf,
    name: "Fresh Produce",
    description: "Locally sourced from organic farms. Crisp, vibrant, and bursting with flavor."
  }
];

export default function Ingredients() {
  return (
    <section className="py-24 bg-crimson-dark border-y border-crimson-light/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-warm-white">Only the Finest</h2>
            <GoldDivider />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {ingredients.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={index} direction="up" delay={index * 0.15}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full bg-crimson flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                    <Icon className="w-8 h-8 text-gold group-hover:text-crimson-dark transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-2xl text-warm-white mb-3">{item.name}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
