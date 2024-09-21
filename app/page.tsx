"use client";
import Cardfordb from "@/Components/Cards";
import { useState, useEffect } from "react";
import { BCard } from "./interfaces";
import { DCard } from "./interfaces";
import axios from "axios";
import { Cardfordb2 } from "@/Components/Card";
import { Cardfordrink } from "@/Components/cardfordrink";
import Link from "next/link";

const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/menue`;
const urls = `${process.env.NEXT_PUBLIC_BACKEND_URL}/menues`;
const urldrink = `${process.env.NEXT_PUBLIC_BACKEND_URL}/drink`;

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

  const [drink, setdrink] = useState<DCard[] | []>([]);

  useEffect(() => {
    axios
      .get(urldrink)
      .then((res) => {
        console.log(res);
        setdrink(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="text-center py-5 text-gray-800 font-bold text-[30px] leading-[45px] text-lg ">
          BBQ&Kebab
          <img
            className=" absolute left-46"
            src="/pictures/Vector.png"
            alt=""
          />
          <img
            className="absolute right-40"
            src=" /pictures/Vector (3).png"
            alt=""
          />
        </h1>

        <div className="font-light ">
          <p className="text-center text-sm   text-gray-400 py-5 ">
            Barbecue in Kansas City is more than a menu item or a method of
            preparation. It’s an institution, rich with <br /> history and
            culinary tradition that shapes the city’s dining landscape every day
            and has since the early <br />
            1900s.
          </p>
          <p className="text-center text-sm   text-gray-400 py-5">
            To follow the heritage, we embrace the tradition keeping the concept
            of ultimate comfort food and remain a <br /> part of something
            timeless with our “Kebab” Middle Eastern style of BBQ.
          </p>

          <p className="text-center text-sm text-gray-400 py-5">
            We use only low fat quality 100% American beef and lamb. Our smiles
            and laughter demonstrate confidence <br /> in our product and
            service. Our portions are rich and our service system is one of the
            easiest, quick serve <br /> kebab outlets in the country
          </p>

          <div className="grid grid-cols-3 justify-items-center items-center py-10   ">
            {menue.map((obj: BCard) => (
              <Cardfordb
                key={obj.id}
                id={obj.id}
                description={obj.description}
                img={obj.img}
                title={obj.title}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 justify-items-center items-center pb-11 ">
          {menues.map((obj: BCard) => (
            <Cardfordb2
              key={obj.id}
              id={obj.id}
              img={obj.img}
              title={obj.title}
              description={obj.description}
            />
          ))}
        </div>
      </div>

      <div className="bg-[url(/pictures/bgfotodrinks.png)] bg-no-repeat bg-cover ">
        <h1 className=" text-center pt-11 text-gary-800 font-bold text-[30px] leading-[45px] text-lg  ">
          Beverages
        </h1>
        <p className=" pb-11 text-center font-light text-sm text-gray-600">
          All stated prices are without applicable taxes
        </p>
        <div className="grid grid-cols-6 container justify-items-center items-center py-5    ">
          {drink.map((obj: DCard) => (
            <Cardfordrink key={obj.id} id={obj.id} img={obj.img} />
          ))}
        </div>
      </div>

      <div className="text-center container py-5 ">
        <h1 className="text-center py-5 text-gary-800 font-bold text-[30px] leading-[45px] text-lg ">
          Delivery
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
        </h1>

        <p className="font-light py-5 text-sm text-gray-600 text-[16px] leading-[24,19px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <br /> industry's standard dummy
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
          <div className="justify-items-center grid items-center  ">
            <img src="/pictures/eatsuber.png" alt="" />
            <p className="py-5    text-gray-800 font-medium text-[20px]  ">
              Uber Eats
            </p>
            <p className="font-light text-sm text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry's <br />{" "}
              standard dummy text ever since the 1500s, when an{" "}
            </p>
          </div>

          <div className="justify-items-center grid items-center ">
            <img src="/pictures/doordash.png" alt="" />
            <p className="py-5 text-gray-800 font-medium text-[20px] ">
              Doordash
            </p>
            <p className="font-light text-sm text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry's <br />{" "}
              standard dummy text ever since the 1500s, when an{" "}
            </p>
          </div>
        </div>
        <div>
          <Link href="/contact">
            <button className="hover:bg-black hover:text-white transition duration-300 ease-in-out py-2 px-8 border  shadow-grey shadow-lg   absolute left-48 bg-slate-50">
              contact us
            </button>
          </Link>

          <img
            className="justify-items-center  items-center container"
            src="/pictures/map.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
