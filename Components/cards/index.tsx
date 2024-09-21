import { BCard } from "@/app/interfaces";

const Cardfordb = ({ title, description, img }: BCard) => {
  return (
    <div className="border-2 text-gray font-bold text-[30px] leading-[45px]   pb-56 shadow-slate-50 bg-slate-50">
      <img src={img} alt=" " />
      <p>{description}</p>
      <p className=" text-gray-800 font-semibold text-[20px] leading-[30,24px]  ">
        {title}
      </p>
    </div>
  );
};

export default Cardfordb;
