import { Arrow } from "../Icons/Icons"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import Card from "./Card"

const LocationSection = () => {
  return (
    <section className="bg-[#ecf1ff] pb-32">
      <div className="px-4 md:container pt-28">
        <div className="w-full mx-auto text-center md:px-24">
          <h2 className="font-extrabold text-[25px] ">
            Our office all over the globe
          </h2>
          <h3 className="">
            BestChat is headquartered in Toronto, Canada. We offer an online
            sales or service system live chat software. We are young but with
            the incredible power of chasing the best.
          </h3>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 place-content-between gap-y-3 md:gap-x-6 md:gap-y-16 gap-x-8  mt-12 pb-28">
          <Card text="Singapore" icon={"./se.png"} />
          <Card text="Sydney" icon={"./Sydney.png"} />
          <Card text="Dublin" icon={"./Dublin.png"} />
          <Card text="London" icon={"./London.png"} />
          <Card text="New York" icon={"./NewYork.png"} />
          <Card text="Toronto" icon={"./Toronto.png"} />
          <Card text="San Francisco" icon={"./SanFrancisco.png"} />
          <Card text="Seattle" icon={"./01.png"} />
        </div>

        <div className=" hidden mt-24 w-full bg-green-200/40 rounded-[40px] md:flex items-center p-20 justify-between space-x-8">
          <h2 className="font-bold break-words w-1/2">
            Let us be your advantage now
          </h2>

          <div className="flex flex-1 mt-8 mb-8 bg-white rounded-lg h-14">
            <Input
              type="email"
              placeholder="Enter your work Email"
              className="h-full border-none focus:border-none"
            />
            <div className="bg-black relative group hover:bg-secondary transition duration-300 ease-in-out grid place-items-center rounded-lg pr-6  ">
              <Button className="group-hover:bg-secondary transition duration-300 ease-in-out h-full flex items-center justify-center ">
                <p className="text-white font-bold">Entry for free Now</p>
                <Arrow
                  width={20}
                  height={16}
                  className=" absolute bottom-[1.2rem] right-[1.2rem] group-hover:bottom-[1.2rem] group-hover:right-[0.7rem] group-hover: group-transition duration-300 ease-in-out"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-green-300/25 py-12 px-4  rounded-xl md:hidden block ">
          <h1 className="font-extrabold mb-10 w-full text-[25px] px-16 text-center leading-8 ">
            Let us be your advantage now
          </h1>
          <span className=" space-y-4 ">
            <Input
              type="email"
              placeholder="Enter your work Email"
              className="h-full border-none focus:border-none py-4"
            />
            <div className="bg-black relative group hover:bg-secondary transition duration-300 ease-in-out grid place-items-center rounded-lg  py-2 ">
              <Button className="group-hover:bg-secondary transition duration-300 ease-in-out h-full flex items-center justify-center ">
                <p className="text-white font-bold">Try for free Now</p>
                <Arrow
                  width={20}
                  height={16}
                  className=" absolute bottom-[35%] right-[4.7rem] md:right-[3.8rem]  md:group-hover:right-[3rem] group-hover:right-[4rem] group-hover: group-transition duration-300 ease-in-out"
                />
              </Button>
            </div>
          </span>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
