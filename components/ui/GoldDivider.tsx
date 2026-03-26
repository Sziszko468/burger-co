/**
 * GoldDivider – Decorative separator for sections.
 */
export default function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center space-x-4 my-8 ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent to-gold w-16 md:w-32" />
      <div className="w-2 h-2 rotate-45 bg-gold" />
      <div className="h-px bg-gradient-to-l from-transparent to-gold w-16 md:w-32" />
    </div>
  );
}
