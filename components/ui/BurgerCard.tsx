import Image from "next/image";
import Button from "./Button";

interface BurgerCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  badge?: string;
}

/**
 * BurgerCard – Displays a single menu item in product card format.
 * Used in SignatureBurgers and Menu page grid.
 */
const BurgerCard = ({ name, description, price, imageUrl, badge }: BurgerCardProps) => {
  return (
    <div className="bg-crimson-dark flex flex-col items-center p-6 sm:p-8 rounded-sm group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(201,148,58,0.15)] transition-all duration-500 relative border border-crimson-light/10">
      {badge && (
        <span className="absolute top-4 right-4 bg-gold text-crimson-dark text-xs uppercase tracking-widest px-3 py-1 font-bold z-10">
          {badge}
        </span>
      )}
      
      <div className="w-full relative aspect-square mb-6 overflow-hidden flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-10 drop-shadow-2xl"
        />
      </div>
      
      <div className="text-center flex-grow flex flex-col w-full">
        <h3 className="font-display text-2xl text-warm-white mb-2">{name}</h3>
        <p className="text-warm-gray text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between w-full mt-auto pt-6 border-t border-crimson/50">
          <span className="font-display text-xl text-gold">${price.toFixed(2)}</span>
          <Button variant="ghost" className="!px-6 !py-2 !text-sm">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;
