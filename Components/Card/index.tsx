import { BCard } from "@/app/interfaces";
import FoodExtraInfo from "../FoodExtraInfo";

export const Cardfordb = ({
  img,
  title,
  shortDesc,
  price,
  ingredientsname,
  ingredients,
  servedWithname,
  servedWith,
  category,
}: BCard) => {
  return (
    <div className="border-1  text-gray-800    shadow-slate-50 bg-slate-50 mb-11">
      <img src={img} alt="" />
      <div className="pl-7">
        {" "}
        <p className="pt-11 text-sm text-gray-700   cursor-default  font-normal">
          {shortDesc}
        </p>
        <p className="text-xl text-[rgba(49, 49, 49, 1)] font-semibold  hover: cursor-default">
          {title}
        </p>
        {/* <p className=" absolute">{price}</p> */}
        <div className="    text-sm font-normal  text-[rgba(49, 49, 49, 1)] py-5 justify-center  grid grid-cols-2 ">
          <div className=" ">
            <p className="font-bold hover: cursor-default">{ingredientsname}</p>
            {ingredients && (
              <>
                {ingredients.map((value, index) => (
                  <FoodExtraInfo key={index} name={value} />
                ))}
              </>
            )}
          </div>
          <div>
            {servedWith && (
              <>
                <p className="font-bold  hover: cursor-default">
                  {servedWithname}
                </p>{" "}
                {servedWith.map((value) => (
                  <p className="hover:text-green cursor-default" key={value}>
                    {value}
                  </p>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
