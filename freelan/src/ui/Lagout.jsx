import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "../features/authentication/useLogout";
import Loader from "./Loader";

function Lagout() {
  const { logout, isLoading } = useLogout();

  return (
    <button disabled={isLoading} onClick={logout} className="align-bottom">
      {!isLoading ? (
        <HiArrowRightOnRectangle className="w-6 h-6 text-secondary-500 hover:text-error" />
      ) : (
        <Loader />
      )}
    </button>
  );
}

export default Lagout;
