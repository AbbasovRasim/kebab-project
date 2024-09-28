"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="h-[70vh] flex items-center justify-center    bg-[url(/pictures/bcfoto.png)] bg-no-repeat bg-cover">
      <div>
        <div className="flex justify-center bg-white md:gap-6 lg:gap-8 py-2 px-4 sm:px-10 xs:px-16 lg:px-20 border rounded-full">
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
            className="rounded-full px-4 py-1 hover:bg-[rgba(22,160,54,1)]  hover:text-white transition duration-300 ease-in-out"
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
            className=" rounded-full px-4 py-1 hover:bg-[rgba(22,160,54,1)]   hover:text-white transition duration-300 ease-in-out"
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

// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleGlose = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <section className="h-[70vh] flex items-center justify-center    bg-[url(/pictures/bcfoto.png)] bg-no-repeat bg-cover">
//       <div>
//         <Link
//           href="/about"
//           className="text-white hover:text-blue-800 cursor-pointer"
//           onMouseEnter={toggleOpen}
//           onMouseLeave={toggleGlose}
//         >
//           About
//         </Link>
//         {isOpen && (
//           <div className=" border-gray-300 p-4 mt-4">
//             <div className="flex flex-col space-y-4">
//               <a href="#" className="text-white hover:text-blue-800">
//                 Link-1
//               </a>
//               <a href="#" className="text-blue-600 hover:text-blue-800">
//                 Link 2
//               </a>
//               <a href="#" className="text-blue-600 hover:text-blue-800">
//                 Link 3
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Navbar;
