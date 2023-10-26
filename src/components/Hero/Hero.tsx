import Image from "next/image"

/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <section className="px-4 md:container mt-[120px]">
      <h1 className=" md:font-bold font-extrabold text-center leading-9 md:leading-normal md:pb-0 pb-8">
        Between customer and order, there's a bridge Let's power a strong
        connection for all
      </h1>

      <div className=" w-[300px] h-[120px] grid place-content-center md:w-[1147px] md:h-[480px] px-24 mt-[900px] md:mt-52 relative z-40">
        <Image src={"/heroPicture.png"} fill alt={"footer-image"} />

        <div className="absolute md:top-[-128px]  top-[-900px] md:left-[265px]  w-[234px] h-[234px] md:grid place-content-center px-3 md:pt-2 md:pb-3 py-8 bg-[#CCD8FD] rounded-full text-center -z-20 opacity-80">
          <h3 className="font-bold text-[26px]">Trust</h3>
          <p className="mt-3">
            Nothing is more <br /> important to our company than the privacy of
            our customers’ data.
          </p>
        </div>
        <div className=" hidden md:block absolute top-[3px]  left-[450px] w-[210px] h-[200px] bg-[#e9f8e5] rounded-full text-center -z-30 opacity-70"></div>

        <div className="absolute md:top-[-104px] top-[-700px]  md:right-[208px] right-[-50px]   w-[250px] h-[250px] grid place-content-center px-3 pt-2 pb-3 bg-[#E7D9FB] rounded-full text-center -z-20 opacity-70">
          <h3 className="font-bold text-[26px]">Equality</h3>
          <p className="mt-3">
            Ensuring that all voices are welcome and heard increases our
            awareness of <br /> what is possible.
          </p>
        </div>

        <div className=" absolute top-[-114px]  right-[360px] w-[180px] h-[180px] md:grid place-content-center  bg-[#FEFAF0] rounded-full text-center -z-30"></div>

        <div className="absolute md:top-[140px] top-[-470px] left-[10px]  md:left-[-120px] w-[300px] h-[300px] grid place-content-center md:pr-28 md:pl-8 p-8 bg-[#FBE7C8] rounded-full text-center -z-10 opacity-70">
          <h3 className="font-extrabold text-[26px] md:pl-8">
            Customer success
          </h3>
          <p className="break-words mt-5">
            Our customers’
            <br /> success is critical to <br /> our growth and <br /> we’re
            committed to <br /> succeeding <br /> together.
          </p>
        </div>

        <div className=" hidden md:block absolute  top-[100px] left-[120px] w-[180px] h-[180px] bg-[#FEFAF0] rounded-full  text-center -z-30"></div>

        <div className="absolute md:top-[158px] top-[-190px] right-[-40px]  md:right-[-116px] md:w-[300px] md:h-[300px] w-[250px] h-[250px]  md:p-4 p-6 pt-16 md:pl-[120px] bg-[#D0EDC9] rounded-full md:text-start -z-10 text-center opacity-70">
          <h3 className="font-extrabold text-[26px] md:pt-12 ">Innovation</h3>
          <p className="break-words mt-2">
            Regularly providing new, innovative solutions gives our customers a
            competitive <br /> advantage.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
