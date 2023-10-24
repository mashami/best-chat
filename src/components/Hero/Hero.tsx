import Image from "next/image"

/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <section className="w-screen ">
      <div className="mt-[140px] ">
        <h1 className="container font-bold mx-12 text-center ">
          Between customer and order, there's a bridge Let's power a strong
          connection for all
        </h1>
        <div className="w-full h-full px-24 mt-40">
          <Image
            src={"/footer.png"}
            className="w-full h-full"
            width={2114}
            height={856}
            alt={"footer-image"}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
