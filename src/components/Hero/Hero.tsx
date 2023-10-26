import Image from "next/image"

/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <section className="container mt-[140px]">
      <h1 className=" font-bold text-center font-lato ">
        Between customer and order, there's a bridge Let's power a strong
        connection for all
      </h1>

      <div className="w-full h-full px-24 mt-52 relative z-40">
        <Image
          src={"/footer.png"}
          className="w-full h-full"
          width={2114}
          height={856}
          alt={"footer-image"}
        />

        <div className="absolute top-[-138px]  left-[320px] w-[234px] h-[234px] grid place-content-center px-3 pt-2 pb-3 bg-[#CCD8FD] rounded-full text-center -z-20 opacity-80">
          <h3 className="font-bold text-[26px]">Trust</h3>
          <p className="mt-3">
            Nothing is more <br /> important to our company than the privacy of
            our customers’ data.
          </p>
        </div>
        <div className="absolute top-[-8px]  left-[475px] w-[200px] h-[200px] grid place-content-center  bg-[#EFF9EC] rounded-full text-center -z-30 opacity-60"></div>

        <div className="absolute top-[-114px]  right-[260px] w-[250px] h-[250px] grid place-content-center px-3 pt-2 pb-3 bg-[#E7D9FB] rounded-full text-center -z-20">
          <h3 className="font-bold text-[26px]">Equality</h3>
          <p className="mt-3">
            Ensuring that all voices are welcome and heard increases our
            awareness of <br /> what is possible.
          </p>
        </div>

        <div className="absolute top-[-114px]  right-[360px] w-[180px] h-[180px] grid place-content-center  bg-[#FEFAF0] rounded-full text-center -z-30"></div>

        <div className="absolute top-[70px]  left-[-50px] w-[300px] h-[300px] grid place-content-center pr-28 pl-8 p-8 bg-[#FBE7C8] rounded-full text-center -z-10">
          <h3 className="font-bold text-[26px] pl-8">customer success</h3>
          <p className="break-words mt-5">
            Our customers’
            <br /> success is critical to <br /> our growth and <br /> we’re
            committed to <br /> succeeding <br /> together.
          </p>
        </div>

        <div className="absolute top-[80px] left-[180px] w-[180px] h-[180px] grid place-content-center  bg-[#FEFAF0] rounded-full text-center -z-30"></div>

        <div className="absolute top-[118px]  right-[-30px] w-[280px] h-[280px] p-4 pt-16 pl-[98px]  bg-[#D0EDC9] rounded-full text-start -z-10">
          <h3 className="font-bold text-[26px] ">Innovation</h3>
          <p className="break-words mt-2 pr-4">
            Regularly providing new, innovative solutions gives our customers a
            competitive advantage.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
