import { BCard } from "@/app/interfaces";

export const Cardfordb2 = ({
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
        <p className="pt-11 text-sm text-[rgba(49, 49, 49, 1)]  hover: cursor-default font-normal">
          {shortDesc}
        </p>
        <p className="text-xl text-[rgba(49, 49, 49, 1)]  hover: cursor-default font-semibold ">
          {title}
        </p>
        {/* <p className=" absolute">{price}</p> */}
        <div className="  hover: cursor-default text-sm font-normal  text-gray-700 py-5 justify-center  grid grid-cols-2 ">
          <div className=" ">
            <p className="font-bold ">{ingredientsname}</p>

            {ingredients && (
              <>
                {ingredients.map((value) => (
                  <p className="hover:text-green  cursor-default" key={value}>
                    {value}
                  </p>
                ))}
              </>
            )}
          </div>
          <div>
            {servedWith && (
              <>
                <p className="font-bold">{servedWithname}</p>{" "}
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
