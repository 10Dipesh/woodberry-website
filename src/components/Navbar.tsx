import { NAV_ROUTES } from "../constants/routes";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 absolute bg-[brown] right-4 bottom-52 rounded-full h-60 w-24">
      {Object.entries(NAV_ROUTES).map(([key, value]) => (
        <Link key={value} href={value}>
          <div className="text-black">{key}</div>
        </Link>
      ))}
    </div>
  );
};
export default Navbar;
