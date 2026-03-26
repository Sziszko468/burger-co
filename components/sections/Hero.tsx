import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow z-0" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center mt-12 md:mt-24">
        <AnimatedSection direction="up" delay={0.2}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] leading-[1.1] mb-6 text-warm-white tracking-wide">
            Crafted for <br /> Those Who <br /> Demand <span className="text-gold italic">More</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.4}>
          <p className="text-warm-gray text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light">
            Experiencing the cinematic depth of flavor. Where every layer is an act of culinary defiance.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="/menu" variant="solid">Explore Menu</Button>
            <Button href="/about" variant="ghost">Our Story</Button>
          </div>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={0.8}>
          <div className="mt-16 md:mt-32 relative w-full max-w-5xl mx-auto h-[40vh] md:h-[60vh]">
            <Image
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2000&auto=format&fit=crop"
              alt="Signature Premium Burger"
              fill
              className="object-cover object-center drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)]"
              priority
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
