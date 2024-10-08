"use client";

import { useState, useEffect } from "react";
import { BCard } from "./interfaces";
import axios from "axios";
import { Cardfordb2 } from "@/Components/cards";
import MapComponent from "@/Components/map";
import Link from "next/link";
// import GoogleMapComponent from "@/Components/Map";
import HomeGalery from "./galery";
import { Cardfordb } from "@/Components/Card";

const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/menue`;
const urls = `${process.env.NEXT_PUBLIC_BACKEND_URL}/menues`;

const Home = () => {
  const [menue, setMenue] = useState<BCard[] | []>([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setMenue(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [menues, setMenues] = useState<BCard[] | []>([]);

  useEffect(() => {
    axios
      .get(urls)
      .then((res) => {
        console.log(res);
        setMenues(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center py-5 text-gray-800 font-bold text-3xl ">
          BBQ&Kebab
        </h1>
        {/* <CustomImage  src="/pictures/Vector.png" /> */}
        {/* <img
            className="absolute right-40"
            src=" /pictures/Vector (3).png"
            alt=""
          /> */}

        <div className=" ">
          <p className="text-center text-base font-light text-gray-400 py-5   ">
            Barbecue in Kansas City is more than a menu item or a method of
            preparation. It’s an institution, rich with <br /> history and
            culinary tradition that shapes the city’s dining landscape every day
            and has since the early <br />
            1900s.
          </p>
          <p className="text-center text-base font-light text-gray-400 py-5 ">
            To follow the heritage, we embrace the tradition keeping the concept
            of ultimate comfort food and remain a <br /> part of something
            timeless with our “Kebab” Middle Eastern style of BBQ.
          </p>

          <p className="text-center text-base font-light text-gray-400 py-5 ">
            We use only low fat quality 100% American beef and lamb. Our smiles
            and laughter demonstrate confidence <br /> in our product and
            service. Our portions are rich and our service system is one of the
            easiest, quick serve <br /> kebab outlets in the country
          </p>
        </div>

        <div className="grid 2xl:grid-cols-3 lg:grid-cols-1 justify-items-center  ">
          {menue.map((obj: BCard) => (
            <Cardfordb key={obj.id} {...obj} />
          ))}
        </div>

        {/* TODO Bu iki hissəni datada birləşdirmək -> json server-də */}

        <div className="grid xl:grid-cols-2  md-grid-cols-1 justify-items-center  ">
          {menues.map((obj: BCard) => (
            <Cardfordb2 key={obj.id} {...obj} />
          ))}
        </div>
      </div>

      <div className="bg-[url(/pictures/bgfotodrinks.png)] bg-no-repeat bg-cover  pb-11">
        <h1 className=" text-center pt-11 text-gary-800 font-bold  text-3xl ">
          Beverages
        </h1>
        <p className=" pb-11 text-center font-light text-sm text-gray-600">
          All stated prices are without applicable taxes
        </p>
        <HomeGalery />
      </div>

      <div className="text-center container py-5">
        <h1 className="text-center py-5 text-gary-800 font-bold text-3xl ">
          Delivery
        </h1>

        <img
          className="absolute right-40"
          src=" /pictures/Vector (5).png"
          alt=""
        />

        <img
          className="absolute left-40 mt-7"
          src=" /pictures/Group (8).png"
          alt=""
        />

        <p className="font-light py-5 text-gray-600 text-base  ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <br /> industry`s standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and <br /> scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into <br />{" "}
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of <br /> Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like <br /> Aldus PageMaker including versions of
          Lorem Ipsum
        </p>

        <div className=" container justify-items-center items-center  gap-10 py-11 grid grid-cols-2">
          <div className="justify-items-center grid  ">
            <img src="/pictures/eatsuber.png" alt="" />
            <p className="py-5 text-gray-800 font-medium  ">Uber Eats</p>
            <p className="font-light text-sm text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry`s <br />
              standard dummy text ever since the 1500s, when an
            </p>
          </div>

          <div className="justify-items-center grid  ">
            <img src="/pictures/doordash.png" alt="" />
            <p className="py-5 text-gray-800 font-medium  ">Doordash</p>
            <p className="font-light text-sm text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry`s <br />
              standard dummy text ever since the 1500s, when an
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-[60px] bg-white relative top-[60px]">
        <div className="container">
          <div className="relative">
            <Link href="/contact">
              <button className="hover:bg-black hover:text-white transition duration-300 ease-in-out py-2 px-8 border shadow-grey shadow-lg absolute left-0  bg-slate-50">
                contact us
              </button>
            </Link>
            {/* <img
              className="justify-items-center items-center"
              src="/pictures/map.png"
              alt=""
            /> */}
            {/* <Image
              src={"/pictures/map.png"}
              alt="Image"
              width={1500}
              height={1200}
              style={{ width: "100%", height: "auto" }}
            /> */}
            {/* <CustomImage src="/pictures/map.png" /> * */}
            {/* <GoogleMapComponent /> */}
            <MapComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
