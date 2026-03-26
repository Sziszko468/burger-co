import BurgerCard from "@/components/ui/BurgerCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GoldDivider from "@/components/ui/GoldDivider";

const signatures = [
  {
    name: "The Crimson King",
    description: "Double dry-aged beef patty, smoked gouda, truffle aioli, house-cured bacon on a toasted brioche bun.",
    price: 24.00,
    imageUrl: "https://images.unsplash.com/photo-1594212202875-54fae8550186?q=80&w=800&auto=format&fit=crop",
    badge: "Chef's Pick"
  },
  {
    name: "Golden Hour",
    description: "Crispy fried chicken thigh, hot honey glaze, spicy slaw, pickles, jalapeño mayo.",
    price: 19.50,
    imageUrl: "https://images.unsplash.com/photo-1615719413546-198b25453f85?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Earth & Fire",
    description: "Wood-roasted portobello, caramelized onions, vegan smoked provolone, garlic herb spread.",
    price: 21.00,
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    badge: "Plant-Based"
  }
];

export default function SignatureBurgers() {
  return (
    <section className="py-24 bg-crimson">
      <div className="container mx-auto px-6 max-w-7xl">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-warm-white">Our Signatures</h2>
            <GoldDivider />
            <p className="text-warm-gray max-w-2xl mx-auto text-lg">
              The masterpieces that defined our legacy. Uncompromising quality in every layer.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatures.map((burger, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.2}>
              <BurgerCard {...burger} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
