import Image from "next/image";

const Card = ({ name, image }) => {
  return (
    <div
      className="relative w-[250px] h-[300px] flex flex-col rounded-[24px] bg-[#1790BF] shadow-lg shadow-[3px_3px_10px_#F2CB05] 
                pt-[32px] px-[24px] cursor-pointer gap-[16px] hover:scale-110 active:scale-100"
    >
      <div className="h-[200px] z-10 ">
        <img src={image} alt="pokemon image" />
      </div>
      <div className="absolute bg-[#D91A4D] w-[200px] h-[200px] rounded-[100%] top-10 left-10 "></div>
      <div className="absolute h-[36px] flex items-center justify-center px-[32px] bg-[#F2CB05] bottom-[16px] right-0  ">
        <h1 className="text-[32px] text-[#D91A4D]">{name}</h1>
      </div>
    </div>
  );
};

export default Card;
