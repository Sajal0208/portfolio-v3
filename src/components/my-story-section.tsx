const stories = [
  {
    heading: "My story: 1987 - 2009",
    text: `At the age of four, in 1987, I obsessively scribbled a space themed logo found on my Lego astronaut minifig over and over again, trying to perfect it. When I started school I experimented with all sorts of creative outlets, drawing covers for school brochures, entering colouring-in competitions and winning my fair share of gold stars. At the age of seven I would draw one comic strip, starring a dog called Oscar, every day… this persisted till I was 11. But traditional sketching, drawing, painting, mosaic making, model making and the like became a bit standard for me, I wanted to play with a completely new medium, and I wanted to use my brain… Tim aged nine, meet MS Paint. This simple piece of software allowed me to waste my precious childhood, painstakingly creating elaborate images, pixel by pixel.
At 14, I designed and built my first website.Never content with one medium, I would also dabble in technical drawing, designing ergonomic computer desks and crazy stupid vehicles.Inevitably, I went on to study Graphic Design at university, which allowed me the creative freedom I wanted while doing what I enjoyed most - using my brain to come up with great concepts and solve problems in a multitude of creative and exciting ways.
In 2005, aged 22, I moved to London to begin a career as a graphic and user experience designer.Before turning my attention to the challenges of the automotive and mobility world, I specialised in designing for “human-to-whatever” interaction, as I call it.Starting my career designing weird and wonderful interactive packaging for the likes of PlayStation, I quickly moved on to digital design, where I furthered my interest in Human-Machine Interaction(HMI) working on everything from in-car HMIs to Science Museum gestural interactives and Tate Modern digital art installations to Samsung smart TVs, smartphones and smart fridges.`
  },
  {
    heading: "My story: 2009 - 2014",
    text: `More recently, my focus has been on studying, exploring and designing for human behaviour in how people move through physical spaces, whether by car, by public transport or by foot. This includes mobility in and around the car, autonomous vehicles, transportation services, consumer airline experiences and even pedestrian mobility access. In 2015 I founded and grew ustwo Auto- the Auto & Mobility department of digital product studio ustwo, which quickly became one third of the ustwo business.

In 2016, I wrote an industry inspiring eBook on in-car HMI design, which achieved tens of thousands of downloads and has directly influenced the in-car HMIs of today. My follow-up title, focussing on UX design for autonomous vehicles, Humanising Autonomy: Where Are We Going? released in 2018, has been praised by the likes of Apple and Google among others, and I have since gone on to write many articles and talked at many events on the subject of user-centred design for automotive and mobility, as well as working on products and services with Ford, Volkswagen, Transport for London, Jaguar, Audi, Changan and Samsung to name a few.

In 2018, I was recognised by BIMA as one of the top 100 influencers in UK digital design and in 2019, I was elected onto the Board of Directors at Wayfindr, an award-winning social tech non-profit, with ambitions to help the world's 285 million blind people navigate indoor environments independently.

In 2023, I finally founded my own business UXIXD, a user experience and interaction design agency. Oh - and I have a collection of over 10,000 toy cars and growing - my latest book Micro but Many, which catalogues the history of Micro Machines, released in March 2020. I also have an interest in fitness and travel. I'm scared of spiders.

Thanks for reading to the end. Why not get in touch via the methods below…`
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

const MyStoryParagraph = ({ heading, text }: { heading: string, text: string }) => {
  return <div className="tracking-wide flex flex-col gap-y-2 w-full sm:w-[600px]">
    <p className="text-primary text-2xl  font-bold">{heading}</p>
    <p className="text-gray-500 text-xl">{text}</p>
  </div>
}