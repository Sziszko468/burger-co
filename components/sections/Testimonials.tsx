import AnimatedSection from "@/components/ui/AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The Crimson King ruined all other burgers for me. The depth of flavor is truly cinematic. It's not just a meal, it's an event.",
    name: "Jonathan Doe",
    rating: "★★★★★"
  },
  {
    quote: "Finally, a place that takes casual dining as seriously as fine dining. Uncompromising quality from the first bite to the last.",
    name: "Sarah Jenkins",
    rating: "★★★★★"
  },
  {
    quote: "The atmosphere, the service, and most importantly, the food — everything is curated to absolute perfection.",
    name: "Marcus Aurelius",
    rating: "★★★★★"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-crimson relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <Quote className="w-96 h-96 text-gold" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.2}>
              <div className="max-w-4xl mx-auto">
                <p className="font-display italic text-2xl md:text-4xl text-warm-white leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex flex-col items-center">
                  <span className="text-gold tracking-widest text-lg mb-2">{testimonial.rating}</span>
                  <span className="text-warm-gray font-body uppercase tracking-wider text-sm">{testimonial.name}</span>
                </div>
                {/* Divider between quotes */}
                {index !== testimonials.length - 1 && (
                  <div className="w-16 h-px bg-crimson-dark/30 mx-auto mt-16" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
