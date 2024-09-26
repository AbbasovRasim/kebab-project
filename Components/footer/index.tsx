import React from "react";
import CustomImage from "@/Components/Image";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="bg-black pt-[70px] hidden xl:block">
      <div className="container grid grid-cols-4 justify-center py-10">
        <Link href={"/"} className="  max-w-[150px] ">
          <CustomImage src="/pictures/footerlogo.png" />
        </Link>

        <div className="">
          <h1 className="text-base font-normal text-gray-500">Get in touch</h1>
          <Link href="" className="text-white text-sm font-normal">
            info@bbq&kebab.com
          </Link>
          <p className="text-white text-sm font-normal">+1 (816) 482 1513</p>
        </div>

        <div>
          <h1 className="text-base font-normal text-gray-500">Follow us</h1>
          <div className="text-white  text-sm font-normal  ">
            {" "}
            <Link target={"_blank"} href="https://www.instagram.com/">
              Instagram
            </Link>
          </div>
          <div className="text-white  text-sm font-normal  ">
            {" "}
            <Link target={"_blank"} href="https://www.facebook.com/">
              facebook
            </Link>
          </div>
        </div>

        <div>
          <h1 className="text-base font-normal   text-gray-500">Address</h1>
          <p className="text-white  text-sm font-normal  ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
        </div>
      </div>
    </footer>
  );
};
