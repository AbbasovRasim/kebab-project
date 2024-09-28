import Image from "../Image";

const FoodExtraInfo = ({ name }: { name: string }) => {
  console.log(name);

  return (
    <div className="flex items-center gap-2.5">
      <div className="max-w-5">
        <Image src={`/icons/${name}.svg`} />
      </div>

      <span>{name}</span>
    </div>
  );
};

export default FoodExtraInfo;
