/* eslint-disable @next/next/no-img-element */

interface CardProps {
  icon: string
  text: string
}
const Card = ({ icon, text }: CardProps) => {
  return (
    <div className=" w-72 h-44 bg-white rounded-[16px] p-8 grid place-content-between ">
      <span className="">
        <img
          src={icon}
          style={{ objectFit: "cover" }}
          alt="image"
          width={50}
          height={50}
        />
      </span>
      <h3 className="font-bold text-[25px]">{text}</h3>
    </div>
  )
}

export default Card
