import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

/**
 * Button – Primary & secondary action component.
 */
export default function Button({ children, href, variant = "solid", className = "", onClick, type = "button" }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-display text-lg tracking-wider transition-all duration-300";
  const solidStyles = "bg-gold text-crimson-dark font-bold hover:bg-warm-white hover:text-crimson-dark hover:shadow-[0_0_20px_rgba(201,148,58,0.4)]";
  const ghostStyles = "bg-transparent border border-warm-white text-warm-white hover:border-gold hover:text-gold";
  
  const styles = `${baseStyles} ${variant === "solid" ? solidStyles : ghostStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
