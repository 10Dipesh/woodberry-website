import { useState } from "react";
import { NAV_ROUTES } from "../constants/routes";
import React from "react";
import { IoHome } from "react-icons/io5";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import Link from "next/link";
const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-9 flex items-center justify-between bg-[brown] ">
      <div className="ml-2">
        <img
          src="/images/woodberry-logo1.png"
          alt="logo"
          className="h-5 w-9 md:hidden"
        />
      </div>
      <div className="mr-2">
        <div>
          <div
            className="group relative z-50 flex h-4 w-4 cursor-pointer flex-col items-center justify-between md:hidden "
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`h-1 w-full transform cursor-pointer rounded-lg bg-black transition duration-300 ease-in-out group-hover:text-red ${
                isOpen ? "translate-y-2.5 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-full transform cursor-pointer rounded-lg bg-black transition duration-300 ease-in-out group-hover:text-red ${
                isOpen ? "w-0 opacity-0" : "w-full"
              }`}
            ></span>
            <span
              className={`group-hover:text-red-500 h-1 w-full transform cursor-pointer rounded-lg bg-black transition duration-300 ease-in-out ${
                isOpen ? "-translate-y-2.5 -rotate-45" : ""
              }`}
            ></span>
          </div>
        </div>
        {isOpen && (
          <div className=" flex justify-center item-center flex-col gap-5 top-0 h-full w-full bg-white z-10">
            {Object.entries(NAV_ROUTES).map(([key, value]) => (
              <Link href={value} key={key}>
                <div onClick={() => setIsOpen(false)} className="text-red">
                  {key}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
// const DesktopMenu: React.FC = () => {
//   return (
//     <nav className="h-20 w-full bg-[white] fixed top-0 z-10 shadow-md">
//       <Container>
//         <main className="flex items-center justify-between">
//           <div className="ml-9">
//             <Image
//               src={"/images/Logo_woodberrt-01-removebg-preview.png"}
//               alt={"logo"}
//               width={200}
//               height={200}
//               onClick={() => window.location.reload()}
//               className="cursor-pointer"
//             ></Image>
//           </div>
//           <div className="hidden md:flex gap-6 text-[18px]">
//             {Object.entries(NAV_ROUTES).map(([key, value]) => (
//               <Link href={value} key={key}>
//                 <div className="text-red">{key}</div>
//               </Link>
//             ))}
//           </div>
//         </main>
//       </Container>
//     </nav>
//   );
// };

// };
const DesktopMenu: React.FC = () => {
  return (
    <nav className="h-[400px] flex flex-col items-center justify-around bg-[#871b08] shadow-xl p-4 text-white fixed left-8 bottom-[10rem] rounded-full">
      <Link href={NAV_ROUTES.Home} passHref>
        <div className="group relative flex flex-col items-center cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300">
          <IoHome size={24} />
          <span className="absolute bottom-0 mb-6 hidden rounded bg-black p-1 text-xs text-white group-hover:block">
            Home
          </span>
        </div>
      </Link>
      <Link href={NAV_ROUTES.About} passHref>
        <div className="group relative flex flex-col items-center cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300">
          <FaUser size={24} />
          <span className="absolute bottom-0 mb-6 hidden rounded bg-black p-1 text-xs text-white group-hover:block">
            About
          </span>
        </div>
      </Link>
      <Link href={NAV_ROUTES.Gallery} passHref>
        <div className="group relative flex flex-col items-center cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300">
          <GrGallery size={24} />
          <span className="absolute bottom-0 mb-6 hidden rounded bg-black p-1 text-xs text-white group-hover:block">
            Gallery
          </span>
        </div>
      </Link>
      <Link href={NAV_ROUTES.Services} passHref>
        <div className="group relative flex flex-col items-center cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300">
          <MdOutlineMiscellaneousServices size={24} />
          <span className="absolute bottom-0 mb-6 hidden rounded bg-black p-1 text-xs text-white group-hover:block">
            Services
          </span>
        </div>
      </Link>
      <Link href={NAV_ROUTES.Contact} passHref>
        <div className="group relative flex flex-col items-center cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300">
          <FaPhoneAlt size={24} />
          <span className="absolute bottom-0 mb-6 hidden rounded bg-black p-1 text-xs text-white group-hover:block">
            Contact
          </span>
        </div>
      </Link>
    </nav>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="md:hidden ">
        <MobileMenu />
      </div>
      <div className="hidden md:flex md:shadow-2xl">
        <DesktopMenu />
      </div>
    </>
  );
};
export default Navbar;
