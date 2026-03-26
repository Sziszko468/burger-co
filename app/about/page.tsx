import AnimatedSection from "@/components/ui/AnimatedSection";
import GoldDivider from "@/components/ui/GoldDivider";
import { Flame, Star, ShieldCheck } from "lucide-react";

const timeline = [
  { year: "2015", title: "The First Flame", description: "What began as a late-night pop-up quickly became an underground sensation. We sold out of our signature Crimson King burger on night one." },
  { year: "2018", title: "Establishing Roots", description: "We opened our first permanent location in the heart of the culinary district, refusing to compromise on our dry-aging process." },
  { year: "2023", title: "Award Winning", description: "Recognized as the city's premier burger destination, proving that fast-casual doesn't mean sacrificing cinematic quality." }
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-crimson-dark min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedSection direction="up">
          <div className="text-center mb-24">
            <h1 className="font-display text-5xl md:text-7xl text-warm-white mb-6">Our Story</h1>
            <GoldDivider />
            <p className="text-warm-gray text-xl max-w-2xl mx-auto font-light leading-relaxed">
              We aren't in the business of making fast food. We are in the business of culinary obsession.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="space-y-16 mb-32 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-crimson-light/30 hidden md:block" />
          {timeline.map((item, index) => (
            <AnimatedSection key={item.year} direction={index % 2 === 0 ? "left" : "right"}>
              <div className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="w-full md:w-5/12 hidden md:block" />
                <div className="w-16 h-16 rounded-full bg-crimson border border-gold flex items-center justify-center font-display text-xl text-gold z-10 my-4 md:my-0">
                  {item.year}
                </div>
                <div className="w-full md:w-5/12 bg-crimson p-8 rounded-sm text-center md:text-left shadow-lg border border-crimson-light/10">
                  <h3 className="font-display text-2xl text-warm-white mb-3">{item.title}</h3>
                  <p className="text-warm-gray leading-relaxed">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Values */}
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-warm-white">Our Core Values</h2>
            <GoldDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Flame, title: "Passion Driven", desc: "Every recipe is tested until it meets our exacting cinematic standards." },
              { icon: Star, title: "Uncompromising Quality", desc: "We source only the highest grade ingredients, period." },
              { icon: ShieldCheck, title: "Honest Food", desc: "No shortcuts, no artificial additives. Just pure, bold flavor." }
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-crimson rounded-full flex items-center justify-center mb-6 text-gold">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl text-warm-white mb-3">{value.title}</h3>
                <p className="text-warm-gray">{value.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
