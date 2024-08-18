import { motion } from "framer-motion";
import AnimatedText from "./animated-text";

export default function OnloadAnimation() {
  const text = "Welcome To Sajal Dewangan's Portfolio"
  return <div className="text-3xl text-primary sm:text-5xl md:text-7xl 2xl:text-9xl flex items-center justify-center h-screen">
    {/* {text.map((el, i) => (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: i / 5,
        }}
        key={i}
      >
        {el}{" "}
      </motion.span>
    ))} */}
    <AnimatedText text={text} />
  </div>
}