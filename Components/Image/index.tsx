import { default as NextImage } from "next/image";
// import Image from "next/image";

const Image = ({ src }: { src: string }) => {
  return (
    <NextImage
      src={src}
      alt={"image"}
      width={1500}
      height={1200}
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default Image;
