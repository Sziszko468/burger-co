import ScrollSequence from "@/components/sections/ScrollSequence";
import SignatureBurgers from "@/components/sections/SignatureBurgers";
import OurStory from "@/components/sections/OurStory";
import Ingredients from "@/components/sections/Ingredients";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <ScrollSequence />
      <SignatureBurgers />
      <OurStory />
      <Ingredients />
      <Testimonials />
      <CTABanner />
    </>
  );
}
