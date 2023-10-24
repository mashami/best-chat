import Card from "./Card"

const LocationSection = () => {
  return (
    <section className="bg-[#ecf1ff]">
      <div className="container pt-28 ">
        <div className="w-full mx-auto text-center px-24">
          <h2 className="font-bold">Our office all over the globe</h2>
          <h3 className="">
            BestChat is headquartered in Toronto, Canada. We offer an online
            sales or service system live chat software. We are young but with
            the incredible power of chasing the best.
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-y-24 gap-x-16 mt-12 pb-28">
          <Card text="Singapore" icon={"./01.png"} />
          <Card text="Sydney" icon={"./01.png"} />
          <Card text="Dublin" icon={"./01.png"} />
          <Card text="London" icon={"./01.png"} />
          <Card text="New York" icon={"./01.png"} />
          <Card text="Toronto" icon={"./01.png"} />
          <Card text="San Francisco" icon={"./01.png"} />
          <Card text="Seattle" icon={"./01.png"} />
        </div>
      </div>
    </section>
  )
}

export default LocationSection
