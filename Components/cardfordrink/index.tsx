import React from "react";
import { DCard } from "@/app/interfaces";
export const Cardfordrink = ({ img }: DCard) => {
  return (
    <div className="">
      <img src={img} alt=" " />
    </div>
  );
};
