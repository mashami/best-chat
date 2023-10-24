import { Button } from "../ui/button"

/* eslint-disable @next/next/no-img-element */
const Narbar = () => {
  return (
    <nav className="container flex items-center justify-between py-6">
      <div className="flex items-end space-x-12">
        <img src="/logo.png" width={150} height={30} alt="logo" />
        <span className="flex items-center justify-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20ZM107.07,172h41.86A115.75,115.75,0,0,1,128,209.85,115.75,115.75,0,0,1,107.07,172Zm-5.66-24a142.55,142.55,0,0,1,0-40h53.18a142.55,142.55,0,0,1,0,40ZM44,128a83.49,83.49,0,0,1,2.43-20H77.22a164.54,164.54,0,0,0,0,40H46.43A83.49,83.49,0,0,1,44,128ZM148.93,84H107.07A115.75,115.75,0,0,1,128,46.15,115.75,115.75,0,0,1,148.93,84Zm29.85,24h30.79a83.52,83.52,0,0,1,0,40H178.78a164.54,164.54,0,0,0,0-40Zm20.74-24H174a148.59,148.59,0,0,0-13.95-33.63A84.5,84.5,0,0,1,199.52,84ZM96,50.37A148.59,148.59,0,0,0,82,84H56.48A84.5,84.5,0,0,1,96,50.37ZM56.48,172H82a148.59,148.59,0,0,0,14,33.63A84.5,84.5,0,0,1,56.48,172Zm103.57,33.63A148.59,148.59,0,0,0,174,172h25.52A84.5,84.5,0,0,1,160.05,205.63Z" />
          </svg>

          <p className="cursor-pointer hover:text-secondary">English</p>
        </span>
      </div>
      <div className="flex justify-center items-center space-x-12 font-semibold">
        <ul className="flex space-x-12 ">
          <li className="cursor-pointer hover:text-secondary">Home</li>
          <li className="cursor-pointer hover:text-secondary">Product</li>
          <li className="cursor-pointer hover:text-secondary">Company</li>
          <li className="cursor-pointer hover:text-secondary">FAQs</li>
          <li className="cursor-pointer hover:text-secondary">Blog</li>
          <li className="cursor-pointer hover:text-secondary">Sign in</li>
        </ul>
        <Button variant={"default"}>
          <p className="text-white ">Get Started</p>
        </Button>
      </div>
    </nav>
  )
}

export default Narbar