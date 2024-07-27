import { motion } from "framer-motion";

export default function OnloadAnimation() {
  const text = "Welcome To Sajal Dewangan's Portfolio".split(" ");
  return <div className="text-3xl md:text-9xl flex items-center justify-center h-screen">
    {text.map((el, i) => (
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
    ))}
  </div>
}