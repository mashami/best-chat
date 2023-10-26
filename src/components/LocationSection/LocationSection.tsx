import { Arrow } from "../Icons/Icons"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import Card from "./Card"

const LocationSection = () => {
  return (
    <section className="bg-[#ecf1ff] pb-32">
      <div className="container pt-28">
        <div className="w-full mx-auto text-center px-24">
          <h2 className="font-bold">Our office all over the globe</h2>
          <h3 className="">
            BestChat is headquartered in Toronto, Canada. We offer an online
            sales or service system live chat software. We are young but with
            the incredible power of chasing the best.
          </h3>
        </div>
        <div className="grid grid-cols-4 place-content-between gap-x-6 gap-y-16  mt-12 pb-28">
          <Card text="Singapore" icon={"./se.png"} />
          <Card text="Sydney" icon={"./Sydney.png"} />
          <Card text="Dublin" icon={"./Dublin.png"} />
          <Card text="London" icon={"./London.png"} />
          <Card text="New York" icon={"./NewYork.png"} />
          <Card text="Toronto" icon={"./Toronto.png"} />
          <Card text="San Francisco" icon={"./SanFrancisco.png"} />
          <Card text="Seattle" icon={"./01.png"} />
        </div>

        <div className="mt-24 w-full bg-green-200/40 rounded-[40px] flex items-center p-20 justify-between space-x-8">
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
                <p className="text-white">Entry for free Now</p>
                <Arrow
                  width={20}
                  height={16}
                  className=" absolute bottom-[1.2rem] right-[1.2rem] group-hover:bottom-[1.2rem] group-hover:right-[0.7rem] group-hover: group-transition duration-300 ease-in-out"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
