import { Balls } from "@/components/Balls";
import { useState } from "react";

const ArrayBalls = [
  {
    image: "/assets/balls/poke-ball-n.png",
    name: "Poke Ball",
    type: "Normal",
    price: "100",
  },
  {
    image: "/assets/balls/great-ball-n.png",
    name: "Great Ball",
    type: "Normal",
    price: "200",
  },
  {
    image: "/assets/balls/ultra-ball-n.png",
    name: "Ultra Ball",
    type: "Normal",
    price: "300",
  },
  {
    image: "/assets/balls/master-ball-n.png",
    name: "Master Ball",
    type: "Normal",
    price: "400",
  },
  {
    image: "/assets/balls/safari-ball-e.png",
    name: "Safari Ball",
    type: "Especials",
    price: "600",
  },
  {
    image: "/assets/balls/park-ball-e.png",
    name: "Park Ball",
    type: "Especials",
    price: "750",
  },
  {
    image: "/assets/balls/gs-ball-e.png",
    name: "Gold-Silver Ball",
    type: "Especials",
    price: "850",
  },
  {
    image: "/assets/balls/crystal-ball-e.png",
    name: "Crystal Ball",
    type: "Especials",
    price: "950",
  },
  {
    image: "/assets/balls/clone-ball-e.png",
    name: "Clone Ball",
    type: "Especials",
    price: "1050",
  },
  {
    image: "/assets/balls/dark-ball-e.png",
    name: "Dark Ball",
    type: "Especials",
    price: "1150",
  },
  {
    image: "/assets/balls/fast-ball-f.png",
    name: "Fast Ball",
    type: "Frutos",
    price: "1300",
  },
  {
    image: "/assets/balls/lure-ball-f.png",
    name: "Lure Ball",
    type: "Frutos",
    price: "1500",
  },
  {
    image: "/assets/balls/heavy-ball-f.png",
    name: "Heavy Ball",
    type: "Frutos",
    price: "1700",
  },
  {
    image: "/assets/balls/love-ball-f.png",
    name: "Love Ball",
    type: "Frutos",
    price: "1900",
  },
  {
    image: "/assets/balls/moon-ball-f.png",
    name: "Moon Ball",
    type: "Frutos",
    price: "2100",
  },
  {
    image: "/assets/balls/level-ball-f.png",
    name: "Level Ball",
    type: "Frutos",
    price: "2300",
  },
  {
    image: "/assets/balls/friend-ball-f.png",
    name: "Friend Ball",
    type: "Frutos",
    price: "2500",
  },
  {
    image: "/assets/balls/net-ball-d.png",
    name: "Net Ball",
    type: "Devons",
    price: "3000",
  },
  {
    image: "/assets/balls/timer-ball-d.png",
    name: "Timer Ball",
    type: "Devons",
    price: "3400",
  },
  {
    image: "/assets/balls/repeat-ball-d.png",
    name: "Repeat Ball",
    type: "Devons",
    price: "3800",
  },
  {
    image: "/assets/balls/nest-ball-d.png",
    name: "Nest Ball",
    type: "Devons",
    price: "4200",
  },
  {
    image: "/assets/balls/luxury-ball-d.png",
    name: "Luxury Ball",
    type: "Devons",
    price: "4600",
  },
  {
    image: "/assets/balls/premiun-ball-d.png",
    name: "Premium Ball",
    type: "Devons",
    price: "5000",
  },
  {
    image: "/assets/balls/dive-ball-d.png",
    name: "Dive Ball",
    type: "Devons",
    price: "5400",
  },
];

const MarketBalls = () => {
  const [ballData, setBallData] = useState([]);
  return (
    <div className=" w-full flex flex-col p-[24px]  items-center ">
      <div className=" flex items-center justify-center my-[24px] truncate ">
        <h1 className="text-[#F2CB05] text-[56px] text-center font-semibold uppercase">
          {"Poke-Balls"}
        </h1>
      </div>
      <div className=" w-[1240px] h-auto flex p-[24px] gap-[24px] overflow-x-auto">
        {ArrayBalls.map((data) => (
          <Balls
            image={data.image}
            name={data.name}
            type={data.type}
            price={data.price}
          />
        ))}
      </div>
      <div className="debug-blue w-full h-[400px] mt-[32px] ">

      </div>
    </div>
  );
};

export { MarketBalls };
