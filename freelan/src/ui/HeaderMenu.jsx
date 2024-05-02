import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkModalToggle from "./DarkModalToggle";
import Lagout from "./Lagout";

function HeaderMenu() {
  return (
    <ul className="flex gap-x-5 items-center">
      <li>
        <Link to="#">
          <HiOutlineUser className="w-6 h-6 text-primary-900" />
        </Link>
      </li>
      <li>
        <DarkModalToggle />
      </li>
      <li>
        <Lagout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
