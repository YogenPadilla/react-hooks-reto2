import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/assets/notice/pokemon.png",
  "/assets/notice/pokemon-1.png",
  "/assets/notice/pokemon-2.png",
  "/assets/notice/pokemon-3.png",
  "/assets/notice/pokemon-4.png",
  "/assets/notice/pokemon-5.png",
  "/assets/notice/pokemon-6.png",
  "/assets/notice/pokemon-7.png",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
 
  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
  };
};

  return (
    <div className="w-full h-[600px] flex flex-col items-center p-[4px] gap-[16px] mb-[24px] ">
      <div className="relative w-full h-full ">
        <Image
          src={images[index]}
          quality={100}
          priority={true}
          fill
          alt="Pokemon"
        />
      <div className="absolute w-[80px] h-full flex items-center justify-center left-0 hover:bg-[#8C8C8C1A]">
      <Button variant={"secondary"} icon="fe:arrow-left" onClick={() => {handlePrev()}}/>
      </div>
      <div className="absolute w-[80px] h-full flex items-center justify-center right-0 hover:bg-[#8C8C8C1A]">
      <Button variant={"secondary"} icon="fe:arrow-right" onClick={() => {handleNext()}} />
      </div>
      </div>
    </div>
  );
};

export default Hero;
