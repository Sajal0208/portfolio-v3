const stories = [
  {
    heading: "What I am currently learning",
    text: ["Rust - The sole purpose is to build on Solana",
      "Solidity - Just going through the basics",
      "Gsap - For creating aesthetically pleasing animations",
      "Perfecting MongoDB aggregation queries - Yeah, this is for my job"]
  },
  {
    heading: "What I am currently building",
    text: ["Mergit - A platform for syncing your precious Github Contributions so you never lose them",]
  }
]

export default function MyStorySection() {
  return <div className="flex flex-col gap-y-2 mt-16 md:mt-32">
    <div className='flex flex-col sm:flex-row gap-y-10 sm:gap-y-0 gap-x-10'>
      {stories.map((story) => (
        <MyStoryParagraph heading={story.heading} text={story.text} />
      ))}
    </div>
  </div>;
}

const MyStoryParagraph = ({ heading, text }: { heading: string, text: string[] }) => {
  return <div className="tracking-wide flex flex-col gap-y-2 w-full sm:w-[600px] uppercase">
    <p className="text-primary text-2xl  font-bold">{heading}</p>
    <ul className="text-gray-500 text-xl ">
      {
        text.map((text) => (
          <li>{text}</li>
        ))
      }
    </ul>
  </div>
}