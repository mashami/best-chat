import Card from "./Card"

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <section className="backgroudAbout  py-32 -z-40">
      <div className=" mx-auto w-full text-center space-y-5">
        <h2 className="font-semibold">We are BestChat</h2>
        <h3>
          BestChat focusing on shaping the "future of communication" through
          technology and continued innovation.
        </h3>
      </div>

      <div className="container grid grid-cols-2 gap-x-16 gap-y-8 mt-24">
        <Card
          icons={"./flag.png"}
          text="We listen to learn, practice and verify, improve and never stop. "
        />
        <Card
          icons={"./company.png"}
          text="We're flexible, and consistently emphasizing the importance of work-life fit. "
        />
        <Card
          icons={"./diamond.png"}
          text="We're seeking to break into new markets so we can bring our solutions to a broader audience. "
        />
        <Card
          icons={"./igifunsi.png"}
          text="We're committed to inspiring workforces and businesses around the world, helping to pave the way forward for our people, customers, and industry. "
        />
      </div>
    </section>
  )
}

export default About
