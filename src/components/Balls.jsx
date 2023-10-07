import Image from "next/image";
import Button from "./Button";

const Balls = ({ image, name, price, type }) => {
  return (
    <div className="flex items-center justify-center p-[16px] gap-[24px] rounded-[24px] bg-[#1790BF] hover:scale-110">
      <div className="w-[150px] h-[150px] ">
        <Image src={image} width={150} height={150} alt="ball" />
      </div>
      <div className="flex flex-col gap-[16px] px-[24px] py-[4px] ">
        <div className="">
          <h1 className="text-[24px] text-[#D91A4D] font-bold uppercase">
            {name}
          </h1>
        </div>
        <div className="">
          <h2 className="text-[16px] text-[#F2CB05] font-normal uppercase">
            {"Tipo: " + type}
          </h2>
        </div>
        <div className="">
          <h2 className="text-[16px] text-[#F2CB05] font-normal uppercase">
            {"Price: $ " + price}
          </h2>
        </div>
        <div>
          <Button variant={"shop"} label={"Shop"} />
        </div>
      </div>
    </div>
  );
};

export { Balls };
