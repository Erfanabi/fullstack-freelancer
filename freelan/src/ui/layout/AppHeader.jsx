import { HiMenu } from "react-icons/hi";
import useUser from "../../features/authentication/useUser";
import HeaderMenu from "../HeaderMenu";

function AppHeader({ Opensidebar }) {
  const { user, isLoading } = useUser();

  return (
    <div className="h-full flex items-center justify-between">
      <div onClick={Opensidebar}>
        <HiMenu className="w-7 h-7 block md:hidden cursor-pointer" />
      </div>
      <HeaderMenu />
    </div>
  );
}

export default AppHeader;
