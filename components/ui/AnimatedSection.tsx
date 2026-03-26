"use client"
import { motion } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "left" | "right" | "none"
}

/**
 * AnimatedSection – Wrapper for Framer Motion scroll animations.
 */
const AnimatedSection = ({ children, delay = 0, direction = "up" }: AnimatedSectionProps) => {
  const variants = {
    up: { y: 50, opacity: 0 },
    left: { x: -60, opacity: 0 },
    right: { x: 60, opacity: 0 },
    none: { opacity: 0 },
  }

  const initialVariant = variants[direction];
  const animateVariant = direction === "none" ? { opacity: 1 } : { x: 0, y: 0, opacity: 1 };

  return (
    <motion.div
      initial={initialVariant}
      whileInView={animateVariant}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
