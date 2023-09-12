import { useState } from "react";
import { NAV_ROUTES } from "../constants/routes";
import Link from "next/link";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mx-2">
      <div>
        <img src="/images/woodberry-logo1.png" alt="logo" className="h-5 w-9 md:hidden" />
      </div>
      <div>
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
const DesktopMenu: React.FC = () => {
  return (
    <div className="h-24 w-full flex items-center justify-between mx-2">
      <div>
        <img src="/images/woodberry-logo1.png" alt="logo" className="h-24 w-32" />
      </div>
      <div className="hidden md:flex flex gap-4">
        {Object.entries(NAV_ROUTES).map(([key, value]) => (
          <Link href={value} key={key}>
            <div className="text-red">{key}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <MobileMenu />
      <div className="hidden md:flex"><DesktopMenu/></div>
    </>
  );
};
export default Navbar;
