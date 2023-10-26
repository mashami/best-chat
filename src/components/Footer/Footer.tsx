import { Email, Map, Twitter, YouTube } from "../Icons/Icons"

const Footer = () => {
  return (
    <footer className="bg-[#dfe0e1]/40 ">
      <div className="container">
        <div className="flex justify-between items-center py-24">
          <ul className="flex items-center space-x-8 ">
            <li className="hover:text-secondary cursor-pointer transition duration-300 ease-in-out">
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

          <div className="flex justify-center items-center text-[15px] ">
            <span className=" flex space-x-6 pr-9">
              <Twitter width={20} height={20} />
              <YouTube width={20} height={20} />
            </span>

            <span className="underline flex items-center justify-center space-x-[1px] hover:text-secondary cursor-pointer group transition duration-300 ease-in-out">
              <Email
                width={16}
                height={16}
                className="group-hover:fill-secondary mt-1 transition duration-300 ease-in-out"
              />
              <p>mashamipaccy04@gmail.com</p>
            </span>
            <span className="flex items-center pl-2">
              <Map width={16} height={16} />
              <p className="pl-1">9325 Yonge Street,</p>
              <p>Richmond Hill,</p>
              <p>Ontario</p>
            </span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black/5"></div>
        <div className="py-12 flex justify-center text-black/50">
          <span className="flex space-x-2">
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
