import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative py-32 bg-crimson-dark overflow-hidden flex items-center justify-center border-t border-crimson-light/10">
      {/* Subtle background texture/pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c9943a 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <AnimatedSection direction="up">
          <h2 className="font-display text-5xl md:text-7xl text-warm-white mb-8 leading-tight">
            Reserve Your Table <span className="text-gold italic">Tonight</span>
          </h2>
          <p className="text-warm-gray text-xl mb-12 max-w-2xl mx-auto font-light">
            Step into the glow of our dining room and experience the pinnacle of culinary crafted burgers.
          </p>
          <Button href="/contact" variant="solid" className="!px-12 !py-5 !text-xl shadow-[0_0_40px_rgba(201,148,58,0.2)]">
            Book Now
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
