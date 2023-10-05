import { Icon } from "@iconify/react";

const Button = ({ variant, label, onClick, icon }) => {
  return (
    <>
      {variant === "primary" && (
        <button
          onClick={onClick}
          className="text-lg font-bold rounded-[24px] text-[#D91A4D] px-[32px] py-[8px] bg-[#1790BF] hover:scale-110 active:scale-100"
        >
          {label}
        </button>
      )}

      {variant === "secondary" && (
        <button
          onClick={onClick}
          className="text-[#F2CB05] text-[48px] px-[32px] py-[8px] hover:scale-110 active:scale-100"
        >
          <Icon href="" icon={icon} />
          {label}
        </button>
      )}

      {variant === "icon" && (
        <button
          onClick={onClick}
          className="text-[#D91A4D] text-[60px] rounded-[50%] p-[8px] bg-[#ffff00] shadow-lg shadow-[#1790BF] hover:scale-110 active:scale-100"
        >
          <Icon href="" icon={icon} />
          {label}
        </button>
      )}
    </> 
  );
};

export default Button;
