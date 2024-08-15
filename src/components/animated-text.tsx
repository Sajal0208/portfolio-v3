"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string
  once?: boolean
}

const defaultAnimations = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

export default function AnimatedText({
  text,
  el: Wrapper = "p",
  className,
}: AnimatedTextProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.5, once: true });

  return (
    <div className={className}>
      <span className='sr-only'>{text}</span>
      <motion.span
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{
          staggerChildren: 0.1
        }}
        aria-hidden
        ref={ref}
      >
        {text.split(" ").map((word) => (
          <span className="inline-block whitespace-nowrap">
            {word.split("").map((char) => (
              <motion.span
                className="inline-block"
                variants={defaultAnimations}
              >
                {char}
              </motion.span>
            ))}
            <span className='inline-block'>&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </div>
  )
} 