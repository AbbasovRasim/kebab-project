"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="h-[70vh] flex items-center justify-center bg-[url(/pictures/bcfoto.png)] bg-no-repeat bg-cover">
      <div>
        <div className="flex justify-center bg-white gap-4  py-2 px-20  border  rounded-full picture">
          <Link
            className="rounded-full px-4 py-1 hover:bg-[rgba(22,160,54,1)] hover:text-white transition duration-300 ease-in-out"
            href="/about"
          >
            About
          </Link>

          <Link
            className="rounded-full px-4 py-1 hover:bg-[rgba(22,160,54,1)] hover:text-white transition duration-300 ease-in-out"
            href="/menue"
          >
            Menue
          </Link>
          <Link
            className="rounded-full px-4 py-1 hover:bg-[rgba(22,160,54,1)] hover:text-white transition duration-300 ease-in-out"
            href="/beverages"
          >
            Beverages
          </Link>
          <Link
            className="rounded-full px-4 py-1  hover:bg-[rgba(22,160,54,1)] hover:text-white transition duration-300 ease-in-out"
            href="/delivery"
          >
            Delivery
          </Link>
          <Link
            className=" rounded-full px-4 py-1 hover:bg-[rgba(22,160,54,1)] hover:text-white transition duration-300 ease-in-out"
            href="/contact"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
