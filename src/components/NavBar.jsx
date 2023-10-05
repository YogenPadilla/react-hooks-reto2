import { Icon } from "@iconify/react";
import TypeIt from "typeit";
import Button from "./Button";
import { useEffect } from "react";

const NavBar = () => {
 
  useEffect(() => {
    textTypeit();
  });

  const textTypeit = () => {
    new TypeIt("#TextAnimate", {
      strings: "Reto Hooks [Use-State] [Use-Effect].",
      speed: 100,
      waitUntilVisible: true,
      autoStart: true,
      startDelete: true,
      breakLines: false,
    }).go();
  };

  return (
    <div className="w-full flex items-center justify-between top-0 left-0 px-[32px] py-[16px]">
      <div className="">
        <Icon
          className="hover:scale-125 active:scale-100 w-[48px] h-[48px] cursor-pointer"
          href=""
          icon="logos:react"
        />
      </div>
      <div className="truncate ">
        <h1 className="text-[#F2CB05] text-[56px] text-center font-semibold uppercase ">
          <span id="TextAnimate"></span>
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant={"primary"}
          label={"Reset"}
          onClick={() => {
            textTypeit();
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
