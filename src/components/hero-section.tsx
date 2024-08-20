
import { FlipWords } from "./blocks/flip-words";

const words = ["an engineer", "a problem solver", "a solution builder"]

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-4 w-[90%] md:w-[1000px]">
      <h1 className="md:text-6xl text-3xl tracking-wide text-primary uppercase">
        Hello, I am Sajal, I AM NOT JUST A FULLSTACK DEVELOPER,
      </h1>
      <h1 className="md:text-6xl text-3xl tracking-wide text-primary uppercase">
        I AM <FlipWords words={words} />
      </h1>

    </div>
  );
}