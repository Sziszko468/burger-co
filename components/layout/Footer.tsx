import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

/**
 * Footer component highlighting exploration and contact details.
 */
export default function Footer() {
  return (
    <footer className="bg-crimson-dark pt-16 pb-8 border-t border-crimson-light/20">
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1 border-b border-crimson/50 pb-8 md:border-none md:pb-0">
          <Link href="/" className="font-display text-2xl tracking-wider text-warm-white block mb-4">
            BURGER & CO.
          </Link>
          <p className="text-warm-gray text-sm leading-relaxed">
            Crafted for those who demand more. Culinary excellence in every bite.
          </p>
        </div>
        
        <div>
          <h4 className="font-display text-lg mb-6 text-gold">Explore</h4>
          <ul className="space-y-3 text-sm text-warm-gray">
            <li><Link href="/menu" className="hover:text-warm-white transition-colors">Menu</Link></li>
            <li><Link href="/about" className="hover:text-warm-white transition-colors">Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-warm-white transition-colors">Reservations</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display text-lg mb-6 text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-warm-gray">
            <li>123 Culinary Ave</li>
            <li>New York, NY 10012</li>
            <li>(555) 123-4567</li>
            <li>hello@burgerco.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-6 text-gold">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-crimson flex items-center justify-center text-warm-white hover:bg-gold hover:text-crimson-dark transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-crimson flex items-center justify-center text-warm-white hover:bg-gold hover:text-crimson-dark transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-crimson flex items-center justify-center text-warm-white hover:bg-gold hover:text-crimson-dark transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl mt-12 pt-8 border-t border-crimson flex flex-col md:flex-row items-center justify-between text-xs text-warm-gray">
        <p>&copy; {new Date().getFullYear()} Burger & Co. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-warm-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-warm-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
