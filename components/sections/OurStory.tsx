"use client"
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GoldDivider from "@/components/ui/GoldDivider";
import Button from "@/components/ui/Button";

export default function OurStory() {
  return (
    <section className="py-24 bg-crimson-dark overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden border border-crimson-light/20 shadow-[-20px_20px_0px_#c9943a]">
              <Image 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                alt="Chef preparing foods in a dark dramatic kitchen"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-crimson-dark/30 mix-blend-multiply" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <GoldDivider className="!justify-start !my-0 mb-6" />
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-warm-white mb-8">
                Out of the Shadows,
                <br />
                Into the Fire
              </h2>
              
              <div className="space-y-6 text-warm-gray text-lg mb-10">
                <p>
                  We didn't set out to make another burger. The world has enough of those. We set out to create an experience that commands your attention and rewards your palate.
                </p>
                <p>
                  Born in the glow of late-night kitchen sessions, Burger & Co. is a testament to the obsessed. We age our beef longer. We bake our brioche daily. And we never, ever compromise.
                </p>
              </div>

              <Button href="/about" variant="ghost">Discover Our Roots</Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
