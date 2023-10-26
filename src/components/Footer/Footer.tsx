import { Email, Map, Twitter, YouTube } from "../Icons/Icons"

const Footer = () => {
  return (
    <footer className="bg-[#dfe0e1]/40 ">
      <div className=" px-4 md:container ">
        <div className="flex md:flex-row flex-col md:justify-between justify-start md:items-center md:py-24 py-8 md:space-y-0 space-y-8">
          <ul className="md:space-y-0 space-y-3 flex md:flex-row flex-col md:items-center items-start justify-start md:space-x-8 space-x-0 font-semibold">
            <li className="hover:text-secondary cursor-pointer transition duration-300 ease-in-out ">
              Why BestChat
            </li>
            <li className="hover:text-secondary cursor-pointer transition duration-300 ease-in-out">
              Tour
            </li>
            <li className="hover:text-secondary cursor-pointer transition duration-300 ease-in-out">
              {" "}
              Features
            </li>
            <li className="hover:text-secondary cursor-pointer transition duration-300 ease-in-out">
              Company
            </li>
            <li className="hover:text-secondary cursor-pointer transition duration-300 ease-in-out">
              FAQs
            </li>
          </ul>

          <div className=" flex md:flex-row flex-col md:justify-center  md:items-center text-[15px] space-y-8 md:space-y-0 ">
            <span className=" flex space-x-6 pr-9">
              <Twitter width={20} height={20} />
              <YouTube width={20} height={20} />
            </span>

            <span className="md:underline flex  md:items-center  md:justify-center space-x-[1px]  hover:text-secondary cursor-pointer group transition duration-300 ease-in-out">
              <Email
                width={16}
                height={16}
                className="group-hover:fill-secondary mt-1 transition duration-300 ease-in-out"
              />
              <p>mashamipaccy04@gmail.com</p>
            </span>
            <span className="flex  items-center md:pl-2">
              <Map width={16} height={16} />
              <p className="pl-1">9325 Yonge Street,</p>
              <p>Richmond Hill,</p>
              <p>Ontario</p>
            </span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black/5"></div>
        <div className="py-12 flex md:justify-center text-black/50">
          <span className=" block md:flex md:space-x-2">
            <p>Bitcloud Technology Inc. BestChat©2023.</p>
            <p className="hover:text-secondary cursor-pointer">
              Privacy Policy
            </p>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
