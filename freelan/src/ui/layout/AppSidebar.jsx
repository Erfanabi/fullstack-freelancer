import { IoCloseOutline } from "react-icons/io5";
import { useOpenSidebar } from "../../context/OpenSidebarContext";

function AppSidebar({ children }) {
  const { Opensidebar } = useOpenSidebar();

  return (
    <div>
      <div className="flex items-center px-5 mt-5 mb-4">
        <img src="/logo.png" alt="logo" className="w-8 h-8" />
        <p className="font-bold self-end mr-2">FREELAN</p>
        <div onClick={Opensidebar} className="mr-auto">
          <IoCloseOutline className="md:hidden w-6 h-6" />
        </div>
      </div>
      <ul className="flex flex-col gap-y-2 pt-2">{children}</ul>
    </div>
  );
}

export default AppSidebar;

// flex items-center hover:bg-primary-300 py-2 px-3 rounded-lg gap-x-2
// flex items-center hover:bg-primary-300 py-2 px-3 rounded-lg gap-x-2
