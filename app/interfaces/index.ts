import { FC } from "react";

export interface BCard {
  id: number;
  img: string;
  title: string;
  description: string;
  shortDesc: string;
  price: number;
  ingredientsname: string;

  ingredients: string[];
  servedWithname: string[];
  servedWith: string[];
  category: string[];
  icon: FC;
}
