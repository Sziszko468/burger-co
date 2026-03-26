import AnimatedSection from "@/components/ui/AnimatedSection";
import GoldDivider from "@/components/ui/GoldDivider";
import Button from "@/components/ui/Button";
import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-crimson min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-7xl text-warm-white mb-6">Reservations</h1>
            <GoldDivider />
            <p className="text-warm-gray text-xl max-w-2xl mx-auto font-light">
              Secure your table below. For parties larger than 6, please call us directly.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection direction="left">
            <form className="bg-crimson-dark p-8 md:p-12 rounded-sm shadow-2xl border border-crimson-light/20 flex flex-col gap-6">
              <h2 className="font-display text-3xl text-warm-white mb-4">Book a Table</h2>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-warm-gray text-sm uppercase tracking-wider">Full Name</label>
                <input type="text" id="name" className="bg-crimson border border-crimson-light/30 p-4 text-warm-white focus:outline-none focus:border-gold transition-colors" placeholder="John Doe" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-warm-gray text-sm uppercase tracking-wider">Date</label>
                  <input type="date" id="date" className="bg-crimson border border-crimson-light/30 p-4 text-warm-white focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="time" className="text-warm-gray text-sm uppercase tracking-wider">Time</label>
                  <input type="time" id="time" className="bg-crimson border border-crimson-light/30 p-4 text-warm-white focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="guests" className="text-warm-gray text-sm uppercase tracking-wider">Number of Guests</label>
                <select id="guests" className="bg-crimson border border-crimson-light/30 p-4 text-warm-white focus:outline-none focus:border-gold transition-colors appearance-none">
                  {[1,2,3,4,5,6].map(num => <option key={num} value={num}>{num} Person{num > 1 ? 's' : ''}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="requests" className="text-warm-gray text-sm uppercase tracking-wider">Special Requests</label>
                <textarea id="requests" rows={3} className="bg-crimson border border-crimson-light/30 p-4 text-warm-white focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Dietary restrictions, occasions, etc." />
              </div>
              
              <Button variant="solid" className="w-full mt-4 !py-5 text-xl">Confirm Reservation</Button>
            </form>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-12">
              <div className="bg-crimson-dark p-8 rounded-sm shadow-xl border border-crimson-light/10">
                <h2 className="font-display text-3xl text-gold mb-8">Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-gold w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-warm-white font-display text-xl mb-1">Location</h4>
                      <p className="text-warm-gray">123 Culinary Ave<br/>New York, NY 10012</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-gold w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-warm-white font-display text-xl mb-1">Contact</h4>
                      <p className="text-warm-gray">(555) 123-4567<br/>hello@burgerco.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-gold w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-warm-white font-display text-xl mb-1">Hours</h4>
                      <p className="text-warm-gray">Mon-Thu: 4PM - 11PM<br/>Fri-Sun: 12PM - 12AM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative h-64 w-full rounded-sm overflow-hidden shadow-xl border border-crimson-light/20 flex flex-col items-center justify-center bg-crimson-dark">
                {/* Embedded map placeholder */}
                 <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
                 <MapPin className="text-gold w-12 h-12 mb-4 z-10" />
                 <a href="#" className="z-10 text-warm-white hover:text-gold font-display text-xl uppercase tracking-widest transition-colors border-b border-gold pb-1">View on Maps</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
