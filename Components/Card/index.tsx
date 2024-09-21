import React from "react";
import { BCard } from "@/app/interfaces";
export const Cardfordb2 = ({ title, description, img }: BCard) => {
  return (
    <div className="">
      <img src={img} alt=" " />
      <p>{description}</p>
      <p className="border-2 pb-56  text-gray-800 font-semibold text-[20px] leading-[30,24px]  shadow-slate-50 bg-slate-50 mb-11">
        {title}
      </p>
    </div>
  );
};
